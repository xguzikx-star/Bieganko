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
function journalPanel(){
 const all=journalEntries().reverse();if(!all.length)return '';
 const list=journalAll?all:all.slice(0,6);
 return `<div class="panel journal"><h3 class="mini-title">Dziennik wyprawy</h3>${list.map(e=>`<article class="journal-entry"><div class="journal-meta"><span>${esc(e.w.date)}</span><span>okolice: ${esc(e.place)}</span></div><p>${esc(e.text)}</p>${e.w.notes?`<p class="journal-note">„${esc(e.w.notes)}”</p>`:''}</article>`).join('')}${all.length>6?`<button class="link-btn" id="journalToggle">${journalAll?'Pokaż mniej':'Pokaż wszystkie wpisy ('+all.length+')'}</button>`:''}</div>`;
}
function sealSheet(id){
 const s=SEALS.find(x=>x.id===id),e=data.seals?.[id];if(!s)return;
 sheet(`<div class="seal-sheet">${sealHtml(s,!!e,true)}<small class="eyebrow">${e?'ODZNAKA ZDOBYTA · '+new Date(e).toLocaleDateString('pl-PL'):'ODZNAKA DO ZDOBYCIA'}</small><h2>${esc(s.name)}</h2><p>${esc(s.desc)}</p></div>`);
}

