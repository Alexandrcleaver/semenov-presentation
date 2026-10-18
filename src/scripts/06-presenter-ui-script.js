
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
    const n=getCurrent();const total=window.__deckTotal||40;counter.textContent=String(n).padStart(2,'0')+' / '+total;
    document.getElementById('presenterDebugMeta').textContent='Слайд '+n+'/'+total+(n===9?' · экран '+Number(window.aistEvolutionStep||0)+'/6':n===11?' · шаг '+Number(window.__v8ClickStep||0)+'/10':'');
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
      if(['ArrowRight','ArrowLeft',' ','Enter','Backspace','PageDown','PageUp','ArrowDown','ArrowUp'].includes(e.key)){e.preventDefault();e.stopImmediatePropagation();return;}
    }
    if(e.key.toLowerCase()==='g'){e.preventDefault();e.stopImmediatePropagation();toggle(true);return;}
    if(e.key==='ArrowLeft'||e.key==='Backspace'||e.key==='PageUp'||e.key==='ArrowUp'){
      e.preventDefault();e.stopImmediatePropagation();document.getElementById('prev').click();return;
    }
  },true);
  window.addEventListener('deck-slide-jump',refresh);

  // Presenter footer controls: do not trigger the global click-to-advance handler.

  const copyPng=document.getElementById('presenterCopyPng');
  async function captureSlidePng(){
    let stream;
    const hidden=[];
    try {
      stream=await navigator.mediaDevices.getDisplayMedia({video:{displaySurface:'browser',width:{ideal:1920},height:{ideal:1080}},audio:false,preferCurrentTab:true,selfBrowserSurface:'include',surfaceSwitching:'exclude',monitorTypeSurfaces:'exclude'});
      if(stream.getVideoTracks()[0].getSettings().displaySurface!=='browser')throw new Error('Выберите вкладку презентации, а не окно или весь экран.');
      for(const id of ['presenterBar','presenterDrawer','debugGlow','prev','forward']){
        const element=document.getElementById(id);if(!element)continue;
        hidden.push([element,element.style.getPropertyValue('visibility'),element.style.getPropertyPriority('visibility')]);
        element.style.setProperty('visibility','hidden','important');
      }
      const video=document.createElement('video');video.muted=true;video.playsInline=true;video.srcObject=stream;
      await video.play();
      // Allow the captured tab to repaint after hiding the controls.
      await new Promise(resolve=>setTimeout(resolve,250));
      if(video.requestVideoFrameCallback)await new Promise((resolve,reject)=>{
        const timeout=setTimeout(()=>reject(new Error('Не получен кадр вкладки.')),4000);
        video.requestVideoFrameCallback(()=>{clearTimeout(timeout);resolve();});
      });
      const rect=document.body.getBoundingClientRect();
      if(!video.videoWidth||!video.videoHeight||!rect.width||!rect.height)throw new Error('Не удалось получить изображение слайда.');
      const sx=video.videoWidth/innerWidth,sy=video.videoHeight/innerHeight;
      const canvas=document.createElement('canvas');canvas.width=1920;canvas.height=1080;
      canvas.getContext('2d').drawImage(video,rect.left*sx,rect.top*sy,rect.width*sx,rect.height*sy,0,0,1920,1080);
      return await new Promise((resolve,reject)=>canvas.toBlob(blob=>blob?resolve(blob):reject(new Error('Не удалось создать PNG.')),'image/png'));
    } finally {
      stream?.getTracks().forEach(track=>track.stop());
      for(const [element,value,priority] of hidden){if(value)element.style.setProperty('visibility',value,priority);else element.style.removeProperty('visibility');}
    }
  }
  copyPng.addEventListener('click',async event=>{
    event.preventDefault();event.stopPropagation();
    if(copyPng.disabled)return;
    if(!navigator.clipboard?.write||!window.ClipboardItem||!navigator.mediaDevices?.getDisplayMedia){alert('Копирование PNG требует Chrome или Edge с доступом к буферу обмена и захвату вкладки.');return;}
    copyPng.disabled=true;const label=copyPng.querySelector('span');label.textContent='Выберите эту вкладку…';
    try {
      const png=captureSlidePng();png.catch(()=>{});
      // Start clipboard writing during the click's user activation.
      await navigator.clipboard.write([new ClipboardItem({'image/png':png})]);
      label.textContent='PNG скопирован';
    } catch(error){
      label.textContent='Копировать PNG';
      if(error.name!=='NotAllowedError'&&error.name!=='AbortError')alert(error.message);
      else alert('Копирование отменено или запрещено браузером. Разрешите захват этой вкладки и запись в буфер обмена.');
    } finally {copyPng.disabled=false;setTimeout(()=>{label.textContent='Копировать PNG';},2000);}
  });

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
  for(const button of [debugToggle,fullscreenToggle,copyPng]){
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
