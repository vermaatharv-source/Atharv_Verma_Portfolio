const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const gh='https://github.com/vermaatharv-source/',RM=matchMedia('(prefers-reduced-motion:reduce)').matches;

/* ---------- DATA ---------- */
const projects=[
{f:'FarmFresh.mern',tag:'flagship · live · real payments',name:'FarmFresh',st:'FPO-to-consumer marketplace · MERN · product one of Ornavex',
 d:"Farmers lose margin to middlemen. FarmFresh removes them: FPOs list produce, consumers buy direct, and real money moves through Razorpay today. A CBBO (AFC Limited) reviewed it in a 45-minute session and an FPO liked it. Their feedback sets the roadmap.",
 li:['Live Razorpay payments: real orders, real money','A government admin layer verifies FPO KYC before anyone sells','Atomic stock-decrement checkout, so concurrent orders never oversell','MongoDB aggregation pipeline powers trending products','Growth engine: referrals, wallet, coupons, near-me discovery, share links','CBBO/admin portal and a hidden founder command center for revenue and activity','Cloudinary-backed product media that survives every redeploy','Next: CNN-based produce grading to replace manual grading'],
 t:['MongoDB','Express','React','Node','Razorpay','Cloudinary','Vercel','Render'],l:[['live demo','https://farmfresh-marketplace.vercel.app/login'],['github',gh+'FarmFresh']]},
{f:'Ornavex.inc',tag:'company · founder & CEO',name:'Ornavex Private Limited',st:'Software · SaaS · fintech',
 d:"The company I'm building. Ornavex ships software for unglamorous, high-stakes problems. Product one, FarmFresh, is live and taking payments. More domains follow. I own product, engineering and strategy.",
 li:['Product one: FarmFresh, live with real Razorpay payments','Revenue plan: a platform fee on every order','Roadmap: deeper FPO and CBBO tooling, CNN produce grading, outreach to government, FPOs and CBBOs','Built to move beyond agriculture into more software, SaaS and fintech products'],t:['Product','SaaS','Fintech','Strategy']},
{f:'JARVIS.app',tag:'local AI · desktop',name:'JARVIS',st:'Windows desktop AI assistant · fully offline',
 d:"An AI assistant that never phones home. Electron UI, Node/Express brain, llama3.1 running locally through Ollama. Private by design: nothing leaves the machine.",t:['Electron','Node','Express','Ollama','llama3.1']},
{f:'SIF-Detect.sih',tag:'SIH 2026 · PS 26165 · Oil India Limited',name:'SIF Precursor Detection',st:'Core Operations & Integration Lead · team of 6 · working prototype demoed',
 d:"A two-layer NLP system that catches Serious Injury & Fatality precursors in safety reports before they escalate. Tuned for recall, because a missed precursor costs far more than a false alarm. I built the integration spine that holds both layers together.",
 li:['Layer 1: rules engine in Node/Express, under 5 ms per report','Layer 2: FastAPI parser extracts Action, Object and Control-Deficiency','I own API integration, CORS, error handling and fallbacks between layers','Trained on public safety data (MSHA, NASA ASRS, BSEE, OSHA), swappable to OIL data via config'],
 t:['React','Tailwind','Node','Prisma','PostgreSQL','FastAPI','Python']},
{f:'OrbitSensei.ml',tag:'ISRO BAH 2026 · submission',name:'OrbitSensei',st:'Satellite radiation risk forecasting · team of 3',
 d:"Satellites fail when radiation spikes. OrbitSensei forecasts those spikes with a physics-informed Temporal Fusion Transformer and compresses them into one risk index operators can act on. Submitted to ISRO BAH 2026.",t:['TFT','PyTorch','Time-series']},
{f:'Nirikshak.ai',tag:'Decode SIH 2026 · PS2',name:'Nirikshak AI',st:'Drone infrastructure inspector · Team Mystic L',
 d:"Bridges and roads are still inspected by hand. Nirikshak AI sends drones: YOLOv11 defect detection, GIS mapping on PostGIS and Leaflet, edge inference on Jetson. I owned GIS, deployment and integration.",t:['YOLOv11','FastAPI','PostGIS','Leaflet','Docker','React']},
{f:'FarmFresh-Java',tag:'college project · in progress',name:'FarmFresh (Java)',st:'Spring Boot + MongoDB Atlas · Java 17',
 d:"FarmFresh re-engineered in Java 17 with Spring Boot and MongoDB Atlas. I designed the model layer and Mongo connection, then took the whole stack to the finish: services, controllers and an HTML/CSS front end.",t:['Java 17','Spring Boot','MongoDB Atlas','Maven'],l:[['github',gh+'FarmFresh-Java']]},
{f:'NexaBank.js',tag:'live demo',name:'NexaBank',st:'C++ banking logic, rebuilt for the browser',
 d:"A C++ banking system ported to vanilla JS. A stateful transaction engine keeps every balance consistent across pages, and the UI renders identically on 3+ browser engines.",t:['JavaScript','HTML5','CSS3'],l:[['live demo','https://vermaatharv-source.github.io/NexaBank/'],['github',gh+'NexaBank.git']]},
{f:'cpp-oop/',tag:'C++ · object-oriented design',name:'C++ OOP Trilogy',st:'Banking · College ERP · Library',
 d:"Three C++ systems, one principle: clean class hierarchies. Banking where a new account type extends one subclass. An ERP that enforces 75% attendance and computes grades. A library with dual portals, role-based access and a 3-attempt lockout.",t:['C++','STL','OOP','Auth'],l:[['banking',gh+'BANKING_MANAGEMENT_SYSTEM.git'],['erp',gh+'COLLEGE_ERP_SYSTEM.git'],['library',gh+'LIBRARY_MANAGEMENT_SYSTEM.git']]},
{f:'dsa/',tag:'practice',name:'DSA Tracker + MetroRelief',st:'Notion tracker · emergency-dispatch case study',
 d:"A Notion DSA tracker with 43 entries, formula-driven progress and live charts. Plus MetroRelief: priority queues, nearest-ambulance routing, reachability under road closures, sliding-window surge detection and knapsack supply allocation.",t:['Graphs','Heaps','DP','Sliding window']}];
