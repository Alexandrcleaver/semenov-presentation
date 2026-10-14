
(function(){
 const FIRST=8,LAST=22;
 // Measure real glyph bounds (including spans and explicit line breaks)
 // and compute a transform for the same DOM heading, without cloning text.
 function calculateHeroPositions(){
  for(let n=FIRST;n<=LAST;n++){
   const slide=document.getElementById('pdfSlide'+n);
   if(!slide)continue;
   const canvas=slide.querySelector('.ee-canvas');
   const header=slide.querySelector('.ee-header');
   const h2=header&&header.querySelector('h2');
   if(!canvas||!header||!h2)continue;
   // Temporarily measure in its settled layout, not in the middle of animation.
   const oldAnimation=header.style.animation;
   const oldTransform=header.style.transform;
   const oldFilter=header.style.filter;
   header.style.setProperty('animation','none','important');
   header.style.setProperty('transform','none','important');
   header.style.setProperty('filter','none','important');
   const range=document.createRange(); range.selectNodeContents(h2);
   const glyph=range.getBoundingClientRect();
   const root=canvas.getBoundingClientRect();
   const origin=header.getBoundingClientRect();
   const factor=root.width/canvas.offsetWidth||1;
   const textW=glyph.width/factor,textH=glyph.height/factor;
   const glyphX=(glyph.left-root.left)/factor;
   const glyphY=(glyph.top-root.top)/factor;
   const headerX=(origin.left-root.left)/factor;
   const headerY=(origin.top-root.top)/factor;
   // Enlarge as much as the real text width permits, never crop glyphs.
   const scale=Math.min(1.95, 1505/Math.max(1,textW), 490/Math.max(1,textH));
   const targetX=(canvas.offsetWidth - textW*scale)/2;
   const targetY=(canvas.offsetHeight - textH*scale)/2 - 25;
   const dx=targetX-headerX-(glyphX-headerX)*scale;
   const dy=targetY-headerY-(glyphY-headerY)*scale;
   header.style.setProperty('--hero-dx',dx.toFixed(2)+'px');
   header.style.setProperty('--hero-dy',dy.toFixed(2)+'px');
   header.style.setProperty('--hero-scale',scale.toFixed(4));
   if(oldAnimation)header.style.animation=oldAnimation;else header.style.removeProperty('animation');
   if(oldTransform)header.style.transform=oldTransform;else header.style.removeProperty('transform');
   if(oldFilter)header.style.filter=oldFilter;else header.style.removeProperty('filter');
   range.detach();
  }
 }
 // Compute just once after fonts have loaded; the deck uses a scaled fixed canvas.
 if(document.fonts&&document.fonts.ready){document.fonts.ready.then(calculateHeroPositions)}
 else calculateHeroPositions();
 window.addEventListener('resize',calculateHeroPositions);
 window.__recalculateHeroTitles=calculateHeroPositions;
})();
