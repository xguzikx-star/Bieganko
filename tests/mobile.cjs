// Requires Playwright and a running static server (BASE_URL defaults to localhost:8000).
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const base=process.env.BASE_URL||'http://127.0.0.1:8000';
const key='srodziemie.v1';
const legacy={schema:1,created:'2025-01-01T12:00:00Z',plan:{goal:'Bieg 5 km'},extra:{preserve:true},workouts:[{id:'old',date:'2026-01-01',type:'Marsz',place:'outdoors',km:240,minutes:120,heartRate:125,zones:[1,2,3],notes:'Dawny wpis',custom:'keep'}]};
let browser,checks=0;
function ok(value,message){assert(value,message);checks++}
async function seed(page,data=legacy){await page.goto(base,{waitUntil:'domcontentloaded'});await page.evaluate(({key,data})=>localStorage.setItem(key,JSON.stringify(data)),{key,data});await page.reload({waitUntil:'domcontentloaded'});await page.waitForSelector('.map-stage');}
async function state(page){return page.evaluate(key=>JSON.parse(localStorage.getItem(key)),key)}
async function swipe(page,dx,dy=0,cancel=false){await page.locator('#mapStage').evaluate((stage,{dx,dy,cancel})=>{
 const touch=(x,y)=>new Touch({identifier:1,target:stage,clientX:x,clientY:y});
 stage.dispatchEvent(new TouchEvent('touchstart',{touches:[touch(180,300)],bubbles:true}));
 stage.dispatchEvent(new TouchEvent(cancel?'touchcancel':'touchend',{touches:[],changedTouches:[touch(180+dx,300+dy)],bubbles:true}));
},{dx,dy,cancel});}
(async()=>{
 browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{}),args:['--no-sandbox']});
 const context=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,acceptDownloads:true});
 const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await seed(page);ok(JSON.stringify((await state(page)).workouts)===JSON.stringify(legacy.workouts),'legacy workouts preserved on load');
 // Mobile layout, controls outside the illustration, natural image proportions, reachable page ends.
 for(const [width,height] of [[320,568],[375,667],[390,844],[430,932],[844,390]]){
  await page.setViewportSize({width,height});
  for(const view of ['map','training','chronicle','growth']){
   await page.locator(`[data-view="${view}"]`).click();
   const result=await page.evaluate(()=>{
    const nav=document.querySelector('.bottom').getBoundingClientRect();
    return {overflow:document.documentElement.scrollWidth>innerWidth,nav:[nav.left,nav.right,nav.bottom],buttons:[...document.querySelectorAll('.bottom button')].map(b=>b.getBoundingClientRect().width)};
   });
   ok(!result.overflow,`${view} fits ${width}px`);ok(result.nav[0]>=-.1&&result.nav[1]<=width+.1&&Math.abs(result.nav[2]-height)<1,`nav anchored ${width}px`);ok(result.buttons.every(w=>w>=44),'nav touch targets');
   if(view==='map'){
    const layout=await page.evaluate(()=>{
     const stage=document.querySelector('.map-stage').getBoundingClientRect(),img=document.querySelector('.chapter-portrait-image'),copy=document.querySelector('.map-copy').getBoundingClientRect(),controls=document.querySelector('.map-controls').getBoundingClientRect();
     return {ratio:stage.width/stage.height,native:img.naturalWidth/img.naturalHeight,clear:copy.bottom<=stage.top&&controls.top>=stage.bottom};
    });ok(Math.abs(layout.ratio-layout.native)<.002,'native chapter image aspect ratio');ok(layout.clear,'copy and controls do not cover map');
   }
   await page.evaluate(()=>scrollTo(0,document.documentElement.scrollHeight));
   ok(await page.evaluate(()=>document.querySelector('#screen').getBoundingClientRect().bottom<=document.querySelector('.bottom').getBoundingClientRect().top),'last content clears nav');
  }
 }
 await page.setViewportSize({width:390,height:844});
 await page.locator('[data-view="map"]').click();
 // Simulate the iPhone safe area using the same CSS variable fed by env().
 await page.addStyleTag({content:':root{--safe-bottom:34px}'});
 ok(await page.locator('.bottom').evaluate(el=>parseFloat(getComputedStyle(el).paddingBottom)>=42),'safe area reserved');
 // All chapter artwork, stop artwork, badge artwork and HTML local assets exist, case sensitively.
 const assets=await page.evaluate(()=>[...Object.values(MAP_IMAGES),...Object.values(STOP_ART),...SEALS.map(sealArt)]);
 const html=fs.readFileSync(path.join(__dirname,'../index.html'),'utf8');
 assets.push(...[...html.matchAll(/(?:src|href)="(\.\/[^"?]+)(?:\?[^" ]*)?"/g)].map(m=>m[1]));
 for(const asset of new Set(assets))ok(fs.existsSync(path.join(__dirname,'..',asset.split('?')[0])),`asset ${asset}`);
 for(const asset of new Set(assets)){const response=await page.request.get(new URL(asset,base).href);ok(response.ok(),'HTTP asset '+asset)}
 await page.locator('[data-view="growth"]').click();ok(await page.locator('.seal-item').count()===18,'18 achievement cards');
 await page.locator('.seal-item').first().click();ok(await page.locator('#sheet h2').textContent()==='Pierwszy krok','badge details open');await page.locator('#closeSheet').click();
 // JSON download and restore preserve every workout field and extra top-level metadata.
 await page.locator('#settingsBtn').click();const downloaded=page.waitForEvent('download');await page.locator('#exportData').click();const download=await downloaded;const exported=JSON.parse(fs.readFileSync(await download.path(),'utf8'));
 assert.deepEqual(exported.workouts,legacy.workouts);checks++;assert.deepEqual(exported.plan,legacy.plan);checks++;
 page.on('dialog',d=>d.accept());await page.locator('#importFile').setInputFiles({name:'backup.json',mimeType:'application/json',buffer:Buffer.from(JSON.stringify(exported))});await page.waitForFunction(()=>document.querySelector('#overlay').hidden);
 const restored=await state(page);assert.deepEqual(restored.workouts,legacy.workouts);checks++;assert.deepEqual(restored.extra,legacy.extra);checks++;assert.deepEqual(restored.plan,legacy.plan);checks++;
 const previous=JSON.stringify(restored.workouts);await page.locator('#importFile').setInputFiles({name:'bad.json',mimeType:'application/json',buffer:Buffer.from('{bad')});await page.waitForTimeout(80);ok(JSON.stringify((await state(page)).workouts)===previous,'invalid import leaves workouts intact');
 // Edit retains non-form fields such as heart-rate zones and importer extensions.
 await page.emulateMedia({reducedMotion:'reduce'});await page.locator('[data-view="training"]').click();await page.locator('[data-edit="old"]').click();await page.locator('[name="notes"]').fill('Zmieniona notatka');await page.locator('#workoutForm [type="submit"]').click();
 const edited=(await state(page)).workouts[0];ok(edited.heartRate===125&&edited.custom==='keep'&&JSON.stringify(edited.zones)==='[1,2,3]','edit preserves hidden workout fields');
 // New workout crosses I -> II: sample real animation, both chapters, and exact final position.
 await seed(page);await page.emulateMedia({reducedMotion:'no-preference'});await page.locator('[data-view="training"]').click();await page.locator('#newWorkout').click();await page.locator('[name="km"]').fill('10');await page.locator('#workoutForm [type="submit"]').click();
 await page.waitForFunction(()=>animating&&displayK>720&&displayK<737);const first=await page.locator('.map-traveler').getAttribute('style');await page.waitForTimeout(140);ok(first!==await page.locator('.map-traveler').getAttribute('style'),'traveler moves between frames');
 await page.waitForFunction(()=>animating&&document.querySelector('#mapStage').dataset.chapter==='2');ok(true,'animation crosses chapter boundary');await page.waitForFunction(()=>!animating&&displayK===null);
 ok(await page.locator('#mapStage').getAttribute('data-chapter')==='2','ends on chapter II');ok((await state(page)).workouts.length===2,'new training appended');
 await page.waitForSelector('.reveal.in');ok((await page.locator('.reveal h2').textContent())==='Rivendell','new location revealed');
 while(await page.locator('.reveal').count()){await page.locator('#revealNext').click();await page.waitForTimeout(260)}
 ok(await page.locator('[data-view="chronicle"]').getAttribute('class')==='active','reveal ends in chronicle');
 await page.locator('[data-view="map"]').click();await swipe(page,100);ok(await page.locator('#mapStage').getAttribute('data-chapter')==='1','swipe to previous unlocked chapter');await swipe(page,-100);ok(await page.locator('#mapStage').getAttribute('data-chapter')==='2','swipe to next unlocked chapter');await swipe(page,-100);ok(await page.locator('#mapStage').getAttribute('data-chapter')==='2','locked chapter unavailable');await swipe(page,10,150);ok(await page.locator('#mapStage').getAttribute('data-chapter')==='2','vertical scrolling does not change chapter');await swipe(page,100,0,true);ok(await page.locator('#mapStage').getAttribute('data-chapter')==='2','cancelled gesture ignored');
 await page.locator('[data-zoom="in"]').click();ok(await page.locator('#mapStage').evaluate(el=>el.style.touchAction)==='none','zoom enables map panning');await swipe(page,100);ok(await page.locator('#mapStage').getAttribute('data-chapter')==='2','zoom prevents chapter swipe');await page.locator('[data-zoom="reset"]').click();
 // Unlock all chapters and verify every swipe and exact route endpoint.
 await seed(page,{schema:1,workouts:[{id:'complete',date:'2026-01-01',type:'Marsz',km:1000}]});
 for(const chapter of [3,2,1]){await swipe(page,100);ok(await page.locator('#mapStage').getAttribute('data-chapter')===String(chapter),'back swipe chapter '+chapter)}
 for(const chapter of [2,3,4]){await swipe(page,-100);ok(await page.locator('#mapStage').getAttribute('data-chapter')===String(chapter),'forward swipe chapter '+chapter)}
 ok(await page.evaluate(()=>CHAPTERS.every(ch=>{const start=pointAtKm(ch.id,ch.start),end=pointAtKm(ch.id,ch.goal),points=chapterVisualStops(ch.id);return Math.abs(start.x-points[0].x)<1e-7&&Math.abs(end.y-points.at(-1).y)<1e-7})),'route endpoints match artwork anchors');
 // A workout can cross several chapters, and navigation can cancel the visual animation.
 await seed(page,{schema:1,workouts:[]});await page.emulateMedia({reducedMotion:'no-preference'});
 await page.evaluate(()=>{data.workouts.push({id:'long',date:'2026-01-01',type:'Marsz',km:1000});localStorage.setItem(KEY,JSON.stringify(data));celebrate(0)});
 await page.waitForFunction(()=>animating&&document.querySelector('#mapStage').dataset.chapter==='3');
 await page.waitForFunction(()=>!animating&&displayK===null);ok(await page.locator('#mapStage').getAttribute('data-chapter')==='4','multi-chapter animation reaches final chapter');
 await page.waitForSelector('.reveal.in');
 while(await page.locator('.reveal').count()){await page.locator('#revealNext').click();await page.waitForTimeout(240)}
 await page.evaluate(()=>{revealQueue=[];finishTrail();view='map';displayK=0;render();animateTrail(0,travel(),()=>render())});await page.waitForFunction(()=>animating);await page.locator('[data-view="training"]').click();await page.waitForTimeout(200);ok(await page.evaluate(()=>!animating&&displayK===null&&view==='training'),'navigation cancels animation safely');ok((await state(page)).workouts.length===1,'cancelling visual animation preserves workout');
 // Fresh user receives first badge; reduced-motion skips route animation.
 await seed(page,{schema:1,workouts:[]});await page.emulateMedia({reducedMotion:'reduce'});await page.locator('[data-view="training"]').click();await page.locator('#newWorkout').click();await page.locator('[name="km"]').fill('1');await page.locator('#workoutForm [type="submit"]').click();await page.waitForSelector('.reveal.in');ok(await page.locator('.reveal h2').textContent()==='Pierwszy krok','first workout earns a visible badge');ok(await page.evaluate(()=>!animating&&displayK===null),'reduced motion skips animation');
 ok(errors.length===0,'no uncaught JavaScript errors: '+errors.join('; '));console.log(`PASS: ${checks} checks (Chromium, touch/mobile emulation).`);await browser.close();
})().catch(async e=>{console.error(e);await browser?.close();process.exitCode=1});