function segmentsHtml(rows){return rows.map((r,i)=>`<div class="two segment" style="grid-template-columns:1.1fr .8fr .9fr auto"><select aria-label="Rodzaj odcinka" data-seg="kind"><option ${r.kind==='Marsz'?'selected':''}>Marsz</option><option ${r.kind==='Bieg'?'selected':''}>Bieg</option><option ${r.kind==='Rozgrzewka'?'selected':''}>Rozgrzewka</option><option ${r.kind==='Schłodzenie'?'selected':''}>Schłodzenie</option></select><input aria-label="Minuty odcinka" type="number" min="0.1" step="0.1" data-seg="minutes" value="${r.minutes||''}" placeholder="min"><input aria-label="Prędkość km/h" type="number" min="0" step="0.1" data-seg="speed" value="${r.speed||''}" placeholder="km/h"><button class="link-btn" type="button" data-remove-seg="${i}" aria-label="Usuń odcinek">×</button></div>`).join('')}
function workoutSheet(id=null){let old=data.workouts.find(w=>w.id===id)||{},detail=!!old.segments?.length,segments=(old.segments||[{kind:'Rozgrzewka',minutes:5,speed:5},{kind:'Bieg',minutes:2,speed:8},{kind:'Marsz',minutes:3,speed:5.5}]);function content(){sheet(`<h2>${id?'Edytuj trening':'Nowa aktywność'}</h2><form id="workoutForm"><div class="field"><label>Data</label><input required name="date" type="date" value="${esc(old.date||new Date().toLocaleDateString('sv-SE'))}" max="${new Date().toLocaleDateString('sv-SE')}"></div><div class="field"><label>Rodzaj aktywności</label><select name="type"><option ${old.type==='Marsz'?'selected':''}>Marsz</option><option ${old.type==='Bieg'?'selected':''}>Bieg</option><option ${old.type==='Interwały'?'selected':''}>Interwały</option></select></div><div class="segmented"><button type="button" data-place="treadmill" class="${old.place!=='outdoors'?'selected':''}">Bieżnia</button><button type="button" data-place="outdoors" class="${old.place==='outdoors'?'selected':''}">Teren</button></div><div class="two"><div class="field"><label>Dystans (km)</label><input name="km" required type="number" inputmode="decimal" min="0.01" step="0.01" value="${esc(old.km??'')}"></div><div class="field"><label>Czas (min, opcjonalnie)</label><input name="minutes" type="number" inputmode="decimal" min="0" step="0.1" value="${esc(old.minutes??'')}"></div></div><div class="segmented"><button type="button" data-detail="off" class="${!detail?'selected':''}">Szybki zapis</button><button type="button" data-detail="on" class="${detail?'selected':''}">Dokładne interwały</button></div><div id="details" ${detail?'':'hidden'}><div class="field"><label>Segmenty: rodzaj / czas min / km/h</label><div id="segments" style="display:grid;gap:7px">${segmentsHtml(segments)}</div><button type="button" class="secondary" id="addSegment">+ Dodaj odcinek</button></div><p class="note">Segmenty pomagają analizować trening. Podstawą drogi jest wpisany dystans z bieżni, bez automatycznego wyliczania.</p></div><div class="two"><div class="field"><label>Najdłuższy ciągły bieg (min)</label><input name="longestRun" type="number" min="0" step="0.1" value="${esc(old.longestRun??'')}"></div><div class="field"><label>Wysiłek (1–10)</label><input name="rpe" type="number" min="1" max="10" step="1" value="${esc(old.rpe??'')}"></div></div><div class="two"><div class="field"><label>Łączny czas biegu (min)</label><input name="runMinutes" type="number" min="0" step="0.1" value="${esc(old.runMinutes??'')}"></div><div class="field"><label>Nachylenie bieżni (%)</label><input name="incline" type="number" min="0" step="0.5" value="${esc(old.incline??'')}"></div></div><div class="field"><label>Notatka</label><textarea name="notes" rows="2">${esc(old.notes??'')}</textarea></div><label class="tiny"><input type="checkbox" name="test" ${old.test?'checked':''}> To próba porównawcza</label><div class="sheet-actions"><button type="submit" class="primary">Zapisz trening</button>${id?'<button type="button" class="secondary danger" id="deleteWorkout">Usuń</button>':''}</div></form>`);let place=old.place||'treadmill';$('#sheet').querySelectorAll('[data-place]').forEach(btn=>btn.onclick=()=>{place=btn.dataset.place;$('#sheet').querySelectorAll('[data-place]').forEach(x=>x.classList.toggle('selected',x===btn))});$('#sheet').querySelectorAll('[data-detail]').forEach(btn=>btn.onclick=()=>{detail=btn.dataset.detail==='on';$('#details').hidden=!detail;$('#sheet').querySelectorAll('[data-detail]').forEach(x=>x.classList.toggle('selected',x===btn))});function collectSegments(){return [...$('#segments').querySelectorAll('.segment')].map(el=>({kind:el.querySelector('[data-seg="kind"]').value,minutes:+el.querySelector('[data-seg="minutes"]').value,speed:+el.querySelector('[data-seg="speed"]').value})).filter(x=>x.minutes>0)}$('#addSegment').onclick=()=>{segments=collectSegments();segments.push({kind:'Marsz',minutes:3,speed:5});$('#segments').innerHTML=segmentsHtml(segments);bindRemove()};function bindRemove(){$('#segments').querySelectorAll('[data-remove-seg]').forEach(b=>b.onclick=()=>{segments=collectSegments();segments.splice(+b.dataset.removeSeg,1);$('#segments').innerHTML=segmentsHtml(segments);bindRemove()})}bindRemove();$('#workoutForm').onsubmit=e=>{e.preventDefault();const fd=new FormData(e.target),w={...old,id:id||crypto.randomUUID(),date:String(fd.get('date')),type:String(fd.get('type')),place,km:+fd.get('km'),minutes:fd.get('minutes')===''?null:+fd.get('minutes'),longestRun:fd.get('longestRun')===''?null:+fd.get('longestRun'),rpe:fd.get('rpe')===''?null:+fd.get('rpe'),runMinutes:fd.get('runMinutes')===''?null:+fd.get('runMinutes'),incline:fd.get('incline')===''?null:+fd.get('incline'),notes:String(fd.get('notes')),test:fd.has('test'),segments:detail?collectSegments():[]};if(!Number.isFinite(w.km)||w.km<=0||w.date>new Date().toLocaleDateString('sv-SE'))return toast('Sprawdź dystans i datę');const before=travel();if(id)data.workouts=data.workouts.map(t=>t.id===id?w:t);else data.workouts.push(w);localStorage.setItem(KEY,JSON.stringify(data));closeSheet();toast(`Zapisano ${fmt(w.km)} km. Szlak wydłużył się o ${fmt(w.km*SCALE)} km.`);celebrate(before)};if(id)$('#deleteWorkout').onclick=()=>{if(confirm('Usunąć ten trening? Pozycja na mapie zostanie przeliczona.')){data.workouts=data.workouts.filter(w=>w.id!==id);save();closeSheet();toast('Trening usunięty')}}}content()}
function settings(){sheet(`<h2>Ustawienia i dane</h2><div class="panel"><p class="eyebrow">POSTĘP PODRÓŻY</p><div class="between"><b>Przelicznik</b><span>1 : 3</span></div><p class="note">${fmt(real())} km Twojej drogi zasiliło dotąd ${fmt(travel())} km szlaku.</p></div><div class="panel"><h3 class="mini-title">Kopia zapasowa</h3><p class="note">Dane znajdują się wyłącznie na tym urządzeniu. Regularnie pobieraj kopię JSON i zapisuj ją w Plikach lub iCloud Drive.</p><p class="note">${data.lastBackup?"Ostatnia kopia: "+new Date(data.lastBackup).toLocaleDateString("pl-PL"):"Nie pobrano jeszcze żadnej kopii."}</p><button class="primary" id="exportData">Pobierz kopię JSON</button><button class="secondary" id="importData" style="width:100%;margin-top:9px">Wczytaj kopię JSON</button></div><p class="note">Wersja 5.7</p>`);$('#exportData').onclick=exportBackup;$('#importData').onclick=()=>$('#importFile').click()}
$('#importFile').addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;try{let j=JSON.parse(await file.text());if(!Array.isArray(j.workouts)||j.workouts.some(w=>!(w.id&&/^\d{4}-\d\d-\d\d$/.test(w.date)&&Number.isFinite(+w.km)&&+w.km>0)))throw Error('Zły format danych');if(confirm(`Wczytać ${j.workouts.length} treningów? Obecne dane zostaną zastąpione.`)){data={...j,schema:j.schema||1,created:j.created||new Date().toISOString(),workouts:j.workouts};syncSeals(true);save();closeSheet();toast('Kopia została przywrócona')}}catch(err){toast('Nieprawidłowy plik kopii: '+err.message)}e.target.value=''});

