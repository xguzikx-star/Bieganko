const MAP_IMAGES={
  1:'./assets/eriador-atlas.jpg',
  2:'./assets/chapter-2-przez-gory-i-mroki.jpg',
  3:'./assets/chapter-3-nurtem-wielkiej-rzeki.jpg',
  4:'./assets/chapter-4-w-cieniu-mordoru.jpg'
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
 'Hobbiton':'./assets/stop-hobbiton.jpg',
 'Stary Las':'./assets/stop-stary-las.jpg',
 'Bree':'./assets/stop-bree.jpg',
 'Komarowe Bagna':'./assets/stop-komarowe-bagna.jpg',
 'Wichrowy Czub':'./assets/stop-wichrowy-czub.jpg',
 'Bród Bruinen':'./assets/stop-brod-bruinen.jpg',
 'Rivendell':'./assets/stop-rivendell.jpg',
 'Hollin':'./assets/stop-hollin.jpg',
 'Caradhras':'./assets/stop-caradhras.jpg',
 'Moria':'./assets/stop-moria.jpg',
 'Lothlórien':'./assets/stop-lothlorien.jpg',
 'Anduina':'./assets/stop-anduina.jpg',
 'Argonath':'./assets/stop-argonath.jpg',
 'Rauros':'./assets/stop-rauros.jpg',
 'Emyn Muil':'./assets/stop-emyn-muil.jpg',
 'Martwe Bagna':'./assets/stop-martwe-bagna.jpg',
 'Ithilien':'./assets/stop-ithilien.jpg',
 'Cirith Ungol':'./assets/stop-cirith-ungol.jpg',
 'Gorgoroth':'./assets/stop-gorgoroth.jpg',
 'Góra Przeznaczenia':'./assets/stop-gora-przeznaczenia.jpg'
};
const stopArt=s=>STOP_ART[s.name]||STOP_ART['Hobbiton'];
const chapterByDistance=d=>CHAPTERS.find(c=>d<c.goal)||CHAPTERS[CHAPTERS.length-1];
const chapterByStop=km=>CHAPTERS.find(c=>km<=c.goal)||CHAPTERS[CHAPTERS.length-1];
const getDefault=()=>({schema:1,workouts:[],created:new Date().toISOString()});
function load(){try{const j=JSON.parse(localStorage.getItem(KEY));return j&&Array.isArray(j.workouts)?j:getDefault()}catch{return getDefault()}}
let data=load(),view='map',focused=null,mapZoom=1,mapPan={x:0,y:0};
const $=s=>document.querySelector(s), fmt=n=>Number(n||0).toLocaleString('pl-PL',{maximumFractionDigits:1}), esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const real=()=>data.workouts.reduce((s,w)=>s+Number(w.km||0),0); const travel=()=>Math.min(TOTAL,real()*SCALE);const next=()=>stops.find(s=>s.km>travel());const discovered=()=>stops.filter(s=>s.km<=travel());
function save(){localStorage.setItem(KEY,JSON.stringify(data));render()}
function setView(v){view=v;focused=null;render()}
function toast(message){document.querySelector('.toast')?.remove();let n=document.createElement('div');n.className='toast';n.textContent=message;document.body.append(n);setTimeout(()=>n.remove(),3200)}
function closeSheet(){$('#overlay').hidden=true;$('#sheet').innerHTML=''}
function sheet(html){$('#sheet').innerHTML='<button class="close" aria-label="Zamknij" id="closeSheet">×</button>'+html;$('#overlay').hidden=false;$('#closeSheet').onclick=closeSheet}

