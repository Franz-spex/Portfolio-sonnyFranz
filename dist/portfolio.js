const detail=document.querySelector('#project-detail');
document.querySelectorAll('.project').forEach(card=>card.addEventListener('click',()=>{
 detail.querySelector('h2').textContent=card.querySelector('h3').textContent.replace('↗','').trim();
 const art=card.querySelector('.art').cloneNode(true);
 // Keep SVG gradient identifiers unique when a preview is opened.
 art.querySelectorAll('[id]').forEach(el=>{const old=el.id;el.id=old+'-detail';art.querySelectorAll('[fill]').forEach(shape=>{if(shape.getAttribute('fill')===`url(#${old})`)shape.setAttribute('fill',`url(#${el.id})`);});});
 detail.querySelector('.detail-art').replaceChildren(art);
 detail.querySelector('.detail-description').textContent=card.querySelector('.project-copy>p:not(.number)').textContent;
 detail.showModal();
}));
detail.querySelector('.close').onclick=()=>detail.close();
detail.addEventListener('click',e=>{if(e.target===detail){const r=detail.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)detail.close();}});
document.querySelector('.motion-toggle').onclick=e=>{const paused=document.documentElement.classList.toggle('motion-paused');e.currentTarget.textContent=paused?'Resume motion':'Pause motion';e.currentTarget.setAttribute('aria-pressed',String(paused));};
