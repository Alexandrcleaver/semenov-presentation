(()=>{const lines=['Не просто','очередная','RAG-архитектура'];let stage=0,row=0,ch=0,timer=null;window.__presentationStage=stage;function fit(){const k=Math.min(innerWidth/1920,innerHeight/1080);document.body.style.transform='scale('+k+')';document.body.style.transformOrigin='top left';document.body.style.marginLeft=((innerWidth-1920*k)/2)+'px';document.body.style.marginTop=((innerHeight-1080*k)/2)+'px'}addEventListener('resize',fit);fit();const els=[document.getElementById('l1'),document.getElementById('l2'),document.getElementById('l3')];function setupSchemePieces(targetId='scheme'){const s=document.getElementById(targetId),base=s&&s.querySelector('.scheme-base');if(!s||!base||s.querySelector('.scheme-pieces'))return;const wrap=document.createElement('div');wrap.className='scheme-pieces';const pieces=[
[0,0,34,26,-3.4,'-112px','-66px','17%','14%'],[34,0,67,26,2.7,'48px','-104px','51%','12%'],[67,0,100,26,-2.1,'116px','-48px','84%','15%'],
[0,26,34,51,2.3,'-138px','24px','15%','38%'],[34,26,67,51,-1.8,'-42px','-72px','50%','39%'],[67,26,100,51,3.1,'132px','42px','84%','39%'],
[0,51,34,76,-2.6,'-106px','86px','16%','64%'],[34,51,67,76,1.7,'54px','108px','50%','64%'],[67,51,100,76,-3.2,'148px','70px','84%','64%'],
[0,76,34,100,2.1,'-128px','118px','16%','88%'],[34,76,67,100,-2.4,'-18px','146px','50%','88%'],[67,76,100,100,2.8,'122px','126px','84%','88%']];
const order=[4,7,1,5,6,3,8,10,0,11,2,9];pieces.forEach((p,i)=>{const [l,t,r,b,rot,dx,dy,ox,oy]=p;const piece=document.createElement('div');piece.className='scheme-piece';piece.style.clipPath=`inset(${t}% ${100-r}% ${100-b}% ${l}%)`;piece.style.setProperty('--rot',rot+'deg');piece.style.setProperty('--dx',dx);piece.style.setProperty('--dy',dy);piece.style.setProperty('--ox',ox);piece.style.setProperty('--oy',oy);piece.style.setProperty('--delay',(order.indexOf(i)*82)+'ms');const img=base.cloneNode(true);img.className='';piece.appendChild(img);wrap.appendChild(piece)});s.appendChild(wrap)}setupSchemePieces();setupSchemePieces('architectureRagScheme');function playBentoAssembly(){const s2=document.getElementById('figmaSlide2');if(!s2)return;s2.classList.remove('assemble');void s2.offsetWidth;s2.classList.add('assemble');clearTimeout(window.bentoAssemblyTimer);window.bentoAssemblyTimer=setTimeout(()=>s2.classList.remove('assemble'),4650)}const AGENT_TIMELINE_STEPS=[
  {label:'весна 2025',progress:0.0962,runner:321,pan:0,era:'spring'},
  {label:'весна 2025',progress:0.2093,runner:711,pan:0,era:'spring'},
  {label:'весна 2025',progress:0.3223,runner:1101,pan:-120,era:'spring'},
  {label:'весна 2025',progress:0.4354,runner:1491,pan:-390,era:'spring'},
  {label:'лето 2025',progress:0.5484,runner:1881,pan:-720,era:'summer'},
  {label:'лето 2025',progress:0.6614,runner:2271,pan:-1040,era:'summer'},
  {label:'лето 2025',progress:0.7745,runner:2661,pan:-1370,era:'summer'},
  {label:'осень 2025',progress:0.8875,runner:3051,pan:-1710,era:'autumn'},
  {label:'осень 2025',progress:0.9861,runner:3391,pan:-2050,era:'autumn'}
];
window.agentTimelineStep=0;
function setAgentTimelineStep(n){
  const s6=document.getElementById('figmaSlide6');if(!s6)return;
  const max=AGENT_TIMELINE_STEPS.length-1;
  n=Math.max(0,Math.min(max,n));window.agentTimelineStep=n;
  const step=AGENT_TIMELINE_STEPS[n];
  s6.style.setProperty('--s6-progress',step.progress);
  s6.style.setProperty('--s6-runner-x',step.runner+'px');
  s6.style.setProperty('--s6-pan',step.pan+'px');
  const range=s6.querySelector('.s6-range'); if(range) range.textContent=step.label;
  s6.querySelectorAll('.s6-era').forEach(e=>e.classList.toggle('active',e.classList.contains(step.era)));
  const nodes=[...s6.querySelectorAll('.s6-node')];
  nodes.forEach((node,i)=>{node.classList.toggle('revealed',i<=n);node.classList.toggle('active',i===n)});
  const final=s6.querySelector('.s6-final'); if(final) final.classList.toggle('visible',n>=max);
}
function playAgentTimeline(){const s6=document.getElementById('figmaSlide6');if(!s6)return;s6.classList.remove('play','out');s6.classList.add('show','manual');setAgentTimelineStep(0)}function type(){
  const glow=document.getElementById('glow');
  glow.classList.add('typing');
  clearTimeout(timer);
  if(row>=3){glow.classList.remove('typing');return;}
  const el=els[row],value=lines[row];
  if(ch<value.length){
    const char=value[ch++];
    const span=document.createElement('span');
    span.className='typeChar';
    span.textContent=char===' '?'\u00A0':char;
    el.appendChild(span);
    requestAnimationFrame(()=>span.classList.add('run'));
    timer=setTimeout(type,82);
  }else{
    row++;ch=0;
    timer=setTimeout(type,420);
  }
}

const EV_STEPS = [0,1,2,3,4,5,6];
window.aistEvolutionStep=0;
function ev2ActivateScreens(step){
  const slide=document.getElementById('aistEvolutionSlide');
  if(!slide)return;
  if(!slide.dataset.evAssetsReady){
    // Four real Figma screens are small enough to preload eagerly.
    // On click, do not assign multi-hundred-KB data URLs for the first time.
    const assets=new Map();
    slide.querySelectorAll('#ev2AssetBank [data-asset-key]').forEach(img=>{
      if(img.dataset.src)assets.set(img.dataset.assetKey,img.dataset.src);
    });
    slide.querySelectorAll('.ev2-scene img[data-ev-asset]').forEach(img=>{
      const data=assets.get(img.dataset.evAsset);
      if(!data)return;
      img.decoding='async';img.loading='eager';
      if(!img.getAttribute('src'))img.setAttribute('src',data);
    });
    slide.dataset.evAssetsReady='1';
  }
}
function showAistStep(step){
  const slide=document.getElementById('aistEvolutionSlide');
  if(!slide)return;
  step=Math.max(0,Math.min(6,Math.round(step)));
  window.aistEvolutionStep=step;
  slide.dataset.evStep=String(step);
  for(const node of slide.querySelectorAll('.ev2-scene')){
    const active=Number(node.dataset.evScene)===step;
    node.classList.toggle('is-active',active);
    node.setAttribute('aria-hidden',active?'false':'true');
  }
  const progress=document.getElementById('ev2ProgressLine');
  if(progress) progress.style.width=(step/6*100)+'%';
  const mark=document.getElementById('aistEvStepmark');
  if(mark)mark.textContent=String(step).padStart(2,'0')+' / 06';
  ev2ActivateScreens(step);
  // Nearby screens are decoded in advance so the next click remains instantaneous.
  if(step<6) setTimeout(()=>{if(slide.classList.contains('show')&&window.aistEvolutionStep===step)ev2ActivateScreens(step+1)},220);
}
window.__aistAdvance=()=>{if(window.aistEvolutionStep>=6)return false;showAistStep(window.aistEvolutionStep+1);return true;};
window.__aistBack=()=>{if(window.aistEvolutionStep<=0)return false;showAistStep(window.aistEvolutionStep-1);return true;};
window.__aistReset=()=>showAistStep(0);
window.__aistShowLast=()=>showAistStep(6);
showAistStep(0);

const PDF_SLIDE_FIRST=8,PDF_SLIDE_LAST=37;window.pdfDeckIndex=0;
// Logical order: Vibe Coding / SDD -> kitty victory -> technical chapter -> practice -> thanks.
const PDF_SLIDE_SEQUENCE=[8,27,9,29,10,11,12,30,13,31,32,14,15,33,16,34,17,35,18,19,36,20,37,21,22,23,24,25,26,28];
function hidePdfSlides(){for(const n of PDF_SLIDE_SEQUENCE){const e=document.getElementById('pdfSlide'+n);if(e)e.classList.remove('show','out')}}
function showPdfSlideByIndex(idx,direction=1){
  idx=Math.max(0,Math.min(PDF_SLIDE_SEQUENCE.length-1,idx));
  const previous=window.pdfDeckIndex;window.pdfDeckIndex=idx;
  for(const n of PDF_SLIDE_SEQUENCE){
    const e=document.getElementById('pdfSlide'+n);if(!e)continue;
    const target=PDF_SLIDE_SEQUENCE[idx];
    if(n===target){e.classList.remove('out');void e.offsetWidth;e.classList.add('show')}
    else if(e.classList.contains('show')){e.classList.remove('show');e.classList.add('out');setTimeout(()=>e.classList.remove('out'),560)}
    else e.classList.remove('show','out');
  }
}
function back(){if(stage===0)return;if(stage===0.5){document.getElementById('figmaSlide2').classList.remove('show','out','focus-docs','assemble');document.getElementById('figmaSlide3Extras').classList.remove('show','out');document.getElementById('figmaSlide4').classList.remove('show','out');document.getElementById('figmaSlide5').classList.remove('show','out');document.getElementById('figmaSlide6').classList.remove('show','out','play','manual');document.getElementById('figmaSlide7').classList.remove('show','out');document.body.classList.remove('cover-off');stage=0;window.__presentationStage=stage;return}if(stage===0.75){const s2=document.getElementById('figmaSlide2'),s3=document.getElementById('figmaSlide3Extras');s3.classList.remove('show','out');s2.classList.remove('focus-docs','out');s2.classList.add('show');playBentoAssembly();stage=.5;window.__presentationStage=stage;return}if(stage===0.85){const s2=document.getElementById('figmaSlide2'),s3=document.getElementById('figmaSlide3Extras'),s5=document.getElementById('figmaSlide5');s5.classList.remove('show','out');s2.classList.remove('out');s2.classList.add('show','focus-docs');s3.classList.remove('out');s3.classList.add('show');stage=.75;window.__presentationStage=stage;return}if(stage===0.9){const s4=document.getElementById('figmaSlide4'),s5=document.getElementById('figmaSlide5');s4.classList.remove('show','out');s5.classList.remove('out');s5.classList.add('show');stage=.85;window.__presentationStage=stage;return}if(stage===.925){document.getElementById('agentsIntroSlide').classList.remove('show','out');const previous=document.getElementById('figmaSlide4');previous.classList.remove('out');previous.classList.add('show');stage=.9;window.__presentationStage=stage;return}if(stage===.95){if((window.agentTimelineStep||0)>0){setAgentTimelineStep((window.agentTimelineStep||0)-1);return}const s4=document.getElementById('agentsIntroSlide'),s6=document.getElementById('figmaSlide6');s6.classList.remove('show','play','manual');s6.classList.add('out');s4.classList.remove('out');s4.classList.add('show');stage=.925;window.__presentationStage=stage;return}if(stage===.97){const s7=document.getElementById('figmaSlide7'),aist=document.getElementById('aistEvolutionSlide');s7.classList.remove('show','out');aist.classList.remove('out');window.__aistShowLast();void aist.offsetWidth;aist.classList.add('show');stage=.965;window.__presentationStage=stage;return}if(stage===.965){if(window.__aistBack?.())return;const aist=document.getElementById('aistEvolutionSlide'),a=document.getElementById('architectureRagSlide'),diagram=document.getElementById('architectureRagScheme');aist.classList.remove('show');aist.classList.add('out');a.classList.remove('out');diagram.classList.remove('show');void a.offsetWidth;a.classList.add('show');diagram.classList.add('show');stage=.96;window.__presentationStage=stage;return}if(stage===.96){const a=document.getElementById('architectureRagSlide'),s6=document.getElementById('figmaSlide6');a.classList.remove('show','out');document.getElementById('architectureRagScheme').classList.remove('show');s6.classList.remove('out');playAgentTimeline();setAgentTimelineStep(AGENT_TIMELINE_STEPS.length-1);stage=.95;window.__presentationStage=stage;return}if(stage===1){clearTimeout(timer);row=0;ch=0;['l1','l2','l3'].forEach(id=>{const e=document.getElementById(id);if(e)e.innerHTML=''});stage=.98;window.__presentationStage=stage;showPdfSlideByIndex(PDF_SLIDE_LAST-PDF_SLIDE_FIRST,-1);return}if(stage===.98){if((window.pdfDeckIndex||0)===0 && window.__v8Back?.())return;if((window.pdfDeckIndex||0)>0){showPdfSlideByIndex((window.pdfDeckIndex||0)-1,-1);return}hidePdfSlides();const s7=document.getElementById('figmaSlide7');s7.classList.remove('out');s7.classList.add('show');stage=.97;window.__presentationStage=stage;return}if(stage===2){document.getElementById('title').classList.remove('moved');document.getElementById('scheme').classList.remove('show');document.getElementById('glow').classList.remove('fade','typing')}if(stage===3){document.getElementById('scene').classList.remove('out');document.getElementById('incoming').classList.remove('in')}if(stage===4){const f=document.getElementById('final'),inc=document.getElementById('incoming');f.classList.remove('in');f.contentWindow.postMessage({type:'reset'},'*');inc.classList.remove('blur-out');inc.classList.add('in')}if(stage===5){document.getElementById('final').contentWindow.postMessage({type:'resetDetail'},'*')}if(stage===6){const f=document.getElementById('final'),d=document.getElementById('description');d.classList.remove('in');d.classList.remove('blur-away');d.contentWindow.postMessage({type:'reset'},'*');f.classList.remove('drop-out')}if(stage===11){const c=document.getElementById('chatSlide'),m=document.getElementById('memeSlide6');c.contentWindow.postMessage({type:'backOutroTyping'},'*');c.classList.add('slide5-away');m.classList.remove('out');m.classList.add('in');window.chatDebugState='started';window.codeDebugState='fanout'}if(stage===10){const c=document.getElementById('chatSlide'),m=document.getElementById('memeSlide6');m.classList.remove('in','out');c.classList.remove('slide5-away');window.chatDebugState='started';window.codeDebugState='fanout'}if(stage===9){const c=document.getElementById('chatSlide');c.contentWindow.postMessage({type:'backFanout'},'*');window.chatDebugState='started';window.codeDebugState='fanout reset'}if(stage===8){const c=document.getElementById('chatSlide');c.contentWindow.postMessage({type:'backCompose'},'*');window.chatDebugState='started';window.codeDebugState='reset'}if(stage===7){const d=document.getElementById('description'),c=document.getElementById('chatSlide');c.contentWindow.postMessage({type:'reset'},'*');c.classList.remove('in');d.classList.remove('blur-away');d.classList.add('in');window.chatDebugState='reset';window.codeDebugState='—'}stage=(stage===3?1:stage-1);window.__presentationStage=stage;}let coverLeaving=false;function advance(){if(coverLeaving)return;document.getElementById('glow').classList.add('boost');clearTimeout(window.boostTimer);window.boostTimer=setTimeout(()=>document.getElementById('glow').classList.remove('boost'),700);if(stage===0){stage=.5;window.__presentationStage=stage;document.body.classList.add('cover-off');const s2=document.getElementById('figmaSlide2');s2.classList.remove('out');requestAnimationFrame(()=>{s2.classList.add('show');playBentoAssembly()});coverLeaving=true;setTimeout(()=>{coverLeaving=false},4650);return}if(stage===.5){stage=.75;window.__presentationStage=stage;const s2=document.getElementById('figmaSlide2'),s3=document.getElementById('figmaSlide3Extras');s2.classList.remove('assemble','out');s2.classList.add('show','focus-docs');s3.classList.remove('out');setTimeout(()=>s3.classList.add('show'),220);coverLeaving=true;setTimeout(()=>{coverLeaving=false},1080);return}if(stage===.75){stage=.85;window.__presentationStage=stage;const s2=document.getElementById('figmaSlide2'),s3=document.getElementById('figmaSlide3Extras'),s5=document.getElementById('figmaSlide5');s3.classList.add('out');s3.classList.remove('show');s2.classList.remove('show');s2.classList.add('out');s5.classList.remove('out');requestAnimationFrame(()=>s5.classList.add('show'));coverLeaving=true;setTimeout(()=>{coverLeaving=false},760);return}if(stage===.85){stage=.9;window.__presentationStage=stage;const s4=document.getElementById('figmaSlide4'),s5=document.getElementById('figmaSlide5');s5.classList.remove('show');s5.classList.add('out');s4.classList.remove('out');requestAnimationFrame(()=>s4.classList.add('show'));coverLeaving=true;setTimeout(()=>{coverLeaving=false},760);return}if(stage===.9){stage=.925;window.__presentationStage=stage;const previous=document.getElementById('figmaSlide4'),next=document.getElementById('agentsIntroSlide');previous.classList.remove('show');previous.classList.add('out');next.classList.remove('out');requestAnimationFrame(()=>next.classList.add('show'));coverLeaving=true;setTimeout(()=>{coverLeaving=false},900);return}if(stage===.925){stage=.95;window.__presentationStage=stage;const previous=document.getElementById('agentsIntroSlide');previous.classList.remove('show');previous.classList.add('out');document.getElementById('figmaSlide6').classList.remove('out');requestAnimationFrame(()=>playAgentTimeline());coverLeaving=true;setTimeout(()=>{coverLeaving=false},900);return}if(stage===.95){if((window.agentTimelineStep||0)<AGENT_TIMELINE_STEPS.length-1){setAgentTimelineStep((window.agentTimelineStep||0)+1);return}stage=.96;window.__presentationStage=stage;const s6=document.getElementById('figmaSlide6'),a=document.getElementById('architectureRagSlide'),diagram=document.getElementById('architectureRagScheme');s6.classList.remove('show','play','manual');s6.classList.add('out');a.classList.remove('out','show');diagram.classList.remove('show');void a.offsetWidth;requestAnimationFrame(()=>{a.classList.add('show');diagram.classList.add('show')});coverLeaving=true;setTimeout(()=>{coverLeaving=false},900);return}if(stage===.96){stage=.965;window.__presentationStage=stage;const a=document.getElementById('architectureRagSlide'),evo=document.getElementById('aistEvolutionSlide');a.classList.remove('show');a.classList.add('out');evo.classList.remove('out','show');window.__aistReset();requestAnimationFrame(()=>evo.classList.add('show'));coverLeaving=true;setTimeout(()=>{coverLeaving=false},760);return}if(stage===.965){if(window.__aistAdvance?.())return;stage=.97;window.__presentationStage=stage;const evo=document.getElementById('aistEvolutionSlide'),s7=document.getElementById('figmaSlide7');evo.classList.remove('show');evo.classList.add('out');s7.classList.remove('out');requestAnimationFrame(()=>s7.classList.add('show'));coverLeaving=true;setTimeout(()=>{coverLeaving=false},760);return}if(stage===.97){stage=.98;window.__presentationStage=stage;window.pdfDeckIndex=0;const s7=document.getElementById('figmaSlide7');s7.classList.remove('show');s7.classList.add('out');showPdfSlideByIndex(0,1);coverLeaving=true;setTimeout(()=>{coverLeaving=false},760);return}if(stage===.98){if((window.pdfDeckIndex||0)===0 && window.__v8Advance?.())return;if((window.pdfDeckIndex||0)<(PDF_SLIDE_LAST-PDF_SLIDE_FIRST)){showPdfSlideByIndex((window.pdfDeckIndex||0)+1,1);coverLeaving=true;setTimeout(()=>{coverLeaving=false},620);return}return;/* End of presentation: slide 39 */}if(stage===1){stage=3;window.__presentationStage=stage;document.getElementById('scene').classList.add('out');document.getElementById('incoming').classList.add('in');setTimeout(()=>{if(stage!==3)return;document.getElementById('glow').classList.add('typing');document.getElementById('incoming').contentWindow.postMessage({type:'startTyping'},'*');clearTimeout(window.slide3TypingTimer);window.slide3TypingTimer=setTimeout(()=>document.getElementById('glow').classList.remove('typing'),5200)},850)}else if(stage===3){stage=4;window.__presentationStage=stage;const inc=document.getElementById('incoming'),f=document.getElementById('final');f.contentWindow.postMessage({type:'reset'},'*');inc.classList.add('blur-out');setTimeout(()=>f.classList.add('in'),90);setTimeout(()=>f.contentWindow.postMessage({type:'start'},'*'),60)}else if(stage===4){stage=5;window.__presentationStage=stage;document.getElementById('final').contentWindow.postMessage({type:'detail'},'*')}else if(stage===5){stage=6;window.__presentationStage=stage;const f=document.getElementById('final'),d=document.getElementById('description');d.contentWindow.postMessage({type:'reset'},'*');d.classList.add('in');setTimeout(()=>f.classList.add('drop-out'),70);setTimeout(()=>d.contentWindow.postMessage({type:'startTyping'},'*'),620)}else if(stage===6){stage=7;window.__presentationStage=stage;const d=document.getElementById('description'),c=document.getElementById('chatSlide');c.contentWindow.postMessage({type:'reset'},'*');d.classList.add('blur-away');c.classList.add('in');window.chatDebugState='start sent';c.contentWindow.postMessage({type:'start'},'*')}else if(stage===7){stage=8;window.__presentationStage=stage;const c=document.getElementById('chatSlide');window.chatDebugState='started';window.codeDebugState='compose sent';c.contentWindow.postMessage({type:'compose'},'*')}else if(stage===8){stage=9;window.__presentationStage=stage;const c=document.getElementById('chatSlide');window.chatDebugState='started';window.codeDebugState='fanout';c.contentWindow.postMessage({type:'fanout'},'*')}else if(stage===9){stage=10;window.__presentationStage=stage;const c=document.getElementById('chatSlide'),m=document.getElementById('memeSlide6');c.classList.add('slide5-away');m.classList.remove('out');requestAnimationFrame(()=>m.classList.add('in'));window.chatDebugState='hidden';window.codeDebugState='—'}else if(stage===10){stage=11;window.__presentationStage=stage;const c=document.getElementById('chatSlide'),m=document.getElementById('memeSlide6');m.classList.add('out');m.classList.remove('in');c.classList.remove('slide5-away');window.chatDebugState='started';window.codeDebugState='outro';c.contentWindow.postMessage({type:'outroTyping'},'*')}}const target=Number(location.hash.replace('#stage',''));if(target>0&&target<=11){document.body.classList.add('cover-off');history.replaceState(null,'',location.pathname);for(let k=0;k<=target;k++)setTimeout(advance,(k+1)*1800)};document.getElementById('prev').onclick=()=>{if(stage>0){back()}};document.getElementById('forward').onclick=advance;addEventListener('message',e=>{if(e.data&&e.data.type==='next')advance();if(e.data&&e.data.type==='jump'){location.hash='stage'+e.data.n;location.reload();}if(e.data&&e.data.type==='glowTypingStart')document.getElementById('glow').classList.add('typing');if(e.data&&e.data.type==='glowTypingEnd')document.getElementById('glow').classList.remove('typing');if(e.data&&e.data.type==='chatStarted'){window.chatDebugState='started'}if(e.data&&e.data.type==='codeStarted'){window.codeDebugState='started'}if(e.data&&e.data.type==='prev'&&stage>0)back()});addEventListener('keydown',e=>{if(/^[1-9]$/.test(e.key)){e.preventDefault();location.hash='stage'+e.key;location.reload();return}if(e.key.toLowerCase()==='r'){e.preventDefault();if(stage===3){const f=document.getElementById('incoming');f.src=f.src;setTimeout(()=>f.contentWindow.postMessage({type:'startTyping'},'*'),300);document.getElementById('glow').classList.add('typing');setTimeout(()=>document.getElementById('glow').classList.remove('typing'),5200)}else if(stage===4){const f=document.getElementById('final');f.src=f.src;setTimeout(()=>f.contentWindow.postMessage({type:'start'},'*'),300)}else{location.reload()}return}if(e.key.toLowerCase()==='n'){e.preventDefault();advance();return}if(e.key.toLowerCase()==='p'){e.preventDefault();if(stage>0)back();return}if(['ArrowRight',' ','Enter'].includes(e.key)){e.preventDefault();advance()}});addEventListener('click',e=>{if(e.target.classList.contains('nav'))return;if(e.clientX<innerWidth*.12){if(stage>0){back()}else advance()}else advance()});addEventListener('touchend',e=>{if(e.target.classList.contains('nav'))return;e.preventDefault();const x=e.changedTouches[0].clientX;if(x<innerWidth*.12){if(stage>0){back()}else advance()}else advance()},{passive:false})
// Direct jumps for the presenter gallery, keeping the existing step-by-step controls intact.
window.__deckJump = function(index) {
  const n = Math.max(1, Math.min(40, Math.round(Number(index)||1)));
  clearTimeout(timer); clearTimeout(window.fadeTimer); clearTimeout(window.bentoAssemblyTimer);
  clearTimeout(window.boostTimer); coverLeaving = false;
  const get = id => document.getElementById(id);
  for(const id of ['figmaSlide2','figmaSlide3Extras','figmaSlide4','figmaSlide5','agentsIntroSlide','figmaSlide6','architectureRagSlide','aistEvolutionSlide','figmaSlide7','incoming','final','description','chatSlide','memeSlide6']) {
    const el=get(id); if(!el)continue;
    el.classList.remove('in','out','show','play','manual','assemble','focus-docs','drop-out','blur-out','blur-away','slide5-away','moved','stage9Slow');
  }
  get('scene')?.classList.remove('out'); get('title')?.classList.remove('moved');
  get('scheme')?.classList.remove('show');get('architectureRagScheme')?.classList.remove('show');get('glow')?.classList.remove('fade','typing','boost');
  hidePdfSlides();
  document.body.classList.toggle('cover-off', n !== 1);
  if(n===1)stage=0;
  else if(n===2){stage=.5;get('figmaSlide2').classList.add('show');}
  else if(n===3){stage=.75;get('figmaSlide2').classList.add('show','focus-docs');get('figmaSlide3Extras').classList.add('show');}
  else if(n===4){stage=.85;get('figmaSlide5').classList.add('show');}
  else if(n===5){stage=.9;get('figmaSlide4').classList.add('show');}
  else if(n===6){stage=.925;get('agentsIntroSlide').classList.add('show');}
  else if(n===7){stage=.95;playAgentTimeline();setAgentTimelineStep(AGENT_TIMELINE_STEPS.length-1);}
  else if(n===8){stage=.96;get('architectureRagSlide').classList.add('show');get('architectureRagScheme').classList.add('show');}
  else if(n===9){stage=.965;window.__aistReset();get('aistEvolutionSlide').classList.add('show');}
  else if(n===10){stage=.97;get('figmaSlide7').classList.add('show');}
  else if(n<=40){stage=.98;showPdfSlideByIndex(n-11,1);}
  else {
    stage=n===25?1:n-23;
    if(stage===1){
      row=0;ch=0;['l1','l2','l3'].forEach(id=>{const e=get(id);if(e)e.replaceChildren()});type();
    } else {
      ['l1','l2','l3'].forEach((id,i)=>{const e=get(id);if(e)e.textContent=lines[i]});
    }
    
    if(stage>=3){get('scene')?.classList.add('out');get('incoming')?.classList.add('in');get('incoming')?.contentWindow?.postMessage({type:'startTyping'},'*');}
    if(stage>=4){get('incoming')?.classList.add('blur-out');get('final')?.classList.add('in');get('final')?.contentWindow?.postMessage({type:'start'},'*');}
    if(stage>=5)get('final')?.contentWindow?.postMessage({type:'detail'},'*');
    if(stage>=6){get('final')?.classList.add('drop-out');get('description')?.classList.add('in');get('description')?.contentWindow?.postMessage({type:'startTyping'},'*');}
    if(stage>=7){get('description')?.classList.add('blur-away');get('chatSlide')?.classList.add('in');get('chatSlide')?.contentWindow?.postMessage({type:'start'},'*');}
    if(stage===8)get('chatSlide')?.contentWindow?.postMessage({type:'compose'},'*');
    if(stage===9)get('chatSlide')?.contentWindow?.postMessage({type:'fanout'},'*');
    if(stage===10){get('chatSlide')?.classList.add('slide5-away');get('memeSlide6')?.classList.add('in');}
    if(stage===11)get('chatSlide')?.contentWindow?.postMessage({type:'outroTyping'},'*');
  }
  window.__presentationStage=stage;
  window.dispatchEvent(new CustomEvent('deck-slide-jump',{detail:{slide:n}}));
  return n;
};
})();