const MAP_IMAGES={
  1:'./chapter-portrait-1.jpg?v=20261022',
  2:'./chapter-portrait-2.jpg?v=20261022',
  3:'./chapter-portrait-3.jpg?v=20261022',
  4:'./chapter-portrait-4.jpg?v=20261022'
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
 'Hobbiton':'./stop-hobbiton.jpg?v=2.3',
 'Stary Las':'./stop-stary-las.jpg?v=2.3',
 'Bree':'./stop-bree.jpg?v=2.3',
 'Komarowe Bagna':'./stop-komarowe-bagna.jpg?v=2.3',
 'Wichrowy Czub':'./stop-wichrowy-czub.jpg?v=2.3',
 'Bród Bruinen':'./stop-brod-bruinen.jpg?v=2.3',
 'Rivendell':'./stop-rivendell.jpg?v=2.3',
 'Hollin':'./stop-hollin.jpg?v=2.3',
 'Caradhras':'./stop-caradhras.jpg?v=2.3',
 'Moria':'./stop-moria.jpg?v=2.3',
 'Lothlórien':'./stop-lothlorien.jpg?v=2.3',
 'Anduina':'./stop-anduina.jpg?v=2.3',
 'Argonath':'./stop-argonath.jpg?v=2.3',
 'Rauros':'./stop-rauros.jpg?v=2.3',
 'Emyn Muil':'./stop-emyn-muil.jpg?v=2.3',
 'Martwe Bagna':'./stop-martwe-bagna.jpg?v=2.3',
 'Ithilien':'./stop-ithilien.jpg?v=2.3',
 'Cirith Ungol':'./stop-cirith-ungol.jpg?v=2.3',
 'Gorgoroth':'./stop-gorgoroth.jpg?v=2.3',
 'Góra Przeznaczenia':'./stop-gora-przeznaczenia.jpg?v=2.3'
};
const stopArt=s=>STOP_ART[s.name]||STOP_ART['Hobbiton'];
const chapterByDistance=d=>CHAPTERS.find(c=>d<c.goal)||CHAPTERS[CHAPTERS.length-1];
const chapterByStop=km=>CHAPTERS.find(c=>km<=c.goal)||CHAPTERS[CHAPTERS.length-1];
const getDefault=()=>({schema:1,workouts:[],created:new Date().toISOString()});
function load(){try{const j=JSON.parse(localStorage.getItem(KEY));return j&&Array.isArray(j.workouts)?j:getDefault()}catch{return getDefault()}}
let data=load(),view='map',focused=null,mapZoom=1,mapPan={x:0,y:0},selectedChapter=null;
const $=s=>document.querySelector(s), fmt=n=>Number(n||0).toLocaleString('pl-PL',{maximumFractionDigits:1}), esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const real=()=>data.workouts.reduce((s,w)=>s+Number(w.km||0),0); const travel=()=>Math.min(TOTAL,real()*SCALE);const next=()=>stops.find(s=>s.km>travel());const discovered=()=>stops.filter(s=>s.km<=travel());
function save(){localStorage.setItem(KEY,JSON.stringify(data));render()}
function setView(v){finishTrail();view=v;focused=null;render();scrollTo({top:0,behavior:'auto'})}
function toast(message){document.querySelector('.toast')?.remove();let n=document.createElement('div');n.className='toast';n.textContent=message;document.body.append(n);setTimeout(()=>n.remove(),3200)}
function closeSheet(){$('#overlay').hidden=true;$('#sheet').innerHTML=''}
function sheet(html){$('#sheet').innerHTML='<button class="close" aria-label="Zamknij" id="closeSheet">×</button>'+html;$('#overlay').hidden=false;$('#closeSheet').onclick=closeSheet}

function goToStop(i){
 const s=stops[i],locked=s.km>travel(),art=stopArt(s),remaining=fmt(Math.max(0,(s.km-travel())/SCALE));
 const chip=locked?'NIEODKRYTA KARTA':(s.kind==='major'?'KAMIEŃ MILOWY':'ODKRYTE MIEJSCE');
 const lead=locked
  ?`Szlak odsłoni to miejsce, gdy pokonasz jeszcze <b>${remaining} km</b> swojej drogi.`
  :`<p>${esc(s.desc)}</p><p class="stop-km">✧ ${fmt(s.km)} km szlaku</p>`;
 sheet(`<div class="sheet-stop-hero"><div class="illustration ${locked?'locked-art':'has-art'}">${locked?'<span class="mystery-symbol" aria-label="Miejsce nieodkryte">✧</span>':`<img src="${art}" alt="${esc(s.name)}">`}</div><small class="eyebrow">${chip}</small><h2>${locked?'Nieznane miejsce':esc(s.name)}</h2>${locked?`<p>${lead}</p>`:lead}</div>`)
}

function weeklyStreak(){const keys=new Set(data.workouts.map(w=>weekKey(w.date)));if(!keys.size)return 0;let day=new Date();day.setHours(12,0,0,0);let n=0;for(let i=0;i<520;i++){const key=weekKey(day.toISOString().slice(0,10));if(keys.has(key))n++;else if(i!==0)break;day.setDate(day.getDate()-7)}return n}
function weekKey(s){const d=new Date(s+'T12:00:00');d.setDate(d.getDate()+4-(d.getDay()||7));return d.getFullYear()+'-'+String(Math.ceil((((d-new Date(d.getFullYear(),0,1))/864e5)+1)/7)).padStart(2,'0')}

function barsChart(){const now=new Date(),samples=[];for(let i=7;i>=0;i--){let monday=new Date(now);monday.setDate(monday.getDate()-((monday.getDay()+6)%7)-i*7);const key=weekKey(monday.toISOString().slice(0,10));samples.push({key,km:data.workouts.filter(w=>weekKey(w.date)===key).reduce((s,w)=>s+(+w.km),0)})}let max=Math.max(5,...samples.map(s=>s.km));return `<svg class="chart" viewBox="0 0 330 155" role="img" aria-label="Dystans w ostatnich ośmiu tygodniach">${[0,1,2,3].map(i=>`<line class="gridline" x1="24" x2="318" y1="${125-i*35}" y2="${125-i*35}"/>`).join('')}${samples.map((s,i)=>`<rect class="bar" x="${35+i*36}" y="${125-98*s.km/max}" width="20" height="${98*s.km/max}" rx="3"/><text x="${45+i*36}" y="147" text-anchor="middle">${i+1}</text>`).join('')}</svg>`}

/* ===== v2.0: animacja wędrówki, ekran odkrycia, dziennik wyprawy, pieczęcie, przypomnienie o kopii ===== */
let displayK=null,animating=false,journalAll=false;
const mapK=()=>displayK??travel();
const reduceMotion=()=>window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
const hashStr=s=>{let h=2166136261;for(const c of String(s)){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0};
const pickBy=(arr,seed,salt=0)=>arr[(hashStr(seed+':'+salt))%arr.length];

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
 let cum=0;const out=[];
 for(const {w} of ws){
  const before=Math.min(TOTAL,cum*SCALE);cum+=Number(w.km||0);const after=Math.min(TOTAL,cum*SCALE);
  const ch=chapterByDistance(Math.min(after,TOTAL-0.01)).id;
  const reached=stops.filter(s=>s.km>before&&s.km<=after);
  const here=[...stops].reverse().find(s=>s.km<=after)||stops[0];
  const ahead=stops.find(s=>s.km>after);
  const act=pickBy(J_ACT[w.type]||J_ACT['Marsz'],w.id,1).replace('{km}',fmt(w.km)).replace('{t}',fmt(w.km*SCALE));
  let text=pickBy(J_OPEN[ch],w.id,0)+' '+act;
  if(+w.km>=10)text+=' To był jeden z najdłuższych dni w drodze.';
  else if(w.longestRun>=20)text+=' Długi, nieprzerwany bieg — nogi pamiętały go jeszcze wieczorem.';
  if(reached.length)text+=` Tego dnia szlak doprowadził do: ${reached.map(s=>s.name).join(', ')}.`;
  else if(ahead)text+=' '+pickBy(['Przed Tobą','Na horyzoncie','Gdzieś przed Tobą czeka'],w.id,2)+' '+ahead.name+'.';
  else text+=' Droga dobiegła końca.';
  out.push({w,text,place:reached.at(-1)?.name||here.name,reached:reached.map(s=>s.name),ch});
 }
 return out;
}

