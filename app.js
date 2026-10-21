let mapBrowse=null; // null = bieżący rozdział, 1–4 = przeglądany rozdział, 5 = cała trasa
const MAP_IMAGES={
  1:'./eriador-atlas.jpg',
  2:'./chapter-2-przez-gory-i-mroki.jpg',
  3:'./chapter-3-nurtem-wielkiej-rzeki.jpg',
  4:'./chapter-4-w-cieniu-mordoru.jpg'
};
const MAP_ALTS={
  1:'Ilustrowany atlas Eriadoru',
  2:'Ilustrowana mapa etapu przez góry, Morię i Lothlórien',
  3:'Ilustrowana mapa Anduiny od Lothlórien do Rauros',
  4:'Ilustrowana mapa ostatniego etapu do Góry Przeznaczenia'
};
const TOTAL=2863, SCALE=3, KEY='srodziemie.v1';
// Distances between verified chapter anchors are provisional allocations; detail atlas awaits source-by-source verification.
const stops=[
 {km:0,name:'Hobbiton',desc:'Początek wyprawy. Zielone wzgórza Shire zostają za plecami, a cicha droga budzi się pod stopami.',kind:'major',x:84,y:755},
 {km:105,name:'Stary Las',desc:'Za granicą Shire ścieżki ciemnieją, a wśród splątanych konarów zaczyna się pierwsza próba odwagi.',x:130,y:693},
 {km:215,name:'Bree',desc:'W gospodzie Pod Rozbrykanym Kucykiem spotykają się plotki, cienie i wieści ze wszystkich traktów północy.',kind:'major',x:180,y:618},
 {km:345,name:'Komarowe Bagna',desc:'Droga rzednie, powietrze gęstnieje, a samotne mokradła przypominają, że podróż dopiero nabiera ciężaru.',x:209,y:549},
 {km:450,name:'Wichrowy Czub',desc:'Na ruinach dawnej strażnicy wiatr niesie echo dawnych królestw i coraz bliższe brzemię pościgu.',kind:'major',x:262,y:480},
 {km:615,name:'Bród Bruinen',desc:'Przeprawa przez wartką rzekę jest ostatnim wysiłkiem przed bezpieczną doliną Elronda.',x:320,y:400},
 {km:737,name:'Rivendell',desc:'Imladris, ukryty dom Elronda. Miejsce oddechu, światła i początku nowego etapu wędrówki.',kind:'major',x:355,y:345},
 {km:940,name:'Hollin',desc:'Opuszczone ziemie Eregionu rozciągają się cicho u stóp gór, pełne śladów dawnej elfickiej chwały.',x:310,y:303},
 {km:1090,name:'Caradhras',desc:'Śnieg, skała i lodowaty wiatr wystawiają determinację na ciężką próbę pod czerwonym szczytem.',x:265,y:260},
 {km:1230,name:'Moria',desc:'Khazad-dûm otwiera się jak kamienna otchłań, gdzie każdy krok odbija się długim echem w mroku.',kind:'major',x:291,y:207},
 {km:1481,name:'Lothlórien',desc:'Po ciemności przychodzi złoty blask mallornów — kraina ciszy, ukojenia i czujnego światła Galadrieli.',kind:'major',x:340,y:165},
 {km:1710,name:'Anduina',desc:'Wielka Rzeka niesie wyprawę ku południu, pomiędzy brzegami pełnymi mgły, lasów i milczących ruin.',x:410,y:230},
 {km:1940,name:'Argonath',desc:'Kamienne sylwetki dawnych królów wyrastają nad nurtem, strzegąc przejścia ku dalszym losom Drużyny.',x:456,y:316},
 {km:2107,name:'Rauros',desc:'Przy wodospadach Rauros wspólna droga pęka, a dalsza wędrówka przybiera bardziej samotny kształt.',kind:'major',x:425,y:388},
 {km:2280,name:'Emyn Muil',desc:'Labirynt ostrych skał i urwisk wymaga cierpliwości, rozwagi i wytrzymałości w każdym kolejnym kroku.',x:493,y:444},
 {km:2410,name:'Martwe Bagna',desc:'Martwe wody migoczą zdradliwie, a pod ich taflą czają się wspomnienia dawnych bitew i znużenie drogi.',x:539,y:510},
 {km:2540,name:'Ithilien',desc:'Na skraju mroku pojawia się zieleń Ithilien — piękna, dzika i krucha jak chwila oddechu przed burzą.',x:510,y:570},
 {km:2680,name:'Cirith Ungol',desc:'Wąska przełęcz i ciemna twierdza wiszą nad drogą, która staje się bardziej niebezpieczna niż kiedykolwiek.',kind:'major',x:560,y:633},
 {km:2790,name:'Gorgoroth',desc:'Jałowe pustkowie rozciąga się aż po horyzont. Tu liczy się już tylko wytrwałość i ostatni wysiłek.',x:584,y:712},
 {km:2863,name:'Góra Przeznaczenia',desc:'U kresu wyprawy czeka Orodruina — miejsce, w którym droga osiąga swój ostateczny sens.',kind:'major',x:534,y:768}
];
const CHAPTERS=[
 {id:1,roman:'I',title:'Cienie nad Eriadorem',goal:737,start:0,route:'Do Rivendell',intro:'Pierwsza część wędrówki prowadzi przez Shire, Bree i dzikie trakty Eriadoru ku dolinie Elronda.'},
 {id:2,roman:'II',title:'Przez Góry i Mroki',goal:1481,start:737,route:'Do Lothlórien',intro:'Po odpoczynku w Rivendell szlak wiedzie ku górom, przez Caradhras i mroczne kopalnie Morii, aż do złotych drzew Lórien.'},
 {id:3,roman:'III',title:'Nurtem Wielkiej Rzeki',goal:2107,start:1481,route:'Do Rauros',intro:'Droga płynie na południe szerokim nurtem Anduiny, obok Argonath, aż do wodospadów Rauros.'},
 {id:4,roman:'IV',title:'W cieniu Mordoru',goal:2863,start:2107,route:'Do Góry Przeznaczenia',intro:'Ostatni etap prowadzi przez Emyn Muil, Martwe Bagna i popioły Mordoru ku Orodruinie.'}
];
const STOP_ART={
 'Hobbiton':'./eriador-atlas.jpg',
 'Stary Las':'./eriador-atlas.jpg',
 'Bree':'./stop-bree.jpg',
 'Komarowe Bagna':'./stop-komarowe-bagna.jpg',
 'Wichrowy Czub':'./stop-wichrowy-czub.jpg',
 'Bród Bruinen':'./eriador-atlas.jpg',
 'Rivendell':'./chapter-2-przez-gory-i-mroki.jpg',
 'Hollin':'./chapter-2-przez-gory-i-mroki.jpg',
 'Caradhras':'./chapter-2-przez-gory-i-mroki.jpg',
 'Moria':'./chapter-2-przez-gory-i-mroki.jpg',
 'Lothlórien':'./stop-lothlorien.jpg',
 'Anduina':'./stop-anduina.jpg',
 'Argonath':'./chapter-3-nurtem-wielkiej-rzeki.jpg',
 'Rauros':'./chapter-3-nurtem-wielkiej-rzeki.jpg',
 'Emyn Muil':'./chapter-4-w-cieniu-mordoru.jpg',
 'Martwe Bagna':'./chapter-4-w-cieniu-mordoru.jpg',
 'Ithilien':'./stop-ithilien.jpg',
 'Cirith Ungol':'./chapter-4-w-cieniu-mordoru.jpg',
 'Gorgoroth':'./chapter-4-w-cieniu-mordoru.jpg',
 'Góra Przeznaczenia':'./chapter-4-w-cieniu-mordoru.jpg'
};
const stopArt=s=>STOP_ART[s.name]||'./atlas-srodziemia.jpg';
const chapterByDistance=d=>CHAPTERS.find(c=>d<c.goal)||CHAPTERS[CHAPTERS.length-1];

const chapterByStop=km=>CHAPTERS.find(c=>km<=c.goal)||CHAPTERS[CHAPTERS.length-1];
const getDefault=()=>({schema:1,workouts:[],created:new Date().toISOString()});
function load(){try{const j=JSON.parse(localStorage.getItem(KEY));return j&&Array.isArray(j.workouts)?j:getDefault()}catch{return getDefault()}}
let data=load(),view='map',focused=null,mapZoom=1,mapPan={x:0,y:0};
const $=s=>document.querySelector(s), fmt=n=>Number(n||0).toLocaleString('pl-PL',{maximumFractionDigits:1}), esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const real=()=>data.workouts.reduce((s,w)=>s+Number(w.km||0),0); const travel=()=>Math.min(TOTAL,real()*SCALE);const next=()=>stops.find(s=>s.km>travel());const discovered=()=>stops.filter(s=>s.km<=travel());
function save(){try{localStorage.setItem(KEY,JSON.stringify(data))}catch(e){toast('Brak miejsca na zapis. Zrób kopię zapasową danych.')}render()}
function setView(v){view=v;focused=null;render()}
function toast(message){document.querySelector('.toast')?.remove();let n=document.createElement('div');n.className='toast';n.textContent=message;document.body.append(n);setTimeout(()=>n.remove(),3200)}
function closeSheet(){$('#overlay').hidden=true;$('#sheet').innerHTML=''}
function sheet(html){$('#sheet').innerHTML='<button class="close" aria-label="Zamknij" id="closeSheet">×</button>'+html;$('#overlay').hidden=false;$('#closeSheet').onclick=closeSheet}


function markStopViewed(name){
 if(!name)return;
 data.viewedStops=data.viewedStops||{};
 if(data.viewedStops[name])return;
 data.viewedStops[name]=new Date().toISOString();
 const fresh=syncSeals(true);
 try{localStorage.setItem(KEY,JSON.stringify(data))}catch{}
 if(fresh.length)toast(`Odblokowano odznakę: ${fresh[0].name}`);
}

function goToStop(i){
 const s=stops[i],locked=s.km>travel(),art=stopArt(s),remaining=fmt(Math.max(0,(s.km-travel())/SCALE));
 if(!locked)markStopViewed(s.name);
 const chip=locked?'NIEODKRYTA KARTA':(s.kind==='major'?'KAMIEŃ MILOWY':'ODKRYTE MIEJSCE');
 const lead=locked
  ?`Szlak odsłoni to miejsce, gdy pokonasz jeszcze <b>${remaining} km</b> swojej drogi.`
  :`<p>${esc(s.desc)}</p><p class="stop-km">✧ ${fmt(s.km)} km szlaku</p>`;
 sheet(`<div class="sheet-stop-hero"><div class="illustration ${locked?'locked-art':'has-art'}">${locked?'<span class="mystery-symbol" aria-label="Miejsce nieodkryte">✧</span>':`<img src="${art}" alt="${esc(s.name)}">`}</div><small class="eyebrow">${chip}</small><h2>${locked?'Nieznane miejsce':esc(s.name)}</h2>${locked?`<p>${lead}</p>`:lead}</div>`)
}

function routeCurve(pts){
 const f=n=>Number(n).toFixed(1);
 if(pts.length<2)return '';
 let d=`M${f(pts[0].x)} ${f(pts[0].y)}`;
 for(let i=0;i<pts.length-1;i++){
  const a=pts[Math.max(0,i-1)],b=pts[i],c=pts[i+1],e=pts[Math.min(pts.length-1,i+2)];
  const c1={x:b.x+(c.x-a.x)/6,y:b.y+(c.y-a.y)/6};
  const c2={x:c.x-(e.x-b.x)/6,y:c.y-(e.y-b.y)/6};
  d+=` C${f(c1.x)} ${f(c1.y)} ${f(c2.x)} ${f(c2.y)} ${f(c.x)} ${f(c.y)}`;
 }
 return d;
}

