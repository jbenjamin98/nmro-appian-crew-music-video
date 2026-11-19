// v2 characters: flat, full-body, SCP-Explained-style figures.
// Local space: feet on y=0, x=0 centre, figure ~520 tall (head top ~ -485). Facing the viewer.
const SH_Y=-368, HEAD_Y=-440;
const P = {
  jacob:   {name:'Jacob', sub:'Technical Delivery Manager', skin:'#e6baa0', hair:null, beard:{t:'full',c:'#33241c'}, glasses:{t:'oct',c:'#c9a24a'}, top:{k:'blazer',c:'#5f6575',c2:'#bcd0ee',sl:'long'}, pants:'#2d3447', shoes:'#3a2a22', w:1.14, band:'#ff2e88'},
  christina:{name:'Christina', sub:'Architect', skin:'#dfae8c', hair:'#3b2a22', hs:'wave', len:-318, top:{k:'knit',c:'#2f3b52',c2:'#e8e1d6',sl:'long'}, pants:'#232b3c', shoes:'#2a2a30', w:.88, band:'#19e6ff'},
  hana:    {name:'Hana', sub:'Consultant', skin:'#f0c8ae', hair:'#17151c', hs:'wave', len:-310, vol:1, top:{k:'blazer',c:'#15161b',c2:'#1f5b49',sl:'long'}, pants:'#17181e', shoes:'#111111', w:.88, band:'#ffe94a'},
  joe:     {name:'Joe', sub:'Account Executive', skin:'#efc7a8', hair:'#2b2220', hs:'short', top:{k:'polo',c:'#4f7fd0',c2:'#f4f4f4',sl:'long',collar:'#5a89d8'}, pants:'#8a7a5c', shoes:'#4a3626', w:1, band:'#a6ff3d'},
  justin:  {name:'Justin', sub:'Principal Consultant', skin:'#e6b78e', hair:'#16161a', hs:'short', top:{k:'polo',c:'url(#pCheck)',c2:'#b33a48',sl:'long',collar:'#b33a48'}, pants:'#2b3042', shoes:'#2f2623', w:1, band:'#19e6ff'},
  lexie:   {name:'Lexie', sub:'Consultant', skin:'#f2c9ab', hair:'#7a4a30', hs:'long', len:-300, top:{k:'blazer',c:'url(#pHound)',c2:'#f4f4f4',sl:'long',lap:'#2a2a2a'}, pants:'#1c1c22', shoes:'#111111', w:.86, band:'#ff2e88'},
  matthew: {name:'Matthew', sub:'Program Manager', skin:'#eec3a2', hair:'#3a2c25', hs:'side', top:{k:'blazer',c:'#2b3347',c2:'#b7d3ee',sl:'long'}, pants:'#2a2f3c', shoes:'#2c2220', w:1, band:'#ffe94a'},
  niki:    {name:'Niki', sub:'Principal Cyber Analyst', skin:'#efcab1', hair:'#3a2622', hs:'bob', len:-388, top:{k:'blazer',c:'#c79a62',c2:'#fbfbfb',sl:'long',turtle:1}, pants:'#4a3a2e', shoes:'#2a2420', w:.88, band:'#a6ff3d'},
  rebecca: {name:'Rebecca', sub:'Solution Consultant', skin:'#f6d3bc', hair:'#e6bf72', hs:'wave', len:-326, vol:1, top:{k:'blazer',c:'#f0239a',c2:'#ff3fb4',sl:'long',neck:'#e9e2d2'}, pants:'#e0238f', shoes:'#f4f4f8', w:.9, band:'#19e6ff'},
  robert:  {name:'Rob', sub:'Customer Success Manager', skin:'#efc4a6', hair:'#8a6a45', hs:'short', top:{k:'blazer',c:'#2b3f6e',c2:'#ffffff',sl:'long',tie:'#c0273a'}, pants:'#2b3f6e', shoes:'#2a1e18', w:1.04, band:'#ff2e88'},
  saba:    {name:'Saba', sub:'Delivery Director', skin:'#e0ae8c', hair:'#17151a', hs:'long', len:-312, top:{k:'blazer',c:'#15151a',c2:'#1d1d24',sl:'long',neck:'#e7b43a'}, pants:'#15151a', shoes:'#111111', w:.86, band:'#ffe94a'},
  sriya:   {name:'Sriya', sub:'Consultant', skin:'#c98c64', hair:'#1a1618', hs:'wave', len:-300, top:{k:'knit',c:'#17171b',c2:'#17171b',sl:'none',neck:'#e7b43a'}, pants:'#17171b', shoes:'#2b2b33', w:.84, band:'#19e6ff'},
  tejan:   {name:'Tejan', sub:'Architect', skin:'#c88e66', hair:'#2a2220', hs:'short', beard:{t:'trim',c:'#1f1a18'}, top:{k:'polo',c:'url(#pStripe)',c2:'#a9c4e4',sl:'long',collar:'#a9c4e4'}, pants:'#2a3550', shoes:'#2c2220', w:1.04, band:'#a6ff3d'},
  adharsh: {name:'Adharsh', sub:'Consultant', skin:'#a8704a', hair:'#15120f', hs:'swept', beard:{t:'full',c:'#1a1512',mus:1}, top:{k:'polo',c:'#2a2d3f',c2:'#2a2d3f',sl:'short',collar:'#33374c'}, pants:'#33384a', shoes:'#1b1b22', w:1.06, band:'#ff2e88'},
  mason:   {name:'Mason', sub:'Pod Lead', skin:'#eec9a4', hair:'#17161a', hs:'undercut', top:{k:'blazer',c:'#17171c',c2:'#ffffff',sl:'long',tie:'#c9ccd6'}, pants:'#17171c', shoes:'#111111', w:1, band:'#ffe94a'},
  jonelle: {name:'Jonie', sub:'MRO Portfolio Manager', skin:'#efc9a6', hair:'#8a7a66', hs:'long', len:-296, top:{k:'blazer',c:'#c9a27a',c2:'#1b2a4a',sl:'long',neck:'#c9d3e6'}, pants:'#223055', shoes:'#2a2420', w:.88, band:'#ff2e88'},
  jake:    {name:'Jake', sub:'Portfolio Operation Manager', skin:'#eec0a0', hair:'#a8643c', hs:'short', beard:{t:'trim',c:'#a8693f'}, top:{k:'polo',c:'#f1eee6',c2:'#f1eee6',sl:'long',collar:'#faf8f2'}, pants:'#c8b896', shoes:'#7a5a3c', w:1.12, band:'#19e6ff'},
  jason:   {name:'Jason', sub:'NMRO APM', skin:'#efc1a2', hair:null, beard:{t:'goatee',c:'#cfcfcf',mus:1}, top:{k:'blazer',c:'#2d2f33',c2:'#e9ecee',sl:'long',tie:'#8fa59a'}, pants:'#2d2f33', shoes:'#111111', w:1.2, band:'#a6ff3d'},
  paul:    {name:'Paul', sub:'Aviation Product Manager', skin:'#eec3a6', hair:'#b8b8b8', hs:'short', glasses:{t:'round',c:'#555555'}, top:{k:'blazer',c:'#26324f',c2:'#ffffff',sl:'long',tie:'#a8455a'}, pants:'#26324f', shoes:'#241b18', w:1.04, band:'#ffe94a'},
};
const TEAM=['jacob','christina','hana','joe','justin','lexie','matthew','niki','rebecca','robert','saba','sriya','tejan','adharsh','mason'];
const NAVY=['jonelle','jake','paul','jason'];