const log=[['a3f9c21','HEAD -> main','Founder & CEO · Ornavex Private Limited','2026 – now','A software, SaaS and fintech company. Product one, FarmFresh, is live with real payments. More domains follow. I own product, engineering and strategy.'],
['5d2e8b4','award','NIELIT Trophy + Certificate','2026','Recognised by NIELIT with a trophy and a certificate for my work.',1],
['7be41d0','milestone: live','FarmFresh goes live: real payments','2026','Razorpay payments on. Reviewed by a CBBO (AFC Limited) in a 45-minute session, liked by an FPO. Growth engine, CBBO/admin portal and founder command center shipped.'],
['c1a07f3','tag: v1.0','Web Development Intern · InAmigos Foundation','Jul 7–20, 2026','FarmFresh was born here as Task 3. Also shipped an Unsplash-powered site, found a spam link injection in a live-site security audit, and delivered an annotated NGO mockup. Certified 23 Jul.'],
['c90d3e8','hackathons','ISRO BAH · SIH · Decode SIH','2026','Three builds, three domains: space-weather ML, industrial-safety NLP for Oil India, drone inspection. Each shipped a real architecture under deadline.'],
['1f08b57','init','B.Tech CSE · SRM IST','2025 – 2029','9.7 in Sem 1, a perfect 10.0 in Sem 2 (9.83 cumulative). Deep in DSA, full-stack and agentic AI.']];
const certs=[['NIELIT','NIELIT Trophy & Certificate','★ award'],['Tata · The Forage','GenAI Powered Data Analytics Simulation','Jun 2026'],['Microsoft · LinkedIn','Career Essentials in Generative AI','Jun 2026'],['be10X','AI Tools & ChatGPT Workshop','Jun 2026'],['InAmigos Foundation','Certificate of Internship, Web Development','23 Jul 2026'],['ISRO · IIRS Dehradun','Climate Change Induced Disasters','24 Jul 2026'],['HackerRank','Problem Solving (Basic)','02 Aug 2026'],['HackerRank','Java (Basic)','22 Jul 2026'],['Apna College','Alpha: DSA with Java','2026']];
const stack={languages:['C','C++','Java','JavaScript','Python'],fullstack:['React','Node','Express','MongoDB','Spring Boot','PostgreSQL','FastAPI'],infra:['Razorpay','Cloudinary','Vercel','Render','Docker','Git'],ai:['Ollama','PyTorch','YOLO','Transformers'],core:['DSA','OOP','Graphs & DP','Security auditing'],learning:['Advanced DSA','Agentic AI','CNN produce grading']};

