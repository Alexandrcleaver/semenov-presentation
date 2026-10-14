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