const PATTERNS=`
<pattern id="pCheck" width="16" height="16" patternUnits="userSpaceOnUse"><rect width="16" height="16" fill="#b33a48"/><rect width="8" height="8" fill="#243a73"/><rect x="8" y="8" width="8" height="8" fill="#243a73"/></pattern>
<pattern id="pHound" width="14" height="14" patternUnits="userSpaceOnUse"><rect width="14" height="14" fill="#f4f4f4"/><rect width="7" height="7" fill="#232328"/><rect x="7" y="7" width="7" height="7" fill="#232328"/></pattern>
<pattern id="pStripe" width="10" height="10" patternUnits="userSpaceOnUse"><rect width="10" height="10" fill="#b9d0ea"/><rect width="2.5" height="10" fill="#97b6dc"/></pattern>`;

function shade(hex,f){ if(!hex||hex[0]!=='#')return '#333333'; const n=parseInt(hex.slice(1),16); const c=i=>{let v=(n>>i)&255; v=f>=0?v*(1-f):v+(255-v)*(-f); return Math.max(0,Math.min(255,Math.round(v)))}; return '#'+[16,8,0].map(i=>c(i).toString(16).padStart(2,'0')).join(''); }
const baseCol=c=>c&&c.startsWith('url')?(c.includes('Check')?'#7a3a60':c.includes('Hound')?'#8a8a8e':'#9db8dc'):c;