/* ---------- THEMES ---------- */
const TH={matrix:'#39ff88',dracula:'#bd93f9',synth:'#ff2e97',cyber:'#00f0ff',crimson:'#ff3b5c',nord:'#7fd1ff',amber:'#ffb000',paper:'#0b6e4f'};
let ac='#39ff88',bgc='#050805',fgc='#d6f5df',mx=-999,my=-999;
function setTheme(t){document.documentElement.dataset.theme=t;try{localStorage.setItem('th',t)}catch(e){}
 $$('#themes button').forEach(b=>b.classList.toggle('on',b.dataset.t===t));
 const cs=getComputedStyle(document.documentElement);ac=cs.getPropertyValue('--ac').trim();bgc=cs.getPropertyValue('--bg').trim();fgc=cs.getPropertyValue('--fg').trim()}
$('#themes').innerHTML=Object.keys(TH).map(t=>`<button data-t="${t}" style="--c:${TH[t]}" title="${t}" aria-label="${t} theme"></button>`).join('');
$('#themes').onclick=e=>{const b=e.target.closest('button');if(!b)return;const t=b.dataset.t,r=b.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2;
 if(!document.startViewTransition||RM){setTheme(t);return}
 document.startViewTransition(()=>setTheme(t)).ready.then(()=>document.documentElement.animate({clipPath:[`circle(0 at ${x}px ${y}px)`,`circle(${Math.hypot(innerWidth,innerHeight)}px at ${x}px ${y}px)`]},{duration:850,easing:'cubic-bezier(.7,0,.2,1)',pseudoElement:'::view-transition-new(root)'}))};
let saved;try{saved=localStorage.getItem('th')}catch(e){}setTheme(TH[saved]?saved:'matrix');

/* ---------- RENDER ---------- */
$('#log').innerHTML=log.map((c,i)=>`<div class="cm1${c[5]?' gold':''}" style="--i:${i}"><span class="hash">${c[0]}</span> <span class="ref">(${c[1]})</span> <span class="cm">${c[3]}</span><h3>${c[2]}</h3><p>${c[4]}</p></div>`).join('');
$('#certsList').innerHTML=certs.map((c,i)=>`<div class="cert" style="--i:${i}"><span class="hash">${(0xa1b2c3+i*98765).toString(16).slice(0,7)}</span> <span class="cm">${c[2]}</span><h3>${c[1]}</h3><p>${c[0]}</p></div>`).join('');
$('#files').innerHTML=projects.map((p,i)=>`<button role="tab" data-i="${i}">${p.f}</button>`).join('')+'<i class="bar2" id="bar2"></i>';
function showP(i,anim=true){const p=projects[i],pane=$('#pane');
 pane.innerHTML=`<span class="tag">${p.tag}</span><h3>${p.name}</h3><p class="status">${p.st}</p><p>${p.d}</p>${p.li?`<ul>${p.li.map(x=>`<li>${x}</li>`).join('')}</ul>`:''}<div class="chips">${p.t.map(x=>`<span>${x}</span>`).join('')}</div>${p.l?`<div class="links">${p.l.map(l=>`<a href="${l[1]}" target="_blank" rel="noopener">${l[0]} ↗</a>`).join('')}</div>`:''}`;
 if(anim){pane.className='pane lit';void pane.offsetWidth;pane.classList.add('sw'+(i%5))}
 $$('#files button').forEach((b,j)=>{b.classList.toggle('on',j===i);b.setAttribute('aria-selected',j===i);if(j===i){const bar=$('#bar2');bar.style.top=b.offsetTop+'px';bar.style.height=b.offsetHeight+'px'}})}
$('#files').onclick=e=>{const b=e.target.closest('button');b&&showP(+b.dataset.i)};
showP(0,false);addEventListener('load',()=>showP(0,false));
const hl=a=>a.map(x=>`<span class="s">'${x}'</span>`).join(', ');
const stackLines=['<span class="k">const</span> stack = {',...Object.entries(stack).map(([k,v])=>`  ${k}: [${hl(v)}],`),'};','<span class="cm">// status: open_to_internships</span>'];
$('#stack').innerHTML=stackLines.map((l,i)=>`<span class="ln" style="display:block;opacity:0;transform:translateX(${i%2?80:-80}px) skewX(${i%2?-25:25}deg);transition:all .7s cubic-bezier(.16,1,.3,1) ${400+i*140}ms">${l}</span>`).join('');
$('#year').textContent=new Date().getFullYear();

