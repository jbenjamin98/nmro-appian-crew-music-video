// Lyrics (user-supplied; times aligned from Whisper word timestamps + envelope). Edit freely.
const LYRICS=[
[40.6,"Legacy systems running slow in the bay"],[44.4,"Paperwork stacked getting in the way"],
[48.2,"Then the call goes out across the digital sea"],[51.4,"Sending the coders from the DOW"],[54.0,"Set the data free!"],
[55.6,"NMRO stepping up to the plate"],[58.3,"Modernizing workflows, we don't hesitate"],
[61.4,"Click, drag, configure, watch the interfaces fly"],[64.5,"Building out the backbone underneath the Navy sky"],
[68.0,"From the shore to the fleet, yeah, the mission is clear"],[71.6,"Shift the whole operation into overdrive gear"],
[75.2,"No bottlenecks left when we deploy the design"],[78.9,"Every single process running right on the line"],
[81.8,"We're the NMRO Appian crew"],[85.5,"Building the future for the Navy blue"],[88.8,"Low-code speed on the high-tech seas"],
[91.9,"Automated readiness with precision and ease"],[95.2,"Process models firing at the speed of light"],[98.6,"Keeping the fleet running day and night"],
[101.8,"Yeah, from concept to launch, watch the velocity grow"],[105.2,"Appian devs of the NMRO"],[108.6,"Oh"],[113.0,"Yeah, the NMRO"],[117.2,"Oh"],
[121.9,"Data fabric woven tight, records in sync"],[125.5,"Deploying new solutions faster than you can blink"],[128.4,"Sail interfaces looking sharp on the screen"],
[131.8,"The fastest dev sprints that the fleet's ever seen"],[135.4,"Requirements come in, we're agile and bold"],[138.6,"Turning complex logic into digital gold"],
[141.6,"Security locked down, IL5 tight"],[145.0,"Shipping clean builds every single Friday night"],
[148.7,"From the shore to the fleet, yeah, the mission is clear"],[152.2,"Shift the whole operation into overdrive gear"],
[156.0,"No bottlenecks left when we deploy the design"],[158.8,"Every single process running right on the line"],
[165.6,"We're the NMRO Appian crew"],[169.4,"Building the future for the Navy blue"],[172.9,"Low-code speed on the high-tech seas"],
[175.8,"Automated readiness with precision and ease"],[179.1,"Process models firing at the speed of light"],[182.8,"Keeping the fleet running day and night"],
[186.0,"Yeah, from concept to launch, watch the velocity grow"],[189.6,"Appian devs of the NMRO"],[192.8,"Oh"],
[206.3,"Expression rules locked! Hey!"],[209.0,"Integrations live! Hey!"],[211.2,"Giving the fleet everything we can give!"],[216.5,"Oh"],
[244.3,"We're the NMRO Appian crew"],[249.2,"Mission readiness in everything we do"],[252.9,"Low-code speed on the high-tech seas"],[256.4,"Shipping the code with the greatest of ease"],
[259.8,"Appian devs of the NMRO"],[263.2,"Oh"],[266.2,"Appian devs of the NMRO"],[269.6,"Oh"],[273.0,"Appian devs of the NMRO"]];
const LYRIC_END={216.5:221,263.2:266,269.6:272,192.8:196,108.6:112,117.2:121,273.0:281};
const HEY=[207.8,210.4];
const PYRO=[81.8,105.2,113,165.6,189.6,207.8,210.4,244.3,259.8,266.2,273,276,279];

// ---- cast helpers (x, y(default=floor), s=scale; feet at y) ---------------------------------------
const C=(id,x,s,pose,o={})=>({id,x,s,pose,...o});
const BAND=(rock=true,extra=[])=>[
  C('justin',640,.52,'drum',{prop:'drums',y:412,rock,sing:false}),
  C('mason',1000,.55,'keys',{prop:'keys',y:395,rock,sing:false}),
  C('adharsh',280,.55,'bass',{prop:'bass',y:395,rock,sing:false}),
  C('niki',1140,.66,'cheer',{y:470,rock}),
  C('robert',140,.66,'guitar',{prop:'guitar',y:470,rock,sing:false}),
  C('hana',380,.66,'guitar',{prop:'guitar',y:470,rock,sing:false}),
  C('matthew',900,.66,'guitar',{prop:'guitar',y:470,rock,sing:false}),
  C('saba',520,.62,'cheer',{y:462,rock}),C('sriya',760,.62,'cheer',{y:462,rock}),
  ...extra,
  C('jacob',640,.7,'mic',{prop:'mic',y:520,rock})];