/* ---- Ekrany aplikacji ---- */

function renderTraining(){
 let ws=[...data.workouts].sort((a,b)=>b.date.localeCompare(a.date));
 const hours=ws.reduce((s,w)=>s+(+w.minutes||0),0)/60;
 return `<div class="page"><section class="section-block"><div class="section-header"><small class="eyebrow">TWOJA AKTYWNOŚĆ</small><h2>Każdy krok ma znaczenie</h2><p class="section-lead">Zapisuj treningi i buduj postęp na szlaku.</p></div><div class="tag-row"><span class="pill">${ws.length} treningów</span><span class="pill">${fmt(real())} km</span><span class="pill">${fmt(hours)} h</span></div><div class="cta-stack"><button class="primary" id="newWorkout">+ Zapisz trening</button><button class="secondary" id="importBackup">Importuj kopię JSON</button></div></section><section class="section-block"><small class="eyebrow">HISTORIA AKTYWNOŚCI</small><h3 class="soft-title" style="font-size:46px;margin:6px 0 10px">Ostatnie wpisy</h3><div class="training-list">${ws.length?ws.map(w=>`<article class="entry"><div class="entry-head"><div><div class="entry-title">${esc(w.type)}</div><div class="entry-meta">${esc(w.date)} · ${w.place==='treadmill'?'Bieżnia':'Teren'}${w.minutes?' · '+fmt(w.minutes)+' min':''}${w.runMinutes?' · bieg '+fmt(w.runMinutes)+' min':''}${w.heartRate?' · ❤ '+fmt(w.heartRate)+' bpm':''}</div></div><div class="entry-title" style="font-size:40px">${fmt(w.km)} km</div></div><div class="entry-actions"><button class="secondary" data-edit="${esc(w.id)}">Edytuj</button></div></article>`).join(''):'<div class="empty">Jeszcze nie ma treningów. Dodaj pierwszy wpis, aby rozpocząć podróż.</div>'}</div></section></div>`;
}

function renderChronicle(){
 const done=discovered().slice().reverse();
 const future=stops.filter(s=>s.km>travel());
 const nextStops=future.slice(0,4);
 return `<div class="page"><section class="section-block"><div class="section-header"><small class="eyebrow">KRONIKA PODRÓŻY</small><h2>Odkryte miejsca</h2><p class="section-lead">Kolejne etapy wyprawy odsłaniają się wraz z każdym zapisanym treningiem.</p></div><div class="tag-row"><span class="pill">${done.length} / ${stops.length} odkryć</span><span class="pill">${fmt(travel())} km szlaku</span></div></section><section class="section-block">${journalPanel()}</section><section class="section-block chronicle-list">${done.length?done.map(s=>`<button class="discover discover-rich" data-stop="${stops.indexOf(s)}" style="width:100%;text-align:left;color:inherit"><img src="${stopArt(s)}" alt="${esc(s.name)}"><div><small class="eyebrow">${s.kind==='major'?'KAMIEŃ MILOWY':'ODKRYCIE'} · ${fmt(s.km)} KM SZLAKU</small><h3 class="soft-title" style="font-size:34px;margin:4px 0 6px">${esc(s.name)}</h3><div class="note">${esc(s.desc)}</div></div></button>`).join(''):'<div class="empty">Pierwsze miejsca pojawią się tutaj po rozpoczęciu treningów.</div>'}</section><section class="section-block">${nextStops.length?`<small class="eyebrow">PRZED TOBĄ</small><h3 class="soft-title" style="font-size:40px;margin:6px 0 10px">Najbliższe odkrycia</h3>${nextStops.map(s=>`<div class="list-row"><div><strong>${esc(s.name)}</strong><small>Za ${fmt((s.km-travel())/SCALE)} km Twojej drogi</small></div></div>`).join('')}`:''}</section></div>`;
}

