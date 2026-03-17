/* ============================================================
   IBANDA GLORIUS PRIMARY SCHOOL — MAIN SCRIPT
   Reads from content.js and builds the page dynamically.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const C = CONTENT;

  // ── helpers ───────────────────────────────────────────────
  const $ = id => document.getElementById(id);
  const qs = sel => document.querySelector(sel);
  const qsa = sel => document.querySelectorAll(sel);

  function wa(number, message) {
    const n = number.replace(/\D/g, '');
    return `https://wa.me/${n}?text=${encodeURIComponent(message)}`;
  }

  function setHTML(id, html) { const el = $(id); if (el) el.innerHTML = html; }
  function setText(id, txt)  { const el = $(id); if (el) el.textContent = txt; }
  function setAttr(id, attr, val) { const el = $(id); if (el) el[attr] = val; }

  // ── NAV ───────────────────────────────────────────────────
  setText('nav-logo-name', C.school.name);
  setText('nav-logo-loc',  C.school.location);

  const navLinks = $('nav-links');
  const drawerLinks = $('nav-drawer');
  if (navLinks && C.nav) {
    const sections = ['about','story','campaign','adopt','volunteer','contact'];
    const labels   = ['About','Our Story','Campaign','Adopt','Volunteer','Contact'];
    navLinks.innerHTML = sections.map((s,i) =>
      `<li><a href="#${s}">${labels[i]}</a></li>`
    ).join('');
    if (drawerLinks) {
      drawerLinks.innerHTML = sections.map((s,i) =>
        `<a href="#${s}" class="drawer-link">${labels[i]}</a>`
      ).join('');
    }
  }

  // hamburger toggle
  const burger  = $('hamburger');
  const drawer  = $('nav-drawer');
  if (burger && drawer) {
    burger.addEventListener('click', () => drawer.classList.toggle('open'));
    drawer.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => drawer.classList.remove('open'))
    );
  }

  // nav scroll effect
  const nav = qs('.nav');
  window.addEventListener('scroll', () => {
    nav && nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // ── HERO ──────────────────────────────────────────────────
  const h = C.hero;
  setHTML('hero-heading', h.heading.replace(/\n/g, '<br>'));
  setText('hero-sub', h.subheading);

  const heroBg = $('hero-bg');
  if (heroBg && h.image) {
    const img = new Image();
    img.onload = () => {
      heroBg.style.backgroundImage = `url(${h.image})`;
      heroBg.classList.add('loaded');
    };
    img.src = h.image;
  }

  const ctaP = $('hero-cta-primary');
  const ctaS = $('hero-cta-secondary');
  if (ctaP) { ctaP.textContent = h.cta_primary.label;   ctaP.href = h.cta_primary.href; }
  if (ctaS) { ctaS.textContent = h.cta_secondary.label; ctaS.href = h.cta_secondary.href; }

  // ── STATS BAR ─────────────────────────────────────────────
  const statsBar = $('stats-bar');
  if (statsBar) {
    statsBar.innerHTML = C.about.stats.map(s =>
      `<div class="stat fade-in">
        <span class="stat__number">${s.number}</span>
        <span class="stat__label">${s.label}</span>
      </div>`
    ).join('');
  }

  // ── ABOUT ─────────────────────────────────────────────────
  const ab = C.about;
  setText('about-heading', ab.heading);
  const aboutText = $('about-text');
  if (aboutText) aboutText.innerHTML = ab.body.map(p => `<p class="fade-in">${p}</p>`).join('');

  const aboutImg = $('about-img');
  if (aboutImg && ab.image) {
    aboutImg.innerHTML = `<img src="${ab.image}" alt="Ibanda Glorius Primary School" loading="lazy">`;
  }

  // ── STORY ─────────────────────────────────────────────────
  const st = C.story;
  setText('story-heading',      st.heading);
  setText('story-name',         st.founder_name);
  setText('story-title',        st.founder_title);

  const storyImg = $('story-img');
  if (storyImg) {
    const img = new Image();
    img.onload = () => { storyImg.innerHTML = `<img src="${st.image}" alt="${st.founder_name}">`; };
    img.onerror = () => {
      storyImg.innerHTML = `<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>`;
    };
    img.src = st.image;
  }

  const storyBody = $('story-body');
  if (storyBody) {
    storyBody.innerHTML = st.body.map(p => `<p class="fade-in">${p}</p>`).join('');
    if (st.quote) {
      storyBody.innerHTML += `
        <blockquote class="story__quote fade-in">
          "${st.quote}"
          <cite class="story__name">— ${st.founder_name}</cite>
        </blockquote>`;
    }
  }

  // ── CAMPAIGN ──────────────────────────────────────────────
  const ca = C.campaign;
  setText('campaign-heading',    ca.heading);
  setText('campaign-subheading', ca.subheading);

  const campBody = $('campaign-body');
  if (campBody) campBody.innerHTML = ca.body.map(p => `<p>${p}</p>`).join('');

  // progress bar (animate on scroll)
  const pct = Math.round((ca.raised / ca.goal) * 100);
  setText('progress-raised',  `${ca.currency}${ca.raised.toLocaleString()}`);
  setText('progress-goal',    `of ${ca.currency}${ca.goal.toLocaleString()} goal`);
  setText('progress-pct',     `${pct}%`);
  setText('progress-donors',  `${ca.donors} donors`);

  const progressBar = $('progress-bar');
  if (progressBar) {
    // animate when visible
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { progressBar.style.width = pct + '%'; obs.disconnect(); }
      });
    }, { threshold: 0.3 });
    obs.observe(progressBar);
  }

  // budget table
  const budgetTable = $('budget-table');
  if (budgetTable) {
    budgetTable.innerHTML = ca.budget_items.map(r =>
      `<tr><td>${r.item}</td><td style="white-space:nowrap">${r.cost}</td></tr>`
    ).join('') + `<tr style="font-weight:700;border-top:2px solid var(--border)">
        <td>Total (engineer's estimate)</td>
        <td style="white-space:nowrap">${ca.ugx_total || ''} ≈ ${ca.currency}${ca.goal.toLocaleString()}</td>
      </tr>`;
  }

  // bank transfer box
  const bankBox = $('bank-transfer');
  if (bankBox && ca.bank) {
    const b = ca.bank;
    bankBox.innerHTML = `
      <div class="bank-card fade-in">
        <p class="bank-card__label">Bank Transfer via <a href="${b.wise_url}" target="_blank" rel="noopener">Wise.com</a> or direct deposit</p>
        <dl class="bank-card__details">
          <div><dt>Account name</dt><dd>${b.name}</dd></div>
          <div><dt>Account number</dt><dd>${b.account}</dd></div>
          <div><dt>Bank</dt><dd>${b.bank}</dd></div>
        </dl>
      </div>`;
  }

  const gfBtn = $('gofundme-btn');
  if (gfBtn) { gfBtn.href = ca.gofundme_url; gfBtn.textContent = ca.gofundme_label; }

  const campWaBtn = $('campaign-wa-btn');
  if (campWaBtn) {
    campWaBtn.href = wa(C.contact.whatsapp_number,
      `Hello Dr. Andrew, I would like to support the classroom campaign at Ibanda Glorius Primary School.`);
  }

  // ── ADOPT ─────────────────────────────────────────────────
  const ad = C.adopt;
  setText('adopt-heading',    ad.heading);
  setText('adopt-subheading', ad.subheading);
  setText('adopt-price',      ad.price_per_year);
  setText('adopt-price-sub',  `per year · ${ad.price_per_month}/month`);

  const adoptBody = $('adopt-body');
  if (adoptBody) adoptBody.innerHTML = ad.body.map(p => `<p>${p}</p>`).join('');

  const adoptBenefits = $('adopt-benefits');
  if (adoptBenefits) {
    adoptBenefits.innerHTML = ad.benefits.map(b => `<li>${b}</li>`).join('');
  }

  const adoptBtn = $('adopt-btn');
  if (adoptBtn) {
    adoptBtn.href = wa(ad.whatsapp_number, ad.whatsapp_message);
    adoptBtn.textContent = ad.cta_label;
  }

  // ── VOLUNTEER ─────────────────────────────────────────────
  const vo = C.volunteer;
  setText('volunteer-heading',    vo.heading);
  setText('volunteer-subheading', vo.subheading);

  const volIntro = $('volunteer-intro');
  if (volIntro) volIntro.innerHTML = vo.body.map(p => `<p>${p}</p>`).join('');

  const rolesGrid = $('roles-grid');
  if (rolesGrid) {
    rolesGrid.innerHTML = vo.roles.map(r =>
      `<div class="role-card fade-in">
        <span class="role-card__icon">${r.icon}</span>
        <h3 class="role-card__title">${r.title}</h3>
        <p class="role-card__desc">${r.description}</p>
      </div>`
    ).join('');
  }

  const volBtn = $('volunteer-btn');
  if (volBtn) {
    volBtn.href = wa(vo.whatsapp_number, vo.whatsapp_message);
    volBtn.textContent = vo.cta_label;
  }

  // ── GALLERY ───────────────────────────────────────────────
  const ga = C.gallery;
  setText('gallery-heading', ga.heading);

  const galleryGrid = $('gallery-grid');
  const lightbox    = $('lightbox');
  const lightboxImg = $('lightbox-img');

  if (galleryGrid) {
    galleryGrid.innerHTML = ga.images.map((img, i) =>
      `<div class="gallery-item fade-in" data-idx="${i}">
        <img src="${img.src}" alt="${img.caption || 'School photo'}" loading="lazy"
             onerror="this.parentElement.style.background='var(--green-light)';this.remove()">
        ${img.caption ? `<div class="gallery-item__caption">${img.caption}</div>` : ''}
      </div>`
    ).join('');

    galleryGrid.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const i = +item.dataset.idx;
        if (lightbox && lightboxImg) {
          lightboxImg.src = ga.images[i].src;
          lightboxImg.alt = ga.images[i].caption || '';
          lightbox.classList.add('open');
        }
      });
    });
  }

  if (lightbox) {
    $('lightbox-close').addEventListener('click', () => lightbox.classList.remove('open'));
    lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('open'); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.classList.remove('open'); });
  }

  // ── CONTACT ───────────────────────────────────────────────
  const co = C.contact;
  setText('contact-heading', co.heading);
  setText('contact-body',    co.body);

  const contactWaBtn = $('contact-wa-btn');
  if (contactWaBtn) {
    contactWaBtn.href = wa(co.whatsapp_number, co.whatsapp_message);
    contactWaBtn.textContent = co.whatsapp_label;
  }

  const contactDetails = $('contact-details');
  if (contactDetails) {
    const rows = [
      { icon: phoneIcon(),   text: co.phone },
      { icon: mailIcon(),    text: co.email,   href: `mailto:${co.email}` },
      { icon: pinIcon(),     text: co.address },
      { icon: boxIcon(),     text: co.postal },
    ].filter(r => r.text);
    contactDetails.innerHTML = rows.map(r =>
      `<div class="contact__detail">
        ${r.icon}
        ${r.href ? `<a href="${r.href}">${r.text}</a>` : `<span>${r.text}</span>`}
      </div>`
    ).join('');
  }

  // ── FOOTER ────────────────────────────────────────────────
  const fo = C.footer;
  setText('footer-logo',     C.school.name);
  setText('footer-tagline',  fo.tagline);
  setText('footer-copy',     `© ${fo.copyright_year} ${C.school.org_name} · ${C.school.cbo_number}`);

  const footerGfLink = $('footer-gofundme');
  if (footerGfLink) footerGfLink.href = fo.gofundme_url;

  const footerWaLink = $('footer-whatsapp');
  if (footerWaLink) footerWaLink.href = wa(C.contact.whatsapp_number, C.contact.whatsapp_message);

  // ── INTERSECTION OBSERVER — fade-in ───────────────────────
  const fadeObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });

  qsa('.fade-in').forEach(el => fadeObs.observe(el));

  // Re-observe after dynamic content is added
  setTimeout(() => {
    qsa('.fade-in').forEach(el => fadeObs.observe(el));
  }, 100);

  // ── INLINE SVG ICONS ──────────────────────────────────────
  function phoneIcon() {
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>`;
  }
  function mailIcon() {
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;
  }
  function pinIcon() {
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
  }
  function boxIcon() {
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`;
  }
});