/* ---- Pieczęcie ---- */
function maxWeekStreak(){const keys=[...new Set(data.workouts.map(w=>weekKey(w.date)))];if(!keys.length)return 0;const mondays=[...new Set(data.workouts.map(w=>{const d=new Date(w.date+'T12:00:00');d.setDate(d.getDate()-((d.getDay()+6)%7));return d.toISOString().slice(0,10)}))].sort();let best=1,run=1;for(let i=1;i<mondays.length;i++){const gap=Math.round((new Date(mondays[i])-new Date(mondays[i-1]))/864e5);run=gap===7?run+1:1;best=Math.max(best,run)}return best}
const SEALS=[
 {id:'krok',sym:'✦',name:'Pierwszy krok',desc:'Zapisany pierwszy trening. Każda wielka droga zaczyna się od progu domu.',test:()=>data.workouts.length>=1},
 {id:'bieg',sym:'➶',name:'Pierwszy bieg',desc:'Pierwszy trening typu bieg.',test:()=>data.workouts.some(w=>w.type==='Bieg')},
 {id:'piatka',sym:'Ⅴ',name:'Pięć mil',desc:'Co najmniej 5 km w jednym treningu.',test:()=>data.workouts.some(w=>+w.km>=5)},
 {id:'dziesiatka',sym:'Ⅹ',name:'Długi dzień',desc:'Co najmniej 10 km w jednym treningu.',test:()=>data.workouts.some(w=>+w.km>=10)},
 {id:'wytrwalosc',sym:'❂',name:'Oddech strażnika',desc:'Nieprzerwany bieg trwający co najmniej 20 minut.',test:()=>data.workouts.some(w=>+w.longestRun>=20)},
 {id:'zrywy',sym:'⚡',name:'Pięć zrywów',desc:'Pięć treningów interwałowych.',test:()=>data.workouts.filter(w=>w.type==='Interwały').length>=5},
 {id:'proba',sym:'⚖',name:'Próba sił',desc:'Pierwszy trening oznaczony jako próba porównawcza.',test:()=>data.workouts.some(w=>w.test)},
 {id:'dziesiec',sym:'☰',name:'Dziesięć wpisów',desc:'Dziesięć zapisanych treningów.',test:()=>data.workouts.length>=10},
 {id:'piecdziesiat',sym:'❖',name:'Pół setki wpisów',desc:'Pięćdziesiąt zapisanych treningów.',test:()=>data.workouts.length>=50},
 {id:'seria4',sym:'◈',name:'Cztery tygodnie',desc:'Treningi w czterech kolejnych tygodniach.',test:()=>maxWeekStreak()>=4},
 {id:'seria12',sym:'✺',name:'Pora roku w drodze',desc:'Treningi w dwunastu kolejnych tygodniach.',test:()=>maxWeekStreak()>=12},
 {id:'km50',sym:'L',name:'Pięćdziesiąt kilometrów',desc:'50 km Twojej drogi łącznie.',test:()=>real()>=50},
 {id:'km100',sym:'C',name:'Setka',desc:'100 km Twojej drogi łącznie.',test:()=>real()>=100},
 {id:'km500',sym:'D',name:'Pięćset',desc:'500 km Twojej drogi łącznie.',test:()=>real()>=500},
 {id:'rivendell',sym:'❦',name:'Dom Elronda',desc:'Ukończony rozdział I — dotarcie do Rivendell.',test:()=>travel()>=737},
 {id:'lorien',sym:'❧',name:'Złoty las',desc:'Ukończony rozdział II — dotarcie do Lothlórien.',test:()=>travel()>=1481},
 {id:'rauros',sym:'≋',name:'Wodospady Rauros',desc:'Ukończony rozdział III.',test:()=>travel()>=2107},
 {id:'orodruina',sym:'◉',name:'Kres drogi',desc:'Dotarcie do Góry Przeznaczenia.',test:()=>travel()>=TOTAL}
];
function syncSeals(silent){
 const first=!data.seals;data.seals=data.seals||{};const fresh=[];
 for(const s of SEALS)if(!data.seals[s.id]&&s.test()){data.seals[s.id]=new Date().toISOString();if(!silent&&!first)fresh.push(s)}
 localStorage.setItem(KEY,JSON.stringify(data));return fresh;
}
const sealArt=s=>s.id?'./badge-art-'+String(SEALS.findIndex(item=>item.id===s.id)%12+1).padStart(2,'0')+'.png':null;
const sealHtml=(s,earned,big)=>`<div class="seal ${earned?'earned':'locked'} ${big?'seal-big':''}" aria-hidden="true">${sealArt(s)?`<img src="${sealArt(s)}" alt="">`:`<span>${s.sym}</span>`}</div>`;

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
 el.querySelector('#revealNext').onclick=()=>{el.classList.remove('in');setTimeout(()=>{el.remove();if(revealQueue.length)showReveal();else{setView('chronicle');scrollTo({top:0,behavior:'auto'})}},reduceMotion()?0:220)};
 el.querySelector('#revealNext').focus({preventScroll:true});
}

/* ---- Animacja: znacznik przechodzi po trasie od starej do nowej pozycji ---- */

/* ---- Kopia zapasowa ---- */
function exportBackup(){
 const blob=new Blob([JSON.stringify({...data,exported:new Date().toISOString()},null,2)],{type:'application/json'}),a=document.createElement('a');
 a.href=URL.createObjectURL(blob);a.download='srodziemie-kopia-'+new Date().toISOString().slice(0,10)+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);
 data.lastBackup=new Date().toISOString();delete data.backupSnooze;save();toast('Kopia pobrana. Zapisz ją w Plikach lub iCloud Drive.');
}
function sealsPanel(){
 const earned=SEALS.filter(s=>data.seals?.[s.id]);
 return `<div class="panel"><div class="between"><h3 class="mini-title" style="margin:0">Odznaki Wędrowca</h3><span class="pill">${earned.length} / ${SEALS.length}</span></div><div class="seal-grid">${SEALS.map(s=>{const e=!!data.seals?.[s.id];return `<button class="seal-item" data-seal="${s.id}">${sealHtml(s,e)}<small>${esc(s.name)}</small></button>`}).join('')}</div></div>`;
}
function chronicleDisclosure(id,summary,body,kind){
 return `<article class="chronicle-item ${kind}"><button type="button" class="chronicle-trigger" id="${id}-toggle" aria-expanded="false" aria-controls="${id}">${summary}<span class="chronicle-chevron" aria-hidden="true">⌄</span></button><div class="chronicle-body" id="${id}" role="region" aria-labelledby="${id}-toggle" aria-hidden="true" inert><div class="chronicle-inner">${body}</div></div></article>`;
}
function journalPanel(entries){
 const list=journalAll?entries:entries.slice(0,6);
 return `<section class="chronicle-journal" aria-labelledby="journal-heading"><h2 id="journal-heading">Dziennik wyprawy</h2>${list.length?list.map((e,i)=>chronicleDisclosure('journal-'+i,`<span class="journal-summary"><span class="journal-meta"><time datetime="${esc(e.w.date)}">${esc(e.w.date)}</time><span>${fmt(e.w.km)} km</span></span><strong>Okolice: ${esc(e.place)}</strong><span class="chronicle-preview">${esc(e.text.match(/^[\s\S]*?[.!?](?:\s|$)/)?.[0]||e.text)}</span></span>`,`<p>${esc(e.text)}</p><p class="chronicle-metadata">${esc(e.w.type)} · ${fmt(e.w.km)} km${e.w.minutes?' · '+fmt(e.w.minutes)+' min':''}${e.w.place?' · '+(e.w.place==='treadmill'?'Bieżnia':'Teren'):''}${e.w.rpe?' · wysiłek '+fmt(e.w.rpe)+'/10':''}${e.w.longestRun?' · najdłuższy bieg '+fmt(e.w.longestRun)+' min':''}</p>${e.reached.length?`<p class="chronicle-metadata">Odkryte miejsca: ${e.reached.map(esc).join(', ')}.</p>`:''}${e.w.notes?`<p class="journal-note">${esc(e.w.notes)}</p>`:''}`,'journal-entry')).join(''):'<p class="empty">Dziennik czeka na pierwszy trening. Zapisz aktywność, aby rozpocząć opowieść.</p>'}${entries.length>6?`<button class="link-btn" id="journalToggle">${journalAll?'Pokaż mniej':'Pokaż wszystkie wpisy ('+entries.length+')'}</button>`:''}</section>`;
}
function bindChronicle(){
 document.querySelectorAll('.chronicle-trigger').forEach(button=>button.onclick=()=>{
  const open=button.getAttribute('aria-expanded')!=='true';
  const set=(b,value)=>{b.setAttribute('aria-expanded',String(value));const panel=document.getElementById(b.getAttribute('aria-controls'));panel.inert=!value;panel.setAttribute('aria-hidden',String(!value));b.closest('.chronicle-item').classList.toggle('is-open',value)};
  if(open&&button.closest('.milestone-profile'))document.querySelectorAll('.milestone-profile .chronicle-trigger[aria-expanded="true"]').forEach(b=>set(b,false));
  set(button,open);
 });
}
function sealSheet(id){
 const s=SEALS.find(x=>x.id===id),e=data.seals?.[id];if(!s)return;
 sheet(`<div class="seal-sheet">${sealHtml(s,!!e,true)}<small class="eyebrow">${e?'ODZNAKA ZDOBYTA · '+new Date(e).toLocaleDateString('pl-PL'):'ODZNAKA DO ZDOBYCIA'}</small><h2>${esc(s.name)}</h2><p>${esc(s.desc)}</p></div>`);
}