/* split headings into masked words */
$$('.split').forEach(h=>{let k=0;h.innerHTML=h.textContent.split(' ').map(w=>`<span class="w"><i style="--k:${k++}">${w}</i></span>`).join(' ')});

/* ---------- SLIDES ---------- */
const slides=$$('.slide');
$('#dots').innerHTML=slides.map((s,i)=>`<button data-go="${i}" data-l="${s.dataset.name}" aria-label="${s.dataset.name}"></button>`).join('');
let cur=0;
function setCur(i){cur=i;$$('#dots button').forEach((b,j)=>b.classList.toggle('on',j===i))}
function goTo(i){i=Math.max(0,Math.min(slides.length-1,i));if(i===cur&&scrollY>10&&i!==0)return;
 if(RM){slides[i].scrollIntoView();return}
 const w=$('#wipe');$('#wipeText').textContent=slides[i].dataset.name;w.classList.remove('go');void w.offsetWidth;w.classList.add('go');
 setTimeout(()=>{document.documentElement.style.scrollBehavior='auto';slides[i].scrollIntoView();document.documentElement.style.scrollBehavior=''},400)}
document.addEventListener('click',e=>{const g=e.target.closest('[data-go]');if(g){e.preventDefault();goTo(+g.dataset.go)}});
const seen=new Set();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const s=e.target;
 if(seen.has(s))return;seen.add(s);s.classList.add('in');
 if(s.id==='about')counters();
 if(s.id==='skills')$$('.ln').forEach(l=>{l.style.opacity=1;l.style.transform='none'})}),{threshold:0,rootMargin:'0px 0px -22% 0px'});
const ghosts=$$('.ghost'),heads=$$('.h'),barEl=$('#bar');let sTick=false;
function onScroll(){if(sTick)return;sTick=true;requestAnimationFrame(()=>{sTick=false;
 const h=document.documentElement,vh=innerHeight,sy=scrollY;
 /* all reads first */
 let c=0;slides.forEach((s,k)=>{if(s.getBoundingClientRect().top<=vh*.5)c=k});
 const gT=RM?[]:ghosts.map(g=>g.parentElement.getBoundingClientRect().top);
 const hT=(!RM&&innerWidth>860)?heads.map(x=>x.getBoundingClientRect().top):[];
 /* then all writes */
 if(c!==cur)setCur(c);
 barEl.style.transform='scaleX('+(sy/Math.max(1,h.scrollHeight-vh))+')';
 gT.forEach((t,i)=>ghosts[i].style.setProperty('--py',(t*.25)+'px'));
 hT.forEach((t,i)=>{heads[i].style.translate=Math.max(-90,Math.min(90,(t-vh*.35)*.12))+'px 0'})})}
addEventListener('scroll',onScroll,{passive:true});onScroll();
addEventListener('keydown',e=>{if(!$('#pal').hidden){palKey(e);return}
 if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();openPal();return}
 if(e.target.matches('input,textarea'))return;
 if(['ArrowDown','PageDown'].includes(e.key)){e.preventDefault();goTo(cur+1)}
 if(['ArrowUp','PageUp'].includes(e.key)){e.preventDefault();goTo(cur-1)}
 if(e.key==='ArrowRight'&&cur===3){const i=$$('#files button').findIndex(b=>b.classList.contains('on'));showP((i+1)%projects.length)}
 if(e.key==='ArrowLeft'&&cur===3){const i=$$('#files button').findIndex(b=>b.classList.contains('on'));showP((i-1+projects.length)%projects.length)}
 kon(e.key)});

/* ---------- HERO FX ---------- */
function scramble(el,text){if(RM){el.textContent=text;return}const ch='01{}<>/\\;=+*#$@%',t0=performance.now();
 (function f(n){const p=(n-t0)/1300;el.textContent=[...text].map((c,i)=>c===' '?' ':i<p*text.length*1.15?c:ch[Math.random()*ch.length|0]).join('');if(p<1.1)requestAnimationFrame(f);else el.textContent=text})(t0)}