function renderGrowth(){
 let ws=data.workouts,minutes=ws.reduce((s,w)=>s+(+w.minutes||0),0),best=Math.max(0,...ws.filter(w=>w.type==='Bieg').map(w=>+w.km)),maxRun=Math.max(0,...ws.map(w=>+(w.longestRun||0))),withPace=ws.filter(w=>w.minutes>0&&w.km>0),totalPace=withPace.reduce((s,w)=>s+w.minutes,0)/Math.max(.01,withPace.reduce((s,w)=>s+w.km,0));
 return `<div class="page"><section class="section-block"><div class="section-header"><small class="eyebrow">TWOJA DROGA</small><h2>Postęp Wędrowca</h2><p class="section-lead">Kilometry, regularność i kolejne osobiste rekordy.</p></div><div class="summary-strip"><div class="item"><span class="value">${fmt(real())}</span><span class="label">Przebyte km</span></div><div class="item"><span class="value">${fmt(minutes/60)}</span><span class="label">Godziny</span></div><div class="item"><span class="value">${weeklyStreak()}</span><span class="label">Seria tygodni</span></div></div></section><section class="section-block"><small class="eyebrow">POSTĘP</small><h3 class="soft-title" style="font-size:42px;margin:6px 0 10px">Ostatnie 8 tygodni</h3><div class="chart-wrap">${barsChart()}</div></section><section class="section-block"><div class="mini-grid"><div class="stat"><b>${fmt(best)}</b><span>Najdłuższy bieg (km)</span></div><div class="stat"><b>${fmt(maxRun)}</b><span>Najdłuższy bieg ciągły (min)</span></div><div class="stat"><b>${withPace.length?fmt(totalPace):'—'}</b><span>Średnie tempo min/km</span></div></div></section><section class="section-block">${sealsPanel()}</section></div>`;
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
 return `<section class="map-shell"><div class="map-copy"><small class="eyebrow">ROZDZIAŁ ${roman} · ${fmt(meta.start)}–${fmt(meta.goal)} KM SZLAKU</small><h2>${esc(meta.title)}</h2><p>${esc(meta.intro)}</p></div><div class="map-stage" id="mapStage" data-chapter="${chapter}" aria-label="Mapa rozdziału ${roman}"><div class="map-art" id="mapArt"><img class="map-landscape chapter-portrait-image" src="${MAP_IMAGES[chapter]}" alt="${MAP_ALTS[chapter]}" draggable="false">${mapProgressOverlay(chapter,distance,currentChapter)}</div></div><div class="map-controls"><div class="map-tools"><button data-zoom="in" aria-label="Przybliż">+</button><button data-zoom="out" aria-label="Oddal">−</button><button data-zoom="reset" aria-label="Wyśrodkuj">⌖</button></div><div class="map-bottom-hud"><div class="map-bottom-row"><span class="hud-pill map-chapter-pill">ROZDZIAŁ ${roman}</span><span class="hud-pill main-km">${fmt(chapterDistance)} / ${fmt(meta.goal-meta.start)} km</span></div><span class="hud-pill discovery">${unlockedVisuals} z ${totalVisuals} odkrytych punktów</span></div></div><div class="chapter-track" aria-label="Postęp rozdziałów">${CHAPTERS.map(c=>`<button class="chapter-dot ${c.id===chapter?'on':''} ${c.id>currentChapter?'future':''}" data-chapter-select="${c.id}" ${c.id>currentChapter?'disabled':''} aria-label="Rozdział ${c.roman}" aria-current="${c.id===chapter?'step':'false'}"></button>`).join('')}</div>${swipeHint}<div class="map-lower"><small class="eyebrow">NAJWAŻNIEJSZE ZAPISKI</small><h2>Ślady na szlaku</h2><div class="journey-feed"><button class="journey-feed-item" data-view-jump="training"><span class="feed-icon">↗</span><span><small>OSTATNI TRENING</small><strong>${lastWorkout?esc(lastWorkout.type):'Rozpocznij wędrówkę'}</strong><span>${lastWorkout?`${esc(lastWorkout.date)} · ${fmt(lastWorkout.km)} km${lastWorkout.minutes?' · '+fmt(lastWorkout.minutes)+' min':''}`:'Dodaj pierwszy trening, aby ruszyć ze szlakiem.'}</span></span><span class="feed-arr">›</span></button><button class="journey-feed-item" data-view-jump="chronicle"><span class="feed-icon">⌖</span><span><small>ODWIEDZONA LOKACJA</small><strong>${lastStop?esc(lastStop.name):'Przed Tobą pierwsze odkrycie'}</strong><span>${lastStop?`${fmt(lastStop.km)} km szlaku`:'Pierwsze miejsce odsłoni się po treningu.'}</span></span><span class="feed-arr">›</span></button><button class="journey-feed-item" data-view-jump="growth"><span class="feed-icon">✧</span><span><small>ZDOBYTE ODZNAKI</small><strong>${sealsCount?`${sealsCount} odznak`:'Pierwsza odznaka czeka'}</strong><span>${sealsCount?'Sprawdź cały rozwój wędrowca.':'Regularność szybko odblokuje pierwszą nagrodę.'}</span></span><span class="feed-arr">›</span></button></div></div></section>`;
}
function applyMapTransform(){
 const art=$('#mapArt'),stage=$('#mapStage');
 if(!art||!stage)return;
 const mx=stage.clientWidth*(mapZoom-1)/2,my=stage.clientHeight*(mapZoom-1)/2;
 mapPan={x:Math.max(-mx,Math.min(mx,mapPan.x)),y:Math.max(-my,Math.min(my,mapPan.y))};
 art.style.transform=`translate(${mapPan.x}px,${mapPan.y}px) scale(${mapZoom})`;
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

function render(){document.body.classList.toggle('view-map',view==='map');let labels={map:'Droga Pierścienia',training:'Dziennik treningów',chronicle:'Kronika podróży',growth:'Twoja kondycja'};$('#pageTitle').textContent=labels[view];$('#eyebrow').textContent=view==='map'?'WYPRAWA I • DROGA FRODA':'ŚRÓDZIEMIE • WYPRAWA I';$('#screen').innerHTML={map:renderMap,training:renderTraining,chronicle:renderChronicle,growth:renderGrowth}[view]();document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===view));$('#newWorkout')?.addEventListener('click',()=>workoutSheet());$('#importBackup')?.addEventListener('click',()=>$('#importFile').click());if(view==='map'){attachMap();bindChapterSwipe()} document.querySelectorAll('[data-view-jump]').forEach(b=>b.onclick=()=>setView(b.dataset.viewJump));$('#journalToggle')?.addEventListener('click',()=>{journalAll=!journalAll;render()})}

// Initialize only after all application state has been declared.
$('#settingsBtn').onclick=settings;document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>setView(b.dataset.view));$('#screen').addEventListener('click',e=>{const b=e.target.closest('[data-edit],[data-stop],[data-seal]');if(b?.dataset.seal)sealSheet(b.dataset.seal);else if(b?.dataset.edit)workoutSheet(b.dataset.edit);else if(b?.dataset.stop!==undefined)goToStop(+b.dataset.stop)});$('#overlay').addEventListener('click',e=>{if(e.target.id==='overlay')closeSheet()});syncSeals(true);try{render()}catch(error){console.error('Błąd ekranu Śródziemia',error);const target=document.querySelector('#screen');if(target){target.innerHTML='<section class="app-error"><h2>Nie udało się otworzyć kroniki</h2><p>Wystąpił problem podczas wyświetlania wyprawy. Twoje treningi nie zostały usunięte.</p><pre id="errorInfo"></pre><button id="retryRender" class="primary">Spróbuj ponownie</button></section>';target.querySelector('#errorInfo').textContent=String(error&&error.message||error);target.querySelector('#retryRender').onclick=()=>location.reload();}}if('serviceWorker'in navigator)navigator.serviceWorker.register('./sw.js').catch(()=>{});