function pointOnAtlasRoute(k){
 const d='M151 515 C195 513 200 515 238 507 S363 408 456 362 S501 322 546 334 S637 242 695 209 S785 267 821 222 S897 137 956 101';
 const stopsOnAtlas=[{km:0,x:151,y:515},{km:105,x:238,y:507},{km:215,x:456,y:362},{km:345,x:546,y:334},{km:450,x:695,y:209},{km:615,x:821,y:222},{km:737,x:956,y:101}];
 if(!pointOnAtlasRoute.memo){
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg'),p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d',d);svg.append(p);
  const length=p.getTotalLength();let prior=0;
  const points=stopsOnAtlas.map((s,i)=>{
   let best=prior,dist=Infinity;
   for(let n=Math.floor(prior*2);n<=1000;n++){const u=n/1000,at=p.getPointAtLength(length*u);const delta=(at.x-s.x)**2+(at.y-s.y)**2;if(delta<dist){dist=delta;best=u}}
   prior=best;return {...s,u:best};
  });
  pointOnAtlasRoute.memo={p,length,points};
 }
 const {p,length,points}=pointOnAtlasRoute.memo;
 let i=points.findIndex(s=>s.km>=k);if(i<1)i=k<=0?0:points.length-1;
 const from=points[Math.max(0,i-1)],to=points[i];
 const u= i===0?0:from.u+(to.u-from.u)*Math.max(0,Math.min(1,(k-from.km)/(to.km-from.km)));
 const at=p.getPointAtLength(u*length);return{x:at.x,y:at.y,u};
}
function atlasMapSvg(){
 const k=Math.min(737,mapK());
 const waypoints=[{x:151,y:515,km:0,name:'Hobbiton'},{x:238,y:507,km:105,name:'Stary Las'},{x:456,y:362,km:215,name:'Bree'},{x:546,y:334,km:345,name:'Komarowe Bagna'},{x:695,y:209,km:450,name:'Wichrowy Czub'},{x:821,y:222,km:615,name:'Bród Bruinen'},{x:956,y:101,km:737,name:'Rivendell'}];
 const d='M151 515 C195 513 200 515 238 507 S363 408 456 362 S501 322 546 334 S637 242 695 209 S785 267 821 222 S897 137 956 101';
 let a=waypoints[0],b=waypoints[waypoints.length-1];
 for(let i=1;i<waypoints.length;i++){if(k<=waypoints[i].km){a=waypoints[i-1];b=waypoints[i];break}}
 const t=Math.max(0,Math.min(1,(k-a.km)/(b.km-a.km||1)));
 const location=pointOnAtlasRoute(k);
 const x=location.x,y=location.y;
 const progressLabel=k>0?`${fmt(k)} km`:'Start';
 const calloutRight=x<800;
 const width=150;
 const lx=calloutRight?x+30:x-30-width;
 const ly=Math.max(16,y-86);
 const hotspots=[{x:151,y:515,id:0},{x:238,y:507,id:1},{x:456,y:362,id:2},{x:546,y:334,id:3},{x:695,y:209,id:4},{x:821,y:222,id:5},{x:956,y:101,id:6}];
 const markers=waypoints.map((p,i)=>{const seen=p.km<=k;const major=[0,2,4,6].includes(i);const r=major?10.5:6.5;return `<g opacity="${seen?1:.95}"><circle cx="${p.x}" cy="${p.y}" r="${r+4}" fill="#07110dc4"/><circle cx="${p.x}" cy="${p.y}" r="${r}" fill="${seen?'#f3cc82':'#173027'}" stroke="${seen?'#fff0c3':'#bea26d'}" stroke-width="${major?2.7:1.9}"/></g>`}).join('');
 return `<svg class="atlas-overlay" viewBox="0 0 1086 702" preserveAspectRatio="none" aria-label="Interaktywna mapa Eriadoru"><defs><filter id="atlasglow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="7" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter><filter id="atlasshadow" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity=".42"/></filter></defs><path d="${d}" fill="none" stroke="#726342" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round" opacity=".78"/><path d="${d}" fill="none" stroke="#f2cd87" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round" pathLength="1000" stroke-dasharray="${(location.u*1000).toFixed(2)} 1000" filter="url(#atlasglow)"/><path d="${d}" fill="none" stroke="#fff2c3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" pathLength="1000" stroke-dasharray="${(location.u*1000).toFixed(2)} 1000" opacity=".98"/>${markers}<circle cx="${x}" cy="${y}" r="22" fill="#ecc47d" opacity=".22" filter="url(#atlasglow)"/><circle cx="${x}" cy="${y}" r="11" fill="#0d1712" stroke="#ffe8b2" stroke-width="3.5" filter="url(#atlasshadow)"/><circle cx="${x}" cy="${y}" r="4.7" fill="#ffdc8c" stroke="#6c4a1f" stroke-width="1.2"/><g filter="url(#atlasshadow)"><rect x="${lx}" y="${ly}" rx="14" ry="14" width="${width}" height="58" fill="#07120fe6" stroke="#cba96a" stroke-width="2"/><text x="${lx+width/2}" y="${ly+40}" text-anchor="middle" fill="#fff1c8" font-family="Marcellus,Georgia,serif" font-size="30">${progressLabel}</text></g>${hotspots.map(p=>`<circle class="atlas-hotspot" data-stop="${p.id}" tabindex="0" role="button" aria-label="Otwórz lokację" cx="${p.x}" cy="${p.y}" r="26" fill="transparent"/>`).join('')}</svg>`;
}


// v1.9.1: chapter II–IV pins are placed in the painted image's own pixel space (1086×1448),
// so the SVG overlay and the illustration scale and crop identically.

const CHAPTER_ART={
 2:{first:6,last:10,pts:[[930,120],[210,470],[560,235],[700,870],[165,1085]]},
 3:{first:10,last:13,pts:[[140,150],[470,430],[785,720],[885,1190]]},
 4:{first:13,last:19,pts:[[80,90],[260,255],[330,545],[235,915],[650,910],[790,320],[945,105]]}
};
function sampleRoute(pts){
 // Catmull-Rom style cubic segments (same as routeCurve) sampled into a polyline with cumulative length per stop.
 const seg=[];let total=0,cum=[0],poly=[{x:pts[0].x,y:pts[0].y,l:0}];
 for(let i=0;i<pts.length-1;i++){
  const a=pts[Math.max(0,i-1)],b=pts[i],c=pts[i+1],e=pts[Math.min(pts.length-1,i+2)];
  const c1={x:b.x+(c.x-a.x)/6,y:b.y+(c.y-a.y)/6},c2={x:c.x-(e.x-b.x)/6,y:c.y-(e.y-b.y)/6};
  const at=t=>{const u=1-t;return{x:u*u*u*b.x+3*u*u*t*c1.x+3*u*t*t*c2.x+t*t*t*c.x,y:u*u*u*b.y+3*u*u*t*c1.y+3*u*t*t*c2.y+t*t*t*c.y}};
  let prev=b;const samples=[{t:0,l:total}];
  for(let j=1;j<=40;j++){const p=at(j/40);total+=Math.hypot(p.x-prev.x,p.y-prev.y);samples.push({t:j/40,l:total});prev=p}
  seg.push({at,samples});cum.push(total);
 }
 return{seg,cum,total};
}
function mapSvg(){
 const k=mapK(),chapter=(mapBrowse>=1&&mapBrowse<=4)?mapBrowse:chapterByDistance(Math.min(k,TOTAL-.01)).id,cfg=CHAPTER_ART[chapter]||CHAPTER_ART[4];
 const chapterStops=stops.slice(cfg.first,cfg.last+1),pts=cfg.pts.map(([x,y])=>({x,y}));
 const path=routeCurve(pts),route=sampleRoute(pts);
 let current=pts[0],done=0;
 if(k>=chapterStops.at(-1).km){current=pts.at(-1);done=route.total}
 else{const j=chapterStops.findIndex(q=>q.km>k);if(j>0){const a=chapterStops[j-1],b=chapterStops[j],t=Math.max(0,Math.min(1,(k-a.km)/(b.km-a.km)));const sg=route.seg[j-1];current=sg.at(t);const s1=sg.samples[Math.floor(t*40)],s2=sg.samples[Math.min(40,Math.floor(t*40)+1)];done=s1.l+(s2.l-s1.l)*(t*40-Math.floor(t*40))}}
 const anchors=chapterStops.map((stop,i)=>{const p=pts[i],seen=stop.km<=k,major=stop.kind==='major',r=major?15:10;
  const label=seen||major?esc(stop.name):'?';const side=p.x>600?-1:1;
  return `<g class="stop map-pin ${seen?'unlocked':'locked'}" data-stop="${cfg.first+i}" tabindex="0" role="button" aria-label="${seen?esc(stop.name):'Nieodkryte miejsce'}"><circle cx="${p.x}" cy="${p.y}" r="44" fill="transparent"/><circle cx="${p.x}" cy="${p.y}" r="${r+8}" fill="#06100cc8" opacity=".88"/><circle cx="${p.x}" cy="${p.y}" r="${r}" fill="${seen?'#d9b06f':'#10221b'}" stroke="${seen?'#ffe7b1':'#c1ad82'}" stroke-width="${major?4:3}"/><text x="${p.x+side*30}" y="${p.y-24}" text-anchor="${side>0?'start':'end'}" class="map-label chapter-label ${seen?'discovered':''}">${label}</text></g>`}).join('');
 const T=route.total.toFixed(1),D=Math.max(0,done).toFixed(1);
 return `<svg viewBox="0 0 1086 1448" preserveAspectRatio="xMidYMid slice" role="group" aria-label="Mapa wyprawy ze ścieżką i interaktywnymi miejscami"><defs><filter id="mapglow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="9"/></filter></defs><path d="${path}" fill="none" stroke="#3c3324" stroke-width="13" stroke-linejoin="round" stroke-linecap="round" opacity=".55"/><path d="${path}" fill="none" stroke="#f6e7c2" stroke-width="5" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="2 16" opacity=".85"/><path d="${path}" fill="none" stroke="#f1cc85" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="${D} ${T}" style="filter:drop-shadow(0 0 6px #d9ac5f)"/><path d="${path}" fill="none" stroke="#fff0bb" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="${D} ${T}" opacity=".96"/>${anchors}<g pointer-events="none"><circle cx="${current.x}" cy="${current.y}" r="34" fill="#ecc47d" opacity=".3" filter="url(#mapglow)"/><circle cx="${current.x}" cy="${current.y}" r="18" fill="#0f1813" stroke="#f2c37b" stroke-width="4"/><circle cx="${current.x}" cy="${current.y}" r="8" fill="#ffecbd" stroke="#ae7645" stroke-width="2"/></g></svg>`;
}

function positionAt(k){if(k<=0)return stops[0];for(let i=1;i<stops.length;i++){if(k<=stops[i].km){let a=stops[i-1],b=stops[i],t=(k-a.km)/(b.km-a.km);return{x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t}}}return stops.at(-1)}

