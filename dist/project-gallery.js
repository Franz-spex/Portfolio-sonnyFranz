const pageView=document.querySelector('#page-view');
const carouselView=document.querySelector('#carousel-view');
if(carouselView){
 let current,slide=0,touchX=0;
 const showSlide=()=>{const item=current.slides[slide],img=carouselView.querySelector('img');img.src=item.src;img.alt=item.alt+' — slide '+(slide+1);img.style.width=(item.panels*100)+'%';img.style.transform=`translateX(-${item.panel*100/item.panels}%)`;carouselView.querySelector('.carousel-controls span').textContent=`${slide+1} / ${current.slides.length}`;carouselView.querySelector('.carousel-original').href=item.src;carouselView.querySelector('[data-slide-prev]').disabled=slide===0;carouselView.querySelector('[data-slide-next]').disabled=slide===current.slides.length-1;};
 const move=step=>{slide=Math.max(0,Math.min(current.slides.length-1,slide+step));showSlide();};
 document.querySelectorAll('[data-carousel]').forEach(b=>b.addEventListener('click',()=>{current=JSON.parse(b.dataset.carousel);slide=0;carouselView.querySelector('h2').textContent=current.title;showSlide();carouselView.showModal();}));
 carouselView.querySelector('[data-slide-prev]').onclick=()=>move(-1);carouselView.querySelector('[data-slide-next]').onclick=()=>move(1);carouselView.querySelector('.close').onclick=()=>carouselView.close();
 carouselView.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();move(1);}if(e.key==='ArrowLeft'){e.preventDefault();move(-1);}});
 carouselView.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].clientX;},{passive:true});carouselView.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-touchX;if(Math.abs(dx)>45)move(dx<0?1:-1);},{passive:true});
}
document.querySelectorAll('[data-social-filter]').forEach(button=>button.addEventListener('click',()=>{
 const filter=button.dataset.socialFilter;let count=0;
 document.querySelectorAll('[data-social-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 document.querySelectorAll('[data-social-group]').forEach(post=>{post.hidden=filter!=='all'&&post.dataset.socialGroup!==filter;if(!post.hidden)count++;});
 document.querySelector('.social-grid-count').textContent=count+' designs';
}));
document.querySelectorAll('[data-video-src]').forEach(player=>{
 player.querySelector('button').addEventListener('click',()=>{
  const frame=document.createElement('iframe');frame.src=player.dataset.videoSrc;frame.title=player.dataset.videoTitle;frame.allow='autoplay; fullscreen';frame.allowFullscreen=true;frame.referrerPolicy='strict-origin-when-cross-origin';player.replaceChildren(frame);
 });
});
if(pageView){
 document.querySelectorAll('.page-expand').forEach(button=>button.addEventListener('click',()=>{
  const source=button.querySelector('img'),image=pageView.querySelector('img');image.src=source.src;image.alt=source.alt;pageView.querySelector('p').textContent=source.alt;pageView.showModal();
 }));
 pageView.querySelector('.close').onclick=()=>pageView.close();
 pageView.addEventListener('click',event=>{if(event.target===pageView){const r=pageView.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)pageView.close();}});
}
document.querySelector('.motion-toggle').onclick=event=>{const paused=document.documentElement.classList.toggle('motion-paused');event.currentTarget.textContent=paused?'Resume motion':'Pause motion';event.currentTarget.setAttribute('aria-pressed',String(paused));};
