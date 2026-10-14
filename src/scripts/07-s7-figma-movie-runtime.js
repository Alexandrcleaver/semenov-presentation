
(()=>{
const slide=document.getElementById('figmaSlide7');
const previous=document.getElementById('aistEvolutionSlide');
const video=document.getElementById('s7FigmaMovie');
if(!slide||!video)return;
let wasVisible=false;
let hasSource=false;
video.muted=true;
video.loop=true; // Play the full embedded original (~10 seconds), then repeat.
video.preload='auto';
video.setAttribute('loop','');
const setReady=ready=>{
  if(slide.classList.contains('figma-movie-ready')!==ready)
    slide.classList.toggle('figma-movie-ready',ready);
};
const ensureSource=()=>{
  if(hasSource)return;
  if(!video.getAttribute('src')&&video.dataset.src){
    video.setAttribute('src',video.dataset.src);
    video.load();
  }
  hasSource=Boolean(video.getAttribute('src'));
};
const ensurePlaying=()=>{
  if(!wasVisible||document.hidden)return;
  if(video.readyState>=2)setReady(true);
  const attempt=video.play();
  if(attempt&&attempt.catch)attempt.catch(()=>{ /* poster remains until playback is allowed */ });
};
const refresh=()=>{
  const visible=slide.classList.contains('show');
  // Ignore mutations of figma-movie-ready (avoids class observer feedback).
  if(visible===wasVisible)return;
  wasVisible=visible;
  if(!visible){video.pause();setReady(false);return;}
  ensureSource();
  try{video.currentTime=0}catch(e){}
  ensurePlaying();
};
// Pre-buffer from the prior product-evolution slide, once it becomes visible.
if(previous){
  const preload=()=>{if(previous.classList.contains('show') && Number(previous.dataset.evStep||0)>=3)ensureSource()};
  new MutationObserver(preload).observe(previous,{attributes:true,attributeFilter:['class','data-ev-step']});
  preload();
}
video.addEventListener('loadeddata',()=>{if(wasVisible){setReady(true);ensurePlaying()}});
video.addEventListener('canplay',ensurePlaying);
video.addEventListener('ended',()=>{if(wasVisible){video.currentTime=0;ensurePlaying()}});
video.addEventListener('stalled',()=>{if(wasVisible)setReady(video.readyState>=2)});
video.addEventListener('error',()=>setReady(false));
document.addEventListener('visibilitychange',()=>{if(!document.hidden)ensurePlaying()});
new MutationObserver(refresh).observe(slide,{attributes:true,attributeFilter:['class']});
refresh();
})();