// Atlas całej wyprawy: schematyczna mapa szlaku (nie geograficzny atlas Tolkiena).
// Używa tych samych punktów i dystansów co wszystkie rozdziały.
function worldMapSvg(){
 const k=Math.min(TOTAL,mapK());
 // Współrzędne ilustracyjne, kolejność i km wynikają ze źródłowej listy stops.
 const coords=[[52,165],[94,167],[162,169],[215,174],[263,176],[306,181],[343,185],[405,219],[455,250],[492,310],[505,353],[567,397],[616,437],[645,477],[685,513],[736,540],[784,551],[860,528],[924,501],[970,398]];
 const P=stops.map((s,i)=>({x:coords[i][0],y:coords[i][1],km:s.km,name:s.name,major:!!s.kind}));
 const path=routeCurve(P),route=sampleRoute(P);
 let current=P[0],done=0;
 if(k>=TOTAL){current=P.at(-1);done=route.total}
 else if(k>0){const j=stops.findIndex(s=>s.km>k);if(j>0){const t=Math.max(0,Math.min(1,(k-stops[j-1].km)/(stops[j].km-stops[j-1].km))),seg=route.seg[j-1];current=seg.at(t);const ix=Math.floor(t*40),a=seg.samples[ix],b=seg.samples[Math.min(40,ix+1)];done=a.l+(b.l-a.l)*(t*40-ix)}}
 const anchors=P.map((p,i)=>{const seen=stops[i].km<=k,major=p.major;return `<g class="world-stop" data-stop="${i}" tabindex="0" role="button" aria-label="${esc(p.name)}"><circle cx="${p.x}" cy="${p.y}" r="${major?8:5}" fill="${seen?'#e6b95f':'#23312b'}" stroke="${seen?'#ffebbe':'#f0d6a2'}" stroke-width="2.5"/><circle cx="${p.x}" cy="${p.y}" r="15" fill="transparent"/></g>`}).join('');
 const totalLength=route.total.toFixed(2),currentLength=done.toFixed(2);
 return `<svg class="world-svg world-atlas-svg" viewBox="0 0 1076 716" preserveAspectRatio="xMidYMid meet" aria-label="Interaktywny atlas całej wyprawy"><image href="./atlas-srodziemia.jpg" x="0" y="0" width="1076" height="716" preserveAspectRatio="none"/><rect x="0" y="0" width="1076" height="716" fill="#081713" opacity=".24"/><path d="${path}" fill="none" stroke="#0a1614" stroke-width="12" opacity=".9" stroke-linecap="round"/><path d="${path}" fill="none" stroke="#dec99a" stroke-width="4" opacity=".8" stroke-dasharray="2 11" stroke-linecap="round"/><path d="${path}" fill="none" stroke="#e9bb60" stroke-width="8" stroke-dasharray="${currentLength} ${totalLength}" stroke-linecap="round" style="filter:drop-shadow(0 0 6px #e6ac49)"/><path d="${path}" fill="none" stroke="#fff0c5" stroke-width="2.5" stroke-dasharray="${currentLength} ${totalLength}" stroke-linecap="round"/>${anchors}<circle cx="${current.x}" cy="${current.y}" r="14" fill="#0f1e1b" stroke="#ffe5a7" stroke-width="3.5"/><circle cx="${current.x}" cy="${current.y}" r="5" fill="#ffdaa0"/></svg>`;
}
function setMapBrowse(n){
 mapBrowse=n===0?5:n;
 mapZoom=1;mapPan={x:0,y:0};
 render();
}
function changeMapBrowse(direction){
 const active=mapBrowse||chapterByDistance(Math.min(mapK(),TOTAL-.01)).id;
 const nextIndex=((active-1+direction+5)%5)+1;
 setMapBrowse(nextIndex);
}
function renderMap(){
 const distance=mapK(),chapterMeta=chapterByDistance(Math.min(distance,TOTAL-0.01)),chapter=chapterMeta.id,shown=mapBrowse||chapter,allMap=shown===5,shownMeta=CHAPTERS[shown-1]||chapterMeta;
 const goal=[737,1481,2107,2863][chapter-1],start=[0,737,1481,2107][chapter-1];
 const chapterDistance=Math.max(0,distance-start);
 const nextStop=next();
 const nextStopDistance=Math.max(0,(nextStop?.km-distance||0)/SCALE);
 const chapterRemaining=Math.max(0,(goal-distance)/SCALE);
 const pct=Math.min(100,Math.max(0,100*(distance-start)/(goal-start)));
 const last=[...data.workouts].sort((a,b)=>b.date.localeCompare(a.date))[0];
 const names=CHAPTERS.map(c=>c.title);
 const chapterRoman=['I','II','III','IV'][chapter-1];
 const chapterGoalName=stops.find(s=>s.km===goal)?.name||'celu';
 const lastEntry=journalEntries().at(-1);
 const note=lastEntry?esc(lastEntry.text):nextStop?`Droga wiedzie ku kolejnemu odkryciu. Jeszcze ${fmt(nextStopDistance)} km dzieli Cię od ${esc(nextStop.name)}.`:'Dotarłaś do kresu Drogi Pierścienia. Kronika zachowa tę wyprawę w całości.';
 const chapterMapSrc=MAP_IMAGES[chapter]||MAP_IMAGES[4];
 const chapterMapAlt=MAP_ALTS[chapter]||'Ilustrowana mapa wyprawy';
 return `${backupBanner()}<section class="journey-intro"><div class="journey-rule"><span>✦</span><small>${allMap?'CAŁA WYPRAWA':`ROZDZIAŁ ${shownMeta.roman} · WYPRAWA I`}</small><span>✦</span></div><h2>${allMap?'Atlas całej podróży':esc(shownMeta.title)}</h2><p>${allMap?'Wszystkie miejsca, pełna trasa i droga, którą już przebyłaś.':esc(shownMeta.intro)}</p></section>
 <div class="world-nav" aria-label="Przeglądaj mapy"><button id="mapPrevious" aria-label="Poprzednia mapa">‹</button><span>${allMap?'Całe Śródziemie':`Rozdział ${shownMeta.roman} / IV`}</span><button id="mapNext" aria-label="Następna mapa">›</button><button id="mapOverview" class="world-overview-btn" aria-label="Pokaż całą trasę">Cała trasa</button></div>
 <div class="map-frame"><div class="map-stage ${allMap?'world-stage':''}" id="mapStage"><div class="map-art" id="mapArt">${allMap?worldMapSvg():shown===1?`<img class="map-landscape atlas-image" src="${MAP_IMAGES[1]}" alt="${MAP_ALTS[1]}" draggable="false">${atlasMapSvg()}`:`<img class="map-landscape" src="${MAP_IMAGES[shown]}" alt="${MAP_ALTS[shown]}" draggable="false">${mapSvg()}`}</div><div class="map-tools${shown===1?' atlas-tools':''}"><button data-zoom="in" aria-label="Przybliż">+</button><button data-zoom="out" aria-label="Oddal">−</button><button data-zoom="reset" aria-label="Wyśrodkuj">⌖</button></div></div><div class="map-frame-caption"><span>${allMap?'✧ CAŁA WYPRAWA':'✧ PRZEGLĄD SZLAKU'}</span><span>Przesuń palcem w lewo lub prawo</span></div></div>
 <section class="journey-dashboard">
 <div class="journey-heading"><div><small class="eyebrow">TWOJA WĘDRÓWKA</small><h2>Droga do ${esc(chapterGoalName)}</h2></div><span class="journey-medallion">✧</span></div>
 <div class="journey-mainstats"><div><span class="journey-number">${fmt(chapterDistance)}<small> / ${fmt(goal-start)} km</small></span><p>Przebyty szlak w tym rozdziale</p></div><div class="journey-percent">${pct.toFixed(1).replace('.',',')}<span>%</span></div></div>
 <div class="journey-progress" role="progressbar" aria-valuenow="${pct.toFixed(1)}" aria-valuemin="0" aria-valuemax="100"><div style="width:${pct}%"></div></div>
 <div class="journey-next"><div class="journey-next-icon">⌖</div><div><small>KOLEJNY ETAP</small><strong>${nextStop?esc(nextStop.name):'Wyprawa ukończona'}</strong><p>${nextStop?`Do ${esc(nextStop.name)} pozostało ${fmt(nextStopDistance)} km Twojej drogi.`:'Wszystkie etapy tej wyprawy zostały odsłonięte.'}</p></div></div>
 <div class="journey-stats"><div><span>✦</span><strong>${fmt(real())} km</strong><small>Twój dystans</small></div><div><span>➜</span><strong>${fmt(distance)} km</strong><small>Przebyty szlak</small></div><div><span>◈</span><strong>${fmt(chapterRemaining)} km</strong><small>Do końca rozdziału</small></div></div>
 <div class="journey-chronicle"><div><small class="eyebrow">Z KRONIKI PODRÓŻY</small><span>✧</span></div><p>${note}</p>${last?`<small>Ostatni zapis w kronice: ${esc(last.date)} · ${esc(last.type)} · ${fmt(last.km)} km</small>`:'<small>Zapisz pierwszy trening, aby rozpocząć kronikę.</small>'}</div>
 <button class="primary journey-add" id="newWorkout">＋ Dodaj trening</button>
 </section>`;
}

function renderTraining(){let ws=[...data.workouts].sort((a,b)=>b.date.localeCompare(a.date));return `<div class="page"><div class="panel"><div class="between"><div><small class="eyebrow">REJESTR AKTYWNOŚCI</small><h2 class="section-title" style="margin:8px 0">Twój dziennik</h2></div><span class="pill">${ws.length} treningów</span></div><button class="primary" id="newWorkout">+ Zapisz trening</button><button class="secondary" id="miImportButton" style="width:100%;margin-top:9px">▣ Importuj zrzut Mi Fitness</button></div><div class="panel"><div class="metrics"><div><strong>${fmt(real())}</strong><small>Kilometry</small></div><div><strong>${fmt(ws.reduce((s,w)=>s+(+w.minutes||0),0)/60)}</strong><small>Godziny</small></div><div><strong>${fmt(ws.length?real()/ws.length:0)}</strong><small>Średni trening km</small></div></div></div><div class="panel"><h2 class="section-title">Historia aktywności</h2>${ws.length?ws.map(w=>`<div class="list-row"><div><strong>${esc(w.type)} · ${fmt(w.km)} km</strong><small>${esc(w.date)} · ${w.place==='treadmill'?'Bieżnia':'Teren'}${w.minutes?' · '+fmt(w.minutes)+' min':''}${w.runMinutes?' · bieg '+fmt(w.runMinutes)+' min':''}${w.hrAvg?' · ❤ '+fmt(w.hrAvg)+' bpm':''}${w.cadenceAvg?' · kadencja '+fmt(w.cadenceAvg):''}${w.source==='Mi Fitness'?' · Mi Fitness':''}</small></div><button class="secondary" data-edit="${esc(w.id)}">Edytuj</button></div>`).join(''):'<div class="empty">Jeszcze nie ma treningów. Dodaj pierwszy albo wpisz wcześniejsze aktywności.</div>'}</div></div>`}
function weeklyStreak(){const keys=new Set(data.workouts.map(w=>weekKey(w.date)));if(!keys.size)return 0;let day=new Date();day.setHours(12,0,0,0);let n=0;for(let i=0;i<520;i++){const key=weekKey(day.toISOString().slice(0,10));if(keys.has(key))n++;else if(i!==0)break;day.setDate(day.getDate()-7)}return n}
function weekKey(s){const d=new Date(s+'T12:00:00');d.setDate(d.getDate()+4-(d.getDay()||7));return d.getFullYear()+'-'+String(Math.ceil((((d-new Date(d.getFullYear(),0,1))/864e5)+1)/7)).padStart(2,'0')}

function renderChronicle(){
 const done=discovered(),future=stops.filter(s=>s.km>travel());
 const upcomingGroups=CHAPTERS.map(ch=>({
   ...ch,
   stops: future.filter(s=>s.km>ch.start && s.km<=ch.goal).slice(0,4)
 })).filter(g=>g.stops.length);
 return `<div class="page"><div class="panel"><small class="eyebrow">KRONIKA WYPRAWY</small><h2 class="section-title" style="margin:8px 0">Odkryte miejsca</h2><div class="statsline"><span class="muted">Odkrycia</span><b>${done.length} / ${stops.length}</b></div><div class="progress"><b style="width:${100*done.length/stops.length}%"></b></div></div>${sealsPanel()}${journalPanel()}<h3 class="mini-title chronicle-sub">Odkryte miejsca</h3>${[...done].reverse().map(s=>`<button class="discover discover-rich" data-stop="${stops.indexOf(s)}" style="display:grid;text-align:left;width:100%;color:inherit;margin:0 0 11px"><img src="${stopArt(s)}" alt="${esc(s.name)}"><div class="discover-copy"><span class="eyebrow">${s.kind==='major'?'KAMIEŃ MILOWY':'ODKRYCIE'} · ${fmt(s.km)} KM SZLAKU</span><h3 class="mini-title">✧ ${esc(s.name)}</h3><span class="muted tiny">${esc(s.desc)}</span></div></button>`).join('')}<div class="panel"><h3 class="mini-title">Pozostałe etapy podróży</h3>${upcomingGroups.map(g=>`<div class="chronicle-group"><div class="list-row"><div><strong>Rozdział ${g.roman} · ${esc(g.title)}</strong></div><small>${esc(g.route)}</small></div>${g.stops.map(s=>`<div class="list-row"><div>🔒 ${esc(s.name)}</div><small>za ${fmt((s.km-travel())/SCALE)} km Twojej drogi</small></div>`).join('')}</div>`).join('')}</div></div>`
}

