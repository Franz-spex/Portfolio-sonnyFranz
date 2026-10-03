// Add only client names and logo paths supplied or confirmed by Sonny.
// Entry shape: { name: 'Client name', logo: 'assets/client-logo.svg' }.
// Omit logo to show the confirmed name as text.
const portfolioClients = [
    {
        "name":  "Power Media",
        "logo":  "assets/client-logos/power-media.svg",
        "project":  "work-power-media-profile.html"
    },
    {
        "name":  "Sasya Spaces",
        "logo":  "assets/client-logos/sasya-spaces.svg",
        "project":  "work-sasya-spaces-identity.html"
    },
    {
        "name":  "Nestora",
        "logo":  "assets/client-logos/nestora.svg",
        "project":  "work-nestora-brand-system.html"
    },
    {
        "name":  "33 Degree Cafe",
        "logo":  "assets/client-logos/33-degree-cafe.svg",
        "project":  "work-33-degree-profile.html"
    },
    {
        "name":  "Brew \u0026 Butter",
        "logo":  "assets/client-logos/brew-butter.svg",
        "project":  "work-brew-butter-brand-interiors.html"
    },
    {
        "name":  "BCALO",
        "logo":  "assets/client-logos/bcalo.svg",
        "project":  "work-bcalo-uniforms.html"
    },
    {
        "name":  "Black in Cafe",
        "logo":  "assets/client-logos/black-in-cafe.svg",
        "project":  "work-black-in-cafe-packaging.html"
    },
    {
        "name":  "2050",
        "logo":  "assets/client-logos/2050.svg",
        "project":  "work-2050-brand-guidelines.html"
    },
    {
        "name":  "eMenu",
        "logo":  "assets/client-logos/emenu.svg",
        "project":  "work-emenu-pitch-deck-1.html"
    },
    {
        "name":  "Malath",
        "logo":  "assets/client-logos/malath.svg",
        "project":  "work-malath-visual-concepts.html"
    },
    {
        "name":  "Network Dine",
        "logo":  "assets/client-logos/network-dine.svg",
        "project":  "work-network-dine-qr-journey.html"
    },
    {
        "name":  "SecureVisa",
        "logo":  "assets/client-logos/securevisa.svg",
        "project":  "work-securevisa-brand-identity.html"
    },
    {
        "name":  "Macmillan Real Estate",
        "logo":  "assets/client-logos/macmillan.svg",
        "project":  "work-macmillan-real-estate.html"
    },
    {
        "name":  "ITSEC",
        "logo":  "assets/client-logos/itsec.svg",
        "project":  "work-itsec-cybersecurity.html"
    },
    {
        "name":  "DSPS Laboratory",
        "logo":  "assets/client-logos/dsps.svg",
        "project":  "work-dsps-laboratory.html"
    },
    {
        "name":  "SALAM Autism School",
        "logo":  "assets/client-logos/salam.svg",
        "project":  "work-salam-autism-school.html"
    },
    {
        "name":  "ALMASAR",
        "logo":  "assets/client-logos/almasar.svg",
        "project":  "work-almasar-delivery.html"
    },
    {
        "name":  "Habit Mahshi",
        "logo":  "assets/client-logos/habit-mahshi.svg",
        "project":  "work-habit-mahshi-restaurant.html"
    },
    {
        "name":  "Bake Point",
        "logo":  "assets/client-logos/bake-point.svg",
        "project":  "work-bake-point-pastry.html"
    },
    {
        "name":  "Artistic Imagery",
        "logo":  "assets/client-logos/artistic-imagery.svg",
        "project":  "work-artistic-imagery-ai.html"
    }
];

if (portfolioClients.length) {
 const section = document.createElement('section');
 section.className = 'client-marquee';
 section.id = 'clients';
 section.setAttribute('aria-labelledby', 'client-heading');
 const label = document.createElement('p');
 label.className = 'client-eyebrow'; label.textContent = 'CLIENTS';
 const heading = document.createElement('h2');
 heading.id = 'client-heading'; heading.textContent = 'Clients I’ve Worked With';
 const placeholders = portfolioClients.every(client => client.placeholder);
 if (placeholders) { label.textContent = 'CLIENT LOGO PREVIEW'; heading.textContent = 'Your Brand Could Be Next'; }
 const note = document.createElement('p'); note.className = 'client-preview-note';
 note.textContent = 'Demo logos only — placeholders for future client logos.';
 const viewport = document.createElement('div'); viewport.className = 'client-viewport';
 const track = document.createElement('div'); track.className = 'client-track';
 const group = document.createElement('ul'); group.className = 'client-group';
 for (const client of portfolioClients) {
  const item = document.createElement('li'); item.className = 'client-logo';
  if (client.logo) {
   const img = document.createElement('img'); img.src = client.logo;
   img.alt = client.name; img.width = 144; img.height = 64;
   img.addEventListener('error', () => { item.textContent = client.name; }, { once: true });
   item.append(img);
  } else {
   if (client.symbol) { const symbol = document.createElement('span'); symbol.className = 'client-symbol'; symbol.textContent = client.symbol; symbol.setAttribute('aria-hidden','true'); item.append(symbol); }
   const name = document.createElement('span'); name.textContent = client.name; item.append(name);
  }
  const link = document.createElement('a'); link.href = client.project; link.setAttribute('aria-label', 'View ' + client.name + ' project');
  while (item.firstChild) link.append(item.firstChild);
  item.append(link); group.append(item);
 }
 // Two identical groups travel by exactly one group width for a seamless loop.
 const copy = group.cloneNode(true); copy.setAttribute('aria-hidden', 'true'); copy.setAttribute('inert', '');
 copy.querySelectorAll('img').forEach(img => img.addEventListener('error', () => {
  img.parentElement.textContent = img.alt;
 }, { once: true }));
 track.append(group, copy); viewport.append(track); section.append(label, heading, viewport);
 if (placeholders) section.append(note);
 document.querySelector('#about').after(section);
}
