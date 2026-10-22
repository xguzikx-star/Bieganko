const {chromium,webkit}=require('playwright');const assert=require('node:assert/strict');
(async()=>{
 const browser=await (process.env.ENGINE==='webkit'?webkit:chromium).launch(process.env.ENGINE==='webkit'?{}:{executablePath:'/usr/bin/chromium',args:['--no-sandbox']});
 const page=await browser.newPage({viewport:{width:390,height:844},reducedMotion:'reduce'});const errors=[];page.on('pageerror',e=>errors.push(e.message));let n=0;const ok=(v,m)=>{assert(v,m);n++};
 await page.goto('http://127.0.0.1:8000');
 await page.evaluate(()=>{data={schema:1,workouts:[],extra:{keep:true}};save()});
 await page.locator('#newWorkout').click();await page.locator('[name=km]').fill('1');await page.locator('[name=minutes]').fill('10');await page.locator('[type=submit]').click();
 ok(await page.evaluate(()=>data.workouts.length===1&&data.workouts[0].minutes===10&&real()===1&&travel()===3),'map button uses existing save and progress logic');
 await page.evaluate(()=>{document.querySelectorAll('.reveal').forEach(e=>e.remove());revealQueue=[];data.workouts=Array.from({length:16},(_,i)=>({id:'w'+i,date:dayString(civilDay(new Date().toLocaleDateString('sv-SE'))-i*7),km:i%2?5:5.5,minutes:30+i,type:'Bieg',place:'outdoors'}));save();setView('growth')});
 for(const width of [320,375,390,430,768]){await page.setViewportSize({width,height:844});for(const p of ['4','12','all']){await page.locator(`[data-period="${p}"]`).click();ok(await page.locator(`[data-period="${p}"]`).getAttribute('aria-pressed')==='true','period selected');ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'growth fits '+width);ok(await page.locator('.fitness svg').count()===3,'all charts rendered');}}
 await page.locator('[data-view=chronicle]').click();await page.locator('.profile-preview').first().evaluate(i=>i.decode());
 for(const width of [320,375,390,430,768]){await page.setViewportSize({width,height:844});ok(await page.locator('.profile-preview').first().evaluate(i=>Math.abs(i.getBoundingClientRect().width-i.closest('button').clientWidth)<1&&getComputedStyle(i).objectFit==='cover'),'full-width atlas');}
 await page.locator('.milestone-profile .chronicle-trigger').first().click();ok(await page.locator('.milestone-profile.is-open .chronicle-preview').evaluate(e=>getComputedStyle(e).display==='none'),'expanded text not duplicated');ok(await page.locator('.milestone-profile.is-open .profile-art').evaluate(i=>getComputedStyle(i).height!=='0px'),'full artwork accessible');
 await page.locator('[data-view=training]').click();page.on('dialog',d=>d.accept());await page.locator('[data-edit=w0]').click();await page.locator('[name=km]').fill('7');await page.locator('[type=submit]').click();
 await page.evaluate(()=>{document.querySelectorAll('.reveal').forEach(e=>e.remove());revealQueue=[];setView('training')});
 ok(await page.evaluate(()=>data.workouts.find(w=>w.id==='w0').km===7),'edit saved');await page.locator('[data-edit=w0]').click();await page.locator('#deleteWorkout').click();await page.locator('[data-view=growth]').click();ok(await page.evaluate(()=>fitnessStats(data.workouts,new Date().toLocaleDateString('sv-SE'),'all').count===15),'delete updates statistics');ok(errors.length===0,errors.join(';'));console.log('PASS fitness mobile: '+n+' checks');await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