function barsChart(){const now=new Date(),samples=[];for(let i=7;i>=0;i--){let monday=new Date(now);monday.setDate(monday.getDate()-((monday.getDay()+6)%7)-i*7);const key=weekKey(monday.toISOString().slice(0,10));samples.push({key,km:data.workouts.filter(w=>weekKey(w.date)===key).reduce((s,w)=>s+(+w.km),0)})}let max=Math.max(5,...samples.map(s=>s.km));return `<svg class="chart" viewBox="0 0 330 155" role="img" aria-label="Dystans w ostatnich ośmiu tygodniach">${[0,1,2,3].map(i=>`<line class="gridline" x1="24" x2="318" y1="${125-i*35}" y2="${125-i*35}"/>`).join('')}${samples.map((s,i)=>`<rect class="bar" x="${35+i*36}" y="${125-98*s.km/max}" width="20" height="${98*s.km/max}" rx="3"/><text x="${45+i*36}" y="147" text-anchor="middle">${i+1}</text>`).join('')}</svg>`}
// v3.0 — narzędzia treningowe, bez zgadywania parametrów fizjologicznych.
const growthNum=(v)=>v===null||v===undefined||v===''?null:(Number.isFinite(+v)?+v:null);
const growthPace=w=>growthNum(w.minutes)>0&&growthNum(w.km)>0?w.minutes/w.km:null;
const growthDate=w=>String(w.date||'');
let growthKind='all';
const GROWTH_TYPES={all:'Wszystkie',Marsz:'Marsz',Bieg:'Bieg','Interwały':'Interwały'};
const growthList=()=>data.workouts.filter(w=>growthKind==='all'||w.type===growthKind).slice().sort((a,b)=>growthDate(a).localeCompare(growthDate(b)));
const growthAverage=(items,fn)=>{let a=items.map(fn).filter(v=>v!==null&&Number.isFinite(v));return a.length?a.reduce((x,y)=>x+y,0)/a.length:null};
const growthValue=(n,suffix='',digits=1)=>n===null||!Number.isFinite(n)?'—':n.toLocaleString('pl-PL',{maximumFractionDigits:digits})+suffix;
const growthPaceLabel=n=>n===null||!Number.isFinite(n)||n<=0?'—':`${Math.floor(n)}:${String(Math.round((n%1)*60)).padStart(2,'0')} min/km`;
const growthDuration=n=>n===null?'—':`${Math.floor(n)}:${String(Math.round((n%1)*60)).padStart(2,'0')}`;
const growthWeekStart=date=>{let d=new Date(String(date).slice(0,10)+'T12:00:00');if(!Number.isFinite(d.getTime()))return null;d.setDate(d.getDate()-(d.getDay()+6)%7);return d.toLocaleDateString('sv-SE')};
const growthWeeks=(ws,n=8)=>{let start=new Date();start.setHours(12,0,0,0);start.setDate(start.getDate()-(start.getDay()+6)%7);let out=[];for(let i=n-1;i>=0;i--){let d=new Date(start);d.setDate(d.getDate()-7*i);let key=d.toLocaleDateString('sv-SE');let a=ws.filter(w=>growthWeekStart(w.date)===key);out.push({key,km:a.reduce((x,w)=>x+(growthNum(w.km)||0),0),minutes:a.reduce((x,w)=>x+(growthNum(w.minutes)||0),0),count:a.length})}return out};
function growthGraph(points,label,lowerIsBetter=false){
 if(!points.length||points.every(p=>p.y===null))return `<p class="note">Za mało danych do wykresu.</p>`;
 const vals=points.filter(p=>p.y!==null).map(p=>p.y),min=Math.min(0,...(lowerIsBetter?vals:[0])),max=Math.max(1,...vals),span=Math.max(1,max-min),x=i=>32+i*(276/Math.max(1,points.length-1)),y=v=>120-94*(v-min)/span;
 const line=points.map((p,i)=>p.y===null?'':`${i===0||points[i-1].y===null?'M':'L'} ${x(i).toFixed(1)} ${y(p.y).toFixed(1)}`).join(' ');
 return `<svg class="chart growth-chart" viewBox="0 0 330 158" role="img" aria-label="${esc(label)}"><line class="gridline" x1="27" y1="120" x2="319" y2="120"/><line class="gridline" x1="27" y1="74" x2="319" y2="74"/><path class="line" d="${line}"/>${points.map((p,i)=>p.y===null?'':`<circle cx="${x(i)}" cy="${y(p.y)}" r="3.5" fill="#e9c382"><title>${esc(p.name)}: ${growthValue(p.y)}</title></circle>`).join('')}${points.map((p,i)=>`<text x="${x(i)}" y="148" text-anchor="middle">${esc(p.label)}</text>`).join('')}</svg>`
}
const growthPlan=()=>data.trainingPlan&&typeof data.trainingPlan==='object'?data.trainingPlan:{goal:'continuous',days:3,minutes:25,selected:[]};
function growthPlanAdvice(ws){
 const recent=ws.filter(w=>Date.now()-new Date(w.date+'T12:00:00').getTime()<=21*864e5),rpes=recent.map(w=>growthNum(w.rpe)).filter(v=>v!==null),rpe=growthAverage(recent,w=>growthNum(w.rpe)),previous=growthWeeks(data.workouts,4),last=previous[3],before=previous[2];
 if(!ws.length)return 'Zacznij od 2–3 komfortowych aktywności tygodniowo. Po każdym treningu zapisz czas, dystans i odczuwany wysiłek.';
 if(rpe!==null&&rpe>=8)return 'Ostatni wysiłek jest wysoki (RPE ≥ 8). W kolejnym treningu wybierz spokojniejszy wariant lub odpoczynek. Nie zwiększaj obciążenia automatycznie.';
 if(before.km>0&&last.km>before.km*1.3)return 'Dystans w tym tygodniu wzrósł o ponad 30% wobec poprzedniego. Warto najpierw ustabilizować objętość zamiast dokładać kolejne kilometry.';
 if(recent.length<2)return 'Masz mało ostatnich zapisów. Priorytetem jest regularność i komfortowe tempo, nie prędkość.';
 return 'Utrzymuj powtarzalne, komfortowe treningi; gdy wysiłek jest dobrze tolerowany, zmieniaj tylko jeden parametr naraz (czas albo tempo).';
}
function growthSkills(ws){let weeks=growthWeeks(data.workouts,8),active=weeks.filter(w=>w.count>0).length;let longest=Math.max(0,...ws.map(w=>growthNum(w.longestRun)||0));let tests=ws.filter(w=>w.test&&growthPace(w)!==null),pace=testedPace(tests);let controlled=ws.filter(w=>growthNum(w.rpe)!==null),manageable=controlled.filter(w=>w.rpe>=3&&w.rpe<=6).length;
 return [{name:'Konsekwencja',value:Math.round(active/8*100),detail:`Aktywne tygodnie: ${active}/8 (ostatnie osiem)`},{name:'Wytrzymałość',value:Math.min(100,Math.round(longest/30*100)),detail:`Bieg ciągły: ${growthValue(longest,' min')} / orientacyjny punkt 30 min`},{name:'Kontrola wysiłku',value:controlled.length?Math.round(manageable/controlled.length*100):null,detail:controlled.length?`${manageable}/${controlled.length} wpisów z RPE 3–6`:'Uzupełnij RPE, aby obliczyć wskaźnik'},{name:'Tempo prób',value:pace===null?null:Math.round(pace),detail:pace===null?'Wymagane minimum dwie podobne próby':`Zmiana tempa: ${growthValue(pace,'%',1)} (dodatnia = szybciej)`}];
}
function testedPace(tests){if(tests.length<2)return null;let a=tests[0],b=tests.at(-1);if(Math.abs(a.km-b.km)>Math.max(.2,a.km*.1)||a.type!==b.type)return null;let p1=growthPace(a),p2=growthPace(b);return p1>0?(p1-p2)/p1*100:null}
function growthComparison(ws){let tests=ws.filter(w=>w.test&&growthPace(w)!==null);let groups={};for(let w of tests){let key=w.type+'|'+Math.round(w.km*2)/2;(groups[key]??=[]).push(w)}let group=Object.values(groups).filter(v=>v.length>=2).sort((a,b)=>b.at(-1).date.localeCompare(a.at(-1).date))[0];if(!group)return `<p class="note">Oznacz co najmniej dwa podobne treningi (ten sam rodzaj i dystans ±0,25 km) jako „Próba porównawcza”.</p>`;
 let first=group[0],last=group.at(-1),p1=growthPace(first),p2=growthPace(last),delta=(p1-p2)/p1*100,hr1=growthNum(first.hrAvg),hr2=growthNum(last.hrAvg);return `<div class="list-row"><div><strong>${esc(first.type)} · ok. ${fmt(last.km)} km</strong><small>${esc(first.date)} → ${esc(last.date)}</small></div><span class="pill">${delta>=0?'+':''}${growthValue(delta,'%',1)}</span></div><p class="note">Tempo: ${growthPaceLabel(p1)} → ${growthPaceLabel(p2)}. ${hr1!==null&&hr2!==null?`Średnie tętno: ${hr1} → ${hr2} bpm.`:'Brak kompletnych danych tętna.'} Porównanie orientacyjne: znaczenie mają także nachylenie, RPE i warunki treningu.</p>`}
function renderGrowth(){
 const ws=growthList(),all=data.workouts,minutes=ws.reduce((n,w)=>n+(growthNum(w.minutes)||0),0),km=ws.reduce((n,w)=>n+(growthNum(w.km)||0),0),withPace=ws.filter(w=>growthPace(w)!==null),pace=withPace.length?withPace.reduce((n,w)=>n+w.minutes,0)/withPace.reduce((n,w)=>n+w.km,0):null,weekly=growthWeeks(ws),recent=ws.filter(w=>Date.now()-new Date(w.date+'T12:00:00').getTime()<=28*864e5).slice(-8),plan=growthPlan(),skills=growthSkills(all),hr=ws.filter(w=>growthNum(w.hrAvg)!==null),zones=[['zoneRecovery','Regeneracyjna'],['zoneIntensive','Intensywna'],['zoneAerobic','Aerobowa'],['zoneAnaerobic','Anaerobowa'],['zoneMax','VO₂ max']],zoneTotals=zones.map(([k,label])=>({label,value:ws.reduce((n,w)=>n+(growthNum(w[k])||0),0)})),zoneSum=zoneTotals.reduce((n,z)=>n+z.value,0);
 const kindBtns=Object.entries(GROWTH_TYPES).map(([v,t])=>`<button class="secondary ${growthKind===v?'growth-selected':''}" data-growth-kind="${v}">${t}</button>`).join('');
 return `<div class="page growth-v3"><div class="panel"><small class="eyebrow">ŚRÓDZIEMIE · ANALIZA I ROZWÓJ</small><h2 class="section-title" style="margin:8px 0">Rozwój Wędrowca</h2><p class="note">Dane treningowe są prawdziwe, a wskaźniki opisowe. To nie diagnoza ani pomiar VO₂max.</p><div class="growth-filters">${kindBtns}</div><div class="metrics"><div><strong>${fmt(km)}</strong><small>km</small></div><div><strong>${fmt(minutes/60)}</strong><small>godzin</small></div><div><strong>${ws.length}</strong><small>treningów</small></div></div></div>
 <div class="panel"><h3 class="mini-title">Postęp w ostatnich 8 tygodniach</h3>${growthGraph(weekly.map((w,i)=>({y:w.km,name:w.key,label:String(i+1)})),'Dystans tygodniowy w kilometrach')}<p class="note">Tydzień 1 to najstarszy. Aktualny tydzień może być niepełny. Filtr aktywności stosuje się również do wykresów.</p></div>
 <div class="two"><div class="panel"><small class="eyebrow">ŚREDNIE TEMPO</small><h2 class="hero-title growth-small">${growthPaceLabel(pace)}</h2><p class="note">Łączny czas / dystans</p></div><div class="panel"><small class="eyebrow">BIEG BEZ PRZERWY</small><h2 class="hero-title">${growthValue(Math.max(0,...ws.map(w=>growthNum(w.longestRun)||0)),' min',1)}</h2><p class="note">Z zapisanych treningów</p></div></div>
 <div class="panel"><h3 class="mini-title">Trendy tempa i tętna</h3>${growthGraph(recent.map((w,i)=>({y:growthPace(w),name:w.date,label:String(i+1)})),'Tempo minut na kilometr',true)}<p class="note">Tempo (min/km), ostatnie maks. 8 wpisów z 28 dni. Niższa wartość oznacza szybsze tempo.</p>${growthGraph(recent.map((w,i)=>({y:growthNum(w.hrAvg),name:w.date,label:String(i+1)})),'Średnie tętno bpm')}<p class="note">Średnie tętno (bpm), tylko jeśli zapisano. Niższe tętno samo w sobie nie oznacza lepszej wydolności.</p></div>
 <div class="panel"><h3 class="mini-title">Powtarzalne próby porównawcze</h3>${growthComparison(ws)}</div>
 <div class="panel"><h3 class="mini-title">Strefy tętna</h3>${zoneSum?zoneTotals.map(z=>`<div class="growth-zone"><div class="between"><span>${z.label}</span><strong>${growthValue(z.value,' min')}</strong></div><div class="progress"><b style="width:${Math.min(100,z.value/zoneSum*100)}%"></b></div></div>`).join(''):`<p class="note">Brak zapisanych minut w strefach tętna. Możesz je zaimportować z Mi Fitness lub wpisać ręcznie.</p>`}<p class="note">Sumy z dostępnych treningów (${growthKind==='all'?'wszystkie rodzaje':growthKind}). Definicje stref pochodzą z Mi Fitness; nie są tu przeliczane.</p></div>
 <div class="panel"><h3 class="mini-title">Karta Wędrowca</h3>${skills.map(k=>`<div class="growth-skill"><div class="between"><strong>${k.name}</strong><span>${k.value===null?'Brak danych':k.name==='Tempo prób'?growthValue(k.value,'%'):growthValue(k.value,'%')}</span></div>${k.value!==null&&k.name!=='Tempo prób'?`<div class="progress"><b style="width:${k.value}%"></b></div>`:''}<p class="note">${k.detail}</p></div>`).join('')}<p class="note">Paski to cele pomocnicze i miary regularności, a nie medyczna ocena sprawności. Tempo prób pokazuje zmianę procentową, bez sztucznego limitu do 100.</p></div>
 <div class="panel"><h3 class="mini-title">Twój cel i plan treningowy</h3><div class="field"><label for="growthGoal">Cel</label><select id="growthGoal"><option value="continuous" ${plan.goal==='continuous'?'selected':''}>Dłuższy bieg ciągły</option><option value="regular" ${plan.goal==='regular'?'selected':''}>Regularne treningi</option><option value="pace" ${plan.goal==='pace'?'selected':''}>Poprawa tempa</option><option value="distance" ${plan.goal==='distance'?'selected':''}>Dłuższy dystans</option></select></div><div class="two"><div class="field"><label for="growthDays">Treningi na tydzień</label><select id="growthDays">${[2,3,4,5].map(n=>`<option value="${n}" ${plan.days===n?'selected':''}>${n}</option>`).join('')}</select></div><div class="field"><label for="growthMinutes">Czas bazowy (min)</label><input id="growthMinutes" type="number" min="10" max="120" step="5" value="${Math.min(120,Math.max(10,Number(plan.minutes)||25))}"></div></div><button class="secondary" id="growthSavePlan" style="width:100%">Zapisz plan</button><p class="note">Przykładowy tydzień: ${plan.days} aktywności po około ${plan.minutes} min, z dniami odpoczynku między trudniejszymi sesjami. ${plan.goal==='pace'?'Jedna sesja może być próbą porównawczą, reszta spokojna.':'Pierwszeństwo ma komfortowy wysiłek i powtarzalność.'}</p><div class="growth-advice"><small class="eyebrow">SUGESTIA NA KOLEJNY TRENING</small><p>${growthPlanAdvice(all)}</p></div><p class="note">Plan ma charakter orientacyjny. Nie oblicza regeneracji medycznej ani nie zastępuje oceny samopoczucia.</p></div></div>`;
}
function bindGrowth(){if(view!=='growth')return;document.querySelectorAll('[data-growth-kind]').forEach(b=>b.onclick=()=>{growthKind=b.dataset.growthKind;render()});$('#growthSavePlan')?.addEventListener('click',()=>{let goal=$('#growthGoal').value,days=Number($('#growthDays').value),minutes=Number($('#growthMinutes').value);if(!Number.isFinite(minutes)||minutes<10||minutes>120)return toast('Wybierz czas od 10 do 120 minut');data.trainingPlan={goal,days,minutes};save();toast('Plan zapisany w kronice')})}


