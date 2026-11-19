(()=>{
const NS='http://www.w3.org/2000/svg';
const $=id=>document.getElementById(id);
const audio=$('audio'), svg=$('stage'), world=$('world'), bgG=$('bg'), chG=$('chars'), fgG=$('fg'), fxG=$('fx'), box=$('artbox'), wrap=$('wrap');
$('defs').innerHTML=PATTERNS;
const ENV=window.ENV, DUR=284.8, DEBUG=/debug/.test(location.search);
let OFFSET=0; try{OFFSET=parseFloat(localStorage.getItem('nmro_off')||'0')||0}catch(e){}
let hasLabels=false,cur=-1, scene=null, bgObj=null, chars=[], lastLy=-2, lastSpeech=-1, VH=576;

const envAt=t=>{const i=Math.max(0,Math.min(ENV.t.length-1,Math.floor(t*ENV.fps)));return {t:ENV.t[i],l:ENV.l[i]}};
const lyricAt=t=>{let k=-1;for(let i=0;i<LYRICS.length;i++){if(LYRICS[i][0]<=t)k=i;else break}if(k<0)return -1;
  const s=LYRICS[k][0], nx=LYRICS[k+1]?LYRICS[k+1][0]:1e9, end=Math.min(nx,LYRIC_END[s]!==undefined?LYRIC_END[s]:s+4.4);return t<end?k:-1};
const sceneAt=t=>{let k=0;for(let i=0;i<SCENES.length;i++){if(SCENES[i].t<=t)k=i;else break}return k};

function placeLabels(){
  const labs=[...fgG.querySelectorAll('.lab')].map(g=>({g,b:g.getBBox(),tx:+g.dataset.x,ty:+g.dataset.y,k:+g.dataset.k}));
  labs.sort((a,b)=>a.tx-b.tx);
  let prevR=-1e9;
  labs.forEach(l=>{const w=l.b.width*l.k;let x=l.tx;if(x-w/2<prevR+8)x=prevR+8+w/2;x=Math.min(1280-w/2-6,Math.max(w/2+6,x));prevR=x+w/2;l.g.setAttribute('transform',`translate(${x},${l.ty}) scale(${l.k})`)});
}

function build(k){
  scene=SCENES[k];cur=k;
  const b=BG[scene.bg](scene.opts||{});bgObj=b;bgG.innerHTML=b.svg;
  VH=b.full?720:576;svg.setAttribute('viewBox',`0 0 1280 ${VH}`);box.classList.toggle('full',!!b.full);$('band').style.display=b.full?'none':'flex';
  chG.innerHTML='';chars=[];
  const cast=(scene.cast||[]).map(c=>({...c,y:c.y??b.floor}));
  cast.slice().sort((a,b)=>a.y-b.y).forEach(c=>{
    const g=makeChar(c.id,{...c});const w=document.createElementNS(NS,'g');w.setAttribute('class','cw');w.dataset.id=c.id;
    w.setAttribute('transform',`translate(${c.x},${c.y}) scale(${c.s})`);w.appendChild(g);chG.appendChild(w);chars.push(g);});
  fgG.innerHTML=cast.filter(c=>c.label).map(c=>{const h=P[c.id].sub?52:34,y=Math.min(VH-h-8,c.y+10);return labelSVG(c.id,c.x,y,1).replace('<g class="lab"',`<g class="lab" data-x="${c.x}" data-y="${y}" data-k="1"`)}).join('');
  placeLabels();hasLabels=cast.some(c=>c.label);
  $('tag').textContent=scene.cap||'';$('tag').style.display=scene.cap?'block':'none';
  $('title').style.display=scene.title?'flex':'none';
  if(scene.flash){const f=$('flash');f.style.transition='none';f.style.opacity=.8;requestAnimationFrame(()=>{f.style.transition='opacity .35s';f.style.opacity=0});}
  lastSpeech=-1;$('bubble').style.display='none';
}

function pyro(t){
  let s='';if(VH>600){fxG.innerHTML='';return}
  for(const ev of PYRO){const a=t-ev;if(a<0||a>2.4)continue;
    for(let i=0;i<9;i++){const x=110+i*145+(ev*37%20);const k=a/2.4,h=(150+((i*53)%80))*Math.sin(Math.min(1,k*1.6)*Math.PI*.5)*(1-k*.4);
      const r=30*(1-k)+12;s+=`<g transform="translate(${x},${VH-4})"><path d="M0,0 Q${-r*1.2},${-h*.5} 0,${-h} Q${r*1.2},${-h*.5} 0,0Z" fill="#ff7a1a" opacity="${(1-k).toFixed(2)}"/><path d="M0,0 Q${-r*.6},${-h*.4} 0,${-h*.65} Q${r*.6},${-h*.4} 0,0Z" fill="#ffe94a" opacity="${(1-k).toFixed(2)}"/></g>`}}
  for(const h of HEY){const a=t-h;if(a>=0&&a<.7){const k=a/.7;s+=`<text x="640" y="${VH/2+40}" text-anchor="middle" font-family="Oswald,Impact,sans-serif" font-weight="700" font-size="${150+k*60}" fill="#ffe94a" stroke="#ff2e88" stroke-width="8" paint-order="stroke" opacity="${(1-k).toFixed(2)}" transform="rotate(-6 640 ${VH/2})">HEY!</text>`}}
  fxG.innerHTML=s;
}

function frame(){
  const real=audio.currentTime, t=real+OFFSET, e0=envAt(real);
  const k=sceneAt(t);if(k!==cur)build(k);
  const lt=t-scene.t, nxt=SCENES[k+1]?SCENES[k+1].t:DUR, dur=Math.max(.5,nxt-scene.t);
  const li=lyricAt(t), e={t:e0.t,l:e0.l,sing:li>=0};
  const cam=scene.cam||[1,1,640,VH/2], f=ease(lt/dur); let z=(cam[0]+(cam[1]-cam[0])*f)*(1+.012*e0.l);if(hasLabels)z=Math.min(z,1.03);
  const cx=clamp(640,640/z,1280-640/z), cy=clamp(VH/2,VH/2/z,VH-VH/2/z);
  world.setAttribute('transform',`translate(640,${VH/2}) scale(${z.toFixed(4)}) translate(${-cx},${-cy})`);
  bgObj.tick(bgG,lt,e,t);
  chars.forEach(c=>c.update(t,e));
  pyro(t);
  if(scene.title){const a=ease(lt/1.2)*(1-ease((lt-4.8)/1.0));$('title').style.opacity=a.toFixed(2);}
  if(li!==lastLy){lastLy=li;const c=$('cap');if(li<0){c.textContent='';}else{const tx=LYRICS[li][1];c.textContent=tx;c.style.fontSize=(tx.length>50?2.9:tx.length>36?3.4:4)+'cqw';c.classList.remove('pop');void c.offsetWidth;c.classList.add('pop');}}
  if(scene.speech){let sp=-1;scene.speech.forEach((s,i)=>{if(t>=s[0]&&t<s[0]+2.6)sp=i});
    if(sp!==lastSpeech){lastSpeech=sp;const b=$('bubble');if(sp<0)b.style.display='none';else{const s=scene.speech[sp];b.style.display='block';b.textContent=s[1];b.style.left=(s[2]/1280*100)+'%';b.style.top=(s[3]/576*100)+'%';}}}
  $('scrub').value=real;$('time').textContent=fmt(real)+' / '+fmt(DUR);
  requestAnimationFrame(frame);
}
const fmt=s=>Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0');

// overlap checker (debug): text vs characters / labels / tag / bubble
window.__check=()=>{
  const R=el=>el.getBoundingClientRect(), hit=(a,b,p=4)=>a.left<b.right-p&&a.right>b.left+p&&a.top<b.bottom-p&&a.bottom>b.top+p;
  const out=[];const chs=[...chG.querySelectorAll('.cw')].map(e=>({n:e.dataset.id,r:headBox(e)}));
  const texts=[...bgG.querySelectorAll('.bgtext')].map(e=>({n:'bg:'+e.textContent,r:R(e)}));
  const labs=[...fgG.querySelectorAll('.lab')].map(e=>({n:'label:'+e.dataset.id,r:R(e)}));
  const ui=[];['tag','bubble'].forEach(id=>{const e=$(id);if(e.style.display!=='none'&&e.textContent)ui.push({n:id,r:R(e)})});
  const art=R(box);
  [...texts,...labs,...ui].forEach(a=>{chs.forEach(c=>{if(!(a.n.startsWith('label:'+c.n))&&hit(a.r,c.r))out.push(a.n+' x '+c.n)});
    if(a.r.bottom>art.bottom+2||a.r.right>art.right+2||a.r.left<art.left-2)out.push(a.n+' off-art')});
  labs.forEach((a,i)=>labs.slice(i+1).forEach(b=>{if(hit(a.r,b.r))out.push(a.n+' x '+b.n)}));
  return out;
};
// character body box = head..feet using the wrapper (excluding flailing hands is not needed)
function headBox(w){const r=w.getBoundingClientRect();return r;}

$('scrub').max=DUR;
$('scrub').oninput=e=>{audio.currentTime=+e.target.value};
const toggle=()=>{audio.paused?safePlay():audio.pause()};
const safePlay=()=>{const p=audio.play();if(p&&p.catch)p.catch(err=>{const st=$('start');st.style.display='flex';st.querySelector('.kb').textContent='Could not start audio ('+(err&&err.name||'error')+') — click again';audio.load()})};
$('play').onclick=()=>{$('end').style.display='none';audio.paused?safePlay():audio.pause()};$('start').onclick=()=>{$('start').style.display='none';safePlay()};
const doReplay=()=>{$('end').style.display='none';audio.currentTime=0;cur=-1;safePlay()};$('end').onclick=doReplay;
audio.addEventListener('ended',()=>{$('end').style.display='flex'});
audio.addEventListener('error',()=>{const st=$('start');st.style.display='flex';st.querySelector('.kb').textContent='Could not load song.mp3 — check that the file is hosted next to index.html'});
audio.onplay=()=>$('play').textContent='❚❚';audio.onpause=()=>$('play').textContent='▶';
addEventListener('keydown',e=>{
  if(e.code==='Space'){e.preventDefault();$('start').style.display='none';if($('end').style.display==='flex')doReplay();else toggle()}
  else if(e.key==='ArrowRight')audio.currentTime=Math.min(DUR,audio.currentTime+5);
  else if(e.key==='ArrowLeft')audio.currentTime=Math.max(0,audio.currentTime-5);
  else if(e.key==='['||e.key===']'){OFFSET+=e.key===']'?.1:-.1;try{localStorage.setItem('nmro_off',OFFSET.toFixed(2))}catch(_){}
    const h=$('hint');h.textContent='visual/lyric sync offset: '+OFFSET.toFixed(1)+'s ( [ earlier  ] later )';h.style.opacity=1;setTimeout(()=>h.style.opacity=0,1800)}
  });
window.__seek=t=>{audio.currentTime=t};
window.__scenes=()=>SCENES.map(s=>s.t);
requestAnimationFrame(frame);
})();
