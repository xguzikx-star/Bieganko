const CACHE='srodziemie-v320';
const CORE=["./", "./index.html", "./style.css?v=3.2", "./app.js?v=3.2", "./manifest.webmanifest", "./chapter-2-przez-gory-i-mroki.jpg", "./icon-192.png", "./icon.svg", "./stop-lothlorien.jpg", "./icon-180.png", "./stop-ithilien.jpg", "./stop-bree.jpg", "./eriador-atlas.jpg", "./stop-anduina.jpg", "./stop-wichrowy-czub.jpg", "./stop-komarowe-bagna.jpg", "./icon-512.png"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('srodziemie-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const req=e.request;if(req.method!=='GET')return;const url=new URL(req.url);if(url.origin!==self.location.origin)return;
const navigation=req.mode==='navigate';
e.respondWith(navigation?fetch(req).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put('./index.html',copy))}return res}).catch(()=>caches.match('./index.html')):
caches.match(req).then(hit=>hit||fetch(req).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy))}return res})))
});