/* ===== v2.0: animacja wędrówki, ekran odkrycia, dziennik wyprawy, pieczęcie, przypomnienie o kopii ===== */
let displayK=null,animating=false,journalAll=false;
const mapK=()=>displayK??travel();
const reduceMotion=()=>window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
const hashStr=s=>{let h=2166136261;for(const c of String(s)){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0};
const pickBy=(arr,seed,salt=0)=>arr[(hashStr(seed+':'+salt))%arr.length];
const daysSince=iso=>iso?Math.floor((Date.now()-new Date(iso).getTime())/864e5):Infinity;

/* ---- Dziennik wyprawy: wpis generowany z miejsca na szlaku i rodzaju treningu ---- */
const J_OPEN={
 1:['Poranek nad Shire pachniał wilgotną trawą i dymem z kominów.','Trakt wiódł między żywopłotami i łagodnymi wzgórzami.','Nad Eriadorem wisiały ciężkie, szare chmury.','Wiatr z północy niósł chłód pustych wrzosowisk.','Stara droga była pusta, tylko wrony krążyły nad polami.','Między drzewami przesączało się blade, jesienne światło.'],
 2:['Góry wyrastały coraz bliżej — białe, milczące i obojętne.','Kamienie pod stopami lśniły od szronu.','Echo kroków niosło się długo między skałami.','W dolinach Hollin wiatr szeptał wśród ostrokrzewów.','Mrok gór ustępował tylko na krótkie chwile.','Śnieg skrzypiał, a oddech zamieniał się w obłoki pary.'],
 3:['Nurt Anduiny szumiał tuż obok szlaku.','Mgła snuła się nisko nad wodą i przesłaniała drugi brzeg.','Brzegi rzeki porastały ciemne, nieruchome lasy.','Woda niosła drużynę dalej na południe, cierpliwie i bez końca.','Z oddali dochodził szum, który rósł z każdą milą.','Na wodzie migotało światło, jakby ktoś patrzył z głębi.'],
 4:['Niebo na wschodzie było ciemne i podszyte czerwienią.','Ziemia pod stopami kruszyła się jak stary popiół.','Każdy oddech był cięższy niż poprzedni.','Nad bagnami unosiła się blada, zimna mgła.','Cień gór padał długo na wąską ścieżkę.','Cisza była tak gęsta, że słychać było bicie własnego serca.']
};
const J_ACT={
 'Marsz':['Miarowy marsz: {km} km Twojej drogi, {t} km szlaku.','Spokojny krok, bez pośpiechu — {km} km przybyło w nogach.','Krok za krokiem, {km} km cierpliwej wędrówki.','Marsz na {km} km, równy jak bicie bębna w oddali.'],
 'Bieg':['Bieg przez {km} km — szlak przesunął się o {t} km.','Szybsze tempo, mocniejszy oddech: {km} km biegu.','{km} km biegu, jakby za plecami słychać było tętent pościgu.','Lekki, pewny bieg — {km} km i ani kroku wstecz.'],
 'Interwały':['Zryw, oddech, znów zryw — {km} km interwałów.','Krótkie, ostre odcinki jak przeprawy przez rwące strumienie: {km} km.','Interwały na {km} km — droga raz przyspieszała, raz zwalniała.','Seria zrywów na {km} km, jak ucieczka przed czymś, czego lepiej nie oglądać.']
};
function journalEntries(){
 const ws=data.workouts.map((w,i)=>({w,i})).sort((a,b)=>a.w.date.localeCompare(b.w.date)||a.i-b.i);
 let cum=0,bestKm=0,bestLongestRun=0;const out=[];
 for(const {w} of ws){
  const km=Number(w.km||0),longestRun=Number(w.longestRun||0);
  const before=Math.min(TOTAL,cum*SCALE);cum+=km;const after=Math.min(TOTAL,cum*SCALE);
  const ch=chapterByDistance(Math.min(after,TOTAL-0.01)).id;
  const reached=stops.filter(s=>s.km>before&&s.km<=after);
  const here=[...stops].reverse().find(s=>s.km<=after)||stops[0];
  const ahead=stops.find(s=>s.km>after);
  const act=pickBy(J_ACT[w.type]||J_ACT['Marsz'],w.id,1).replace('{km}',fmt(km)).replace('{t}',fmt(km*SCALE));
  let text=pickBy(J_OPEN[ch],w.id,0)+' '+act;
  const newDistanceRecord=km>=5 && km>bestKm+0.009;
  const tiedBestDistance=km>=10 && !newDistanceRecord && bestKm>=10 && Math.abs(km-bestKm)<0.009;
  const newRunRecord=longestRun>=15 && longestRun>bestLongestRun+0.009;
  if(newDistanceRecord){
   text+=bestKm>0?` To był Twój najdłuższy trening do tej pory — ${fmt(km)} km.`:' To był mocny, długi odcinek drogi.';
  }else if(tiedBestDistance){
   text+=' Ten trening dorównał Twojemu najdłuższemu dotąd dystansowi.';
  }else if(newRunRecord){
   text+=bestLongestRun>0?` To był Twój najdłuższy ciągły bieg: ${fmt(longestRun)} min bez przerwy.`:' Długi, nieprzerwany bieg zostawił ślad w nogach jeszcze długo po zmroku.';
  }
  if(reached.length)text+=` Tego dnia szlak doprowadził do: ${reached.map(s=>s.name).join(', ')}.`;
  else if(ahead)text+=' '+pickBy(['Przed Tobą','Na horyzoncie','Gdzieś przed Tobą czeka'],w.id,2)+' '+ahead.name+'.';
  else text+=' Droga dobiegła końca.';
  out.push({w,text,place:reached.at(-1)?.name||here.name,reached:reached.map(s=>s.name),ch});
  bestKm=Math.max(bestKm,km);
  bestLongestRun=Math.max(bestLongestRun,longestRun);
 }
 return out;
}

/* ---- Pieczęcie ---- */
function maxWeekStreak(){const keys=[...new Set(data.workouts.map(w=>weekKey(w.date)))];if(!keys.length)return 0;const mondays=[...new Set(data.workouts.map(w=>{const d=new Date(w.date+'T12:00:00');d.setDate(d.getDate()-((d.getDay()+6)%7));return d.toISOString().slice(0,10)}))].sort();let best=1,run=1;for(let i=1;i<mondays.length;i++){const gap=Math.round((new Date(mondays[i])-new Date(mondays[i-1]))/864e5);run=gap===7?run+1:1;best=Math.max(best,run)}return best}

const SEALS=[
 {id:'krok',sym:'◇',name:'Pierwszy ślad',desc:'Zapisany pierwszy trening. Od tego kroku zaczyna się Twoja własna wyprawa.',test:()=>data.workouts.length>=1},
 {id:'bieg',sym:'➶',name:'Biegacz z Shire',desc:'Pierwszy trening typu bieg.',test:()=>data.workouts.some(w=>w.type==='Bieg')},
 {id:'piatka',sym:'5',name:'Mały etap',desc:'Co najmniej 5 km w jednym treningu.',test:()=>data.workouts.some(w=>+w.km>=5)},
 {id:'dziesiatka',sym:'10',name:'Długi marsz',desc:'Co najmniej 10 km w jednym treningu.',test:()=>data.workouts.some(w=>+w.km>=10)},
 {id:'wytrwalosc',sym:'◎',name:'Równy oddech',desc:'Nieprzerwany bieg trwający co najmniej 20 minut.',test:()=>data.workouts.some(w=>+w.longestRun>=20)},
 {id:'zrywy',sym:'≈',name:'Sztuka tempa',desc:'Pięć treningów interwałowych.',test:()=>data.workouts.filter(w=>w.type==='Interwały').length>=5},
 {id:'obiezyswiat',sym:'✶',name:'Obieżyświat',desc:'Odwiedzone wszystkie ilustracje lokacji. Gwiazda Eärendila świeci nad Twoją kroniką.',test:()=>stops.every(s=>!!data.viewedStops?.[s.name])},
 {id:'dziesiec',sym:'☷',name:'Kronika się zapełnia',desc:'Dziesięć zapisanych treningów.',test:()=>data.workouts.length>=10},
 {id:'piecdziesiat',sym:'❖',name:'Kronikarz szlaku',desc:'Pięćdziesiąt zapisanych treningów.',test:()=>data.workouts.length>=50},
 {id:'seria4',sym:'◈',name:'Cztery tygodnie na szlaku',desc:'Treningi w czterech kolejnych tygodniach.',test:()=>maxWeekStreak()>=4},
 {id:'seria12',sym:'✺',name:'Pora roku w drodze',desc:'Treningi w dwunastu kolejnych tygodniach.',test:()=>maxWeekStreak()>=12},
 {id:'km50',sym:'50',name:'Pięćdziesiąt kilometrów',desc:'Łącznie przebiegłaś lub przeszłaś 50 km.',test:()=>real()>=50},
 {id:'km100',sym:'100',name:'Sto kilometrów',desc:'Łącznie przebiegłaś lub przeszłaś 100 km.',test:()=>real()>=100},
 {id:'km500',sym:'500',name:'Długa droga',desc:'Łącznie przebiegłaś lub przeszłaś 500 km.',test:()=>real()>=500},
 {id:'rivendell',sym:'✧',name:'Dom Elronda',desc:'Ukończony rozdział I — dotarcie do Rivendell.',test:()=>travel()>=737},
 {id:'lorien',sym:'❋',name:'Złoty Las',desc:'Ukończony rozdział II — dotarcie do Lothlórien.',test:()=>travel()>=1481},
 {id:'rauros',sym:'≋',name:'Strażnicy Anduiny',desc:'Ukończony rozdział III — przeprawa obok Argonath i dotarcie do Rauros.',test:()=>travel()>=2107},
 {id:'orodruina',sym:'◉',name:'Ogień Orodruiny',desc:'Dotarcie do Góry Przeznaczenia.',test:()=>travel()>=TOTAL}
];
function syncSeals(silent){
 const first=!data.seals;data.seals=data.seals||{};const fresh=[];
 for(const s of SEALS)if(!data.seals[s.id]&&s.test()){data.seals[s.id]=new Date().toISOString();if(!silent&&!first)fresh.push(s)}
 localStorage.setItem(KEY,JSON.stringify(data));return fresh;
}
const BADGE_ART={
 'krok':'./badge-art-12.png',
 'bieg':'./badge-art-01.png',
 'piatka':'./badge-art-04.png',
 'dziesiatka':'./badge-art-05.png',
 'wytrwalosc':'./badge-art-10.png',
 'zrywy':'./badge-art-02.png',
 'obiezyswiat':'./badge-art-11.png',
 'dziesiec':'./badge-art-06.png',
 'piecdziesiat':'./badge-art-07.png',
 'seria4':'./badge-art-03.png',
 'seria12':'./badge-art-08.png',
 'km50':'./badge-art-04.png',
 'km100':'./badge-art-05.png',
 'km500':'./badge-art-07.png',
 'rivendell':'./badge-art-06.png',
 'lorien':'./badge-art-04.png',
 'rauros':'./badge-art-07.png',
 'orodruina':'./badge-art-09.png'
};
const sealHtml=(s,earned,big)=>`<div class="seal ${earned?'earned':'locked'} ${big?'seal-big':''}" aria-hidden="true">${BADGE_ART[s.id]?`<img class="badge-art" src="${BADGE_ART[s.id]}" alt="">`:`<span>${s.sym}</span>`}</div>`;


/* ---- Ekran odkrycia ---- */
let revealQueue=[];
function showReveal(){
 document.querySelector('.reveal')?.remove();
 const item=revealQueue.shift();if(!item)return;
 const el=document.createElement('div');el.className='reveal';el.setAttribute('role','dialog');el.setAttribute('aria-modal','true');
 const more=revealQueue.length?'Dalej':'Do kroniki';
 if(item.type==='stop'){
  const s=item.stop,ch=CHAPTERS.find(c=>c.goal===s.km),nextCh=ch&&CHAPTERS.find(c=>c.id===ch.id+1);
  el.innerHTML=`<div class="reveal-card"><div class="reveal-art"><img src="${stopArt(s)}" alt="${esc(s.name)}"><div class="reveal-seal">${sealHtml({sym:'✧'},true,true)}</div></div><div class="reveal-body"><small class="eyebrow">${s.kind==='major'?'KAMIEŃ MILOWY':'NOWE MIEJSCE ODKRYTE'} · ${fmt(s.km)} KM SZLAKU</small><h2>${esc(s.name)}</h2><p>${esc(s.desc)}</p>${ch?`<div class="reveal-chapter"><b>Rozdział ${ch.roman} zakończony.</b>${nextCh?` Otwiera się rozdział ${nextCh.roman}: <i>${esc(nextCh.title)}</i>.`:' Wyprawa dobiegła końca.'}</div>`:''}<button class="primary" id="revealNext">${more}</button></div></div>`;
 }else{
  const s=item.seal;
  el.innerHTML=`<div class="reveal-card reveal-seal-card"><div class="reveal-sealstage">${sealHtml(s,true,true)}</div><div class="reveal-body"><small class="eyebrow">NOWA ODZNAKA W KRONICE</small><h2>${esc(s.name)}</h2><p>${esc(s.desc)}</p><button class="primary" id="revealNext">${more}</button></div></div>`;
 }
 document.body.append(el);requestAnimationFrame(()=>el.classList.add('in'));
 el.querySelector('#revealNext').onclick=()=>{el.classList.remove('in');setTimeout(()=>{el.remove();if(revealQueue.length)showReveal()},220)};
 el.querySelector('#revealNext').focus({preventScroll:true});
}

/* ---- Animacja: znacznik przechodzi po trasie od starej do nowej pozycji ---- */
function animateTrail(from,to,done){
 if(reduceMotion()||to<=from){displayK=null;done();return}
 const duration=Math.min(6000,1100+Math.max(0,to-from)*9);
 const t0=performance.now();animating=true;let lastChapter=-1;
 function step(now){
  const p=Math.min(1,(now-t0)/duration), eased=p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;
  displayK=from+(to-from)*eased;
  const chapter=chapterByDistance(Math.min(displayK,TOTAL-.001)).id;
  if(chapter!==lastChapter){lastChapter=chapter;render()}
  else {
   const svg=$('#mapArt svg');
   if(svg)svg.outerHTML=chapter===1?atlasMapSvg():mapSvg();
   const stats=$('.journey-mainstats'); // Progress panels refresh at the end of animation.
  }
  if(p<1)requestAnimationFrame(step);
  else{animating=false;displayK=null;done()}
 }
 requestAnimationFrame(step);
}
function celebrate(before){
 const after=travel(),reached=stops.filter(s=>s.km>before&&s.km<=after),seals=syncSeals(false);
 revealQueue=[...reached.map(stop=>({type:'stop',stop})),...seals.map(seal=>({type:'seal',seal}))];
 if(after<=before){render();if(revealQueue.length)setTimeout(showReveal,300);return}
 view='map';mapBrowse=null;focused=null;displayK=before;render();
 const fr=$('.map-frame');if(fr){const y=fr.getBoundingClientRect().top+scrollY-Math.max(12,(innerHeight-fr.offsetHeight)/2-40);scrollTo({top:Math.max(0,y),behavior:reduceMotion()?'auto':'smooth'})}
 setTimeout(()=>animateTrail(before,after,()=>{render();if(revealQueue.length)setTimeout(showReveal,450)}),700);
}

/* ---- Kopia zapasowa ---- */
function exportBackup(){
 const blob=new Blob([JSON.stringify({...data,exported:new Date().toISOString()},null,2)],{type:'application/json'}),a=document.createElement('a');
 a.href=URL.createObjectURL(blob);a.download='srodziemie-kopia-'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
 data.lastBackup=new Date().toISOString();delete data.backupSnooze;save();toast('Kopia pobrana. Zapisz ją w Plikach lub iCloud Drive.');
}
function backupBanner(){
 if(!data.workouts.length)return '';
 const since=daysSince(data.lastBackup);
 if(since<7||daysSince(data.backupSnooze)<3)return '';
 const standalone=navigator.standalone||matchMedia('(display-mode: standalone)').matches;
 const when=data.lastBackup?`Ostatnia kopia: ${since} ${since===1?'dzień':'dni'} temu.`:'Nie masz jeszcze kopii swoich treningów.';
 return `<div class="backup-banner"><div><b>✉ Kopia kroniki</b><p>${when} Dane są tylko na tym telefonie.${standalone?'':' Możesz dodać aplikację do ekranu początkowego, ale regularna kopia nadal jest niezbędna.'}</p></div><div class="backup-actions"><button class="secondary" id="bannerBackup">Pobierz kopię</button><button class="link-btn" id="bannerSnooze">Później</button></div></div>`;
}
function bindBanner(){
 $('#bannerBackup')?.addEventListener('click',exportBackup);
 $('#bannerSnooze')?.addEventListener('click',()=>{data.backupSnooze=new Date().toISOString();save()});
}

/* ---- Sekcje Kroniki ---- */
function sealsPanel(){
 const earned=SEALS.filter(s=>data.seals?.[s.id]);
 return `<div class="panel"><div class="between"><h3 class="mini-title" style="margin:0">Odznaki Wędrowca</h3><span class="pill">${earned.length} / ${SEALS.length}</span></div><div class="seal-grid">${SEALS.map(s=>{const e=!!data.seals?.[s.id];return `<button class="seal-item" data-seal="${s.id}">${sealHtml(s,e)}<small>${esc(s.name)}</small></button>`}).join('')}</div></div>`;
}
function journalPanel(){
 const all=journalEntries().reverse();if(!all.length)return '';
 const list=journalAll?all:all.slice(0,6);
 return `<div class="panel journal"><h3 class="mini-title">Dziennik wyprawy</h3>${list.map(e=>`<article class="journal-entry"><div class="journal-meta"><span>${esc(e.w.date)}</span><span>okolice: ${esc(e.place)}</span></div><p>${esc(e.text)}</p>${e.w.notes?`<p class="journal-note">„${esc(e.w.notes)}”</p>`:''}</article>`).join('')}${all.length>6?`<button class="link-btn" id="journalToggle">${journalAll?'Pokaż mniej':'Pokaż wszystkie wpisy ('+all.length+')'}</button>`:''}</div>`;
}
function sealSheet(id){
 const s=SEALS.find(x=>x.id===id),e=data.seals?.[id];if(!s)return;
 sheet(`<div class="seal-sheet">${sealHtml(s,!!e,true)}<small class="eyebrow">${e?'ODZNAKA ZDOBYTA · '+new Date(e).toLocaleDateString('pl-PL'):'ODZNAKA DO ZDOBYCIA'}</small><h2>${esc(s.name)}</h2><p>${esc(s.desc)}</p></div>`);
}

function render(){let labels={map:'Droga Pierścienia',training:'Dziennik treningów',chronicle:'Kronika podróży',growth:'Twoja kondycja'};$('#pageTitle').textContent=labels[view];$('#eyebrow').textContent=view==='map'?'WYPRAWA I • DROGA FRODA':'ŚRÓDZIEMIE • WYPRAWA I';$('#screen').innerHTML={map:renderMap,training:renderTraining,chronicle:renderChronicle,growth:renderGrowth}[view]();document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));$('#newWorkout')?.addEventListener('click',()=>workoutSheet());$('#miImportButton')?.addEventListener('click',miImporter);if(view==='map'){attachMap();$('#mapPrevious')?.addEventListener('click',()=>changeMapBrowse(-1));$('#mapNext')?.addEventListener('click',()=>changeMapBrowse(1));$('#mapOverview')?.addEventListener('click',()=>setMapBrowse(5));}bindBanner();bindGrowth();$('#journalToggle')?.addEventListener('click',()=>{journalAll=!journalAll;render()})}
function attachMap(){
 const art=$('#mapArt'),stage=$('#mapStage');if(!art||!stage)return;
 const fingers=new Map();let drag=null,pinch=null,swipe=null;
 const clamp=()=>{const mx=stage.clientWidth*(mapZoom-1)/2,my=stage.clientHeight*(mapZoom-1)/2;mapPan.x=Math.max(-mx,Math.min(mx,mapPan.x));mapPan.y=Math.max(-my,Math.min(my,mapPan.y))};
 const apply=()=>{clamp();art.style.transform=`translate(${mapPan.x}px,${mapPan.y}px) scale(${mapZoom})`;stage.style.touchAction=mapZoom>1?'none':'pan-y'};
 const zoomTo=(z)=>{mapZoom=Math.max(1,Math.min(3.5,z));if(mapZoom===1)mapPan={x:0,y:0};apply()};
 apply();
 stage.querySelectorAll('[data-zoom]').forEach(b=>b.onclick=()=>{if(b.dataset.zoom==='reset'){mapPan={x:0,y:0};zoomTo(1)}else zoomTo(mapZoom+(b.dataset.zoom==='in'?.5:-.5))});
 stage.onpointerdown=e=>{
  if(e.target.closest('button'))return;
  if(e.target.closest('[data-stop]'))return;
  fingers.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(fingers.size===1&&mapZoom<=1)swipe={pointerId:e.pointerId,x:e.clientX,y:e.clientY};
  if(fingers.size===2){const p=[...fingers.values()];pinch={distance:Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y),zoom:mapZoom};drag=null}
  else if(mapZoom>1)drag={x:e.clientX,y:e.clientY,px:mapPan.x,py:mapPan.y};
  try{stage.setPointerCapture(e.pointerId)}catch{}
 };
 stage.onpointermove=e=>{
  if(!fingers.has(e.pointerId))return;
  fingers.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(fingers.size===2&&pinch){const p=[...fingers.values()];zoomTo(pinch.zoom*Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y)/Math.max(1,pinch.distance))}
  else if(drag&&mapZoom>1){mapPan={x:drag.px+e.clientX-drag.x,y:drag.py+e.clientY-drag.y};apply()}
 };
 const finish=e=>{const move=swipe&&swipe.pointerId===e.pointerId&&fingers.size===1&&mapZoom<=1?{dx:e.clientX-swipe.x,dy:e.clientY-swipe.y}:null;fingers.delete(e.pointerId);drag=null;pinch=null;swipe=null;if(move&&Math.abs(move.dx)>65&&Math.abs(move.dx)>Math.abs(move.dy)*1.25)changeMapBrowse(move.dx<0?1:-1)};
 stage.onpointerup=finish;stage.onpointercancel=finish;
 stage.onwheel=e=>{if(!e.ctrlKey)return;e.preventDefault();zoomTo(mapZoom+(e.deltaY<0?.15:-.15))};
}

