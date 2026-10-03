const node=id=>document.querySelector(`[data-node-id="816:${id}"]`);
const portrait=document.createElement('img');
portrait.src='assets/hero-cloud-dragon.png';
portrait.alt='Original masked humanoid sci-fi character with a luminous cyan visor and iridescent armor';
portrait.width=1122;portrait.height=1402;
portrait.style.cssText='display:block;width:100%;height:100%;object-fit:contain;object-position:center bottom;padding:0;box-sizing:border-box;transform:translateY(10px) scale(1.08);filter:drop-shadow(0 24px 30px rgba(119,72,170,.18))';
portrait.fetchPriority='high';
node('5024').replaceChildren(portrait);
function retag(el,tag){const n=document.createElement(tag);for(const a of el.attributes)n.setAttribute(a.name,a.value);n.append(...el.childNodes);el.replaceWith(n);return n;}
function link(id,href){const a=retag(node(id),'a');a.href=href;return a;}
function button(id,fn,label){const b=retag(node(id),'button');b.type='button';if(label)b.setAttribute('aria-label',label);b.addEventListener('click',fn);return b;}
let timer;function notice(text){const n=document.querySelector('#notice');n.textContent=text;n.classList.add('visible');clearTimeout(timer);timer=setTimeout(()=>n.classList.remove('visible'),6000);}
const dialog=document.querySelector('#detail');
function show(title,content){dialog.querySelector('h2').textContent=title;const body=dialog.querySelector('.detail-body');body.replaceChildren();if(typeof content==='string'){const p=document.createElement('p');p.textContent=content;body.append(p);}else body.append(content);dialog.showModal();}
dialog.querySelector('.close').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
retag(node('4975'),'main');retag(node('5525'),'header');retag(node('5536'),'nav').setAttribute('aria-label','Main navigation');
for(const el of document.querySelectorAll('main [id]'))retag(el,'section');
for(const id of ['4983','5110','5184','5242','5348','5419']){const el=node(id);if(el){const p=el.querySelector('p');if(p){const h=retag(p,id==='4983'?'h1':'h2');h.style.cssText='margin:0;font:inherit;line-height:inherit';}}}
// Preserve the reference line heights after adding semantic headings.
node('4983').querySelector('h1').style.lineHeight='1';
document.querySelectorAll('main h2').forEach(h=>h.style.lineHeight='36px');
const navIds=['5537','5539','5541','5543','5545','5547','5549'];const targets=['home','about','services','work','process','testimonials','contact'];
navIds.forEach((id,i)=>{const a=link(id,'#'+targets[i]);a.classList.add('nav-link');if(i===0)a.classList.add('is-active');});
link('5528','#home');link('4989','#work');link('5552','#contact');link('5481','mailto:sonnyfrancisjampazar.dld@gmail.com');const whatsappContact=link('5487','https://wa.me/971504978846');whatsappContact.target='_blank';whatsappContact.rel='noopener noreferrer';whatsappContact.setAttribute('aria-label','Chat on WhatsApp: 0504978846');
button('4995',()=>notice('A CV file has not been added yet. Please contact sonnyfrancisjampazar.dld@gmail.com for a copy.'));
const more=[...document.querySelectorAll('[data-name="Link"]')].find(el=>el.textContent.includes('More About Me'));
if(more)button(more.dataset.nodeId.split(':')[1],()=>show('Certified Graphic Designer — 3 Years of Experience',"I’m Sonny Francis B. Jampazar, a certified graphic designer and a Bachelor of Arts in Communication Arts graduate. I have 3 years of professional experience: 2 years in a corporate environment in Dubai and 1 year in the Philippines. My creative work spans branding, logos, graphic design, marketing materials, website and app interfaces, photography, motion graphics, video production and editing, and 2D and 3D animation. I also offer AI-generated images and videos, storyboarding, marketing content, and AI-powered platforms. Website and platform work includes client websites, software platforms, community applications, and website templates. Additional offerings include social media management, creative virtual assistant services, workshops, and educational resources. Contact me with your brief for a custom quote."));
const viewAll=link('5243','portfolio.html');viewAll.querySelector('p').textContent='View All Work';
const projects=[...node('5249').children];
projects.forEach(card=>{const name=card.querySelector('[data-name="Card Info"]');const title=name?.querySelector('p')?.textContent||'Selected project';const b=retag(card,'button');b.type='button';b.setAttribute('aria-label','View '+title);b.addEventListener('click',()=>{const wrap=document.createElement('div');const art=b.querySelector('[data-name="Card Info"]').previousElementSibling.cloneNode(true);art.querySelectorAll('[data-node-id]').forEach(e=>e.removeAttribute('data-node-id'));art.style.width='100%';wrap.append(art);const p=document.createElement('p');p.textContent=name?.textContent.replace('↗','').trim()||title;wrap.append(p);show(title,wrap);});});
const skills=[
 ['UI/UX & Product Design','Thoughtful websites, apps, and digital products with clear flows and intuitive experiences.'],
 ['Decks & Presentation','Clear, engaging presentations that turn ideas into a compelling visual story.'],
 ['Social Media Graphics','On-brand visuals for social posts, campaigns, and everyday marketing content.'],
 ['Photography','Considered composition and visual storytelling through still images.'],
 ['Videography','Video production and editing that bring stories and creative ideas to life.'],
 ['Motion Graphics & Video Editing','Animation, motion design, and video editing that bring creative ideas to life.'],
 ['3D Design','Three-dimensional visuals and animation for creative projects.'],
 ['Brand Identity','Logo systems, packaging, stationery, and branded applications with a consistent visual language.'],
 ['AI Videos & Films','AI-generated films, cinematic reels, and visual storytelling.']
];
const skillBadges=['5117','5134','5149','5167'].map(id=>node(id).parentElement.cloneNode(true));
const skillPages=['product-design','presentations','social-media','photography','videography','motion-graphics','3d-design','brand-identity','ai-films'];
// Distinct symbols for interfaces, presentations, products, social, photo, video, motion, and 3D.
const skillIcons=[
 '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 9v11M6 6.5h.01M9 6.5h.01"/>',
 '<path d="M3 3h18M5 3v12h14V3M12 15v4m-4 3 4-3 4 3M8 11l3-3 3 2 3-4"/>',
 '<rect x="3" y="3" width="18" height="15" rx="3"/><path d="m7 18-1 3 5-3m1-10c-3-3-6 1 0 5 6-4 3-8 0-5Z"/>',
 '<path d="M8 5 9.5 3h5L16 5h4a1 1 0 0 1 1 1v13H3V6a1 1 0 0 1 1-1h4Z"/><circle cx="12" cy="12" r="4"/>',
 '<rect x="3" y="5" width="13" height="14" rx="2"/><path d="m16 10 5-3v10l-5-3M7 9l5 3-5 3V9Z"/>',
 '<path d="M3 6h7M2 12h5M3 18h7m3-13 8 7-8 7V5Z"/>',
 '<path d="m12 2 9 5v10l-9 5-9-5V7l9-5Zm0 10 9-5m-9 5L3 7m9 5v10M7.5 4.5l9 5"/>',
 '<path d="m12 3 8 5-3 12H7L4 8l8-5Zm0 0v10m-5 7 5-7 5 7"/><circle cx="12" cy="13" r="2"/>'
];
node('5111').replaceChildren(...skills.map(([title,description],i)=>{
 if(title==='3D Design')return null;
 const card=document.createElement('a');card.href=skillPages[i]+'.html';card.className='skill-card';
 const badge=skillBadges[i%4].cloneNode(true);badge.removeAttribute('data-node-id');badge.querySelectorAll('[data-node-id]').forEach(el=>el.removeAttribute('data-node-id'));badge.setAttribute('aria-hidden','true');
 badge.querySelector('[data-name="SVG"]').innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${['#e58000','#983bff','#6155ff','#00a995'][i%4]}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:block;flex:none">${skillIcons[i]||'<rect x="3" y="5" width="18" height="15" rx="2"/><path d="m10 9 5 3-5 3V9ZM5 2v6M2 5h6m10-3 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z"/>'}</svg>`;
 const heading=document.createElement('h3');heading.textContent=title;
 const text=document.createElement('p');text.textContent=description;
 const arrow=document.createElement('span');arrow.className='skill-arrow';arrow.textContent='↗';arrow.setAttribute('aria-hidden','true');
 card.append(badge,heading,text,arrow);card.setAttribute('aria-label',`View ${title} portfolio`);
 return card;
}).filter(Boolean));
const testimonials=node('5427');testimonials.setAttribute('aria-live','polite');
button('5421',()=>testimonials.prepend(testimonials.lastElementChild),'Previous offering');
button('5424',()=>testimonials.append(testimonials.firstElementChild),'Next offering');
const form=retag(node('5493'),'form');form.setAttribute('aria-label','Contact Sonny Francis B. Jampazar');
const fields=[['5495','input','Your Name','name'],['5498','input','Your Email','email'],['5501','select','Your Project Type','project-type'],['5504','textarea','Tell me about your project','message']];
for(const[id,tag,placeholder,name]of fields){const el=document.createElement(tag);el.className='contact-field';el.id=name;el.name=name;el.setAttribute('aria-label',placeholder);el.required=true;if(tag==='select'){for(const label of [placeholder,...skills.map(([title])=>title),'Brand & Graphic Design','AI Creative Services','Websites & Platforms','Social Media Management','Creative Virtual Assistance','Workshops & Resources','Other']){const option=document.createElement('option');option.textContent=label;option.value=label===placeholder?'':label;el.append(option);}}else{el.placeholder=placeholder;if(tag==='input'){el.type=name==='email'?'email':'text';el.autocomplete=name;}}node(id).replaceWith(el);}
const send=retag(node('5507'),'button');send.type='submit';
const legacySkill=new URLSearchParams(location.search).get('skill');const requestedSkill=['UI/UX Design','Product Design'].includes(legacySkill)?'UI/UX & Product Design':legacySkill;if(skills.some(([title])=>title===requestedSkill))document.querySelector('#project-type').value=requestedSkill;
form.onsubmit=e=>{e.preventDefault();const data=new FormData(form);const subject=encodeURIComponent(`${data.get('project-type')} inquiry from ${data.get('name')}`);const body=encodeURIComponent(`${data.get('message')}\n\nFrom: ${data.get('name')}\nEmail: ${data.get('email')}`);location.href=`mailto:sonnyfrancisjampazar.dld@gmail.com?subject=${subject}&body=${body}`;notice('Your email app will open with your message ready to send.');};
['5517','5519','5521','5523'].forEach(id=>button(id,()=>notice('This social profile has not been linked yet.')));
const observer=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting){document.querySelectorAll('.nav-link').forEach(a=>{const active=a.hash==='#'+e.target.id;a.classList.toggle('is-active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}}},{rootMargin:'-10% 0px -65% 0px',threshold:0});targets.forEach(id=>observer.observe(document.getElementById(id)));
const motionButton=document.createElement('button');motionButton.type='button';motionButton.className='motion-toggle';motionButton.textContent='Pause motion';motionButton.setAttribute('aria-pressed','false');
motionButton.onclick=()=>{const paused=document.documentElement.classList.toggle('motion-paused');motionButton.textContent=paused?'Resume motion':'Pause motion';motionButton.setAttribute('aria-pressed',String(paused));};document.body.append(motionButton);