// ---- hair ----------------------------------------------------------------------------------------
function hairLayers(p){
  const c=p.hair; if(!c) return {back:'',front:''};
  const d=shade(c,.22), hl=shade(c,-.18); let back='',front='';
  const strands=(paths)=>`<g fill="none" stroke="${hl}" stroke-width="3" stroke-linecap="round" opacity=".55">${paths}</g>`;
  const hs=p.hs;
  if(hs==='short') front=`<path d="M-39,-446 C-44,-500 6,-512 36,-496 C48,-488 44,-462 38,-446 C36,-460 28,-470 14,-472 C-4,-476 -20,-474 -28,-466 C-34,-460 -37,-452 -39,-446Z" fill="${c}"/>`+strands('<path d="M-12,-492 Q4,-488 18,-478"/><path d="M-26,-480 Q-14,-486 -4,-484"/>');
  if(hs==='side') front=`<path d="M-39,-446 C-46,-498 8,-514 40,-492 C48,-480 44,-458 38,-446 C34,-462 22,-470 6,-470 C-12,-468 -28,-462 -39,-446Z" fill="${c}"/><path d="M-34,-462 C-14,-480 12,-484 36,-474" fill="none" stroke="${d}" stroke-width="3" opacity=".7"/>`;
  if(hs==='swept'){ back=`<path d="M-40,-448 C-50,-470 -46,-486 -30,-492 L36,-492 C48,-480 46,-462 40,-448Z" fill="${d}"/>`; front=`<path d="M-42,-444 C-58,-486 -30,-520 14,-516 C44,-514 62,-490 44,-444 C40,-462 34,-470 20,-474 C2,-478 -22,-470 -34,-458 C-38,-452 -40,-448 -42,-444Z" fill="${c}"/>`+strands('<path d="M-30,-500 Q-6,-512 20,-504"/><path d="M-36,-484 Q-12,-494 12,-490"/>'); }
  if(hs==='undercut') front=`<path d="M-37,-450 C-40,-486 -6,-504 30,-492 C44,-486 46,-470 40,-452 C34,-462 26,-468 12,-470 C-8,-472 -26,-466 -37,-450Z" fill="${c}"/><path d="M-37,-450 L-39,-436 L-31,-440 L-33,-456Z M37,-450 L39,-436 L31,-440 L33,-456Z" fill="${d}" opacity=".7"/>`+strands('<path d="M-20,-486 Q6,-496 26,-484"/>');
  if(['long','wave','bob'].includes(hs)){
    const L=p.len||-320, wave=hs==='wave', vol=p.vol?8:0, bob=hs==='bob';
    const bx=bob?50:56+vol, bot=L;
    back=`<path d="M-42,-452 C-62,-500 62,-500 42,-452 C${bx+4},-430 ${bx+2},-400 ${bx},${bot+60} ${bob?`Q0,${bot+14} -${bx},${bot+60}`:`L${bx-2},${bot} L-${bx-2},${bot} L-${bx},${bot+60}`} C-${bx+2},-400 -${bx+4},-430 -42,-452Z" fill="${d}"/>`;
    const lockL=`M-39,-452 C-44,-420 -52,-380 -${bx-4},${bot+4} L-${bx-24},${bot+6} C-34,-380 -32,-420 -30,-448Z`, lockR=`M39,-452 C44,-420 52,-380 ${bx-4},${bot+4} L${bx-24},${bot+6} C34,-380 32,-420 30,-448Z`;
    front=`<path d="M-42,-446 C-52,-506 52,-506 42,-446 C38,-466 24,-476 4,-476 C-16,-476 -36,-466 -42,-446Z" fill="${c}"/><path d="${lockL}" fill="${c}"/><path d="${lockR}" fill="${c}"/>`+strands(`<path d="M-30,-460 Q-34,-400 -44,${bot+20}"/><path d="M30,-460 Q34,-400 44,${bot+20}"/><path d="M0,-476 Q-10,-480 -26,-470"/>`);
    if(wave) front+=`<path d="M-44,${bot-50} q-8,10 0,20 M-46,${bot-90} q-8,10 0,20 M44,${bot-50} q8,10 0,20 M46,${bot-90} q8,10 0,20" fill="none" stroke="${hl}" stroke-width="3" opacity=".5"/>`;
  }
  return {back,front};
}
function teased(c,wide=1){
  const d=shade(c,.2); let pts=[]; const cx=0, cy=-452;
  for(let i=0;i<=16;i++){const a=Math.PI*(1.04+0.92*i/16); const r=((i%2)?88:60)*wide+((i%4==1)?10:0); pts.push([cx+Math.cos(a)*r*1.05, cy+Math.sin(a)*r*0.95]);}
  const path='M-42,-440 '+pts.map(q=>`L${q[0].toFixed(1)},${q[1].toFixed(1)}`).join(' ')+' L42,-440Z';
  return `<path d="${path}" fill="${d}"/><path d="${path}" fill="${c}" transform="translate(0,-452) scale(.93) translate(0,452)"/>`;
}
function beardSVG(p){
  const b=p.beard; if(!b) return '';
  const c=b.c; let s='';
  if(b.t==='full') s+=`<path d="M-39,-444 C-46,-372 46,-372 39,-444 C37,-428 28,-422 16,-420 Q0,-426 -16,-420 C-28,-422 -37,-428 -39,-444Z" fill="${c}"/>`;
  if(b.t==='trim') s+=`<path d="M-38,-440 C-42,-392 42,-392 38,-440 C36,-428 28,-422 16,-420 Q0,-426 -16,-420 C-28,-422 -36,-428 -38,-440Z" fill="${c}"/>`;
  if(b.t==='stub') s+=`<path d="M-38,-438 C-42,-396 42,-396 38,-438 C36,-426 28,-420 16,-418 Q0,-424 -16,-418 C-28,-420 -36,-426 -38,-438Z" fill="${c}" opacity=".3"/>`;
  if(b.t==='goatee') s+=`<path d="M-38,-440 C-40,-410 -34,-404 -22,-410 L22,-410 C34,-404 40,-410 38,-440 C34,-424 26,-420 14,-418 Q0,-424 -14,-418 C-26,-420 -34,-424 -38,-440Z" fill="${c}" opacity=".55"/><path d="M-17,-416 C-34,-384 -26,-338 0,-322 C26,-338 34,-384 17,-416 Q0,-406 -17,-416Z" fill="${c}"/><path d="M-10,-396 Q0,-380 10,-396 M0,-380 V-340" fill="none" stroke="#9a9a9a" stroke-width="2.5" opacity=".6"/>`;
  if(b.t==='full'||b.mus) s+=`<path d="M-16,-423 Q-8,-432 0,-428 Q8,-432 16,-423 Q8,-420 0,-422 Q-8,-420 -16,-423Z" fill="${c}"/>`;
  return s;
}
function glassesSVG(g){
  if(!g) return '';
  const st=`fill="none" stroke="${g.c}" stroke-width="3.4" stroke-linejoin="round"`;
  const lens=x=>g.t==='oct'?`<path d="M${x-8},-452 H${x+8} L${x+15},-445 V-432 L${x+8},-424 H${x-8} L${x-15},-432 V-445Z" ${st}/>`:`<circle cx="${x}" cy="-438" r="13.5" ${st}/>`;
  return `<g>${lens(-17)}${lens(17)}<path d="M-3,-440 Q0,-443 3,-440 M-33,-442 L-40,-446 M33,-442 L40,-446" ${st}/></g>`;
}
function capSVG(col){
  const d=shade(col,.16);
  return `<path d="M-40,-452 C-44,-508 44,-508 40,-452 Q0,-464 -40,-452Z" fill="${col}"/><path d="M-40,-452 C-44,-508 -2,-514 -2,-480 C-20,-480 -34,-468 -40,-452Z" fill="${d}" opacity=".5"/><path d="M-42,-452 Q0,-440 42,-452 Q0,-462 -42,-452Z" fill="${d}"/><path d="M-8,-482 l8,-12 8,12 -8,-4z" fill="#ffffff" opacity=".9"/>`;
}

