
const CACHE='srodziemie-v360';
const CORE=[
  './', './index.html', './style.css?v=3.6', './app.js?v=3.6', './manifest.webmanifest',
  './eriador-atlas.jpg', './atlas-srodziemia.jpg', './chapter-2-przez-gory-i-mroki.jpg',
  './chapter-3-nurtem-wielkiej-rzeki.jpg', './chapter-4-w-cieniu-mordoru.jpg',
  './icon-180.png', './icon-192.png', './icon-512.png', './icon.svg',
  './stop-bree.jpg', './stop-komarowe-bagna.jpg', './stop-wichrowy-czub.jpg',
  './stop-lothlorien.jpg', './stop-anduina.jpg', './stop-ithilien.jpg'
];
const BADGES=[
  './badge-art-01.png','./badge-art-02.png','./badge-art-03.png','./badge-art-04.png',
  './badge-art-05.png','./badge-art-06.png','./badge-art-07.png','./badge-art-08.png',
  './badge-art-09.png','./badge-art-10.png','./badge-art-11.png','./badge-art-12.png'
];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(cache=>cache.addAll([...CORE,...BADGES])).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('srodziemie-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin)return;
  const navigation=req.mode==='navigate';
  e.respondWith(
    navigation
      ? fetch(req).then(res=>{
          if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put('./index.html',copy));}
          return res;
        }).catch(()=>caches.match('./index.html'))
      : caches.match(req).then(hit=>hit||fetch(req).then(res=>{
          if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(req,copy));}
          return res;
        }))
  );
});