function segmentsHtml(rows){return rows.map((r,i)=>`<div class="two segment" style="grid-template-columns:1.1fr .8fr .9fr auto"><select aria-label="Rodzaj odcinka" data-seg="kind"><option ${r.kind==='Marsz'?'selected':''}>Marsz</option><option ${r.kind==='Bieg'?'selected':''}>Bieg</option><option ${r.kind==='Rozgrzewka'?'selected':''}>Rozgrzewka</option><option ${r.kind==='Schłodzenie'?'selected':''}>Schłodzenie</option></select><input aria-label="Minuty odcinka" type="number" min="0.1" step="0.1" data-seg="minutes" value="${r.minutes||''}" placeholder="min"><input aria-label="Prędkość km/h" type="number" min="0" step="0.1" data-seg="speed" value="${r.speed||''}" placeholder="km/h"><button class="link-btn" type="button" data-remove-seg="${i}" aria-label="Usuń odcinek">×</button></div>`).join('')}
/* Import Mi Fitness: OCR executes in the browser; nothing is uploaded to an app server.
   The OCR engine requires network access for first load and is not part of offline precache. */
let miImport=null;
const miNumber=s=>{const n=Number(String(s||'').replace(/[,，]/g,'.').replace(/[^\d.]/g,''));return Number.isFinite(n)?n:null};
const miDuration=s=>{const a=String(s||'').match(/(\d{1,2})\s*[:：]\s*(\d{2})(?:\s*[:：]\s*(\d{2}))?/);return !a?null:a[3]!==undefined?+a[1]*60+(+a[2])+(+a[3])/60:+a[1]+(+a[2])/60};
function miExtract(texts){
 const clean=x=>String(x||'').replace(/[’‘′]/g,"'").replace(/[“”″]/g,'"').replace(/[，]/g,',');
 const t=clean(texts.top),distanceText=clean(texts.distance),durationText=clean(texts.duration),dateText=clean(texts.date);
 const h=clean(texts.heart),c=clean(texts.cadence),e=clean(texts.effect);
 const find=(text,re)=>{const m=text.match(re);return m?miNumber(m[1]):null};
 // Separate OCR crops prevent the clock (19:07:19) being mistaken for workout duration (00:19:59).
 // Distance often appears as "2,01" and "km" on separate lines, not in one OCR token.
 const distanceCandidates=[distanceText,t];
 let dist=null;
 for(const text of distanceCandidates){
  const normalized=text.replace(/\s*([,.])\s*/g,'$1').replace(/[oO]/g,'0');
  const matches=[...normalized.matchAll(/(?:^|\D)(\d{1,3}[,.]\d{1,2})(?:\s*(?:k\s*m|kn|km))?(?=\D|$)/gm)];
  for(const m of matches){const n=miNumber(m[1]);if(n>=0.05&&n<=150){dist=n;break}}
  if(dist!==null)break;
  // OCR may read the comma as a space or drop it entirely. Only the narrow
  // distance crop is eligible for this fallback, never the whole screenshot.
  if(text===distanceText){
   const match=normalized.match(/(?:^|\s)(\d{1,2})[\s]+(\d{2})\s*(?:km)?(?:\s|$)/i);
   if(match){const n=Number(match[1]+'.'+match[2]);if(n>=.05&&n<=150){dist=n;break}}
  }
 }
 const date=(dateText+'\n'+t).match(/(20\d{2})\s*[/.-]\s*(\d{1,2})\s*[/.-]\s*(\d{1,2})/);
 let minutes=null;
 // Prefer an HH:MM:SS duration, NOT the timestamp. This crop contains duration only.
 const ts=[...durationText.matchAll(/\b(\d{1,2})\s*[:：]\s*(\d{2})\s*[:：]\s*(\d{2})\b/g)];
 const duration=ts.find(m=>+m[2]<60&&+m[3]<60&&+m[1]<=23);
 if(duration)minutes=miDuration(duration[0]);
 if(minutes===null){const label=t.match(/(?:czas\s*treningu|czas\s*aktywno\w*|duration)[^\d]{0,25}(\d{1,2}:\d{2}:\d{2})/i);if(label)minutes=miDuration(label[1])}
 const readPair=(text)=>[...text.matchAll(/\b(\d{2,3})\b/g)].map(m=>+m[1]);
 const hr=readPair(h).filter(v=>v>=45&&v<=220),cadence=readPair(c).filter(v=>v>=50&&v<=240);
 const zoneValue=(words)=>{const line=h.split(/\n/).find(l=>words.some(w=>l.toLowerCase().includes(w)));if(!line)return null;const m=line.match(/(\d{1,2})\s*[:：]\s*(\d{2})\s*[:：]\s*(\d{2})/);if(m)return +m[1]*60+(+m[2])+(+m[3])/60;const short=line.match(/(\d{1,2})\s*[:：]\s*(\d{2})/);return short?+short[1]+(+short[2])/60:null};
 const topLines=t.split(/\n/).map(x=>x.trim()).filter(Boolean);
 const findNear=(words,range)=>{let idx=topLines.findIndex(x=>words.some(w=>x.toLowerCase().includes(w)));if(idx<0)return null;for(let j=Math.max(0,idx-2);j<=Math.min(topLines.length-1,idx+2);j++){const matches=topLines[j].match(/\b\d{2,4}\b/g)||[];const val=matches.map(Number).find(v=>v>=range[0]&&v<=range[1]);if(val!==undefined)return val}return null};
 const result={source:'Mi Fitness',zoneRecovery:zoneValue(['regener']),zoneIntensive:zoneValue(['intensyw']),zoneAerobic:zoneValue(['aerobow']),zoneAnaerobic:zoneValue(['anaerobow']),zoneMax:zoneValue(['vo2','vo₂']),km:dist,date:date?`${date[1]}-${date[2].padStart(2,'0')}-${date[3].padStart(2,'0')}`:null,minutes,
 hrAvg:hr[0]??null,hrMax:hr.find((v,i)=>i>0&&v>=hr[0])??hr[1]??null,cadenceAvg:cadence[0]??null,cadenceMax:cadence.find((v,i)=>i>0&&v>=cadence[0])??cadence[1]??null,
 steps:findNear(['kroki','steps'],[500,100000]),activeKcal:findNear(['aktywn','active'],[20,2000]),totalKcal:findNear(['całkow','total'],[20,3000]),
 trainingEffect:find(e,/(?:^|\s)([0-5][,.]\d)\b/),recoveryHours:find(e,/(\d{1,3})\s*(?:godz|hours|h\b)/i),trainingLoad:find(e,/(\d{1,3})\s*(?:obciążenie|load)/i)};
 if(result.hrMax&&result.hrAvg&&result.hrMax<result.hrAvg)result.hrMax=null;
 if(result.cadenceMax&&result.cadenceAvg&&result.cadenceMax<result.cadenceAvg)result.cadenceMax=null;
 if(result.minutes!==null&&(result.minutes<1||result.minutes>1440))result.minutes=null;
 return result;
}
function miPrepareCrop(img,from,to,mode='text',left=0,right=1){
 // Crop coordinates are in multiples of IMAGE WIDTH, not total image height.
 // Mi Fitness produces long and short scrolling screenshots with identical
 // header dimensions. This preserves the same field locations in both.
 const cropTop=Math.max(0,Math.floor(from*img.naturalWidth));
 const cropBottom=Math.min(img.naturalHeight,Math.ceil(to*img.naturalWidth));
 const cropLeft=Math.max(0,Math.floor(left*img.naturalWidth));
 const cropRight=Math.min(img.naturalWidth,Math.ceil(right*img.naturalWidth));
 const canvas=document.createElement('canvas');
 const scale=Math.max(1,Math.min(3,2400/Math.max(1,cropRight-cropLeft)));
 canvas.width=Math.max(1,Math.round((cropRight-cropLeft)*scale));
 canvas.height=Math.max(1,Math.round((cropBottom-cropTop)*scale));
 const ctx=canvas.getContext('2d',{willReadFrequently:true});
 ctx.fillStyle='#fff';ctx.fillRect(0,0,canvas.width,canvas.height);
 ctx.drawImage(img,cropLeft,cropTop,cropRight-cropLeft,cropBottom-cropTop,0,0,canvas.width,canvas.height);
 const pixels=ctx.getImageData(0,0,canvas.width,canvas.height);
 for(let i=0;i<pixels.data.length;i+=4){
  const r=pixels.data[i],g=pixels.data[i+1],b=pixels.data[i+2];
  // White glyphs on the dark Mi Fitness background -> black on white.
  const v=Math.max(r,g,b)>100?0:255;
  pixels.data[i]=pixels.data[i+1]=pixels.data[i+2]=v;
 }
 ctx.putImageData(pixels,0,0);return canvas;
}
function miLoadOCR(){if(window.Tesseract)return Promise.resolve(window.Tesseract);return new Promise((resolve,reject)=>{const script=document.createElement('script');script.src='https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js';script.onload=()=>window.Tesseract?resolve(window.Tesseract):reject(Error('Silnik OCR niedostępny'));script.onerror=()=>reject(Error('Nie udało się pobrać OCR. Włącz internet i spróbuj ponownie.'));document.head.append(script)})}
async function miRecognize(file,onProgress){const url=URL.createObjectURL(file);let worker;try{const img=new Image();await new Promise((res,rej)=>{img.onload=res;img.onerror=rej;img.src=url});if(img.naturalHeight<img.naturalWidth*1.5)throw Error('Wybierz pionowy zrzut podsumowania treningu Mi Fitness.');const T=await miLoadOCR();worker=await T.createWorker('eng',1,{logger:m=>{if(m.status==='recognizing text')onProgress?.(Math.round(m.progress*100))}});
 // Layout positions relative to screenshot WIDTH; resilient to cropped
 // screenshots with/without the lower charts and to long screenshots.
 const crops={
  date:[.54,.69,0,.85],
  distance:[.78,1.02,.04,.58],
  duration:[1.04,1.22,.04,.38],
  top:[.50,1.42,0,1],
  heart:[1.60,2.95,0,1]
 };
 // Lower panels may not be present in a shorter capture. Scan a wider
 // region only if the image actually contains that region.
 if(img.naturalHeight/img.naturalWidth>4.4){
  crops.cadence=[4.0,6.2,0,1];
  crops.effect=[5.2,7.5,0,1];
 }
 const texts={};
 for(const [key,[y1,y2,x1,x2]]of Object.entries(crops)){
  onProgress?.(key);
  const canvas=miPrepareCrop(img,y1,y2,'text',x1,x2);
  const result=await worker.recognize(canvas);
  texts[key]=result.data.text;
 }
 return{values:miExtract(texts),raw:texts}}finally{if(worker)await worker.terminate();URL.revokeObjectURL(url)}}
