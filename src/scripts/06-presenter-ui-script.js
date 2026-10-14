
(()=>{
  const drawer=document.getElementById('presenterDrawer');
  const counter=document.getElementById('presenterCounter');
  const debug=document.getElementById('debugGlow');
  if(debug) {
    const meta=document.createElement('div');meta.id='presenterDebugMeta';debug.prepend(meta);
    debug.addEventListener('click',ev=>ev.stopPropagation());
    debug.addEventListener('touchend',ev=>ev.stopPropagation());
  }
  const getCurrent=()=>{
    const s=Number(window.__presentationStage ?? 0);
    if(s===0)return 1;
    if(s===.5)return 2;if(s===.75)return 3;if(s===.85)return 4;
    if(s===.9)return 5;if(s===.925)return 6;if(s===.95)return 7;if(s===.96)return 8;if(s===.965)return 9;if(s===.97)return 10;
    if(s===.98)return 11+Number(window.pdfDeckIndex||0);
    return 24; // Earlier post-ROI scenes have been removed.
  };
  function refresh(){
    const n=getCurrent();counter.textContent=String(n).padStart(2,'0')+' / 40';
    document.getElementById('presenterDebugMeta').textContent='Слайд '+n+'/40'+(n===9?' · экран '+Number(window.aistEvolutionStep||0)+'/6':n===11?' · шаг '+Number(window.__v8ClickStep||0)+'/10':'');
    if(drawer.classList.contains('open')) drawer.querySelectorAll('.deckThumb').forEach(card=>card.classList.toggle('active',Number(card.dataset.slide)===n));
  }
  function toggle(open){drawer.classList.toggle('open',Boolean(open));drawer.setAttribute('aria-hidden',open?'false':'true');refresh();}
  document.getElementById('presenterOpen').addEventListener('click',e=>{e.preventDefault();e.stopPropagation();toggle(true)});
  document.getElementById('presenterClose').addEventListener('click',e=>{e.preventDefault();e.stopPropagation();toggle(false)});
  drawer.addEventListener('click',e=>{
    e.stopPropagation();
    const card=e.target.closest('button[data-slide]');
    if(card){window.__deckJump(Number(card.dataset.slide));toggle(false)}
    else if(e.target===drawer)toggle(false);
  });
  const ui=[document.getElementById('presenterBar'),drawer];
  for(const el of ui){el.addEventListener('touchend',e=>e.stopPropagation(),{passive:true});el.addEventListener('pointerdown',e=>e.stopPropagation());}
  document.addEventListener('keydown',e=>{
    const t=e.target;
    if(t.matches('input,textarea,[contenteditable="true"]'))return;
    if(drawer.classList.contains('open')) {
      if(e.key==='Escape'||e.key.toLowerCase()==='g'){e.preventDefault();e.stopImmediatePropagation();toggle(false);return;}
      if(['ArrowRight','ArrowLeft',' ','Enter','Backspace'].includes(e.key)){e.preventDefault();e.stopImmediatePropagation();return;}
    }
    if(e.key.toLowerCase()==='g'){e.preventDefault();e.stopImmediatePropagation();toggle(true);return;}
    if(e.key==='ArrowLeft'||e.key==='Backspace'){
      e.preventDefault();e.stopImmediatePropagation();document.getElementById('prev').click();return;
    }
  },true);
  window.addEventListener('deck-slide-jump',refresh);

  // Presenter footer controls: do not trigger the global click-to-advance handler.
  const debugToggle=document.getElementById('presenterDebugToggle');
  const fullscreenToggle=document.getElementById('presenterFullscreen');
  const fsLabel=document.getElementById('presenterFullscreenLabel');
  let fullscreenBusy=false;
  function setDebugOpen(open){
    document.body.classList.toggle('presenter-debug-open',Boolean(open));
    debugToggle.setAttribute('aria-pressed',String(Boolean(open)));
    debugToggle.setAttribute('aria-label',open?'Скрыть дебаг-панель':'Открыть дебаг-панель');
    debugToggle.title=open?'Скрыть дебаг-панель (D)':'Показать дебаг-панель (D)';
  }
  function toggleDebug(){setDebugOpen(!document.body.classList.contains('presenter-debug-open'));}
  function updateFullscreen(){
    const active=Boolean(document.fullscreenElement);
    fullscreenToggle.setAttribute('aria-pressed',String(active));
    fullscreenToggle.setAttribute('aria-label',active?'Выйти из полноэкранного режима':'На весь экран');
    fsLabel.textContent=active?'Выйти из полного экрана':'Во весь экран';
    fullscreenToggle.title=active?'Выйти из полноэкранного режима (F / Esc)':'Полноэкранный режим (F)';
  }
  async function toggleFullscreen(){
    if(fullscreenBusy)return;
    fullscreenBusy=true;
    try {
      if(document.fullscreenElement){await document.exitFullscreen();}
      else if(document.documentElement.requestFullscreen){await document.documentElement.requestFullscreen();}
      else { throw new Error('Fullscreen API недоступен'); }
    } catch(err) {
      console.warn('Невозможно переключить полный экран:',err);
      fullscreenToggle.title='Браузер запретил полноэкранный режим. Попробуйте F11';
    } finally {fullscreenBusy=false;updateFullscreen();}
  }
  for(const button of [debugToggle,fullscreenToggle]){
    button.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();});
    button.addEventListener('touchend',e=>e.stopPropagation(),{passive:true});
    button.addEventListener('pointerdown',e=>e.stopPropagation());
  }
  debugToggle.addEventListener('click',toggleDebug);
  fullscreenToggle.addEventListener('click',toggleFullscreen);
  document.addEventListener('fullscreenchange',updateFullscreen);
  document.addEventListener('fullscreenerror',updateFullscreen);
  document.addEventListener('keydown',e=>{
    if(e.altKey||e.ctrlKey||e.metaKey||e.repeat)return;
    if(e.target.closest('input,textarea,[contenteditable="true"]'))return;
    if(drawer.classList.contains('open'))return;
    const key=e.key.toLowerCase();
    if(key==='d'||key==='f'){
      e.preventDefault();e.stopImmediatePropagation();
      key==='d'?toggleDebug():toggleFullscreen();
    }
  },true);
  setDebugOpen(false);
  updateFullscreen();
  window.setInterval(refresh,180);refresh();
})();