// ---- body parts ----------------------------------------------------------------------------------
function torsoSVG(p){
  const t=p.top, w=p.w, main=t.c;
  const f=w<.95;
  const shape=f?`M-48,-356 Q-50,-376 -32,-380 L32,-380 Q50,-376 48,-356 Q40,-312 38,-290 Q44,-262 48,-236 L-48,-236 Q-44,-262 -38,-290 Q-40,-312 -48,-356Z`
               :`M-56,-356 Q-58,-378 -36,-380 L36,-380 Q58,-378 56,-356 L50,-290 L48,-236 L-48,-236 L-50,-290Z`;
  let s=`<g transform="scale(${f?1:w},1)"><path d="${shape}" fill="${main}"/>`;
  s+=`<path d="M20,-378 L${f?46:54},-356 L${f?40:50},-236 L22,-236Z" fill="#000" opacity=".11"/>`;
  if(t.k==='blazer'){
    const lap=t.lap||shade(baseCol(main),.1);
    s+=`<path d="M-20,-382 L0,-304 L20,-382Z" fill="${t.c2}"/>`;
    if(t.turtle) s+=`<rect x="-17" y="-404" width="34" height="40" rx="12" fill="${t.c2}"/>`;
    s+=`<path d="M-26,-382 L-2,-292 L-18,-276 L-52,-352Z M26,-382 L2,-292 L18,-276 L52,-352Z" fill="${lap}"/><path d="M-26,-382 L-2,-292 M26,-382 L2,-292" stroke="#000" stroke-opacity=".18" stroke-width="2.5" fill="none"/><circle cx="0" cy="-268" r="3.6" fill="#000" opacity=".35"/>`;
    s+=`<path d="M-48,-244 H48 V-236 H-48Z" fill="#000" opacity=".12"/>`;
  } else if(t.k==='polo'){
    s+=`<path d="M-15,-382 L0,-350 L15,-382Z" fill="${p.skin}"/><path d="M-22,-384 L-2,-366 L-8,-346 L-32,-368Z M22,-384 L2,-366 L8,-346 L32,-368Z" fill="${t.collar||'#ffffff'}"/><path d="M0,-352 V-300" stroke="#000" stroke-opacity=".2" stroke-width="2"/><circle cx="0" cy="-330" r="2.5" fill="#000" opacity=".3"/><circle cx="0" cy="-312" r="2.5" fill="#000" opacity=".3"/>`;
  } else {
    s+=`<path d="M-24,-382 Q0,-352 24,-382Z" fill="${p.skin}"/>`;
  }
  if(t.tie) s+=`<path d="M-6,-376 L6,-376 L8,-352 L12,-290 L0,-268 L-12,-290 L-8,-352Z" fill="${t.tie}"/><path d="M-6,-376 L6,-376 L5,-362 L-5,-362Z" fill="#000" opacity=".25"/>`;
  if(t.neck) s+=`<path d="M-20,-380 Q0,-346 20,-380" fill="none" stroke="${t.neck}" stroke-width="2.4"/><circle cx="0" cy="-350" r="5" fill="${t.neck}"/>`;
  return s+'</g>';
}
function shoeSVG(col,rock,band){
  return `<path d="M-26,-4 C-26,-24 -8,-28 6,-24 C20,-22 28,-14 28,-4 Q28,4 20,4 H-20 Q-26,4 -26,-4Z" fill="${col}"/><path d="M-26,0 H28 V5 Q28,8 22,8 H-20 Q-26,8 -26,3Z" fill="#000" opacity=".35"/><path d="M-10,-22 q6,-6 14,0" fill="none" stroke="#fff" stroke-width="2" opacity=".35"/>${rock?`<rect x="-22" y="-14" width="46" height="4" rx="2" fill="${band}"/>`:''}`;
}

