// Run against a local static server; BROWSER=webkit enables WebKit when installed.
const {chromium,webkit}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const engine=process.env.BROWSER==='webkit'?webkit:chromium;
(async()=>{
 const browser=await engine.launch({headless:true,...(engine===chromium&&process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH,args:['--no-sandbox']}: {})});
 try{
  const page=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(process.env.BASE_URL||'http://127.0.0.1:8000');
  await page.waitForSelector('.map-footprints');
  let checks=0;
  const ok=(v,msg)=>{assert(v,msg);checks++};
  for(const width of [320,375,390,430,768]){
   await page.setViewportSize({width,height:900});
   for(const ch of [1,2,3,4]){
    for(const fraction of [0,.23,.57,1]){
     const result=await page.evaluate(({ch,fraction})=>{
      finishTrail();const meta=CHAPTERS[ch-1],km=meta.start+(meta.goal-meta.start)*fraction;
      data.workouts=[{id:'trail-test',date:'2026-10-23',km:km/SCALE}];selectedChapter=ch;render();
      const svg=document.querySelector('.map-footprints'),image=document.querySelector('.map-landscape');
      const point=pointAtKm(ch,km),head=svg.querySelector('.map-current-footprint');
      const visible=[...svg.querySelectorAll('.map-footstep')].filter(el=>el.getAttribute('opacity')==='1');
      const lengths=visible.map(el=>+el.dataset.trailLength);
      const box=image.getBoundingClientRect(),matrix=head.getScreenCTM();
      const pixelAligned=Math.abs(matrix.e-box.left-point.x/100*box.width)<.01&&Math.abs(matrix.f-box.top-point.y/100*box.height)<.01;
      const trailAligned=visible.every(el=>{const p=pointAtKm(ch,+el.dataset.trailKm),m=el.getScreenCTM();return Math.abs(m.e-box.left-p.x/100*box.width)<.01&&Math.abs(m.f-box.top-p.y/100*box.height)<.01});
      return {
       pixelAligned,trailAligned,noMarker:!document.querySelector('.map-traveler'),noLine:!svg.querySelector('line,polyline'),
       pastOnly:visible.every(el=>+el.dataset.trailKm<=km),empty:fraction!==0||visible.length===0,
       regular:lengths.every((l,i)=>!i||Math.abs(l-lengths[i-1]-FOOTPRINT_SPACING)<1e-6),
       exact:head.getAttribute('transform')===footprintTransform(point),
       prominent:parseFloat(getComputedStyle(svg.querySelector('.map-current-sole')).transform.split('(')[1])>1.2,
       bounded:svg.querySelectorAll('.map-footstep').length<150,
       geometry:chapterRoute(ch).points.every(p=>Number.isFinite(p.x+p.y+p.km)&&p.x>=0&&p.x<=100&&p.y>=0&&p.y<=100),
       overflow:document.documentElement.scrollWidth>innerWidth,
       sameBox:Math.abs(svg.getBoundingClientRect().height-image.getBoundingClientRect().height)<.1
      };
     },{ch,fraction});
     for(const [key,value] of Object.entries(result))ok(key==='overflow'?!value:value,`${width}px chapter ${ch} progress ${fraction}: ${key}`);
     if(process.env.SCREENSHOT_DIR&&[320,390,768].includes(width)&&fraction===.57){fs.mkdirSync(process.env.SCREENSHOT_DIR,{recursive:true});await page.locator('.map-landscape').evaluate(img=>img.decode());await page.waitForTimeout(350);await page.locator('#mapArt').screenshot({path:`${process.env.SCREENSHOT_DIR}/partial-${ch}-${width}.png`});}
    }
    await page.locator('.map-landscape').evaluate(img=>img.decode());
    if(process.env.SCREENSHOT_DIR&&width===390){fs.mkdirSync(process.env.SCREENSHOT_DIR,{recursive:true});await page.locator('#mapArt').screenshot({path:`${process.env.SCREENSHOT_DIR}/footprints-${ch}.png`});}
   }
  }
  // Actual animation: existing soles stay in place; only newly reached steps appear.
  const timing=await page.evaluate(async()=>{
   finishTrail();view='map';selectedChapter=1;displayK=100;render();
   const before=[...document.querySelectorAll('.map-footstep')].map(el=>el.getAttribute('transform'));
   const frames=[];let last=performance.now(),running=true;
   const sample=now=>{frames.push(now-last);last=now;if(running)requestAnimationFrame(sample)};requestAnimationFrame(sample);
   await new Promise(resolve=>animateTrail(100,600,()=>{running=false;render();resolve()}));
   return {same:before.every((t,i)=>t===document.querySelectorAll('.map-footstep')[i].getAttribute('transform')),frames:frames.length,max:Math.max(...frames),settled:document.querySelector('.map-footprints').classList.contains('is-settled')};
  });
  ok(timing.same,'history never slides along the route');ok(timing.frames>10,'progressive animation runs');ok(timing.settled,'final sole settles');
  // Previously completed chapter has footprints, but no second current position.
  ok(await page.evaluate(()=>{data.workouts=[{id:'end',date:'2026-10-23',km:1000}];selectedChapter=1;render();return document.querySelector('.map-current-footprint').getAttribute('opacity')==='0'}),'completed chapter has no current position');
  await page.emulateMedia({reducedMotion:'reduce'});
  ok(await page.evaluate(()=>{let done=false;animateTrail(0,10,()=>done=true);return done&&!animating&&displayK===null}),'reduced motion completes immediately');
  ok(errors.length===0,errors.join('; '));
  console.log(`PASS: ${checks} footprint checks (${engine.name()}); animation ${timing.frames} frames, max frame interval ${timing.max.toFixed(1)}ms (host measurement).`);
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