function segmentsHtml(rows){return rows.map((r,i)=>`<div class="two segment" style="grid-template-columns:1.1fr .8fr .9fr auto"><select aria-label="Rodzaj odcinka" data-seg="kind"><option ${r.kind==='Marsz'?'selected':''}>Marsz</option><option ${r.kind==='Bieg'?'selected':''}>Bieg</option><option ${r.kind==='Rozgrzewka'?'selected':''}>Rozgrzewka</option><option ${r.kind==='Schłodzenie'?'selected':''}>Schłodzenie</option></select><input aria-label="Minuty odcinka" type="number" min="0.1" step="0.1" data-seg="minutes" value="${r.minutes||''}" placeholder="min"><input aria-label="Prędkość km/h" type="number" min="0" step="0.1" data-seg="speed" value="${r.speed||''}" placeholder="km/h"><button class="link-btn" type="button" data-remove-seg="${i}" aria-label="Usuń odcinek">×</button></div>`).join('')}
function workoutSheet(id=null){let old=data.workouts.find(w=>w.id===id)||{},detail=!!old.segments?.length,segments=(old.segments||[{kind:'Rozgrzewka',minutes:5,speed:5},{kind:'Bieg',minutes:2,speed:8},{kind:'Marsz',minutes:3,speed:5.5}]);function content(){sheet(`<h2>${id?'Edytuj trening':'Nowa aktywność'}</h2><form id="workoutForm"><div class="field"><label>Data</label><input required name="date" type="date" value="${esc(old.date||new Date().toLocaleDateString('sv-SE'))}" max="${new Date().toLocaleDateString('sv-SE')}"></div><div class="field"><label>Rodzaj aktywności</label><select name="type"><option ${old.type==='Marsz'?'selected':''}>Marsz</option><option ${old.type==='Bieg'?'selected':''}>Bieg</option><option ${old.type==='Interwały'?'selected':''}>Interwały</option></select></div><div class="segmented"><button type="button" data-place="treadmill" class="${old.place!=='outdoors'?'selected':''}">Bieżnia</button><button type="button" data-place="outdoors" class="${old.place==='outdoors'?'selected':''}">Teren</button></div><div class="two"><div class="field"><label>Dystans (km)</label><input name="km" required type="number" inputmode="decimal" min="0.01" step="0.01" value="${esc(old.km??'')}"></div><div class="field"><label>Czas (min, opcjonalnie)</label><input name="minutes" type="number" inputmode="decimal" min="0" step="0.1" value="${esc(old.minutes??'')}"></div></div><div class="segmented"><button type="button" data-detail="off" class="${!detail?'selected':''}">Szybki zapis</button><button type="button" data-detail="on" class="${detail?'selected':''}">Dokładne interwały</button></div><div id="details" ${detail?'':'hidden'}><div class="field"><label>Segmenty: rodzaj / czas min / km/h</label><div id="segments" style="display:grid;gap:7px">${segmentsHtml(segments)}</div><button type="button" class="secondary" id="addSegment">+ Dodaj odcinek</button></div><p class="note">Segmenty pomagają analizować trening. Podstawą drogi jest wpisany dystans z bieżni, bez automatycznego wyliczania.</p></div><div class="two"><div class="field"><label>Najdłuższy ciągły bieg (min)</label><input name="longestRun" type="number" min="0" step="0.1" value="${esc(old.longestRun??'')}"></div><div class="field"><label>Wysiłek (1–10)</label><input name="rpe" type="number" min="1" max="10" step="1" value="${esc(old.rpe??'')}"></div></div><div class="two"><div class="field"><label>Łączny czas biegu (min)</label><input name="runMinutes" type="number" min="0" step="0.1" value="${esc(old.runMinutes??'')}"></div><div class="field"><label>Nachylenie bieżni (%)</label><input name="incline" type="number" min="0" step="0.5" value="${esc(old.incline??'')}"></div></div><div class="field"><label>Notatka</label><textarea name="notes" rows="2">${esc(old.notes??'')}</textarea></div><label class="tiny"><input type="checkbox" name="test" ${old.test?'checked':''}> To próba porównawcza</label><div class="sheet-actions"><button type="submit" class="primary">Zapisz trening</button>${id?'<button type="button" class="secondary danger" id="deleteWorkout">Usuń</button>':''}</div></form>`);let place=old.place||'treadmill';$('#sheet').querySelectorAll('[data-place]').forEach(btn=>btn.onclick=()=>{place=btn.dataset.place;$('#sheet').querySelectorAll('[data-place]').forEach(x=>x.classList.toggle('selected',x===btn))});$('#sheet').querySelectorAll('[data-detail]').forEach(btn=>btn.onclick=()=>{detail=btn.dataset.detail==='on';$('#details').hidden=!detail;$('#sheet').querySelectorAll('[data-detail]').forEach(x=>x.classList.toggle('selected',x===btn))});function collectSegments(){return [...$('#segments').querySelectorAll('.segment')].map(el=>({kind:el.querySelector('[data-seg="kind"]').value,minutes:+el.querySelector('[data-seg="minutes"]').value,speed:+el.querySelector('[data-seg="speed"]').value})).filter(x=>x.minutes>0)}$('#addSegment').onclick=()=>{segments=collectSegments();segments.push({kind:'Marsz',minutes:3,speed:5});$('#segments').innerHTML=segmentsHtml(segments);bindRemove()};function bindRemove(){$('#segments').querySelectorAll('[data-remove-seg]').forEach(b=>b.onclick=()=>{segments=collectSegments();segments.splice(+b.dataset.removeSeg,1);$('#segments').innerHTML=segmentsHtml(segments);bindRemove()})}bindRemove();$('#workoutForm').onsubmit=e=>{e.preventDefault();const fd=new FormData(e.target),w={...old,id:id||crypto.randomUUID(),date:String(fd.get('date')),type:String(fd.get('type')),place,km:+fd.get('km'),minutes:fd.get('minutes')===''?null:+fd.get('minutes'),longestRun:fd.get('longestRun')===''?null:+fd.get('longestRun'),rpe:fd.get('rpe')===''?null:+fd.get('rpe'),runMinutes:fd.get('runMinutes')===''?null:+fd.get('runMinutes'),incline:fd.get('incline')===''?null:+fd.get('incline'),notes:String(fd.get('notes')),test:fd.has('test'),segments:detail?collectSegments():[]};if(!Number.isFinite(w.km)||w.km<=0||w.date>new Date().toLocaleDateString('sv-SE'))return toast('Sprawdź dystans i datę');const before=travel();if(id)data.workouts=data.workouts.map(t=>t.id===id?w:t);else data.workouts.push(w);localStorage.setItem(KEY,JSON.stringify(data));closeSheet();toast(`Zapisano ${fmt(w.km)} km. Szlak wydłużył się o ${fmt(w.km*SCALE)} km.`);celebrate(before)};if(id)$('#deleteWorkout').onclick=()=>{if(confirm('Usunąć ten trening? Pozycja na mapie zostanie przeliczona.')){data.workouts=data.workouts.filter(w=>w.id!==id);save();closeSheet();toast('Trening usunięty')}}}content()}
function settings(){sheet(`<h2>Ustawienia i dane</h2><div class="panel"><p class="eyebrow">POSTĘP PODRÓŻY</p><div class="between"><b>Przelicznik</b><span>1 : 3</span></div><p class="note">${fmt(real())} km Twojej drogi zasiliło dotąd ${fmt(travel())} km szlaku.</p></div><div class="panel"><h3 class="mini-title">Kopia zapasowa</h3><p class="note">Dane znajdują się wyłącznie na tym urządzeniu. Regularnie pobieraj kopię JSON i zapisuj ją w Plikach lub iCloud Drive.</p><p class="note">${data.lastBackup?"Ostatnia kopia: "+new Date(data.lastBackup).toLocaleDateString("pl-PL"):"Nie pobrano jeszcze żadnej kopii."}</p><button class="primary" id="exportData">Pobierz kopię JSON</button><button class="secondary" id="importData" style="width:100%;margin-top:9px">Wczytaj kopię JSON</button></div><p class="note">Wersja 5.15</p>`);$('#exportData').onclick=exportBackup;$('#importData').onclick=()=>$('#importFile').click()}
$('#importFile').addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;try{let j=JSON.parse(await file.text());if(!Array.isArray(j.workouts)||j.workouts.some(w=>!(w.id&&/^\d{4}-\d\d-\d\d$/.test(w.date)&&Number.isFinite(+w.km)&&+w.km>0)))throw Error('Zły format danych');if(confirm(`Wczytać ${j.workouts.length} treningów? Obecne dane zostaną zastąpione.`)){data={...j,schema:j.schema||1,created:j.created||new Date().toISOString(),workouts:j.workouts};syncSeals(true);save();closeSheet();toast('Kopia została przywrócona')}}catch(err){toast('Nieprawidłowy plik kopii: '+err.message)}e.target.value=''});