// ---- held props (local space) --------------------------------------------------------------------
function propBack(prop){
  if(prop==='chair') return `<g><path d="M70,-120 L128,-340 L206,-322 L150,-104Z" fill="#5d6070"/><path d="M70,-120 L128,-340 L146,-336 L90,-116Z" fill="#000" opacity=".15"/><rect x="-60" y="-122" width="190" height="18" rx="6" fill="#4d5062"/><path d="M-30,-104 V0 M96,-104 V0" stroke="#3a3c4a" stroke-width="10"/></g>`;
  if(prop==='drums') return `<g><ellipse cx="-150" cy="-330" rx="52" ry="9" fill="#e8b92f" stroke="#8a6a12" stroke-width="2"/><ellipse cx="150" cy="-348" rx="56" ry="9" fill="#e8b92f" stroke="#8a6a12" stroke-width="2"/><path d="M-150,-330 V0 M150,-348 V0" stroke="#aab" stroke-width="5"/></g>`;
  return '';
}
const FRONT_LATE=['mic','keys','drums','laptop','binder'];
function propFront(prop,o){
  switch(prop){
    case 'guitar': case 'bass': {const bass=prop==='bass', col=bass?'#19b0e6':'#e8322f', dk=bass?'#0b5e7d':'#7d1816', nx=bass?-168:-150;
      return `<g><path d="M-44,-384 Q20,-300 56,-216" fill="none" stroke="#1a1a22" stroke-width="9" opacity=".8"/><path d="M14,-228 L${nx},-336" stroke="#5a3a22" stroke-width="13" stroke-linecap="round"/><rect x="${nx-18}" y="-358" width="24" height="26" rx="4" fill="#222" transform="rotate(-34 ${nx-6} -345)"/><g transform="rotate(-22 30 -216)"><ellipse cx="46" cy="-196" rx="46" ry="38" fill="${col}"/><ellipse cx="14" cy="-226" rx="30" ry="24" fill="${col}"/><ellipse cx="54" cy="-188" rx="40" ry="32" fill="${dk}" opacity=".18"/><circle cx="46" cy="-196" r="10" fill="#111"/><rect x="26" y="-176" width="40" height="6" rx="3" fill="#ddd"/><rect x="40" y="-208" width="20" height="4" rx="2" fill="#ddd" opacity=".8"/></g></g>`;}
    case 'mic': return `<g><ellipse cx="54" cy="0" rx="36" ry="7" fill="#222"/><rect x="51" y="-392" width="6" height="392" fill="#2a2a34"/><g transform="rotate(-24 54 -398)"><rect x="40" y="-428" width="28" height="42" rx="13" fill="#444"/><rect x="40" y="-428" width="28" height="22" rx="11" fill="#999"/></g></g>`;
    case 'keys': return `<g><path d="M-100,-214 L-58,0 M100,-214 L58,0" stroke="#9aa" stroke-width="7"/><rect x="-146" y="-266" width="292" height="30" rx="4" fill="#14141c"/><rect x="-146" y="-238" width="292" height="26" fill="#f8f8f8" stroke="#555" stroke-width="2"/>${Array.from({length:19},(_,i)=>`<rect x="${-142+i*15.4}" y="-238" width="1.6" height="26" fill="#555"/>`).join('')}${Array.from({length:13},(_,i)=>`<rect x="${-134+i*15.4+(i>5?15.4:0)}" y="-238" width="9" height="16" fill="#14141c"/>`).join('')}<rect x="-120" y="-262" width="40" height="8" rx="3" fill="#ff2e88"/></g>`;
    case 'drums': return `<g><circle cx="0" cy="-110" r="84" fill="#2b2b40"/><circle cx="0" cy="-110" r="76" fill="#7a1fe0" stroke="#e9e9f5" stroke-width="6"/><circle cx="0" cy="-110" r="54" fill="#ece9f8" opacity=".95"/><text x="0" y="-99" text-anchor="middle" font-family="Oswald,Impact,sans-serif" font-weight="700" font-size="34" fill="#7a1fe0">NMRO</text><ellipse cx="-64" cy="-216" rx="44" ry="13" fill="#ece9f8" stroke="#aab" stroke-width="3"/><path d="M-108,-216 V-190 Q-64,-176 -20,-190 V-216" fill="#7a1fe0" stroke="#aab" stroke-width="3"/><ellipse cx="64" cy="-216" rx="44" ry="13" fill="#ece9f8" stroke="#aab" stroke-width="3"/><path d="M20,-216 V-190 Q64,-176 108,-190 V-216" fill="#7a1fe0" stroke="#aab" stroke-width="3"/></g>`;
    case 'laptop': return `<g><path d="M-92,-196 L-78,-268 H78 L92,-196Z" fill="#c9ced8"/><circle cx="0" cy="-234" r="8" fill="#fff" opacity=".85"/><path d="M-100,-196 H100 L108,-186 H-108Z" fill="#9aa3b4"/></g>`;
    case 'binder': return `<g><rect x="-56" y="-346" width="112" height="86" rx="5" fill="#8a1a1e"/><rect x="-56" y="-346" width="10" height="86" fill="#000" opacity=".2"/><rect x="-36" y="-326" width="84" height="40" rx="3" fill="#f0b02a"/><text x="6" y="-312" text-anchor="middle" font-family="Oswald,Impact,sans-serif" font-weight="700" font-size="14" fill="#2a1a10">${o.text1||'LEGACY'}</text><text x="6" y="-296" text-anchor="middle" font-family="Oswald,Impact,sans-serif" font-weight="700" font-size="14" fill="#2a1a10">${o.text2||'SYSTEMS'}</text></g>`;
  }
  return '';
}

// ---- IK ------------------------------------------------------------------------------------------
function ik(S,H,l1,l2,side,prev){
  let dx=H[0]-S[0],dy=H[1]-S[1],d=Math.hypot(dx,dy)||1; const maxd=l1+l2-.6;
  if(d>maxd){dx*=maxd/d;dy*=maxd/d;d=maxd} if(d<24){dx*=24/d;dy*=24/d;d=24}
  const a=(l1*l1-l2*l2+d*d)/(2*d), h=Math.sqrt(Math.max(0,l1*l1-a*a)), ux=dx/d, uy=dy/d, px=S[0]+ux*a, py=S[1]+uy*a;
  const c1=[px-uy*h,py+ux*h], c2=[px+uy*h,py-ux*h];
  let pick;
  if(prev&&prev.E){const d1=Math.hypot(c1[0]-prev.E[0],c1[1]-prev.E[1]),d2=Math.hypot(c2[0]-prev.E[0],c2[1]-prev.E[1]);pick=d1<=d2?c1:c2;}
  else {const sc=q=>side*q[0]+.5*q[1];pick=sc(c1)>sc(c2)?c1:c2;}
  if(prev){ if(prev.E){const k=.55;pick=[prev.E[0]+(pick[0]-prev.E[0])*k,prev.E[1]+(pick[1]-prev.E[1])*k]} prev.E=pick;}
  return [pick,[S[0]+dx,S[1]+dy]];
}
const ex=n=>n.toFixed(1);