const roles=['"builds. ships. repeats."','"FarmFresh: live."','"Ornavex: in progress."','"NIELIT: trophy earned."','"DSA: daily."','"internships 2027: targeting."'];
const te=$('#typed');let ri=0,ci=0,del=false;
(function t(){const c=roles[ri];ci+=del?-1:1;te.textContent=c.slice(0,ci);if(!del&&ci===c.length){del=true;return setTimeout(t,1600)}if(del&&ci===0){del=false;ri=(ri+1)%roles.length}setTimeout(t,del?28:55)})();
const hc=`<span class="k">const</span> atharv = {
  startup: <span class="s">'Ornavex'</span>,
  live:    <span class="s">'FarmFresh'</span>,
  cgpa:    <span class="n">9.83</span>,
  ships:   <span class="n">true</span>,
};`;
function typeCode(){const el=$('#hcode');if(RM){el.innerHTML=hc;return}let i=0,out='';const plain=hc;
 (function f(){// type char by char while keeping tags intact
  if(i>=plain.length)return;if(plain[i]==='<'){const j=plain.indexOf('>',i);out+=plain.slice(i,j+1);i=j+1}else out+=plain[i++];el.innerHTML=out;setTimeout(f,18)})()}
function counters(){$$('[data-n]').forEach(el=>{const to=+el.dataset.n,d=+el.dataset.d||0,sf=el.dataset.s||'',t0=performance.now();
 (function f(n){const p=Math.min((n-t0)/1500,1);el.textContent=(to*(1-Math.pow(1-p,4))).toFixed(d)+sf;if(p<1)requestAnimationFrame(f)})(t0)})}
/* wait for fonts + images before animating, so nothing reflows mid-animation */
const loaded=new Promise(r=>document.readyState==='complete'?r():addEventListener('load',r,{once:true}));
const fontsOk=document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve();
const heroImg=$('#heroImg'),imgOk=heroImg&&heroImg.decode?heroImg.decode().catch(()=>{}):Promise.resolve();
Promise.race([Promise.all([loaded,fontsOk,imgOk]),new Promise(r=>setTimeout(r,2500))]).then(()=>requestAnimationFrame(()=>{
 slides.forEach(s=>io.observe(s));
 slides[0].classList.add('in');seen.add(slides[0]);scramble($('#name'),'Atharv Verma');typeCode();
 /* heavy PDF iframe loads after the intro, not during it */
 const fr=$('.res iframe');if(fr&&fr.dataset.src){const go=()=>{if(fr.dataset.src){fr.src=fr.dataset.src;delete fr.dataset.src}};setTimeout(go,3500);
  new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){go();o.disconnect()}},{rootMargin:'200% 0px'}).observe($('#resume'))}}));
const ph=$('#photo');

/* ---------- MATRIX RAIN ---------- */
const cv=$('#rain'),cx=cv.getContext('2d');let cols,drops;
function rs(){cv.width=innerWidth;cv.height=innerHeight;cols=Math.floor(innerWidth/18);drops=Array.from({length:cols},()=>Math.random()*-50)}
rs();addEventListener('resize',rs);
if(!RM){let last=0;(function draw(now){requestAnimationFrame(draw);if(now-last<33)return;const k=Math.min((now-last)/16.67,4);last=now;
 cx.fillStyle=bgc+'3a';cx.fillRect(0,0,cv.width,cv.height);cx.font='14px JetBrains Mono';
 const g='01{}<>/;=+*#$ABCDEF';drops.forEach((y,i)=>{const d=Math.hypot(i*18-mx,y*18-my),n=d<150;cx.fillStyle=n?fgc:ac;cx.globalAlpha=n?1:.75;cx.fillText(g[Math.random()*g.length|0],i*18,y*18);drops[i]=y*18>cv.height&&Math.random()>.975?0:y+.45*k});
 })(0)}