/* ---- Ekrany aplikacji ---- */

function renderTraining(){
 let ws=[...data.workouts].sort((a,b)=>b.date.localeCompare(a.date));
 const hours=ws.reduce((s,w)=>s+(+w.minutes||0),0)/60;
 return `<div class="page"><section class="section-block"><div class="section-header"><small class="eyebrow">TWOJA AKTYWNOŚĆ</small><h2>Każdy krok ma znaczenie</h2><p class="section-lead">Zapisuj treningi i buduj postęp na szlaku.</p></div><div class="tag-row"><span class="pill">${ws.length} treningów</span><span class="pill">${fmt(real())} km</span><span class="pill">${fmt(hours)} h</span></div><div class="cta-stack"><button class="primary" id="newWorkout">+ Zapisz trening</button><button class="secondary" id="importBackup">Importuj kopię JSON</button></div></section><section class="section-block"><small class="eyebrow">HISTORIA AKTYWNOŚCI</small><h3 class="soft-title" style="font-size:46px;margin:6px 0 10px">Ostatnie wpisy</h3><div class="training-list">${ws.length?ws.map(w=>`<article class="entry"><div class="entry-head"><div><div class="entry-title">${esc(w.type)}</div><div class="entry-meta">${esc(w.date)} · ${w.place==='treadmill'?'Bieżnia':'Teren'}${w.minutes?' · '+fmt(w.minutes)+' min':''}${w.runMinutes?' · bieg '+fmt(w.runMinutes)+' min':''}${w.heartRate?' · ❤ '+fmt(w.heartRate)+' bpm':''}</div></div><div class="entry-title" style="font-size:40px">${fmt(w.km)} km</div></div><div class="entry-actions"><button class="secondary" data-edit="${esc(w.id)}">Edytuj</button></div></article>`).join(''):'<div class="empty">Jeszcze nie ma treningów. Dodaj pierwszy wpis, aby rozpocząć podróż.</div>'}</div></section></div>`;
}

const ATLAS_STORIES={
 "Hobbiton": "Spokojne domostwa ukryte w pagórkach przypominają o tym, co warto chronić. Każdy dalszy krok oddala wędrowca od znajomych ścieżek.",
 "Stary Las": "Korony drzew zasłaniają niebo, a pozornie zwyczajne ścieżki potrafią prowadzić w nieoczekiwane strony.",
 "Bree": "W blasku okien gospody łatwo zapomnieć o niebezpieczeństwie poza murami. To jednak tylko krótki przystanek przed dalszą drogą.",
 "Komarowe Bagna": "Nisko nad wodą unosi się wilgoć, a nierówny grunt spowalnia marsz. Za plecami zostają bezpieczne trakty i ostatnie zabudowania.",
 "Wichrowy Czub": "Wzgórze odsłania dalekie przestrzenie Eriadoru, ale na szczycie trudno znaleźć schronienie przed wiatrem i czyimś spojrzeniem.",
 "Bród Bruinen": "Spieniony nurt oddziela wędrowców od doliny, w której można wreszcie odzyskać siły po trudach pościgu.",
 "Rivendell": "Między wodospadami i starymi drzewami czas płynie inaczej. Tutaj droga nie kończy się, lecz na chwilę pozwala zrozumieć, dokąd naprawdę prowadzi.",
 "Hollin": "Ruiny i samotne kamienie przypominają o ludziach i elfach, którzy dawno opuścili te ziemie. Przed podróżnymi wznoszą się góry.",
 "Caradhras": "Każdy metr wymaga wysiłku, gdy śnieg zaciera drogę, a pogoda nie pozwala spojrzeć daleko przed siebie.",
 "Moria": "Dawne sale krasnoludów skrywają niezwykły kunszt, ale również ciszę, w której najmniejszy dźwięk może zdradzić obecność wędrowców.",
 "Lothlórien": "Złote korony drzew tworzą schronienie odmienne od wszystkiego, co pozostawiono za sobą. To czas odpoczynku przed drogą na południe.",
 "Anduina": "Zmieniające się brzegi i nurt wyznaczają rytm podróży. Na rzece każda decyzja przybliża Drużynę do kolejnego rozstaju.",
 "Argonath": "Olbrzymie posągi zdają się strzec pamięci dawnego królestwa. W ich cieniu wyprawa wkracza na ziemie o coraz cięższej historii.",
 "Rauros": "Huk wielkiej kaskady zagłusza słowa i myśli. W tym miejscu dotychczasowa droga dobiega końca, choć sama wyprawa trwa dalej.",
 "Emyn Muil": "Skały wyglądają podobnie z każdej strony, więc łatwo zgubić kierunek. Tu cierpliwość jest równie ważna jak siła nóg.",
 "Martwe Bagna": "Błędne światła odbijają się w nieruchomej wodzie, a każdy krok wymaga uwagi. Cisza tego miejsca ma w sobie coś niepokojącego.",
 "Ithilien": "Pomiędzy wzgórzami pachną zioła, a strumienie przypominają o świecie poza cieniem Mordoru. Spokój jest jednak kruchy.",
 "Cirith Ungol": "Stroma droga prowadzi ku przełęczy, gdzie każdy zakręt kryje następne zagrożenie. Odwrót staje się coraz trudniejszy.",
 "Gorgoroth": "Popiół, skały i ciężkie powietrze odbierają siły. Pozostaje iść naprzód, choć cel wydaje się niebezpiecznie blisko.",
 "Góra Przeznaczenia": "Wulkan góruje nad jałową krainą. Wszystkie wcześniejsze etapy prowadziły właśnie tutaj, do chwili rozstrzygnięcia."
};