// absolute hand targets (figure coords): [screen-left, screen-right]
const POSES={
  idle:(t,e,w)=>[[-54*w-12,-206+Math.sin(t*1.7)*2],[54*w+12,-206+Math.cos(t*1.7)*2]],
  wave:(t,e,w)=>[[-54*w-12,-206],[54*w+70+Math.sin(t*9)*18,-452]],
  fist:(t,e,w)=>[[-54*w-12,-206],[54*w+40,-512+Math.sin(t*7)*10]],
  both:(t,e,w)=>[[-54*w-46,-500+Math.sin(t*7)*8],[54*w+46,-500+Math.cos(t*7)*8]],
  cheer:(t,e,w)=>[[-54*w-60,-484+Math.sin(t*9)*16],[54*w+60,-484+Math.cos(t*9)*16]],
  guitar:(t,e,w)=>[[-118,-326],[40,-232+Math.sin(t*22)*8*e.l]],
  bass:(t,e,w)=>[[-140,-330],[30,-234+Math.sin(t*16)*6*e.l]],
  mic:(t,e,w)=>[[-54*w-12,-206],[54,-380]],
  micup:(t,e,w)=>[[-54*w-40,-520+Math.sin(t*6)*10],[54,-380]],
  type:(t,e,w)=>[[-84+Math.sin(t*18)*4,-200],[84+Math.cos(t*18)*4,-200]],
  drum:(t,e,w)=>[[-64,-236-Math.max(0,Math.sin(t*14))*40],[64,-236-Math.max(0,Math.cos(t*14+1))*40]],
  keys:(t,e,w)=>[[-70+Math.sin(t*4)*30,-226],[70+Math.cos(t*4)*30,-226]],
  point:(t,e,w)=>[[-54*w-12,-206],[54*w+140,-380+Math.sin(t*5)*8]],
  hips:(t,e,w)=>[[-54*w-22,-282],[54*w+22,-282]],
  salute:(t,e,w)=>[[-54*w-12,-206],[40,-466]],
  hold:(t,e,w)=>[[-50,-318],[50,-318]],
  shrug:(t,e,w)=>[[-54*w-44,-300+Math.sin(t*3)*6],[54*w+44,-300+Math.sin(t*3)*6]],
  lean:(t,e,w)=>[[-60,-250],[40,-480]],
};

