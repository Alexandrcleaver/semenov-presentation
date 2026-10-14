
(()=>{
  const slide=document.getElementById('pdfSlide8');
  const chat=document.getElementById('v8FullChatWebsite');
  const fighter=document.getElementById('v8FighterIntro');
  if(!slide||!chat||!fighter)return;
  let fighterReady=fighter.contentDocument?.readyState==='complete';
  const replayFighter=()=>{if(fighterReady)fighter.contentWindow?.postMessage({type:'replay-fighter'},'*');};
  fighter.addEventListener('load',()=>{fighterReady=true;if(step===1&&slide.classList.contains('show'))replayFighter();});
  const stepClasses=['v8-intro-1','v8-intro-2','v8-intro-3',
    'v8-website-active','v8-phase-1','v8-phase-2','v8-phase-3',
    'v8-sdd-intro-on','v8-sdd-scene-on','v8-sdd-md-on','v8-sdd-process-on',
    'v8-sdd-later-on','v8-sdd-conclusion-on'];
  const lastStep=10;
  let step=0;
  let wasVisible=slide.classList.contains('show');
  function send(type){try{chat.contentWindow?.postMessage({type},'*')}catch(e){}}
  function clearClasses(){slide.classList.remove(...stepClasses)}
  function clearChat(){send('v8clean');send('reset')}
  function showStep(n,rewinding=false){
    step=n;
    clearClasses();
    window.__v8ClickStep=step;
    if(n===0)slide.classList.add('v8-intro-1');
    else if(n===1){slide.classList.add('v8-intro-2');replayFighter();}
    else if(n===2)slide.classList.add('v8-intro-3');
    else if(n>=3&&n<=5){
      slide.classList.add('v8-website-active');
      slide.classList.add(n===3?'v8-phase-1':n===4?'v8-phase-2':'v8-phase-3');
    }
    else if(n===6)slide.classList.add('v8-sdd-intro-on');
    else if(n>=7){
      slide.classList.add('v8-sdd-scene-on');
      slide.classList.add(n===7?'v8-sdd-md-on':n===8?'v8-sdd-process-on':'v8-sdd-later-on');
      if(n===10)slide.classList.add('v8-sdd-conclusion-on');
    }
    if(rewinding){
      clearChat();
      if(n===3)send('start');
      else if(n===4){send('start');setTimeout(()=>{
        if(step===4&&slide.classList.contains('show'))send('compose');
      },150)}
      else if(n===5)send('v8forget');
    }
  }
  function onEnter(){clearChat();showStep(0)}
  function onLeave(){clearChat();clearClasses();step=0;window.__v8ClickStep=0}
  window.__v8Advance=()=>{
    if(!slide.classList.contains('show')||step>=lastStep)return false;
    const prev=step;
    showStep(step+1);
    if(prev===2)send('start');
    if(prev===3)send('compose');
    if(prev===4)send('v8forget');
    if(prev===5)clearChat();
    return true;
  };
  window.__v8Back=()=>{
    if(!slide.classList.contains('show')||step<=0)return false;
    showStep(step-1,true);return true;
  };
  window.__v8CurrentStep=()=>step;
  window.__v8FullSiteReset=onLeave;
  new MutationObserver(()=>{
    const visible=slide.classList.contains('show');
    if(visible===wasVisible)return;
    wasVisible=visible;
    if(visible)onEnter();else onLeave();
  }).observe(slide,{attributes:true,attributeFilter:['class']});
  if(wasVisible)onEnter();
})();