function renderChronicle(){
 const done=discovered().slice().sort((a,b)=>b.km-a.km),entries=journalEntries(),dates=new Map();
 for(const e of entries)for(const name of e.reached)if(!dates.has(name))dates.set(name,e.w.date);
 const profiles=done.map(stop=>{
  const id='place-'+stops.indexOf(stop),date=dates.get(stop.name);
  const summary=`<img class="profile-preview" src="${stopArt(stop)}" alt="" loading="lazy" width="480" height="270"><span class="profile-summary"><span class="profile-name">${esc(stop.name)}</span></span>`;
  const body=`<div class="profile-copy"><p class="chronicle-metadata">${stop.kind==='major'?'Kamień milowy':'Odkryte miejsce'} · ${fmt(stop.km)} km szlaku${date?` · Odkryto <time datetime="${esc(date)}">${esc(date)}</time>`:''}</p><p>${esc(stop.desc)}</p><p>${esc(ATLAS_STORIES[stop.name]||'Każdy kolejny etap przybliża wędrowca do celu wyprawy.')}</p></div>`;
  return chronicleDisclosure(id,summary,body,'milestone-profile');
 }).join('');
 return `<div class="page chronicle-page"><header class="chronicle-intro"><p>Ślady wyprawy, odkryte krainy i zapisane historie.</p><dl class="chronicle-stats"><div><dt>Odkryte miejsca</dt><dd>${done.length} / ${stops.length}</dd></div><div><dt>Przebyty dystans</dt><dd>${fmt(real())} km</dd></div><div><dt>Treningi</dt><dd>${data.workouts.length}</dd></div></dl></header><section class="chronicle-atlas" aria-labelledby="atlas-heading"><h2 id="atlas-heading">Atlas odkryć</h2>${profiles}${!data.workouts.length?'<p class="empty">Wszystko zaczyna się w Hobbitonie. Kolejne miejsca odkryjesz podczas treningów.</p>':''}</section>${journalPanel(entries.slice().reverse())}</div>`;
}