const ALL=(pose='cheer',rock=true)=>{
  const T=TEAM,N=NAVY,out=[];
  const back=T.slice(0,10), front=[T[10],T[11],N[0],T[12],N[1],T[13],N[2],T[14],N[3]];
  back.forEach((id,i)=>out.push(C(id,70+i*126,.48,pose,{y:385,rock})));
  front.forEach((id,i)=>out.push(C(id,75+i*136,.56,pose,{y:490,rock})));
  return out;};
const PAIR=(a,pa,b,pb,o={})=>[C(a,230,.85,pa,{rock:true,...(o.a||{})}),C(b,1050,.85,pb,{rock:true,...(o.b||{})})];
const NAVY3=(pose,o={})=>NAVY.map((id,i)=>C(id,170+i*313,.8,pose,{y:490,label:!o.nolabel,...o}));

// ---- scenes --------------------------------------------------------------------------------------
const SCENES=[];
const S=(t,bg,o={})=>SCENES.push({t,bg,...o});
// Intro
S(0,'grid',{title:true,cam:[1,1.05]});
S(6,'base',{cap:'NAVAL AVIATION MRO',cam:[1,1.06]});
S(14,'hangar',{cast:[C('jonelle',170,.85,'shrug',{y:490,label:true,expr:'worry'}),C('jake',483,.85,'idle',{y:490,label:true,expr:'worry'}),C('paul',796,.85,'idle',{y:490,label:true,expr:'sad'}),C('jason',1109,.85,'hips',{y:490,label:true,expr:'worry'})],speech:[[16,'Is this form from 1994?',326,150],[19,'We need a better way…',953,150]],cam:[1.03,1]});
// Meet the band: 15 solos
const SOLO={jacob:['mic','mic'],christina:['hips'],hana:['guitar','guitar'],joe:['cheer'],justin:['drum','drums'],lexie:['hips'],matthew:['guitar','guitar'],niki:['cheer'],rebecca:['cheer'],robert:['guitar','guitar'],saba:['hips'],sriya:['fist'],tejan:['both'],adharsh:['bass','bass'],mason:['keys','keys']};
const TINT=['#4b0b5a','#0b3a5a','#5a3a0b','#0b5a3a','#5a0b2e'];
TEAM.forEach((id,i)=>{const t=22+i*1.16,s=SOLO[id];
  S(t,'stage',{opts:{tint:TINT[i%5]},cast:[C(id,640,.85,s[0],{prop:s[1]||'none',y:490,rock:true,label:true,shades:i%3==0,sing:false,bob:1.4})],cam:[1,1.06],flash:1});});