function makeChar(id,o={}){
  const p=P[id], w=p.w, rock=!!o.rock, T=p.top, prop=o.prop||'none', lean=o.pose==='lean';
  const hair=hairLayers(p), skinD=shade(p.skin,.12), slc=baseCol(T.c), hasHair=!!p.hair, bandC=p.band;
  const longSl=T.sl==='long';
  let headgear='';
  if(p.cap) headgear=capSVG(p.cap);
  else if(rock) headgear= hasHair? `<path d="M-39,-456 Q0,-474 39,-456 L39,-446 Q0,-464 -39,-446Z" fill="${bandC}"/>` : `<path d="M-40,-458 Q0,-478 40,-458 L40,-446 Q0,-466 -40,-446Z" fill="${bandC}"/><path d="M38,-452 L60,-440 L50,-432 Z M38,-452 L56,-464 L56,-448Z" fill="${bandC}"/>`;
  const teasedSVG='';
  const shades=o.shades?`<path d="M-37,-450 H37 V-436 Q24,-426 14,-436 H4 Q0,-440 -4,-436 H-14 Q-24,-426 -37,-436Z" fill="#101018"/><path d="M-30,-448 l12,0 -7,7z" fill="#fff" opacity=".45"/><path d="M8,-448 l12,0 -7,7z" fill="#fff" opacity=".35"/>`:'';
  const tat=p.tat?`<path class="tatL" fill="none" stroke="#6d7f55" stroke-width="12" stroke-dasharray="5 4 12 5" opacity=".55"/><path class="tatR" fill="none" stroke="#6d7f55" stroke-width="12" stroke-dasharray="5 4 12 5" opacity=".55"/>`:'';
  const armCol=(T.sl==='none')?p.skin:slc;
  const late=FRONT_LATE.includes(prop);
  const cuff=(T.c2&&longSl&&T.k==='blazer')?T.c2:'none';
  const g=document.createElementNS('http://www.w3.org/2000/svg','g');
  g.innerHTML=`
  <ellipse cx="${lean?20:0}" cy="2" rx="${lean?150:82}" ry="12" fill="#000" opacity=".28"/>
  ${prop==='drums'?propBack('drums'):''}${lean?propBack('chair'):''}
  <g class="legs">
    <path class="lt L" fill="none" stroke="${p.pants}" stroke-width="40" stroke-linecap="round"/><path class="ls L" fill="none" stroke="${shade(p.pants,.08)}" stroke-width="32" stroke-linecap="round"/>
    <path class="lt R" fill="none" stroke="${p.pants}" stroke-width="40" stroke-linecap="round"/><path class="ls R" fill="none" stroke="${shade(p.pants,.08)}" stroke-width="32" stroke-linecap="round"/>
    ${rock?`<path class="rs L" fill="none" stroke="${bandC}" stroke-width="4"/><path class="rs R" fill="none" stroke="${bandC}" stroke-width="4"/>`:''}
    <g class="fL">${shoeSVG(p.shoes,rock,bandC)}</g><g class="fR">${shoeSVG(p.shoes,rock,bandC)}</g>
  </g>
  <g class="up">
    <g class="hb">${teasedSVG}${hair.back}</g>
    <rect x="-${14*w+6}" y="-408" width="${28*w+12}" height="40" fill="${skinD}"/>
    <path d="M-34,-250 H34 V-232 Q0,-224 -34,-232Z" fill="${shade(p.pants,.2)}"/>
    ${torsoSVG(p)}
    ${late?'':propFront(prop,o)}
    <g class="head">
      <ellipse cx="-36" cy="-440" rx="6.5" ry="10" fill="${p.skin}"/><ellipse cx="36" cy="-440" rx="6.5" ry="10" fill="${p.skin}"/>
      <ellipse cx="0" cy="${HEAD_Y}" rx="37" ry="43" fill="${p.skin}"/>
      <path d="M20,-476 C46,-462 44,-420 22,-400 C30,-420 32,-452 20,-476Z" fill="#000" opacity=".07"/>
      ${beardSVG(p)}
      <g class="eyes"><circle cx="-14" cy="-438" r="3.7" fill="#1b1b22"/><circle cx="14" cy="-438" r="3.7" fill="#1b1b22"/></g>
      <g stroke="${hasHair?shade(p.hair,.1):'#3a2a22'}" stroke-width="3.2" stroke-linecap="round" fill="none"><path class="bl" d="M-22,-452 L-8,-451"/><path class="br" d="M8,-451 L22,-452"/></g>
      <path d="M-2,-434 Q3,-424 7,-427" fill="none" stroke="${shade(p.skin,.25)}" stroke-width="2.4" stroke-linecap="round"/>
      <path class="mc" d="M-10,-413 Q0,-403 10,-413" fill="none" stroke="${p.beard?'#f3d9cf':'#a14848'}" stroke-width="3.4" stroke-linecap="round"/>
      <g class="mo" style="display:none"><ellipse cx="0" cy="-410" rx="9" ry="7.5" fill="#4a1520"/><path d="M-6,-412 Q0,-404 6,-412Z" fill="#e0707a"/></g>
      ${glassesSVG(p.glasses)}${hair.front}${headgear}${shades}
    </g>
    ${late?propFront(prop,o):''}
    <g class="arms">
      <path class="au L" fill="none" stroke="${armCol}" stroke-width="28" stroke-linecap="round"/><path class="al L" fill="none" stroke="${longSl?slc:p.skin}" stroke-width="25" stroke-linecap="round"/>
      <path class="au R" fill="none" stroke="${armCol}" stroke-width="28" stroke-linecap="round"/><path class="al R" fill="none" stroke="${longSl?slc:p.skin}" stroke-width="25" stroke-linecap="round"/>
      ${tat}
      <circle class="sp L" r="17" fill="${armCol}"/><circle class="sp R" r="17" fill="${armCol}"/>
      <path class="cf L" fill="none" stroke="${cuff}" stroke-width="26"/><path class="cf R" fill="none" stroke="${cuff}" stroke-width="26"/>
      ${rock?`<path class="wb L" fill="none" stroke="${bandC}" stroke-width="27"/><path class="wb R" fill="none" stroke="${bandC}" stroke-width="27"/>`:''}
      <circle class="hd L" r="13.5" fill="${p.skin}"/><circle class="hd R" r="13.5" fill="${p.skin}"/>
    </g>
    ${prop==='drums'?`<path class="stk L" stroke="#e8d2a0" stroke-width="4" stroke-linecap="round"/><path class="stk R" stroke="#e8d2a0" stroke-width="4" stroke-linecap="round"/>`:''}
  </g>`;
  const q=s=>g.querySelector(s);
  const A={upL:q('.au.L'),upR:q('.au.R'),loL:q('.al.L'),loR:q('.al.R'),spL:q('.sp.L'),spR:q('.sp.R'),hdL:q('.hd.L'),hdR:q('.hd.R'),cfL:q('.cf.L'),cfR:q('.cf.R'),wbL:q('.wb.L'),wbR:q('.wb.R'),tatL:q('.tatL'),tatR:q('.tatR'),
    ltL:q('.lt.L'),ltR:q('.lt.R'),lsL:q('.ls.L'),lsR:q('.ls.R'),rsL:q('.rs.L'),rsR:q('.rs.R'),fL:q('.fL'),fR:q('.fR'),up:q('.up'),hb:q('.hb'),head:q('.head'),eyes:q('.eyes'),bl:q('.bl'),br:q('.br'),mc:q('.mc'),mo:q('.mo'),stkL:q('.stk.L'),stkR:q('.stk.R')};
  const ph=Math.random()*6, pose=POSES[o.pose||'idle']||POSES.idle;
  const wide=o.stance==null&&['guitar','bass','micup','cheer','fist','both','point'].includes(o.pose||'');
  const L1=84,L2=80,T1=118,T2=116;
  let lastOpen=null,lastMood='';const mem={aL:{},aR:{},kL:{},kR:{}};
  g.update=(t,e)=>{
    const tt=t+ph, bobAmp=(o.bob??1)*(Math.abs(Math.sin(tt*(o.rate||6)))*9*(.25+e.l));
    let hx=0,hy=-bobAmp,th=Math.sin(tt*2.4)*(o.sway??1.4);
    if(lean){hx=36;hy=124-bobAmp*.3;th=14+Math.sin(tt*1.3);}
    const unrot=pt=>{const a=-th*Math.PI/180,dx=pt[0]-hx,dy=pt[1]-hy+250;return [dx*Math.cos(a)-dy*Math.sin(a),dx*Math.sin(a)+dy*Math.cos(a)-250]};
    A.up.setAttribute('transform',`translate(${ex(hx)},${ex(hy)}) rotate(${ex(th)} 0 -250)`);
    const [Lt,Rt]=pose(tt,e,w).map(unrot);
    const SL=[-52*w,SH_Y+2],SR=[52*w,SH_Y+2];
    const arm=(S,H,side,au,al,sp,hd,cf,wb,tat)=>{const [E,Hh]=ik(S,H,L1,L2,side,mem[side<0?'aL':'aR']);
      au.setAttribute('d',`M${ex(S[0])},${ex(S[1])} L${ex(E[0])},${ex(E[1])}`);al.setAttribute('d',`M${ex(E[0])},${ex(E[1])} L${ex(Hh[0])},${ex(Hh[1])}`);
      sp.setAttribute('cx',S[0]);sp.setAttribute('cy',S[1]);hd.setAttribute('cx',ex(Hh[0]));hd.setAttribute('cy',ex(Hh[1]));
      const ux=Hh[0]-E[0],uy=Hh[1]-E[1],ln=Math.hypot(ux,uy)||1,k=(ln-24)/ln,k2=(ln-15)/ln;
      cf.setAttribute('d',`M${ex(E[0]+ux*k)},${ex(E[1]+uy*k)} L${ex(Hh[0]-ux*(10/ln))},${ex(Hh[1]-uy*(10/ln))}`);
      if(wb)wb.setAttribute('d',`M${ex(E[0]+ux*k2)},${ex(E[1]+uy*k2)} L${ex(Hh[0]-ux*(7/ln))},${ex(Hh[1]-uy*(7/ln))}`);
      if(tat)tat.setAttribute('d',`M${ex(E[0]+ux*.12)},${ex(E[1]+uy*.12)} L${ex(E[0]+ux*.78)},${ex(E[1]+uy*.78)}`);
      return Hh;};
    const hL=arm(SL,Lt,-1,A.upL,A.loL,A.spL,A.hdL,A.cfL,A.wbL,A.tatL), hR=arm(SR,Rt,1,A.upR,A.loR,A.spR,A.hdR,A.cfR,A.wbR,A.tatR);
    if(A.stkL){A.stkL.setAttribute('d',`M${ex(hL[0]-6)},${ex(hL[1]+8)} L${ex(hL[0]+16)},${ex(hL[1]-34)}`);A.stkR.setAttribute('d',`M${ex(hR[0]+6)},${ex(hR[1]+8)} L${ex(hR[0]-16)},${ex(hR[1]-34)}`);}
    const hipL=[hx-22*w,-246+hy], hipR=[hx+22*w,-246+hy];
    let FL,FR; const ws=wide?(58+Math.sin(tt*3)*3):(o.stance!=null?o.stance:28);
    if(lean){FL=[-190,-228];FR=[-130,-224];}
    else if(o.pose==='drum'||o.pose==='keys'){FL=[-44,-14];FR=[44,-14];}
    else {FL=[-ws*w-6,-14];FR=[ws*w+6,-14];}
    const leg=(H,F,side,lt,ls,rs,foot)=>{const [K,Fh]=ik(H,F,T1,T2,lean?-side:side,mem[side<0?'kL':'kR']);
      lt.setAttribute('d',`M${ex(H[0])},${ex(H[1])} L${ex(K[0])},${ex(K[1])}`);ls.setAttribute('d',`M${ex(K[0])},${ex(K[1])} L${ex(Fh[0])},${ex(Fh[1]-6)}`);
      if(rs)rs.setAttribute('d',`M${ex(H[0]+side*18)},${ex(H[1]+8)} L${ex(K[0]+side*16)},${ex(K[1])} L${ex(Fh[0]+side*13)},${ex(Fh[1]-22)}`);
      foot.setAttribute('transform',`translate(${ex(Fh[0])},${ex(Fh[1]+14)}) ${lean?'rotate(-78)':`scale(${side<0?-1:1},1)`}`);};
    leg(hipL,FL,-1,A.ltL,A.lsL,A.rsL,A.fL);leg(hipR,FR,1,A.ltR,A.lsR,A.rsR,A.fR);
    const ht=`rotate(${ex(Math.sin(tt*2.1)*2.2+(lean?-8:0))} 0 -395) translate(0,-395) scale(1.17) translate(0,395)`;A.head.setAttribute('transform',ht);A.hb.setAttribute('transform',ht);
    const singing=o.sing!==false&&e.sing, open=singing&&e.t>.28&&Math.sin(t*24+ph)>-.25;
    if(open!==lastOpen){lastOpen=open;A.mo.style.display=open?'':'none';A.mc.style.display=open?'none':'';}
    const blink=(Math.sin(tt*1.1)>.985)?.12:1; A.eyes.setAttribute('transform',`translate(0,${ex(-438*(1-blink))}) scale(1,${blink})`);
    const mood=o.expr||(singing?'shout':'smile');
    if(mood!==lastMood){lastMood=mood;
      const up=mood==='shout'?-4:0, ang=mood==='sad'||mood==='worry'?4:0;
      A.bl.setAttribute('d',`M-22,${-452+up+ang} L-8,${-451+up-ang}`);A.br.setAttribute('d',`M8,${-451+up-ang} L22,${-452+up+ang}`);
      A.mc.setAttribute('d',mood==='sad'||mood==='worry'?'M-9,-408 Q0,-414 9,-408':mood==='smirk'?'M-9,-411 Q2,-405 10,-414':'M-10,-413 Q0,-403 10,-413');}
  };
  g.pid=id; return g;
}
function labelSVG(id,x,y,k=1){const p=P[id];const wd=Math.max(160,p.name.length*13+34,(p.sub?p.sub.length*8.2+34:0)),h=p.sub?52:34;
  return `<g class="lab" data-id="${id}" transform="translate(${x},${y}) scale(${k})"><rect x="${-wd/2}" y="0" width="${wd}" height="${h}" rx="6" fill="#0b0b14" stroke="${p.band}" stroke-width="3" opacity=".95"/><text y="23" text-anchor="middle" font-family="Oswald,Impact,Arial Narrow,sans-serif" font-size="22" font-weight="700" fill="#fff" letter-spacing="1">${p.name.toUpperCase()}</text>${p.sub?`<text y="42" text-anchor="middle" font-family="Arial,sans-serif" font-size="12.5" font-weight="700" fill="${p.band}">${p.sub.toUpperCase()}</text>`:''}</g>`;}