// Calendar arithmetic uses UTC civil dates: DST and the device timezone cannot shift weeks.
function civilDay(value){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(String(value)))return null;
 const n=Date.parse(value+'T00:00:00Z');
 return Number.isFinite(n)&&new Date(n).toISOString().slice(0,10)===value?Math.floor(n/864e5):null;
}
const dayString=n=>new Date(n*864e5).toISOString().slice(0,10);
const mondayDay=n=>n-((new Date(n*864e5).getUTCDay()+6)%7);
function fitnessStats(workouts,today,period='12'){
 const end=civilDay(today),current=mondayDay(end);
 const valid=workouts.filter(w=>civilDay(w.date)!==null&&civilDay(w.date)<=end&&Number.isFinite(+w.km)&&+w.km>0);
 const start=period==='all'?Math.min(current,...valid.map(w=>mondayDay(civilDay(w.date)))):current-(Number(period)-1)*7;
 const selected=valid.filter(w=>civilDay(w.date)>=start).sort((a,b)=>a.date.localeCompare(b.date));
 const sum=ws=>ws.reduce((s,w)=>s+(+w.km),0),avg=ws=>ws.length?sum(ws)/ws.length:null;
 const timed=selected.filter(w=>Number.isFinite(+w.minutes)&&+w.minutes>0),minutes=timed.reduce((s,w)=>s+(+w.minutes),0);
 const weeks=[];for(let d=start;d<=current;d+=7){const ws=selected.filter(w=>mondayDay(civilDay(w.date))===d);weeks.push({day:d,km:sum(ws),count:ws.length})}
 const allWeeks=new Map();for(const w of valid){const d=mondayDay(civilDay(w.date));const row=allWeeks.get(d)||{km:0,count:0};row.km+=+w.km;row.count++;allWeeks.set(d,row)}
 let bestStreak=0,run=0,last=null;for(const d of [...allWeeks.keys()].sort((a,b)=>a-b)){run=last!==null&&d-last===7?run+1:1;bestStreak=Math.max(bestStreak,run);last=d}
 let streak=0,d=allWeeks.has(current)?current:current-7;while(allWeeks.has(d)){streak++;d-=7}
 // Compare complete Monday–Sunday blocks; never compare an incomplete week to a full week.
 const recent=valid.filter(w=>civilDay(w.date)>=current-28&&civilDay(w.date)<current);
 const previous=valid.filter(w=>civilDay(w.date)>=current-56&&civilDay(w.date)<current-28);
 const change=(a,b)=>b>0?(a-b)/b*100:null;
 const enough=recent.length>=3&&previous.length>=3&&new Set(recent.map(w=>mondayDay(civilDay(w.date)))).size>=2&&new Set(previous.map(w=>mondayDay(civilDay(w.date)))).size>=2;
 // A group may span at most 20% distance, with identical activity and conditions.
 const groups=[];
 for(const w of timed.slice().sort((a,b)=>+a.km-+b.km)){
  const conditions=JSON.stringify([w.type,w.place||'unknown',w.incline??'unknown']);
  let group=groups.find(g=>g.conditions===conditions&&+w.km/g.minKm<=1.2);
  if(!group){group={conditions,minKm:+w.km,ws:[]};groups.push(group)}
  group.ws.push(w);
 }
 const comparable=groups.filter(g=>g.ws.length>=2).map(g=>{
  const ws=g.ws.slice().sort((a,b)=>a.date.localeCompare(b.date)),first=ws[0];
  return {key:g.conditions+'|'+g.minKm,ws,label:`${first.type} · ${first.place==='treadmill'?'bieżnia':first.place==='outdoors'?'teren':'miejsce nieznane'} · ${g.minKm.toLocaleString('pl-PL')}–${Math.max(...ws.map(w=>+w.km)).toLocaleString('pl-PL')} km · nachylenie ${first.incline==null?'nieznane':first.incline+'%'}`};
 });
 const closedLast=allWeeks.get(current-7)?.km||0,closedBefore=allWeeks.get(current-14)?.km||0;
 return {valid,selected,start,end,current,weeks,allWeeks,km:sum(selected),count:selected.length,mean:avg(selected),longest:selected.length?Math.max(...selected.map(w=>+w.km)):null,minutes:timed.length?minutes:null,timedCount:timed.length,pace:timed.length?minutes/sum(timed):null,speed:timed.length?sum(timed)/(minutes/60):null,activeDays:new Set(valid.filter(w=>civilDay(w.date)>=end-29).map(w=>w.date)).size,weeklyMean:sum(selected)/weeks.length,streak,bestStreak,gap:selected.length>1?(civilDay(selected.at(-1).date)-civilDay(selected[0].date))/(selected.length-1):null,recentKm:sum(recent),previousKm:sum(previous),distanceChange:enough?change(avg(recent),avg(previous)):null,volumeChange:enough?change(sum(recent),sum(previous)):null,weekChange:change(closedLast,closedBefore),closedLast,closedBefore,comparable,recordLongest:valid.length?Math.max(...valid.map(w=>+w.km)):null,recordWeek:allWeeks.size?Math.max(...[...allWeeks.values()].map(w=>w.km)):null,recordCount:allWeeks.size?Math.max(...[...allWeeks.values()].map(w=>w.count)):null};
}
let analysisPeriod='12',paceGroup='';
function paceText(value){if(value==null)return '—';const seconds=Math.round(value*60);return Math.floor(seconds/60)+':'+String(seconds%60).padStart(2,'0')}
function fitnessChart(rows,label,unit,pace=false){
 if(!rows.length)return '<p class="empty">Brak danych do wykresu.</p>';
 // Keep charts legible over long histories; the table retains every weekly value.
 const stride=Math.max(1,Math.ceil(rows.length/24)),shown=rows.filter((_,i)=>i%stride===0||i===rows.length-1);
 const max=Math.max(1,...rows.map(r=>r.value)),width=310/Math.max(1,shown.length);
 return `<figure><svg class="chart" viewBox="0 0 360 180" role="img" aria-label="${esc(label)}"><title>${esc(label)}</title>${[0,.5,1].map(f=>`<line class="gridline" x1="42" x2="355" y1="${145-f*120}" y2="${145-f*120}"/><text x="0" y="${148-f*120}">${pace?paceText(max*f):fmt(max*f)}</text>`).join('')}${shown.map((r,i)=>`<rect class="bar" x="${44+i*width}" y="${145-r.value/max*120}" width="${Math.max(2,width*.65)}" height="${r.value/max*120}"><title>${esc(r.date)}: ${pace?paceText(r.value):fmt(r.value)} ${unit}</title></rect>${i%Math.max(1,Math.ceil(shown.length/4))===0?`<text x="${44+i*width}" y="166">${esc(r.date.slice(5))}</text>`:''}`).join('')}</svg><figcaption>${esc(label)} · ${unit}${stride>1?' · wybrane punkty; komplet wartości poniżej':''}</figcaption><details><summary>Dane wykresu</summary>${rows.map(r=>`<div class="between tiny"><span>${esc(r.date)}</span><span>${pace?paceText(r.value):fmt(r.value)} ${unit}</span></div>`).join('')}</details></figure>`;
}
function fitnessCalendar(stats){
 const months=new Map(),counts=new Map();stats.selected.forEach(w=>counts.set(w.date,(counts.get(w.date)||0)+1));
 for(let day=stats.start;day<=stats.end;day++){const date=dayString(day),key=date.slice(0,7);if(!months.has(key))months.set(key,[]);months.get(key).push({date,day})}
 return [...months].map(([month,days])=>`<div class="calendar-month"><h4>${esc(new Date(month+'-15T12:00:00Z').toLocaleDateString('pl-PL',{month:'long',year:'numeric',timeZone:'UTC'}))}</h4><div class="calendar-grid">${['Pn','Wt','Śr','Cz','Pt','So','Nd'].map(d=>`<span class="weekday">${d}</span>`).join('')}${'<span></span>'.repeat((new Date(days[0].day*864e5).getUTCDay()+6)%7)}${days.map(({date})=>`<span class="${counts.has(date)?'active-day':''}" aria-label="${date}: ${counts.get(date)||0} treningów" title="${date}: ${counts.get(date)||0} treningów">${Number(date.slice(8))}</span>`).join('')}</div></div>`).join('');
}
function renderGrowth(){
 const a=fitnessStats(data.workouts,new Date().toLocaleDateString('sv-SE'),analysisPeriod),allStats=fitnessStats(data.workouts,new Date().toLocaleDateString('sv-SE'),'all'),value=(n,unit='')=>n==null?'—':fmt(n)+unit;
 const metrics=items=>`<div class="metrics">${items.map(([label,v])=>`<div><strong>${v}</strong><small>${label}</small></div>`).join('')}</div>`;
 const group=a.comparable.find(g=>g.key===paceGroup)||a.comparable[0];
 const paceRows=group?group.ws.map(w=>({date:w.date,value:+w.minutes/+w.km})):[];
 const early=group?.ws.filter(w=>civilDay(w.date)>=a.current-56&&civilDay(w.date)<a.current-28)||[],late=group?.ws.filter(w=>civilDay(w.date)>=a.current-28&&civilDay(w.date)<a.current)||[];
 const weighted=ws=>ws.reduce((s,w)=>s+(+w.minutes),0)/ws.reduce((s,w)=>s+(+w.km),0);
 const paceChange=early.length>=3&&late.length>=3?(weighted(early)-weighted(late))/weighted(early)*100:null;
 return `<div class="page fitness"><div class="section-header"><small class="eyebrow">ANALIZA TRENINGOWA</small><h2>Twoja kondycja</h2><p class="note">Rzeczywiste kilometry i zapisane treningi. Bez przelicznika wyprawy.</p></div><div class="segmented periods" aria-label="Okres analizy">${[['4','4 tygodnie'],['12','12 tygodni'],['all','Cały okres']].map(([id,label])=>`<button data-period="${id}" class="${analysisPeriod===id?'selected':''}" aria-pressed="${analysisPeriod===id}">${label}</button>`).join('')}</div><p class="note">${dayString(a.start)} – ${dayString(a.end)} · bieżący tydzień jest niepełny. Podsumowanie obejmuje całą historię; wykresy i średnie poniżej — wybrany okres.</p>
 <section class="section-block"><h3>Podsumowanie kondycji</h3>${(()=>{const all=fitnessStats(data.workouts,dayString(a.end),'all');return metrics([['Całkowity dystans',value(all.km,' km')],['Liczba treningów',all.count],['Zapisany czas',value(all.minutes==null?null:all.minutes/60,' h')],['Średnio na trening',value(all.mean,' km')],['Aktywne dni / ostatnie 30 dni',all.activeDays],['Najdłuższy trening',value(all.longest,' km')]])+`<p class="note">Czas zapisano dla ${all.timedCount} z ${all.count} treningów.</p>`})()}</section>
 <section class="section-block"><h3>Wytrzymałość</h3>${metrics([['Średni dystans treningu',value(a.mean,' km')],['Najdłuższy w okresie',value(a.longest,' km')],['Średnio na tydzień',value(a.weeklyMean,' km')],['Ostatnie / poprzednie 4 pełne tygodnie',`${fmt(a.recentKm)} / ${fmt(a.previousKm)} km`]])}<p class="note">Średnia tygodniowa uwzględnia tygodnie bez aktywności i rozpoczęty tydzień.</p>${a.distanceChange!=null?`<p>Średni dystans treningu ${Math.abs(a.distanceChange)<.05?'pozostał bez zmian':(a.distanceChange>0?'wzrósł':'spadł')+' o '+fmt(Math.abs(a.distanceChange))+'%'} w ostatnich czterech pełnych tygodniach względem poprzednich czterech. Kilometraż zmienił się o ${fmt(a.volumeChange)}%.</p>`:'<p class="note">Porównanie trendu wymaga co najmniej 3 treningów w co najmniej 2 tygodniach w każdym z dwóch czterotygodniowych okresów.</p>'}${fitnessChart(a.weeks.map(w=>({date:dayString(w.day),value:w.km})),'Dystans tygodniowy (od poniedziałku)','km')}</section>
 <section class="section-block"><h3>Kondycja i tempo</h3>${metrics([['Średnie tempo',paceText(a.pace)+' min/km'],['Średnia prędkość',value(a.speed,' km/h')]])}<p class="note">Tempo i prędkość obliczamy z sum czasu oraz dystansu wyłącznie treningów z czasem (${a.timedCount}). Tempo nie mierzy VO₂max. Porównujemy ten sam rodzaj, miejsce, nachylenie i dystanse różniące się maksymalnie o 20%; warunki i wysiłek mogą się różnić.</p>${group?`<label for="paceGroup">Porównywalne aktywności</label><select id="paceGroup">${a.comparable.map(g=>`<option value="${esc(g.key)}" ${g.key===group.key?'selected':''}>${esc(g.label)} (${g.ws.length})</option>`).join('')}</select><p class="note">Najlepsze tempo w grupie: ${paceText(Math.min(...paceRows.map(r=>r.value)))} min/km.</p>${fitnessChart(paceRows,'Tempo wybranej grupy · mniej = szybciej','min/km',true)}${paceChange==null?'<p class="note">Trend tempa wymaga po 3 porównywalne treningi w ostatnich i poprzednich 4 pełnych tygodniach.</p>':`<p>Tempo w grupie ${paceChange>=0?'poprawiło się':'zwolniło'} o ${fmt(Math.abs(paceChange))}% względem poprzednich 4 tygodni. To obserwacja treningów, a nie pomiar wydolności tlenowej.</p>`}`:'<p class="empty">Dodaj czas do co najmniej dwóch porównywalnych aktywności, aby zobaczyć wykres tempa.</p>'}</section>
 <section class="section-block"><h3>Regularność i obciążenie</h3>${metrics([['Aktualna seria aktywnych tygodni',a.streak],['Średni odstęp między treningami',value(a.gap,' dni')],['Zmiana ostatniego pełnego tygodnia',value(a.weekChange,'%')]])}<p class="note">Seria może kończyć się w poprzednim tygodniu, jeśli bieżący jeszcze nie zawiera treningu. Odstępy liczone według dat, także dla treningów tego samego dnia.</p>${a.weekChange!=null&&a.weekChange>30?`<p>Objętość wzrosła z ${fmt(a.closedBefore)} do ${fmt(a.closedLast)} km (${fmt(a.weekChange)}%) w dwóch ostatnich pełnych tygodniach. To sygnał dużej zmiany kilometrażu (próg informacyjny 30%), bez oceny przetrenowania.</p>`:''}${fitnessChart(a.weeks.map(w=>({date:dayString(w.day),value:w.count})),'Treningi w tygodniu','treningów')}<details ${analysisPeriod==='4'?'open':''}><summary>Kalendarz aktywności · złoto oznacza aktywny dzień</summary>${fitnessCalendar(a)}</details></section>
 <section class="section-block"><h3>Rekordy osobiste</h3><p class="note">Rekordy całej historii. Tempo porównujemy w grupach podobnych aktywności.</p><ul class="record-list">${[['Najdłuższy trening',value(a.recordLongest,' km')],['Największy dystans tygodniowy',value(a.recordWeek,' km')],['Najwięcej treningów w tygodniu',value(a.recordCount)],['Najdłuższa seria aktywnych tygodni',value(a.valid.length?a.bestStreak:null)]].map(([label,v])=>`<li>${label}: <b>${v}</b></li>`).join('')}${allStats.comparable.map(g=>`<li>${esc(g.label)}: <b>${paceText(Math.min(...g.ws.map(w=>+w.minutes/+w.km)))} min/km</b></li>`).join('')}</ul></section><section class="section-block">${sealsPanel()}</section></div>`;
}