/* ---------- COMMAND PALETTE ---------- */
const cmds=[...slides.map((s,i)=>['goto '+s.dataset.name,()=>goTo(i)]),...Object.keys(TH).map(t=>['theme: '+t,()=>setTheme(t)]),['copy email',copyMail],['open FarmFresh live',()=>open('https://farmfresh-marketplace.vercel.app/login','_blank')],['open GitHub',()=>open(gh,'_blank')]];
let sel=0,list=cmds;
function renderPal(){$('#palList').innerHTML=list.map((c,i)=>`<li class="${i===sel?'on':''}" data-i="${i}">${c[0]}</li>`).join('')}
function openPal(){$('#pal').hidden=false;$('#palIn').value='';list=cmds;sel=0;renderPal();$('#palIn').focus()}
function closePal(){$('#pal').hidden=true}
function run(i){const c=list[i];closePal();c&&setTimeout(c[1],50)}
function palKey(e){if(e.key==='Escape')closePal();else if(e.key==='ArrowDown'){e.preventDefault();sel=(sel+1)%list.length;renderPal()}else if(e.key==='ArrowUp'){e.preventDefault();sel=(sel-1+list.length)%list.length;renderPal()}else if(e.key==='Enter')run(sel)}
$('#palIn').oninput=e=>{const q=e.target.value.toLowerCase();list=cmds.filter(c=>c[0].toLowerCase().includes(q));sel=0;renderPal()};
$('#palList').onclick=e=>{const li=e.target.closest('li');li&&run(+li.dataset.i)};
$('#pal').onclick=e=>{if(e.target.id==='pal')closePal()};
$('#openPal').onclick=openPal;

/* ---------- MISC ---------- */
function copyMail(){navigator.clipboard&&navigator.clipboard.writeText('verma.atharv@gmail.com');const b=$('#copyMail');b.textContent='copied ✓';setTimeout(()=>b.textContent='copy email',1500)}
$('#copyMail').onclick=copyMail;
let kb=[];const KK='ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';
function kon(k){kb.push(k);kb=kb.slice(-10);if(kb.join('')===KK){document.body.classList.add('rain-mode');setTimeout(()=>document.body.classList.remove('rain-mode'),3000)}}
['heroImg','profileImg'].forEach(id=>{const i=document.getElementById(id);i&&i.addEventListener('error',()=>i.replaceWith(Object.assign(document.createElement('div'),{textContent:'AV',style:'font:800 2.4rem JetBrains Mono;color:var(--ac)'})))});

/* ---------- LIGHT UNDER THE MOUSE ---------- */
$$('.cert,.cm1,.nums div,.pane,.files button,.res-l').forEach(e=>e.classList.add('lit'));
let litPrev=null;const tr=$('#trail'),tx=tr.getContext('2d'),T=[];
function rt(){tr.width=innerWidth;tr.height=innerHeight}rt();addEventListener('resize',rt);
let trailOn=false;
function trailLoop(){tx.clearRect(0,0,tr.width,tr.height);T.forEach(p=>p.l-=.04);while(T.length&&T[0].l<=0)T.shift();
 tx.fillStyle=ac;T.forEach(p=>{tx.globalAlpha=p.l*.22;tx.beginPath();tx.arc(p.x,p.y,p.l*12,0,7);tx.fill();tx.globalAlpha=p.l*.8;tx.beginPath();tx.arc(p.x,p.y,p.l*5,0,7);tx.fill()});
 tx.globalAlpha=1;if(T.length)requestAnimationFrame(trailLoop);else{trailOn=false;tx.clearRect(0,0,tr.width,tr.height)}}
const spotEl=$('.spot'),btns=$$('.btn');let pTick=false,pe=null;
addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;pe=e;if(!RM){T.push({x:mx,y:my,l:1});if(!trailOn){trailOn=true;requestAnimationFrame(trailLoop)}}
 if(pTick)return;pTick=true;requestAnimationFrame(()=>{pTick=false;
  spotEl.style.setProperty('--mx',mx+'px');spotEl.style.setProperty('--my',my+'px');
  if(RM)return;
  const t=pe.target.closest&&pe.target.closest('.lit');
  if(litPrev&&litPrev!==t){litPrev.style.removeProperty('--x');litPrev.style.removeProperty('--y')}litPrev=t;
  if(t){const b=t.getBoundingClientRect();t.style.setProperty('--x',mx-b.left+'px');t.style.setProperty('--y',my-b.top+'px')}
  const rs=btns.map(b=>b.getBoundingClientRect());
  btns.forEach((b,k)=>{const r=rs[k],dx=mx-(r.left+r.width/2),dy=my-(r.top+r.height/2);b.style.translate=Math.hypot(dx,dy)<95?`${dx*.3}px ${dy*.3}px`:''});
  if(innerWidth>=860){const x=mx/innerWidth-.5,y=my/innerHeight-.5;ph.style.transform=`perspective(600px) rotateY(${x*28}deg) rotateX(${-y*28}deg)`}})});