function goToStop(i){
 const s=stops[i],locked=s.km>travel(),art=stopArt(s),remaining=fmt(Math.max(0,(s.km-travel())/SCALE));
 const chip=locked?'NIEODKRYTA KARTA':(s.kind==='major'?'KAMIEŃ MILOWY':'ODKRYTE MIEJSCE');
 const lead=locked
  ?`Szlak odsłoni to miejsce, gdy pokonasz jeszcze <b>${remaining} km</b> swojej drogi.`
  :`<p>${esc(s.desc)}</p><p class="note">To miejsce odsłoniło się po ${fmt(s.km)} km wyprawy. Pośrednie odległości pozostają robocze.</p><div class="badge-card"><div class="symbol">✧</div><b>${s.kind==='major'?'Kamień milowy':'Wpis do kroniki'}</b><p class="tiny muted">Karta została zapisana w kronice podróży.</p></div>`;
 sheet(`<div class="sheet-stop-hero"><div class="illustration ${locked?'locked-art':'has-art'}">${locked?'<span class="mystery-symbol" aria-label="Miejsce nieodkryte">✧</span>':`<img src="${art}" alt="${esc(s.name)}">`}</div><small class="eyebrow">${chip}</small><h2>${locked?'Nieznane miejsce':esc(s.name)}</h2>${locked?`<p>${lead}</p><p class="note">Opis i pełna ilustracja staną się częścią kroniki po dotarciu do tego etapu.</p>`:lead}</div>`)
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

function atlasMapSvg(){
 const k=Math.min(737,travel());
 const waypoints=[{x:151,y:515,km:0,name:'Hobbiton'},{x:238,y:507,km:105,name:'Stary Las'},{x:456,y:362,km:215,name:'Bree'},{x:546,y:334,km:345,name:'Komarowe Bagna'},{x:695,y:209,km:450,name:'Wichrowy Czub'},{x:821,y:222,km:615,name:'Bród Bruinen'},{x:956,y:101,km:737,name:'Rivendell'}];
 const d='M151 515 C195 513 200 515 238 507 S363 408 456 362 S501 322 546 334 S637 242 695 209 S785 267 821 222 S897 137 956 101';
 let a=waypoints[0],b=waypoints[waypoints.length-1];
 for(let i=1;i<waypoints.length;i++){if(k<=waypoints[i].km){a=waypoints[i-1];b=waypoints[i];break}}
 const t=Math.max(0,Math.min(1,(k-a.km)/(b.km-a.km||1)));
 const x=a.x+(b.x-a.x)*t,y=a.y+(b.y-a.y)*t;
 const progressLabel=k>0?`${fmt(k)} km`:'Start';
 const calloutRight=x<800;
 const width=150;
 const lx=calloutRight?x+30:x-30-width;
 const ly=Math.max(16,y-86);
 const hotspots=[{x:151,y:515,id:0},{x:238,y:507,id:1},{x:456,y:362,id:2},{x:546,y:334,id:3},{x:695,y:209,id:4},{x:821,y:222,id:5},{x:956,y:101,id:6}];
 const markers=waypoints.map((p,i)=>{const seen=p.km<=k;const major=[0,2,4,6].includes(i);const r=major?10.5:6.5;return `<g opacity="${seen?1:.95}"><circle cx="${p.x}" cy="${p.y}" r="${r+4}" fill="#07110dc4"/><circle cx="${p.x}" cy="${p.y}" r="${r}" fill="${seen?'#f3cc82':'#173027'}" stroke="${seen?'#fff0c3':'#bea26d'}" stroke-width="${major?2.7:1.9}"/></g>`}).join('');
 return `<svg class="atlas-overlay" viewBox="0 0 1086 702" preserveAspectRatio="none" aria-label="Interaktywna mapa Eriadoru"><defs><filter id="atlasglow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="7" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter><filter id="atlasshadow" x="-50%" y="-50%" width="200%" height="200%"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity=".42"/></filter></defs><path d="${d}" fill="none" stroke="#726342" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round" opacity=".78"/><path d="${d}" fill="none" stroke="#f2cd87" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round" pathLength="737" stroke-dasharray="${Math.max(0,k)} 737" filter="url(#atlasglow)"/><path d="${d}" fill="none" stroke="#fff2c3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" pathLength="737" stroke-dasharray="${Math.max(0,k)} 737" opacity=".98"/>${markers}<circle cx="${x}" cy="${y}" r="22" fill="#ecc47d" opacity=".22" filter="url(#atlasglow)"/><circle cx="${x}" cy="${y}" r="11" fill="#0d1712" stroke="#ffe8b2" stroke-width="3.5" filter="url(#atlasshadow)"/><circle cx="${x}" cy="${y}" r="4.7" fill="#ffdc8c" stroke="#6c4a1f" stroke-width="1.2"/><g filter="url(#atlasshadow)"><rect x="${lx}" y="${ly}" rx="14" ry="14" width="${width}" height="58" fill="#07120fe6" stroke="#cba96a" stroke-width="2"/><text x="${lx+width/2}" y="${ly+40}" text-anchor="middle" fill="#fff1c8" font-family="Marcellus,Georgia,serif" font-size="30">${progressLabel}</text></g>${hotspots.map(p=>`<circle class="atlas-hotspot" data-stop="${p.id}" tabindex="0" role="button" aria-label="Otwórz lokację" cx="${p.x}" cy="${p.y}" r="26" fill="transparent"/>`).join('')}</svg>`;
}


// v1.9.1: chapter II–IV pins are placed in the painted image's own pixel space (1086×1448),
// so the SVG overlay and the illustration scale and crop identically.
const CHAPTER_ART={
 2:{first:6,last:10,pts:[[905,95],[365,395],[640,175],[785,745],[240,955]]},
 3:{first:10,last:13,pts:[[225,205],[470,430],[815,700],[880,1080]]},
 4:{first:13,last:19,pts:[[905,1235],[700,1170],[835,865],[395,975],[345,445],[680,310],[905,125]]}
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
 const k=travel(),chapter=k<737?1:k<1481?2:k<2107?3:4,cfg=CHAPTER_ART[chapter]||CHAPTER_ART[4];
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

function renderMap(){
 const distance=travel(),chapterMeta=chapterByDistance(distance),chapter=chapterMeta.id;
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
 const note=nextStop?`Droga wiedzie ku kolejnemu odkryciu. Jeszcze ${fmt(nextStopDistance)} km dzieli Cię od ${esc(nextStop.name)}.`:'Dotarłaś do kresu Drogi Pierścienia. Kronika zachowa tę wyprawę w całości.';
 const chapterMapSrc=MAP_IMAGES[chapter]||MAP_IMAGES[4];
 const chapterMapAlt=MAP_ALTS[chapter]||'Ilustrowana mapa wyprawy';
 return `<section class="journey-intro"><div class="journey-rule"><span>✦</span><small>ROZDZIAŁ ${chapterRoman} · WYPRAWA I</small><span>✦</span></div><h2>${names[chapter-1]}</h2><p>${esc(chapterMeta.intro)}</p></section>
 <div class="map-frame"><div class="map-stage" id="mapStage"><div class="map-art" id="mapArt">${chapter===1?`<img class="map-landscape atlas-image" src="${chapterMapSrc}" alt="${chapterMapAlt}" draggable="false">${atlasMapSvg()}`:`<img class="map-landscape" src="${chapterMapSrc}" alt="${chapterMapAlt}" draggable="false">${mapSvg()}`}</div><div class="map-tools${chapter===1?' atlas-tools':''}"><button data-zoom="in" aria-label="Przybliż">+</button><button data-zoom="out" aria-label="Oddal">−</button><button data-zoom="reset" aria-label="Wyśrodkuj">⌖</button></div></div><div class="map-frame-caption"><span>✧ AKTUALNY SZLAK</span><span>DROGA OŻYWA WRAZ Z POSTĘPEM</span></div></div>
 <section class="journey-dashboard">
 <div class="journey-heading"><div><small class="eyebrow">TWOJA WĘDRÓWKA</small><h2>Droga do ${esc(chapterGoalName)}</h2></div><span class="journey-medallion">✧</span></div>
 <div class="journey-mainstats"><div><span class="journey-number">${fmt(chapterDistance)}<small> / ${fmt(goal-start)} km</small></span><p>Przebyty szlak w tym rozdziale</p></div><div class="journey-percent">${pct.toFixed(1).replace('.',',')}<span>%</span></div></div>
 <div class="journey-progress" role="progressbar" aria-valuenow="${pct.toFixed(1)}" aria-valuemin="0" aria-valuemax="100"><div style="width:${pct}%"></div></div>
 <div class="journey-next"><div class="journey-next-icon">⌖</div><div><small>KOLEJNY ETAP</small><strong>${nextStop?esc(nextStop.name):'Wyprawa ukończona'}</strong><p>${nextStop?`Do ${esc(nextStop.name)} pozostało ${fmt(nextStopDistance)} km Twojej drogi.`:'Wszystkie etapy tej wyprawy zostały odsłonięte.'}</p></div></div>
 <div class="journey-stats"><div><span>✦</span><strong>${fmt(real())} km</strong><small>Twój dystans</small></div><div><span>➜</span><strong>${fmt(distance)} km</strong><small>Przebyty szlak</small></div><div><span>◈</span><strong>${fmt(chapterRemaining)} km</strong><small>Do końca rozdziału</small></div></div>
 <div class="journey-chronicle"><div><small class="eyebrow">Z KRONIKI PODRÓŻY</small><span>✧</span></div><p>${note}</p>${last?`<small>Ostatni zapis w kronice: ${esc(last.date)} · ${esc(last.type)} · ${fmt(last.km)} km</small>`:'<small>Zapisz pierwszy trening, aby rozpocząć kronikę.</small>'}</div>
 <button class="primary journey-add" id="newWorkout">＋ Dodaj trening</button>
 </section><div class="page"><p class="note">Kilometraż pośredni, rozmieszczenie części punktów i późniejsze rozdziały pozostają robocze. Ilustracja ma charakter nastrojowego atlasu, a nie mapy geograficznej.</p></div>`;
}

function renderTraining(){let ws=[...data.workouts].sort((a,b)=>b.date.localeCompare(a.date));return `<div class="page"><div class="panel"><div class="between"><div><small class="eyebrow">REJESTR AKTYWNOŚCI</small><h2 class="section-title" style="margin:8px 0">Twój dziennik</h2></div><span class="pill">${ws.length} treningów</span></div><button class="primary" id="newWorkout">+ Zapisz trening</button></div><div class="panel"><div class="metrics"><div><strong>${fmt(real())}</strong><small>Kilometry</small></div><div><strong>${fmt(ws.reduce((s,w)=>s+(+w.minutes||0),0)/60)}</strong><small>Godziny</small></div><div><strong>${fmt(ws.length?real()/ws.length:0)}</strong><small>Średni trening km</small></div></div></div><div class="panel"><h2 class="section-title">Historia aktywności</h2>${ws.length?ws.map(w=>`<div class="list-row"><div><strong>${esc(w.type)} · ${fmt(w.km)} km</strong><small>${esc(w.date)} · ${w.place==='treadmill'?'Bieżnia':'Teren'}${w.minutes?' · '+fmt(w.minutes)+' min':''}${w.runMinutes?' · bieg '+fmt(w.runMinutes)+' min':''}</small></div><button class="secondary" data-edit="${esc(w.id)}">Edytuj</button></div>`).join(''):'<div class="empty">Jeszcze nie ma treningów. Dodaj pierwszy albo wpisz wcześniejsze aktywności.</div>'}</div></div>`}
function weeklyStreak(){const keys=new Set(data.workouts.map(w=>weekKey(w.date)));if(!keys.size)return 0;let day=new Date();day.setHours(12,0,0,0);let n=0;for(let i=0;i<520;i++){const key=weekKey(day.toISOString().slice(0,10));if(keys.has(key))n++;else if(i!==0)break;day.setDate(day.getDate()-7)}return n}
function weekKey(s){const d=new Date(s+'T12:00:00');d.setDate(d.getDate()+4-(d.getDay()||7));return d.getFullYear()+'-'+String(Math.ceil((((d-new Date(d.getFullYear(),0,1))/864e5)+1)/7)).padStart(2,'0')}

function renderChronicle(){
 const done=discovered(),future=stops.filter(s=>s.km>travel());
 const upcomingGroups=CHAPTERS.map(ch=>({
   ...ch,
   stops: future.filter(s=>s.km>ch.start && s.km<=ch.goal).slice(0,4)
 })).filter(g=>g.stops.length);
 return `<div class="page"><div class="panel"><small class="eyebrow">KRONIKA WYPRAWY</small><h2 class="section-title" style="margin:8px 0">Odkryte miejsca</h2><div class="statsline"><span class="muted">Odkrycia</span><b>${done.length} / ${stops.length}</b></div><div class="progress"><b style="width:${100*done.length/stops.length}%"></b></div></div>${[...done].reverse().map(s=>`<button class="discover discover-rich" data-stop="${stops.indexOf(s)}" style="display:grid;text-align:left;width:100%;color:inherit;margin:0 0 11px"><img src="${stopArt(s)}" alt="${esc(s.name)}"><div class="discover-copy"><span class="eyebrow">${s.kind==='major'?'KAMIEŃ MILOWY':'ODKRYCIE'} · ${fmt(s.km)} KM SZLAKU</span><h3 class="mini-title">✧ ${esc(s.name)}</h3><span class="muted tiny">${esc(s.desc)}</span></div></button>`).join('')}<div class="panel"><h3 class="mini-title">Pozostałe etapy podróży</h3>${upcomingGroups.map(g=>`<div class="chronicle-group"><div class="list-row"><div><strong>Rozdział ${g.roman} · ${esc(g.title)}</strong></div><small>${esc(g.route)}</small></div>${g.stops.map(s=>`<div class="list-row"><div>🔒 ${esc(s.name)}</div><small>za ${fmt((s.km-travel())/SCALE)} km Twojej drogi</small></div>`).join('')}</div>`).join('')}</div><p class="note">Każdy zapisany trening przesuwa Cię dalej i odblokowuje kolejne karty podróży. Opisy są autorską interpretacją drogi, nie cytatem z książki.</p></div>`
}

function barsChart(){const now=new Date(),samples=[];for(let i=7;i>=0;i--){let monday=new Date(now);monday.setDate(monday.getDate()-((monday.getDay()+6)%7)-i*7);const key=weekKey(monday.toISOString().slice(0,10));samples.push({key,km:data.workouts.filter(w=>weekKey(w.date)===key).reduce((s,w)=>s+(+w.km),0)})}let max=Math.max(5,...samples.map(s=>s.km));return `<svg class="chart" viewBox="0 0 330 155" role="img" aria-label="Dystans w ostatnich ośmiu tygodniach">${[0,1,2,3].map(i=>`<line class="gridline" x1="24" x2="318" y1="${125-i*35}" y2="${125-i*35}"/>`).join('')}${samples.map((s,i)=>`<rect class="bar" x="${35+i*36}" y="${125-98*s.km/max}" width="20" height="${98*s.km/max}" rx="3"/><text x="${45+i*36}" y="147" text-anchor="middle">${i+1}</text>`).join('')}</svg>`}
function renderGrowth(){let ws=data.workouts,minutes=ws.reduce((s,w)=>s+(+w.minutes||0),0),best=Math.max(0,...ws.filter(w=>w.type==='Bieg').map(w=>+w.km)),maxRun=Math.max(0,...ws.map(w=>+(w.longestRun||0))),withPace=ws.filter(w=>w.minutes>0&&w.km>0),totalPace=withPace.reduce((s,w)=>s+w.minutes,0)/Math.max(.01,withPace.reduce((s,w)=>s+w.km,0));return `<div class="page"><div class="panel"><small class="eyebrow">TWOJA KONDYCJA</small><h2 class="section-title" style="margin:8px 0 18px">Rozwój wytrzymałości</h2><div class="metrics"><div><strong>${fmt(real())}</strong><small>Przebyte km</small></div><div><strong>${fmt(minutes/60)}</strong><small>Godziny</small></div><div><strong>${weeklyStreak()}</strong><small>Seria tygodni</small></div></div></div><div class="panel"><h3 class="mini-title">Kilometry w ostatnich 8 tygodniach</h3>${barsChart()}<p class="note">Tydzień 1 = najstarszy. Wykres obejmuje marsz, bieg i interwały.</p></div><div class="two"><div class="panel"><div class="eyebrow">NAJDŁUŻSZY BIEG</div><h2 class="hero-title">${fmt(best)} km</h2><span class="note">Trening typu bieg</span></div><div class="panel"><div class="eyebrow">BIEG CIĄGŁY</div><h2 class="hero-title">${fmt(maxRun)} min</h2><span class="note">Jeśli zapisany</span></div></div><div class="panel"><h3 class="mini-title">Średnie tempo</h3><div class="hero-title">${withPace.length?fmt(totalPace)+' min/km':'—'}</div><p class="note">Średnia ważona dla wpisów zawierających czas. Zróżnicowane marsze i biegi analizuj osobno.</p></div><div class="panel"><h3 class="mini-title">Próby porównawcze</h3><p class="muted">Oznaczaj wybrane treningi jako próby, aby porównać wyniki przy podobnych warunkach.</p>${ws.filter(w=>w.test).length?ws.filter(w=>w.test).sort((a,b)=>a.date.localeCompare(b.date)).map(w=>`<div class="list-row"><div><b>${esc(w.date)}</b><small>${fmt(w.km)} km · ${fmt(w.minutes)} min · wysiłek ${w.rpe||'—'}/10</small></div></div>`).join(''):'<p class="note">Brak zapisanych prób. Możesz oznaczyć trening podczas jego dodawania lub edycji.</p>'}</div></div>`}
function render(){let labels={map:'Droga Pierścienia',training:'Dziennik treningów',chronicle:'Kronika podróży',growth:'Twoja kondycja'};$('#pageTitle').textContent=labels[view];$('#eyebrow').textContent=view==='map'?'WYPRAWA I • DROGA FRODA':'ŚRÓDZIEMIE • WYPRAWA I';$('#screen').innerHTML={map:renderMap,training:renderTraining,chronicle:renderChronicle,growth:renderGrowth}[view]();document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));$('#newWorkout')?.addEventListener('click',()=>workoutSheet());if(view==='map')attachMap()}
function attachMap(){mapZoom=1;mapPan={x:0,y:0};const art=$('#mapArt'),stage=$('#mapStage');const clamp=()=>{const mx=stage.clientWidth*(mapZoom-1)/2,my=stage.clientHeight*(mapZoom-1)/2;mapPan={x:Math.max(-mx,Math.min(mx,mapPan.x)),y:Math.max(-my,Math.min(my,mapPan.y))}};const apply=()=>{clamp();art.style.transform=`translate(${mapPan.x}px,${mapPan.y}px) scale(${mapZoom})`};apply();stage.querySelectorAll('[data-zoom]').forEach(b=>b.onclick=()=>{if(b.dataset.zoom==='reset'){mapZoom=1;mapPan={x:0,y:0}}else mapZoom=Math.max(1,Math.min(3.5,mapZoom+(b.dataset.zoom==='in'?.5:-.5)));apply()});let down=null;stage.onpointerdown=e=>{if(mapZoom===1||e.target.closest('button')||e.target.closest('[data-stop]'))return;down={x:e.clientX,y:e.clientY,px:mapPan.x,py:mapPan.y};stage.setPointerCapture(e.pointerId)};stage.onpointermove=e=>{if(!down)return;mapPan={x:down.px+e.clientX-down.x,y:down.py+e.clientY-down.y};apply()};stage.onpointerup=stage.onpointercancel=()=>down=null;stage.style.touchAction='pan-y';stage.querySelectorAll('[data-zoom]').forEach(b=>b.addEventListener('click',()=>{stage.style.touchAction=mapZoom>1?'none':'pan-y'}))}
function segmentsHtml(rows){return rows.map((r,i)=>`<div class="two segment" style="grid-template-columns:1.1fr .8fr .9fr auto"><select aria-label="Rodzaj odcinka" data-seg="kind"><option ${r.kind==='Marsz'?'selected':''}>Marsz</option><option ${r.kind==='Bieg'?'selected':''}>Bieg</option><option ${r.kind==='Rozgrzewka'?'selected':''}>Rozgrzewka</option><option ${r.kind==='Schłodzenie'?'selected':''}>Schłodzenie</option></select><input aria-label="Minuty odcinka" type="number" min="0.1" step="0.1" data-seg="minutes" value="${r.minutes||''}" placeholder="min"><input aria-label="Prędkość km/h" type="number" min="0" step="0.1" data-seg="speed" value="${r.speed||''}" placeholder="km/h"><button class="link-btn" type="button" data-remove-seg="${i}" aria-label="Usuń odcinek">×</button></div>`).join('')}
function workoutSheet(id=null){let old=data.workouts.find(w=>w.id===id)||{},detail=!!old.segments?.length,segments=(old.segments||[{kind:'Rozgrzewka',minutes:5,speed:5},{kind:'Bieg',minutes:2,speed:8},{kind:'Marsz',minutes:3,speed:5.5}]);function content(){sheet(`<h2>${id?'Edytuj trening':'Nowa aktywność'}</h2><form id="workoutForm"><div class="field"><label>Data</label><input required name="date" type="date" value="${esc(old.date||new Date().toLocaleDateString('sv-SE'))}" max="${new Date().toLocaleDateString('sv-SE')}"></div><div class="field"><label>Rodzaj aktywności</label><select name="type"><option ${old.type==='Marsz'?'selected':''}>Marsz</option><option ${old.type==='Bieg'?'selected':''}>Bieg</option><option ${old.type==='Interwały'?'selected':''}>Interwały</option></select></div><div class="segmented"><button type="button" data-place="treadmill" class="${old.place!=='outdoors'?'selected':''}">Bieżnia</button><button type="button" data-place="outdoors" class="${old.place==='outdoors'?'selected':''}">Teren</button></div><div class="two"><div class="field"><label>Dystans (km)</label><input name="km" required type="number" inputmode="decimal" min="0.01" step="0.01" value="${esc(old.km??'')}"></div><div class="field"><label>Czas (min, opcjonalnie)</label><input name="minutes" type="number" inputmode="decimal" min="0" step="0.1" value="${esc(old.minutes??'')}"></div></div><div class="segmented"><button type="button" data-detail="off" class="${!detail?'selected':''}">Szybki zapis</button><button type="button" data-detail="on" class="${detail?'selected':''}">Dokładne interwały</button></div><div id="details" ${detail?'':'hidden'}><div class="field"><label>Segmenty: rodzaj / czas min / km/h</label><div id="segments" style="display:grid;gap:7px">${segmentsHtml(segments)}</div><button type="button" class="secondary" id="addSegment">+ Dodaj odcinek</button></div><p class="note">Segmenty pomagają analizować trening. Podstawą drogi jest wpisany dystans z bieżni, bez automatycznego wyliczania.</p></div><div class="two"><div class="field"><label>Najdłuższy ciągły bieg (min)</label><input name="longestRun" type="number" min="0" step="0.1" value="${esc(old.longestRun??'')}"></div><div class="field"><label>Wysiłek (1–10)</label><input name="rpe" type="number" min="1" max="10" step="1" value="${esc(old.rpe??'')}"></div></div><div class="two"><div class="field"><label>Łączny czas biegu (min)</label><input name="runMinutes" type="number" min="0" step="0.1" value="${esc(old.runMinutes??'')}"></div><div class="field"><label>Nachylenie bieżni (%)</label><input name="incline" type="number" min="0" step="0.5" value="${esc(old.incline??'')}"></div></div><div class="field"><label>Notatka</label><textarea name="notes" rows="2">${esc(old.notes??'')}</textarea></div><label class="tiny"><input type="checkbox" name="test" ${old.test?'checked':''}> To próba porównawcza</label><div class="sheet-actions"><button type="submit" class="primary">Zapisz trening</button>${id?'<button type="button" class="secondary danger" id="deleteWorkout">Usuń</button>':''}</div></form>`);let place=old.place||'treadmill';$('#sheet').querySelectorAll('[data-place]').forEach(btn=>btn.onclick=()=>{place=btn.dataset.place;$('#sheet').querySelectorAll('[data-place]').forEach(x=>x.classList.toggle('selected',x===btn))});$('#sheet').querySelectorAll('[data-detail]').forEach(btn=>btn.onclick=()=>{detail=btn.dataset.detail==='on';$('#details').hidden=!detail;$('#sheet').querySelectorAll('[data-detail]').forEach(x=>x.classList.toggle('selected',x===btn))});function collectSegments(){return [...$('#segments').querySelectorAll('.segment')].map(el=>({kind:el.querySelector('[data-seg="kind"]').value,minutes:+el.querySelector('[data-seg="minutes"]').value,speed:+el.querySelector('[data-seg="speed"]').value})).filter(x=>x.minutes>0)}$('#addSegment').onclick=()=>{segments=collectSegments();segments.push({kind:'Marsz',minutes:3,speed:5});$('#segments').innerHTML=segmentsHtml(segments);bindRemove()};function bindRemove(){$('#segments').querySelectorAll('[data-remove-seg]').forEach(b=>b.onclick=()=>{segments=collectSegments();segments.splice(+b.dataset.removeSeg,1);$('#segments').innerHTML=segmentsHtml(segments);bindRemove()})}bindRemove();$('#workoutForm').onsubmit=e=>{e.preventDefault();const fd=new FormData(e.target),w={id:id||crypto.randomUUID(),date:String(fd.get('date')),type:String(fd.get('type')),place,km:+fd.get('km'),minutes:fd.get('minutes')===''?null:+fd.get('minutes'),longestRun:fd.get('longestRun')===''?null:+fd.get('longestRun'),rpe:fd.get('rpe')===''?null:+fd.get('rpe'),runMinutes:fd.get('runMinutes')===''?null:+fd.get('runMinutes'),incline:fd.get('incline')===''?null:+fd.get('incline'),notes:String(fd.get('notes')),test:fd.has('test'),segments:detail?collectSegments():[]};if(!Number.isFinite(w.km)||w.km<=0||w.date>new Date().toLocaleDateString('sv-SE'))return toast('Sprawdź dystans i datę');if(id)data.workouts=data.workouts.map(t=>t.id===id?w:t);else data.workouts.push(w);save();closeSheet();toast(`Zapisano ${fmt(w.km)} km. Szlak wydłużył się o ${fmt(w.km*SCALE)} km.`)};if(id)$('#deleteWorkout').onclick=()=>{if(confirm('Usunąć ten trening? Pozycja na mapie zostanie przeliczona.')){data.workouts=data.workouts.filter(w=>w.id!==id);save();closeSheet();toast('Trening usunięty')}}}content()}
function settings(){sheet(`<h2>Ustawienia i dane</h2><div class="panel"><p class="eyebrow">POSTĘP PODRÓŻY</p><div class="between"><b>Przelicznik</b><span>1 : 3</span></div><p class="note">${fmt(real())} km Twojej drogi zasiliło dotąd ${fmt(travel())} km szlaku. Ukończenie pierwszej wyprawy odblokuje kolejne etapy w następnych wersjach.</p></div><div class="panel"><h3 class="mini-title">Kopia zapasowa</h3><p class="note">Dane znajdują się wyłącznie na tym urządzeniu. Regularnie pobieraj kopię JSON i zapisuj ją w Plikach lub iCloud Drive.</p><button class="primary" id="exportData">Pobierz kopię JSON</button><button class="secondary" id="importData" style="width:100%;margin-top:9px">Wczytaj kopię JSON</button></div><p class="note">Wersja 1.9.1 · Poprawione dopasowanie tras do ilustracji rozdziałów II–IV i układ na komputerze. Trasa wizualna i część odległości pozostają robocze. Repozytorium nie zawiera Twoich treningów.</p>`);$('#exportData').onclick=()=>{const blob=new Blob([JSON.stringify({...data,exported:new Date().toISOString()},null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='srodziemie-kopia-'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)};$('#importData').onclick=()=>$('#importFile').click()}
$('#importFile').addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;try{let j=JSON.parse(await file.text());if(!Array.isArray(j.workouts)||j.workouts.some(w=>!(w.id&&/^\d{4}-\d\d-\d\d$/.test(w.date)&&Number.isFinite(+w.km)&&+w.km>0)))throw Error('Zły format danych');if(confirm(`Wczytać ${j.workouts.length} treningów? Obecne dane zostaną zastąpione.`)){data={schema:1,created:j.created||new Date().toISOString(),workouts:j.workouts};save();closeSheet();toast('Kopia została przywrócona')}}catch(err){toast('Nieprawidłowy plik kopii: '+err.message)}e.target.value=''});
$('#settingsBtn').onclick=settings;document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>setView(b.dataset.view));$('#screen').addEventListener('click',e=>{const b=e.target.closest('[data-edit],[data-stop]');if(b?.dataset.edit)workoutSheet(b.dataset.edit);else if(b?.dataset.stop!==undefined)goToStop(+b.dataset.stop)});$('#overlay').addEventListener('click',e=>{if(e.target.id==='overlay')closeSheet()});try{render()}catch(error){console.error('Błąd ekranu Śródziemia',error);const target=document.querySelector('#screen');if(target){target.innerHTML='<section class="app-error"><h2>Nie udało się otworzyć kroniki</h2><p>Wystąpił problem podczas wyświetlania wyprawy. Twoje treningi nie zostały usunięte.</p><pre id="errorInfo"></pre><button id="retryRender" class="primary">Spróbuj ponownie</button></section>';target.querySelector('#errorInfo').textContent=String(error&&error.message||error);target.querySelector('#retryRender').onclick=()=>location.reload();}}if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