/* ---- Mapa i postęp na ilustrowanym szlaku ---- */
// Routes are anchored to the NEW chapter artwork, as percentages of each image.
// This avoids scaling errors between the 9:16 first illustration and 2:3 others.
const CHAPTER_ANCHORS={
  1:[[14,73.5],[24,65.5],[39.6,54],[45,48.5],[68.2,35.4],[79,29.5],[88,20.2]],
  2:[[33.2,16.4],[47,30.8],[65.3,41.8],[68.2,57.4],[36.5,86.7]],
  3:[[19,10.6],[45,29.2],[51.8,52.4],[77.2,86.2]],
  4:[[68.6,84.5],[54.2,68.2],[56.4,56.6],[48.1,40.1],[68.3,17.5],[83,12],[75.5,5.7]]
};
function chapterVisualStops(ch){
 const meta=CHAPTERS[ch-1], chapterStops=stops.filter(s=>s.km>=meta.start&&s.km<=meta.goal), anchors=CHAPTER_ANCHORS[ch];
 return chapterStops.map((s,i)=>({...s,x:anchors[i][0],y:anchors[i][1]}));
}
function pointAtKm(ch,km){
 const pts=chapterVisualStops(ch);
 if(km<=pts[0].km)return pts[0];
 for(let i=0;i<pts.length-1;i++){
  const a=pts[i],b=pts[i+1];if(km>b.km)continue;
  const t=Math.max(0,Math.min(1,(km-a.km)/(b.km-a.km)));
  return {x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t};
 }
 return pts.at(-1);
}
let recentUnlockNames=[];
function visibleKmForChapter(ch,distance,currentChapter){
  const meta=CHAPTERS[ch-1];
  if(ch<currentChapter)return meta.goal;
  if(ch>currentChapter)return meta.start;
  return Math.max(meta.start,Math.min(meta.goal,distance));
}
function mapProgressOverlay(ch,distance,currentChapter){
  const pts=chapterVisualStops(ch),visibleKm=visibleKmForChapter(ch,distance,currentChapter);
  const currentPoint=pointAtKm(ch,visibleKm);
  const nodes=pts.map((p,idx)=>{
    const state=p.km<visibleKm-0.01?'done':Math.abs(p.km-visibleKm)<0.6?'current':(p.km<=visibleKm+0.01?'done':'future');
    const fresh=p.km<=visibleKm&&recentUnlockNames.includes(p.name)?' new':'';
    return `<button class="map-node ${state}${fresh}" data-stop-name="${esc(p.name)}" data-stop-km="${p.km}" aria-label="${esc(p.name)}" style="left:${p.x}%;top:${p.y}%"></button>`;
  }).join('');
  return `<div class="map-progress-overlay">${nodes}<div aria-hidden="true" class="map-traveler ${animating?'is-moving':''}" style="left:${currentPoint.x}%;top:${currentPoint.y}%"><span></span></div></div>`;
}
function stopIndexByKm(km){return stops.findIndex(s=>Math.abs(s.km-km)<1e-9)}
function openStopByVisual(km){const idx=stopIndexByKm(km);if(idx>=0)goToStop(idx)}
function renderMap(){
 const distance=mapK(),currentChapter=chapterByDistance(Math.min(distance,TOTAL-.01)).id;
 const chapter=Math.max(1,Math.min(currentChapter,selectedChapter||currentChapter));
 const meta=CHAPTERS[chapter-1];
 const roman=meta.roman;
 const unlockedVisuals=chapterVisualStops(chapter).filter(s=>s.km<=visibleKmForChapter(chapter,distance,currentChapter)+0.01).length;
 const totalVisuals=chapterVisualStops(chapter).length;
 const chapterDistance=Math.min(Math.max(0,distance-meta.start),meta.goal-meta.start);
 const lastWorkout=[...data.workouts].sort((a,b)=>b.date.localeCompare(a.date))[0];
 const lastStop=[...discovered()].reverse()[0];
 const sealsCount=Object.keys(data.seals||{}).length;
 const swipeHint=currentChapter>1?'<div class="map-swipe-hint">Przesuń palcem w lewo lub w prawo, aby przeglądać odblokowane rozdziały.</div>':'';
 return `<section class="map-shell"><div class="map-hero"><div class="map-copy"><small class="eyebrow">ROZDZIAŁ ${roman} · ${fmt(meta.start)}–${fmt(meta.goal)} KM SZLAKU</small><h2>${esc(meta.title)}</h2><p>${esc(meta.intro)}</p></div><div class="map-stage" id="mapStage" data-chapter="${chapter}" aria-label="Mapa rozdziału ${roman}"><div class="map-art" id="mapArt"><img class="map-landscape chapter-portrait-image" width="${chapter===1?864:1024}" height="1536" src="${MAP_IMAGES[chapter]}" alt="${MAP_ALTS[chapter]}" draggable="false">${mapProgressOverlay(chapter,distance,currentChapter)}</div></div></div><div class="map-controls"><div class="map-tools"><button data-zoom="in" aria-label="Przybliż">+</button><button data-zoom="out" aria-label="Oddal">−</button><button data-zoom="reset" aria-label="Wyśrodkuj">⌖</button></div><div class="map-bottom-hud"><div class="map-bottom-row"><span class="hud-pill map-chapter-pill">ROZDZIAŁ ${roman}</span><span class="hud-pill main-km">${fmt(chapterDistance)} / ${fmt(meta.goal-meta.start)} km</span></div><span class="hud-pill discovery">${unlockedVisuals} z ${totalVisuals} odkrytych punktów</span></div></div><div class="map-add"><button class="primary" id="newWorkout">+ Dodaj aktywność</button></div><div class="chapter-track" aria-label="Postęp rozdziałów">${CHAPTERS.map(c=>`<button class="chapter-dot ${c.id===chapter?'on':''} ${c.id>currentChapter?'future':''}" data-chapter-select="${c.id}" ${c.id>currentChapter?'disabled':''} aria-label="Rozdział ${c.roman}" aria-current="${c.id===chapter?'step':'false'}"></button>`).join('')}</div>${swipeHint}<div class="map-lower"><small class="eyebrow">NAJWAŻNIEJSZE ZAPISKI</small><h2>Ślady na szlaku</h2><div class="journey-feed"><button class="journey-feed-item" data-view-jump="training"><span class="feed-icon">↗</span><span><small>OSTATNI TRENING</small><strong>${lastWorkout?esc(lastWorkout.type):'Rozpocznij wędrówkę'}</strong><span>${lastWorkout?`${esc(lastWorkout.date)} · ${fmt(lastWorkout.km)} km${lastWorkout.minutes?' · '+fmt(lastWorkout.minutes)+' min':''}`:'Dodaj pierwszy trening, aby ruszyć ze szlakiem.'}</span></span><span class="feed-arr">›</span></button><button class="journey-feed-item" data-view-jump="chronicle"><span class="feed-icon">⌖</span><span><small>ODWIEDZONA LOKACJA</small><strong>${lastStop?esc(lastStop.name):'Przed Tobą pierwsze odkrycie'}</strong><span>${lastStop?`${fmt(lastStop.km)} km szlaku`:'Pierwsze miejsce odsłoni się po treningu.'}</span></span><span class="feed-arr">›</span></button><button class="journey-feed-item" data-view-jump="growth"><span class="feed-icon">✧</span><span><small>ZDOBYTE ODZNAKI</small><strong>${sealsCount?`${sealsCount} odznak`:'Pierwsza odznaka czeka'}</strong><span>${sealsCount?'Sprawdź cały rozwój wędrowca.':'Regularność szybko odblokuje pierwszą nagrodę.'}</span></span><span class="feed-arr">›</span></button></div></div></section>`;
}
function applyMapTransform(){
 const art=$('#mapArt'),stage=$('#mapStage');
 if(!art||!stage)return;
 const mx=stage.clientWidth*(mapZoom-1)/2,my=stage.clientHeight*(mapZoom-1)/2;
 mapPan={x:Math.max(-mx,Math.min(mx,mapPan.x)),y:Math.max(-my,Math.min(my,mapPan.y))};
 art.style.transform=`translate(${mapPan.x}px,${mapPan.y}px) scale(${mapZoom})`;
 stage.classList.toggle('is-zoomed',mapZoom>1);
 stage.style.touchAction=mapZoom>1?'none':'pan-y';
}
function attachMap(){
 mapZoom=1;mapPan={x:0,y:0};
 const art=$('#mapArt'),stage=$('#mapStage');if(!art||!stage)return;
 applyMapTransform();
 document.querySelectorAll('[data-zoom]').forEach(b=>b.onclick=()=>{if(b.dataset.zoom==='reset'){mapZoom=1;mapPan={x:0,y:0}}else mapZoom=Math.max(1,Math.min(3,mapZoom+(b.dataset.zoom==='in'?.35:-.35)));applyMapTransform()});
 let down=null,dragged=false;
 stage.onpointerdown=e=>{dragged=false;if(mapZoom===1||e.target.closest('[data-zoom]'))return;down={x:e.clientX,y:e.clientY,px:mapPan.x,py:mapPan.y}};
 stage.onpointermove=e=>{if(!down)return;if(Math.hypot(e.clientX-down.x,e.clientY-down.y)>8){dragged=true;stage.setPointerCapture(e.pointerId)}mapPan={x:down.px+e.clientX-down.x,y:down.py+e.clientY-down.y};applyMapTransform()};
 stage.onpointerup=stage.onpointercancel=()=>down=null;
 stage.onclick=e=>{const btn=e.target.closest('[data-stop-km]');if(btn&&!dragged)openStopByVisual(+btn.dataset.stopKm)};
 document.querySelectorAll('[data-chapter-select]').forEach(btn=>btn.onclick=()=>{selectedChapter=+btn.dataset.chapterSelect;render()});
}
function bindChapterSwipe(){
 const stage=document.getElementById('mapStage');if(!stage)return;
 let start=null;
 stage.addEventListener('touchcancel',()=>start=null,{passive:true});
 stage.addEventListener('touchstart',e=>{if(animating||e.touches.length!==1||mapZoom>1){start=null;return}const t=e.touches[0];start={x:t.clientX,y:t.clientY}}, {passive:true});
 stage.addEventListener('touchend',e=>{if(!start||mapZoom>1)return;const t=e.changedTouches[0];const dx=t.clientX-start.x,dy=t.clientY-start.y;start=null;
   if(Math.abs(dx)<48||Math.abs(dx)<Math.abs(dy)*1.25)return;
   const current=chapterByDistance(Math.min(mapK(),TOTAL-.01)).id;
   const selected=selectedChapter||current;
   const n=Math.max(1,Math.min(current,selected+(dx<0?1:-1)));
   if(n!==selected){selectedChapter=n;mapZoom=1;mapPan={x:0,y:0};render();}
 },{passive:true});
}
let trailFrame=0,trailTimer=0,trailVersion=0;
function finishTrail(){
 cancelAnimationFrame(trailFrame);clearTimeout(trailTimer);trailVersion++;
 animating=false;displayK=null;recentUnlockNames=[];
}
function animateTrail(from,to,done){
 if(reduceMotion()||to<=from){displayK=null;animating=false;done();return}
 const version=trailVersion,duration=Math.min(3200,1100+(to-from)*8),t0=performance.now();
 animating=true;
 const step=now=>{
  if(version!==trailVersion)return;
  const p=Math.min(1,(now-t0)/duration),ease=p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;
  displayK=from+(to-from)*ease;
  const chapter=chapterByDistance(Math.min(displayK,TOTAL-.01)).id;
  selectedChapter=chapter;
  let stage=$('#mapStage');if(!stage){finishTrail();return}
  if(+stage.dataset.chapter!==chapter){render();stage=$('#mapStage');stage.scrollIntoView({block:'start',behavior:'auto'})}
  const point=pointAtKm(chapter,displayK),marker=stage.querySelector('.map-traveler');
  marker.classList.add('is-moving');marker.style.left=point.x+'%';marker.style.top=point.y+'%';
  stage.querySelectorAll('[data-stop-km]').forEach(btn=>{
   const km=+btn.dataset.stopKm;btn.classList.toggle('done',km<=displayK);btn.classList.toggle('future',km>displayK);
   btn.classList.toggle('new',km<=displayK&&recentUnlockNames.includes(btn.dataset.stopName));
  });
  const meta=CHAPTERS[chapter-1];
  $('.main-km').textContent=`${fmt(Math.max(0,displayK-meta.start))} / ${fmt(meta.goal-meta.start)} km`;
  $('.hud-pill.discovery').textContent=`${chapterVisualStops(chapter).filter(s=>s.km<=displayK).length} z ${chapterVisualStops(chapter).length} odkrytych punktów`;
  if(p<1)trailFrame=requestAnimationFrame(step);else{animating=false;displayK=null;done()}
 };
 trailFrame=requestAnimationFrame(step);
}
function celebrate(before){
 finishTrail();
 const after=travel(),reached=stops.filter(s=>s.km>before&&s.km<=after),seals=syncSeals(false);
 recentUnlockNames=reached.map(s=>s.name);
 revealQueue=[...reached.map(stop=>({type:'stop',stop})),...seals.map(seal=>({type:'seal',seal}))];
 const complete=()=>{render();trailTimer=setTimeout(()=>{recentUnlockNames=[];if(revealQueue.length)showReveal()},reduceMotion()?0:450)};
 if(after<=before){complete();return}
 view='map';focused=null;selectedChapter=chapterByDistance(Math.min(before,TOTAL-.01)).id;displayK=before;render();
 $('#mapStage')?.scrollIntoView({block:'start',behavior:'auto'});
 trailTimer=setTimeout(()=>animateTrail(before,after,complete),reduceMotion()?0:180);
}

