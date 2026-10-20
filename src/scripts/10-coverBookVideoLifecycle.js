(function(){
 const slide=document.getElementById('pdfSlide23');
 const video=document.getElementById('coverBookVideo');
 if(!slide||!video)return;
 let showing=false;
 const sync=()=>{
   const visible=slide.classList.contains('show');
   if(!visible){if(!video.paused)video.pause();showing=false;return;}
   if(!showing){try{video.currentTime=0;}catch(e){}}
   showing=true;
   if(document.hidden){if(!video.paused)video.pause();return;}
   if(video.paused){const p=video.play();if(p&&p.catch)p.catch(()=>{});}
 };
 new MutationObserver(sync).observe(slide,{attributes:true,attributeFilter:['class']});
 window.addEventListener('pageshow',sync);
 document.addEventListener('visibilitychange',sync);
 sync();
})();

/* 18.10 стабилизация показа с пульта */
(()=>{
 // Прогрев: заранее декодировать все картинки в простое, чтобы первый вход на тяжёлый слайд не дёргался.
 const imgs=()=>[...document.querySelectorAll('img')].filter(i=>i.src&&!i.dataset.warmed);
 const idle=window.requestIdleCallback||(f=>setTimeout(()=>f({timeRemaining:()=>8}),60));
 function warm(list){if(!list.length)return;idle(d=>{while(list.length&&d.timeRemaining()>4){const i=list.shift();i.dataset.warmed='1';i.decode&&i.decode().catch(()=>{})}warm(list)})}
 addEventListener('load',()=>setTimeout(()=>warm(imgs()),2500));
 // Пульт шлёт клавиши в окно с фокусом: если фокус ушёл во встроенный iframe, вернуть его презентации.
 addEventListener('blur',()=>setTimeout(()=>{const a=document.activeElement;if(a&&a.tagName==='IFRAME'){a.blur();window.focus()}},0));
})();

/* 18.10 слайд 34 (#pdfSlide44): демо Конспектуса играет только на показанном слайде */
(function(){
 const slide=document.getElementById('pdfSlide44');
 const video=document.getElementById('konspektusDemoVideo');
 if(!slide||!video)return;
 let showing=false;
 const sync=()=>{
   const visible=slide.classList.contains('show');
   if(!visible){if(!video.paused)video.pause();showing=false;return;}
   if(!showing){try{video.currentTime=0;}catch(e){}}
   showing=true;
   if(document.hidden){if(!video.paused)video.pause();return;}
   if(video.paused){const p=video.play();if(p&&p.catch)p.catch(()=>{});}
 };
 new MutationObserver(sync).observe(slide,{attributes:true,attributeFilter:['class']});
 window.addEventListener('pageshow',sync);
 document.addEventListener('visibilitychange',sync);
 sync();
})();

/* 20.10: курсор мыши виден только при настоящем движении мыши (2 с), иначе скрыт — и в полном экране тоже.
   Chrome при смене слайда шлёт «пустые» mousemove без смещения — их не считаем движением. */
(()=>{let t=0;const root=document.documentElement;
 const wake=e=>{if(e&&e.type==='mousemove'&&!e.movementX&&!e.movementY)return;root.classList.add('mouse-active');clearTimeout(t);t=setTimeout(()=>root.classList.remove('mouse-active'),2000)};
 addEventListener('mousemove',wake,{passive:true});addEventListener('mousedown',wake,{passive:true});})();

/* 20.10: при показе слайда «Vibe vs SDD» встроенным окнам заново сообщается размер (страховка от «сжатой» картинки) */
(()=>{const sl=document.getElementById('pdfSlide8');if(!sl)return;
 const nudge=()=>sl.querySelectorAll('iframe').forEach(f=>{try{f.contentWindow.dispatchEvent(new Event('resize'))}catch(e){}});
 new MutationObserver(()=>{if(sl.classList.contains('show')){nudge();requestAnimationFrame(nudge);setTimeout(nudge,300)}}).observe(sl,{attributes:true,attributeFilter:['class']});
 addEventListener('resize',()=>{if(sl.classList.contains('show'))nudge()});})();