// Verse 1
S(39.5,'office',{opts:{desk:1},cast:[C('paul',700,.9,'lean',{y:520,expr:'smile',sing:true}),C('jonelle',1110,.85,'shrug',{expr:'worry'})],cam:[1,1.04]});
S(44.4,'office',{opts:{paper:1},cast:[C('jake',380,.85,'hold',{prop:'binder',expr:'worry'}),C('paul',900,.85,'hips',{expr:'sad'})],cam:[1.02,1]});
S(48.0,'sea',{cast:PAIR('christina','point','joe','type',{b:{prop:'laptop'}}),cam:[1,1.05]});
S(53.9,'cage',{cast:PAIR('tejan','cheer','lexie','cheer'),cam:[1,1.08]});
S(55.4,'stage',{opts:{sign:'NMRO',crowd:1},cast:BAND(true),cam:[1.1,1],flash:1});
S(61.3,'laptop',{cast:PAIR('christina','type','joe','point',{a:{prop:'laptop'}}),cam:[1,1.05]});
S(64.4,'base',{cast:PAIR('lexie','point','rebecca','cheer'),cam:[1.06,1]});
S(67.9,'shore',{cast:PAIR('robert','point','saba','cheer'),cam:[1,1.06]});
S(71.5,'speedo',{cast:PAIR('tejan','fist','sriya','fist'),cam:[1,1.08]});
S(75.1,'funnel',{cast:PAIR('niki','point','justin','cheer'),cam:[1,1.05]});
S(78.8,'conveyor',{cast:PAIR('hana','point','adharsh','both'),cam:[1,1.05]});
// Chorus 1
S(81.7,'stage',{opts:{sign:'NMRO',crowd:1},cast:ALL('cheer'),cam:[1.08,1],flash:1});
S(85.4,'stage',{opts:{sign:'NMRO',crowd:1,tint:'#0b2f6a'},cast:BAND(true),cam:[1,1.1]});
S(88.7,'base',{cast:[C('jacob',330,.85,'micup',{prop:'mic',rock:true}),C('rebecca',980,.85,'cheer',{rock:true})],cam:[1,1.08]});
S(95.1,'fabric',{cast:PAIR('sriya','cheer','mason','cheer'),cam:[1,1.06]});
S(98.5,'sea',{cast:[C('saba',260,.85,'micup',{prop:'mic',rock:true}),C('hana',1010,.85,'guitar',{prop:'guitar',rock:true,sing:false})],cam:[1,1.06]});
S(101.7,'launch',{cast:PAIR('robert','fist','lexie','both'),cam:[1,1.06]});
S(105.1,'stage',{opts:{sign:'NMRO',crowd:1},cast:ALL('both'),cam:[1.08,1],flash:1});
S(113.0,'grid',{cast:[C('matthew',640,.85,'guitar',{prop:'guitar',rock:true,shades:true,bob:1.6,sing:false})],cam:[1,1.1]});
// Verse 2
S(121.8,'fabric',{cast:PAIR('tejan','point','adharsh','type',{b:{prop:'laptop'}}),cam:[1,1.05]});
S(125.4,'cage',{cast:PAIR('joe','fist','christina','fist'),cam:[1,1.08]});
S(128.3,'sails',{cast:PAIR('niki','cheer','justin','point'),cam:[1,1.06]});
S(131.7,'sprint',{cast:PAIR('lexie','fist','rebecca','fist'),cam:[1,1.06]});
S(135.3,'kanban',{cast:PAIR('hana','point','mason','hips'),cam:[1,1.05]});
S(138.5,'gold',{cast:PAIR('saba','both','matthew','both'),cam:[1,1.06]});
S(141.5,'shield',{cast:PAIR('robert','salute','tejan','salute'),cam:[1,1.05]});
S(144.9,'friday',{cast:PAIR('joe','cheer','sriya','cheer',{a:{shades:true}}),cam:[1,1.06]});
// Pre-chorus 2 (the Navy joins in)
S(148.6,'shore',{cast:PAIR('jonelle','point','paul','cheer'),cam:[1,1.06]});
S(152.1,'speedo',{cast:PAIR('jake','fist','jacob','fist'),cam:[1,1.08]});
S(155.9,'funnel',{cast:PAIR('paul','point','jonelle','cheer'),cam:[1,1.05]});
S(158.7,'conveyor',{cast:PAIR('jason','cheer','christina','both'),cam:[1,1.05]});
S(162.0,'stage',{opts:{crowd:1,tint:'#4b0b5a'},cast:NAVY3('guitar',{rock:true,shades:true,sing:false}).map((c,i)=>({...c,prop:['guitar','bass','guitar'][i]})),cam:[1.1,1],flash:1});
// Chorus 2
S(165.5,'stage',{opts:{sign:'NMRO',crowd:1},cast:ALL('cheer'),cam:[1.08,1],flash:1});
S(169.3,'stage',{opts:{sign:'NMRO',crowd:1,tint:'#6a0b4a'},cast:BAND(true,[C('jonelle',380,.7,'cheer',{y:520,rock:true}),C('paul',900,.7,'cheer',{y:520,rock:true}),C('jake',1170,.6,'cheer',{y:510,rock:true}),C('jason',1010,.6,'cheer',{y:525,rock:true})]),cam:[1,1.1]});
S(172.8,'base',{cast:PAIR('jake','fist','lexie','both'),cam:[1,1.08]});
S(179.0,'fabric',{cast:PAIR('niki','cheer','justin','cheer'),cam:[1,1.06]});
S(182.7,'sea',{cast:[C('jacob',330,.85,'micup',{prop:'mic',rock:true}),C('hana',950,.85,'guitar',{prop:'guitar',rock:true,sing:false})],cam:[1,1.06]});
S(185.9,'launch',{cast:PAIR('jonelle','fist','paul','both'),cam:[1,1.06]});
S(189.5,'stage',{opts:{sign:'NMRO',crowd:1},cast:ALL('both'),cam:[1.08,1],flash:1});
S(193.5,'stage',{opts:{crowd:1,tint:'#0b5a3a'},cast:[C('hana',400,.85,'guitar',{prop:'guitar',rock:true,shades:true,sing:false,bob:1.6}),C('matthew',880,.85,'guitar',{prop:'guitar',rock:true,shades:true,sing:false,bob:1.6})],cam:[1,1.08],flash:1});
S(200.0,'stage',{opts:{crowd:1,tint:'#5a0b2e'},cast:NAVY3('both',{rock:true,shades:true,nolabel:true}),cam:[1.08,1],flash:1});
// Bridge
S(206.2,'lock',{cast:PAIR('lexie','fist','tejan','fist'),cam:[1.06,1]});
S(208.9,'plug',{cast:PAIR('christina','fist','joe','fist'),cam:[1.06,1]});
S(211.1,'gift',{cast:[C('rebecca',330,.85,'both',{rock:true}),C('saba',950,.85,'both',{rock:true}),C('jonelle',640,.7,'wave',{rock:true})],cam:[1,1.08]});
// Instrumental: solos
S(220.4,'stage',{opts:{crowd:1,tint:'#5a3a0b'},cast:[C('justin',640,.85,'drum',{prop:'drums',y:480,rock:true,shades:true,label:true,sing:false,bob:1.5})],cam:[1,1.08],flash:1});
S(226.4,'stage',{opts:{crowd:1,tint:'#0b3a5a'},cast:[C('mason',640,.85,'keys',{prop:'keys',y:490,rock:true,shades:true,label:true,sing:false,bob:1.5})],cam:[1,1.08],flash:1});
S(231.0,'stage',{opts:{crowd:1,tint:'#4b0b5a'},cast:[C('jonelle',640,.85,'guitar',{prop:'guitar',y:490,rock:true,shades:true,label:true,sing:false})],cam:[1,1.08],flash:1});
S(233.6,'stage',{opts:{crowd:1,tint:'#0b5a3a'},cast:[C('jake',640,.85,'fist',{y:490,rock:true,shades:true,label:true})],cam:[1,1.08],flash:1});
S(236.2,'stage',{opts:{crowd:1,tint:'#5a0b2e'},cast:[C('paul',640,.85,'both',{y:490,rock:true,shades:true,label:true})],cam:[1,1.08],flash:1});
S(238.8,'stage',{opts:{crowd:1,tint:'#0b3a5a'},cast:[C('jason',640,.85,'guitar',{prop:'guitar',y:490,rock:true,shades:true,label:true,sing:false,bob:1.4})],cam:[1,1.08],flash:1});
S(242.0,'stage',{opts:{sign:'NMRO',crowd:1},cast:ALL('hips'),cam:[1.1,1],flash:1});
// Final chorus
S(244.3,'stage',{opts:{sign:'NMRO',crowd:1,tint:'#6a0b4a'},cast:ALL('cheer'),cam:[1.08,1],flash:1});
S(249.1,'stage',{opts:{sign:'NMRO',crowd:1},cast:BAND(true,[C('jonelle',380,.7,'cheer',{y:520,rock:true}),C('paul',900,.7,'cheer',{y:520,rock:true}),C('jake',1170,.6,'cheer',{y:510,rock:true}),C('jason',1010,.6,'cheer',{y:525,rock:true})]),cam:[1,1.1]});
S(252.8,'base',{cast:[C('jacob',330,.85,'micup',{prop:'mic',rock:true}),C('rebecca',980,.85,'cheer',{rock:true})],cam:[1,1.08]});
S(256.3,'sails',{cast:PAIR('christina','both','tejan','both'),cam:[1,1.06]});
S(259.7,'stage',{opts:{sign:'NMRO',crowd:1},cast:ALL('both'),cam:[1.08,1],flash:1});
S(266.1,'grid',{cast:NAVY3('both',{rock:true,sing:true}),cam:[1,1.06],flash:1});
S(272.9,'stage',{opts:{sign:'NMRO',crowd:1,tint:'#6a0b4a'},cast:ALL('cheer'),cam:[1,1.12],flash:1});
S(279.5,'credits',{cam:[1,1]});