function render(){document.body.classList.toggle('view-map',view==='map');document.body.classList.toggle('view-chronicle',view==='chronicle');let labels={map:'Droga Pierścienia',training:'Dziennik treningów',chronicle:'Kronika podróży',growth:'Twoja kondycja'};$('#pageTitle').textContent=labels[view];$('#eyebrow').textContent=view==='map'?'WYPRAWA I • DROGA FRODA':'ŚRÓDZIEMIE • WYPRAWA I';$('#screen').innerHTML={map:renderMap,training:renderTraining,chronicle:renderChronicle,growth:renderGrowth}[view]();document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));$('#newWorkout')?.addEventListener('click',()=>workoutSheet());document.querySelectorAll('[data-period]').forEach(b=>b.onclick=()=>{analysisPeriod=b.dataset.period;render()});$('#paceGroup')?.addEventListener('change',e=>{paceGroup=e.target.value;render()});$('#importBackup')?.addEventListener('click',()=>$('#importFile').click());if(view==='map'){attachMap();bindChapterSwipe()}if(view==='chronicle')bindChronicle(); document.querySelectorAll('[data-view-jump]').forEach(b=>b.onclick=()=>setView(b.dataset.viewJump));$('#journalToggle')?.addEventListener('click',()=>{journalAll=!journalAll;render()})}

// Initialize only after all application state has been declared.
$('#settingsBtn').onclick=settings;document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>setView(b.dataset.view));$('#screen').addEventListener('click',e=>{const b=e.target.closest('[data-edit],[data-stop],[data-seal]');if(b?.dataset.seal)sealSheet(b.dataset.seal);else if(b?.dataset.edit)workoutSheet(b.dataset.edit);else if(b?.dataset.stop!==undefined)goToStop(+b.dataset.stop)});$('#overlay').addEventListener('click',e=>{if(e.target.id==='overlay')closeSheet()});syncSeals(true);try{render()}catch(error){console.error('Błąd ekranu Śródziemia',error);const target=document.querySelector('#screen');if(target){target.innerHTML='<section class="app-error"><h2>Nie udało się otworzyć kroniki</h2><p>Wystąpił problem podczas wyświetlania wyprawy. Twoje treningi nie zostały usunięte.</p><pre id="errorInfo"></pre><button id="retryRender" class="primary">Spróbuj ponownie</button></section>';target.querySelector('#errorInfo').textContent=String(error&&error.message||error);target.querySelector('#retryRender').onclick=()=>location.reload();}}if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
