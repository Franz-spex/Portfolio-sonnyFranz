(() => {
  if (document.querySelector('.contact-shortcuts')) return;
  const email = 'sonnyfrancisjampazar.dld@gmail.com';
  const whatsapp = 'https://wa.me/971504978846';
  const whatsappIcon = '<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M26.7 15.6a10.7 10.7 0 0 1-15.9 9.3L5 26.5l1.6-5.6a10.7 10.7 0 1 1 20.1-5.3Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12.1 10.2c-.3-.7-.6-.7-.9-.7h-.7c-.3 0-.7.2-1 .6-.4.5-1.3 1.3-1.3 3.1s1.3 3.5 1.5 3.7c.2.3 2.6 4.2 6.4 5.6 3.2 1.2 3.9.9 4.6.8.7-.1 2.2-.9 2.5-1.7.3-.8.3-1.5.2-1.7-.1-.2-.4-.3-.8-.5l-2.5-1.2c-.4-.2-.7-.3-1 .2l-1.2 1.4c-.2.2-.4.3-.8.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.2 0-.5-.1-.7l-.9-2.1Z" fill="currentColor" transform="translate(2 1) scale(.85)"/></svg>';
  const chatIcon = '<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M26 15.1a10 10 0 0 1-14.7 8.8L6 26l1.5-5.6A10 10 0 1 1 26 15.1Z" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const shortcuts = document.createElement('nav');
  shortcuts.className = 'contact-shortcuts';
  shortcuts.setAttribute('aria-label', 'Quick contact');
  shortcuts.innerHTML = `<a class="contact-fab contact-fab-whatsapp" href="${whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="Chat with Sonny on WhatsApp">${whatsappIcon}<span class="contact-tip">WhatsApp</span></a><button class="contact-fab contact-fab-chat" type="button" aria-label="Open contact chat" aria-haspopup="dialog" aria-controls="quick-contact" aria-expanded="false">${chatIcon}<span class="contact-tip">Let’s talk</span></button>`;
  const panel = document.createElement('dialog');
  panel.id = 'quick-contact';
  panel.className = 'quick-contact';
  panel.setAttribute('aria-labelledby', 'quick-contact-title');
  panel.innerHTML = `<div class="quick-contact-heading"><div><p class="quick-contact-kicker">GET IN TOUCH</p><h2 id="quick-contact-title">Let’s talk.</h2></div><button class="quick-contact-close" type="button" aria-label="Close contact chat">×</button></div><p class="quick-contact-intro">Have a project in mind? Write a message and choose how you’d like to get in touch with Sonny.</p><label for="quick-contact-message">Your message</label><textarea id="quick-contact-message" rows="4" maxlength="2000" placeholder="Hi Sonny, I’d like to discuss…" autofocus></textarea><div class="quick-contact-actions"><a class="quick-contact-whatsapp" target="_blank" rel="noopener noreferrer">Continue on WhatsApp ↗</a><a class="quick-contact-email">Continue by email ↗</a></div><p class="quick-contact-note">Your message opens as a draft for you to send.</p><div class="quick-contact-details"><a href="mailto:${email}">${email}</a><a href="${whatsapp}" target="_blank" rel="noopener noreferrer">WhatsApp · 0504978846</a></div>`;
  document.body.append(shortcuts, panel);
  const toggle = shortcuts.querySelector('button');
  const message = panel.querySelector('textarea');
  function updateLinks() {
    const draft = message.value.trim();
    panel.querySelector('.quick-contact-whatsapp').href = whatsapp + (draft ? '?text=' + encodeURIComponent(draft) : '');
    panel.querySelector('.quick-contact-email').href = 'mailto:' + email + '?subject=' + encodeURIComponent('Portfolio project inquiry') + '&body=' + encodeURIComponent(draft);
  }
  message.addEventListener('input', updateLinks);
  updateLinks();
  toggle.addEventListener('click', () => {
    panel.showModal();
    toggle.setAttribute('aria-expanded', 'true');
  });
  panel.querySelector('.quick-contact-close').addEventListener('click', () => panel.close());
  panel.addEventListener('click', event => {
    if (event.target !== panel) return;
    const bounds = panel.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) panel.close();
  });
  panel.addEventListener('close', () => {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.focus({ preventScroll: true });
  });
})();