function miImporter(){sheet(`<h2>Import z Mi Fitness</h2><p class="note">Wybierz pionowy zrzut ekranu z podsumowaniem treningu. Pierwszy odczyt wymaga internetu do pobrania silnika OCR. Obraz jest analizowany na Twoim urządzeniu, bez wysyłania go na serwer aplikacji.</p><div class="field"><label for="miFile">Zrzut ekranu</label><input id="miFile" type="file" accept="image/png,image/jpeg,image/webp,image/*"></div><p class="note" id="miStatus" aria-live="polite">Odczytane wartości zawsze sprawdź przed zapisaniem — szczególnie datę, dystans i czas.</p><button class="secondary" id="miCancel" style="width:100%">Wróć</button>`);$('#miCancel').onclick=()=>{closeSheet();workoutSheet()};$('#miFile').onchange=async ev=>{const file=ev.target.files?.[0];if(!file)return;const status=$('#miStatus');$('#miFile').disabled=true;status.textContent='Przygotowywanie obrazu…';try{const result=await miRecognize(file,step=>{status.textContent=typeof step==='number'?`Rozpoznawanie tekstu: ${step}%`:`Odczyt sekcji: ${step}…`});if(result.values.km==null||result.values.minutes==null){status.textContent='Nie udało się pewnie rozpoznać '+[result.values.km==null?'dystansu':'',result.values.minutes==null?'czasu treningu':''].filter(Boolean).join(' i ')+'. Wybierz wyraźny pełny zrzut albo wpisz dane ręcznie. Nic nie zapisano.';return}miImport={...result.values};closeSheet();workoutSheet();toast('Odczytano dystans i czas. Sprawdź pozostałe wartości przed zapisaniem.')}catch(err){status.textContent='Nie udało się odczytać: '+err.message+' Możesz zapisać trening ręcznie.'}finally{const input=$('#miFile');if(input)input.disabled=false}}}
function workoutSheet(id=null){let old=data.workouts.find(w=>w.id===id)||(miImport||{}),detail=!!old.segments?.length,segments=(old.segments||[{kind:'Rozgrzewka',minutes:5,speed:5},{kind:'Bieg',minutes:2,speed:8},{kind:'Marsz',minutes:3,speed:5.5}]);function content(){sheet(`<h2>${id?'Edytuj trening':'Nowa aktywność'}</h2><form id="workoutForm"><div class="field"><label>Data</label><input required name="date" type="date" value="${esc(old.date||new Date().toLocaleDateString('sv-SE'))}" max="${new Date().toLocaleDateString('sv-SE')}"></div><div class="field"><label>Rodzaj aktywności</label><select name="type"><option ${old.type==='Marsz'?'selected':''}>Marsz</option><option ${old.type==='Bieg'?'selected':''}>Bieg</option><option ${old.type==='Interwały'?'selected':''}>Interwały</option></select></div><div class="segmented"><button type="button" data-place="treadmill" class="${old.place!=='outdoors'?'selected':''}">Bieżnia</button><button type="button" data-place="outdoors" class="${old.place==='outdoors'?'selected':''}">Teren</button></div><div class="two"><div class="field"><label>Dystans (km)</label><input name="km" required type="number" inputmode="decimal" min="0.01" step="0.01" value="${esc(old.km??'')}"></div><div class="field"><label>Czas (min, opcjonalnie)</label><input name="minutes" type="number" inputmode="decimal" min="0" step="0.1" value="${esc(old.minutes??'')}"></div></div><div class="segmented"><button type="button" data-detail="off" class="${!detail?'selected':''}">Szybki zapis</button><button type="button" data-detail="on" class="${detail?'selected':''}">Dokładne interwały</button></div><div id="details" ${detail?'':'hidden'}><div class="field"><label>Segmenty: rodzaj / czas min / km/h</label><div id="segments" style="display:grid;gap:7px">${segmentsHtml(segments)}</div><button type="button" class="secondary" id="addSegment">+ Dodaj odcinek</button></div><p class="note">Segmenty pomagają analizować trening. Podstawą drogi jest wpisany dystans z bieżni, bez automatycznego wyliczania.</p></div><div class="two"><div class="field"><label>Najdłuższy ciągły bieg (min)</label><input name="longestRun" type="number" min="0" step="0.1" value="${esc(old.longestRun??'')}"></div><div class="field"><label>Wysiłek (1–10)</label><input name="rpe" type="number" min="1" max="10" step="1" value="${esc(old.rpe??'')}"></div></div><div class="two"><div class="field"><label>Łączny czas biegu (min)</label><input name="runMinutes" type="number" min="0" step="0.1" value="${esc(old.runMinutes??'')}"></div><div class="field"><label>Nachylenie bieżni (%)</label><input name="incline" type="number" min="0" step="0.5" value="${esc(old.incline??'')}"></div></div><h3 class="mini-title">Dane z zegarka (opcjonalne)</h3><div class="two"><div class="field"><label>Średnie tętno (bpm)</label><input name="hrAvg" type="number" min="35" max="230" value="${esc(old.hrAvg??'')}"></div><div class="field"><label>Maksymalne tętno (bpm)</label><input name="hrMax" type="number" min="35" max="230" value="${esc(old.hrMax??'')}"></div><div class="field"><label>Średnia kadencja (krok/min)</label><input name="cadenceAvg" type="number" min="0" max="250" value="${esc(old.cadenceAvg??'')}"></div><div class="field"><label>Maks. kadencja</label><input name="cadenceMax" type="number" min="0" max="250" value="${esc(old.cadenceMax??'')}"></div><div class="field"><label>Liczba kroków</label><input name="steps" type="number" min="0" value="${esc(old.steps??'')}"></div><div class="field"><label>Aktywne kcal</label><input name="activeKcal" type="number" min="0" value="${esc(old.activeKcal??'')}"></div><div class="field"><label>Całkowite kcal</label><input name="totalKcal" type="number" min="0" value="${esc(old.totalKcal??'')}"></div><div class="field"><label>Efekt treningu (0–5)</label><input name="trainingEffect" type="number" min="0" max="5" step="0.1" value="${esc(old.trainingEffect??'')}"></div><div class="field"><label>Obciążenie treningowe</label><input name="trainingLoad" type="number" min="0" value="${esc(old.trainingLoad??'')}"></div><div class="field"><label>Regeneracja (godz.)</label><input name="recoveryHours" type="number" min="0" value="${esc(old.recoveryHours??'')}"></div></div><h3 class="mini-title">Strefy tętna (minuty, opcjonalnie)</h3><div class="two">${[['zoneRecovery','Regeneracyjna'],['zoneIntensive','Intensywna'],['zoneAerobic','Aerobowa'],['zoneAnaerobic','Anaerobowa'],['zoneMax','VO₂ max']].map(([k,label])=>`<div class="field"><label>${label}</label><input name="${k}" type="number" min="0" step="0.01" value="${esc(old[k]??'')}"></div>`).join('')}</div><div class="field"><label>Notatka</label><textarea name="notes" rows="2">${esc(old.notes??'')}</textarea></div><label class="tiny"><input type="checkbox" name="test" ${old.test?'checked':''}> To próba porównawcza</label><div class="sheet-actions"><button type="submit" class="primary">Zapisz trening</button>${id?'<button type="button" class="secondary danger" id="deleteWorkout">Usuń</button>':''}</div></form>`);let place=old.place||'treadmill';$('#sheet').querySelectorAll('[data-place]').forEach(btn=>btn.onclick=()=>{place=btn.dataset.place;$('#sheet').querySelectorAll('[data-place]').forEach(x=>x.classList.toggle('selected',x===btn))});$('#sheet').querySelectorAll('[data-detail]').forEach(btn=>btn.onclick=()=>{detail=btn.dataset.detail==='on';$('#details').hidden=!detail;$('#sheet').querySelectorAll('[data-detail]').forEach(x=>x.classList.toggle('selected',x===btn))});function collectSegments(){return [...$('#segments').querySelectorAll('.segment')].map(el=>({kind:el.querySelector('[data-seg="kind"]').value,minutes:+el.querySelector('[data-seg="minutes"]').value,speed:+el.querySelector('[data-seg="speed"]').value})).filter(x=>x.minutes>0)}$('#addSegment').onclick=()=>{segments=collectSegments();segments.push({kind:'Marsz',minutes:3,speed:5});$('#segments').innerHTML=segmentsHtml(segments);bindRemove()};function bindRemove(){$('#segments').querySelectorAll('[data-remove-seg]').forEach(b=>b.onclick=()=>{segments=collectSegments();segments.splice(+b.dataset.removeSeg,1);$('#segments').innerHTML=segmentsHtml(segments);bindRemove()})}bindRemove();$('#workoutForm').onsubmit=e=>{e.preventDefault();const fd=new FormData(e.target),w={id:id||crypto.randomUUID(),date:String(fd.get('date')),type:String(fd.get('type')),place,km:+fd.get('km'),minutes:fd.get('minutes')===''?null:+fd.get('minutes'),longestRun:fd.get('longestRun')===''?null:+fd.get('longestRun'),rpe:fd.get('rpe')===''?null:+fd.get('rpe'),runMinutes:fd.get('runMinutes')===''?null:+fd.get('runMinutes'),incline:fd.get('incline')===''?null:+fd.get('incline'),notes:String(fd.get('notes')),test:fd.has('test'),source:old.source||'Ręcznie',...Object.fromEntries(['hrAvg','hrMax','cadenceAvg','cadenceMax','steps','activeKcal','totalKcal','trainingEffect','trainingLoad','recoveryHours','zoneRecovery','zoneIntensive','zoneAerobic','zoneAnaerobic','zoneMax'].map(k=>[k,fd.get(k)===''?null:+fd.get(k)])),segments:detail?collectSegments():[]};if(!Number.isFinite(w.km)||w.km<=0||w.date>new Date().toLocaleDateString('sv-SE'))return toast('Sprawdź dystans i datę');if(w.hrAvg&&w.hrMax&&w.hrMax<w.hrAvg)return toast('Tętno maksymalne nie może być niższe niż średnie.');const before=travel();miImport=null;if(id)data.workouts=data.workouts.map(t=>t.id===id?w:t);else data.workouts.push(w);localStorage.setItem(KEY,JSON.stringify(data));closeSheet();const delta=travel()-before;toast(delta>0?`Zapisano trening. Szlak: +${fmt(delta)} km.`:delta<0?`Zapisano zmianę. Szlak: ${fmt(delta)} km.`:'Zapisano trening bez zmiany postępu szlaku.');celebrate(before)};if(id)$('#deleteWorkout').onclick=()=>{if(confirm('Usunąć ten trening? Pozycja na mapie zostanie przeliczona.')){data.workouts=data.workouts.filter(w=>w.id!==id);save();closeSheet();toast('Trening usunięty')}}}content()}
function settings(){sheet(`<h2>Ustawienia i dane</h2><div class="panel"><p class="eyebrow">POSTĘP PODRÓŻY</p><div class="between"><b>Przelicznik</b><span>1 : 3</span></div><p class="note">${fmt(real())} km Twojej drogi zasiliło dotąd ${fmt(travel())} km szlaku.</p></div><div class="panel"><h3 class="mini-title">Kopia zapasowa</h3><p class="note">Dane znajdują się wyłącznie na tym urządzeniu. Regularnie pobieraj kopię JSON i zapisuj ją w Plikach lub iCloud Drive.</p><p class="note">${data.lastBackup?"Ostatnia kopia: "+new Date(data.lastBackup).toLocaleDateString("pl-PL"):"Nie pobrano jeszcze żadnej kopii."}</p><button class="primary" id="exportData">Pobierz kopię JSON</button><button class="secondary" id="importData" style="width:100%;margin-top:9px">Wczytaj kopię JSON</button></div><p class="note">Wersja 3.1</p>`);$('#exportData').onclick=exportBackup;$('#importData').onclick=()=>$('#importFile').click()}
$('#importFile').addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;try{let j=JSON.parse(await file.text());if(!Array.isArray(j.workouts)||j.workouts.some(w=>!(w.id&&/^\d{4}-\d\d-\d\d$/.test(w.date)&&Number.isFinite(+w.km)&&+w.km>0)))throw Error('Zły format danych');if(confirm(`Wczytać ${j.workouts.length} treningów? Obecne dane zostaną zastąpione.`)){data={schema:1,created:j.created||new Date().toISOString(),workouts:j.workouts,seals:j.seals,lastBackup:j.lastBackup,trainingPlan:j.trainingPlan};syncSeals(true);save();closeSheet();toast('Kopia została przywrócona')}}catch(err){toast('Nieprawidłowy plik kopii: '+err.message)}e.target.value=''});
$('#settingsBtn').onclick=settings;document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>setView(b.dataset.view));$('#screen').addEventListener('click',e=>{const b=e.target.closest('[data-edit],[data-stop],[data-seal]');if(b?.dataset.seal)sealSheet(b.dataset.seal);else if(b?.dataset.edit)workoutSheet(b.dataset.edit);else if(b?.dataset.stop!==undefined)goToStop(+b.dataset.stop)});$('#overlay').addEventListener('click',e=>{if(e.target.id==='overlay')closeSheet()});syncSeals(true);try{render()}catch(error){console.error('Błąd ekranu Śródziemia',error);const target=document.querySelector('#screen');if(target){target.innerHTML='<section class="app-error"><h2>Nie udało się otworzyć kroniki</h2><p>Wystąpił problem podczas wyświetlania wyprawy. Twoje treningi nie zostały usunięte.</p><pre id="errorInfo"></pre><button id="retryRender" class="primary">Spróbuj ponownie</button></section>';target.querySelector('#errorInfo').textContent=String(error&&error.message||error);target.querySelector('#retryRender').onclick=()=>location.reload();}}if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
