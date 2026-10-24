(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const MAPS = {
    triderma: 'https://maps.app.goo.gl/kwuQNaNCLQUnJ3F67?g_st=ac',
    aesthetics: 'https://maps.app.goo.gl/QCFQvqnxPovvFWo87?g_st=ac'
  };
  const PHONE = { triderma: '+919611269064', aesthetics: '+918049119000' };
  const INSTAGRAM = 'https://www.instagram.com/tridermabydrshetty/';
  const modes = {
    triderma: {
      brand: 'TRIDERMA', modeLabel: 'CURRENT CLINIC BRAND',
      logo: 'assets/logos/triderma-logo.jpg',
      logoAlt: 'TRIDERMA Skin Hair Wellness logo',
      subtitle: 'Skin · Hair · Wellness',
      title: 'Care for your skin.<br><em>Confidence in your care.</em>',
      description: 'Dermatology, cosmetology and trichology care associated with Dr. M. K. Shetty, in a thoughtfully designed clinic setting.',
      credentials: 'Dr. M. K. Shetty|Consultant Dermatologist',
      note: 'Formerly Dr. Shetty’s Aesthetics · appointment details should be confirmed with the clinic.',
      heroImage: 'assets/media/triderma/triderma-reception-plants.jpg',
      heroAlt: 'TRIDERMA reception area in Bengaluru',
      imageKicker: 'A NEW CHAPTER', imageCaption: 'TRIDERMA · Lavelle Road',
      careIntro: 'Explore service areas described in the clinic’s current profile and supplied material. The right option depends on a clinician’s assessment and your individual needs.',
      visitDescription: 'For appointment availability, a treatment discussion or directions to the current clinic, contact the team directly.',
      address: '1st Floor, Basappa Complex, Lavelle Road, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001',
      hours: 'Monday–Saturday · 10:00 AM–8:00 PM<br>Sunday · Closed',
      hoursEyebrow: 'HOURS SHOWN IN PROVIDED LISTING',
      visitNotice: 'Please confirm opening hours before travelling.',
      galleryDescription: 'Current TRIDERMA branding and clinic interior photographs from the supplied collection.',
      galleries: [
        {src:'assets/media/triderma/triderma-reception-plants.jpg', title:'Reception & natural light', category:'CLINIC INTERIOR', alt:'Reception counter and plants at TRIDERMA'},
        {src:'assets/media/triderma/triderma-reception-desk.jpg', title:'Reception desk', category:'WELCOME', alt:'TRIDERMA reception desk with brand sign'},
        {src:'assets/media/triderma/triderma-signage.jpg', title:'TRIDERMA signage', category:'CURRENT BRAND', alt:'TRIDERMA Skin Hair Wellness wall sign'},
        {src:'assets/media/triderma/triderma-rebrand-announcement.jpg', title:'A new clinic chapter', category:'BRAND UPDATE', alt:'Poster announcing Dr Shetty’s Aesthetics is now TRIDERMA'}
      ],
      reviews: [
        {name:'Akshitha Gowda', rating:5, theme:'Care & communication', text:'The reviewer describes a good skin-clinic experience, supportive staff and clear explanations from the doctor.'},
        {name:'Bhargav Reddy', rating:5, theme:'Consultation', text:'The reviewer praises Dr. Shetty’s explanation and diagnosis, and describes him as an experienced dermatologist and cosmetologist.'}
      ],
      care: [
        {icon:'01', title:'Dermatology', text:'Consultation for skin concerns, with assessment and a care plan tailored to the individual.'},
        {icon:'02', title:'Trichology & hair care', text:'Guidance for hair and scalp concerns, with treatment options discussed during consultation.'},
        {icon:'03', title:'Cosmetology', text:'Aesthetic skin care options and procedures considered in the context of individual needs.'},
        {icon:'04', title:'Laser & device-based care', text:'Laser and energy-based treatment areas described in the clinic’s published material.'},
        {icon:'05', title:'Peels & rejuvenation', text:'Peel and skin-resurfacing approaches listed in the supplied clinic information.'},
        {icon:'06', title:'Aesthetic consultations', text:'A conversation about goals, available options, suitability, risks and realistic expectations.'}
      ]
    },
    aesthetics: {
      brand: 'DR. SHETTY’S AESTHETICS', modeLabel: 'LEGACY CLINIC PROFILE',
      logo: 'assets/logos/dr-shetty-aesthetics-logo.jpg',
      logoAlt: 'Dr. Shetty’s Aesthetics logo',
      subtitle: 'Dermatology · Trichology · Aesthetics',
      title: 'Skin and hair care,<br><em>with experience at the centre.</em>',
      description: 'The historic Dr. Shetty’s Aesthetics identity, with clinic material covering dermatology, trichology, aesthetic procedures and associated specialties.',
      credentials: 'Dr. M. K. Shetty|Dermatology & Aesthetic Laser Medicine',
      note: 'Legacy profile preserved from older clinic materials. The supplied update states the practice is now called TRIDERMA.',
      heroImage: 'assets/media/aesthetics/aesthetics-waiting-area.jpg',
      heroAlt: 'Waiting area from the supplied Dr. Shetty’s Aesthetics photo collection',
      imageKicker: 'THE LEGACY PROFILE', imageCaption: 'Dr. Shetty’s Aesthetics',
      careIntro: 'The older clinic brochure lists these areas of care. Current availability and suitability should always be confirmed directly with the medical team.',
      visitDescription: 'Older clinic material and the rebranding update are both included here. Please confirm the current location and appointment details before visiting.',
      address: 'Older brochure address: Prestige Delta, St. Mark’s Road, Bengaluru, Karnataka 560001. The supplied later update lists Basappa Complex, Lavelle Road as the new TRIDERMA address.',
      hours: 'Monday–Saturday · 10:00 AM–8:00 PM<br>Sunday · Closed',
      hoursEyebrow: 'HOURS SHOWN IN PROVIDED LISTING',
      visitNotice: 'Older location details are preserved for reference; confirm the address before travelling.',
      galleryDescription: 'The historic clinic interior, equipment and professional materials supplied for the Dr. Shetty’s Aesthetics profile.',
      galleries: [
        {src:'assets/media/aesthetics/aesthetics-corridor.jpg', title:'Clinic corridor', category:'CLINIC INTERIOR', alt:'Clinic corridor from Dr Shetty’s Aesthetics photo collection'},
        {src:'assets/media/aesthetics/aesthetics-treatment-equipment.jpg', title:'Treatment equipment', category:'EQUIPMENT', alt:'Treatment chair and aesthetic equipment'},
        {src:'assets/media/aesthetics/aesthetics-waiting-area.jpg', title:'Waiting area', category:'CLINIC INTERIOR', alt:'Waiting area from the clinic'},
        {src:'assets/media/aesthetics/aesthetics-treatment-displays.jpg', title:'Treatment displays', category:'CLINIC MATERIAL', alt:'Clinic display banners for aesthetic treatment technologies'},
        {src:'assets/media/aesthetics/aesthetics-waiting-room-wide.jpg', title:'Clinic seating', category:'WAITING AREA', alt:'Wide view of clinic waiting room'},
        {src:'assets/media/aesthetics/aesthetics-waiting-room-seating.jpg', title:'Patient waiting space', category:'WAITING AREA', alt:'Waiting room chairs and reception corridor'},
        {src:'assets/media/aesthetics/aesthetics-wall-signage.jpg', title:'Dr. Shetty’s Aesthetics sign', category:'LEGACY BRAND', alt:'Dr Shetty’s Aesthetics wall sign'},
        {src:'assets/media/aesthetics/aesthetics-interior-wood-screen.jpg', title:'Interior detail', category:'CLINIC INTERIOR', alt:'Clinic interior with wood screen and seating'},
        {src:'assets/media/aesthetics/aesthetic-laser-treatment.jpg', title:'Laser treatment setting', category:'TREATMENT IMAGE', alt:'Close-up of an aesthetic laser procedure'},
        {src:'assets/media/aesthetics/dr-shetty-video-consultation-poster.jpg', title:'Video consultations', category:'DOCTOR PROFILE', alt:'Care.fit video consultation promotional image featuring Dr M K Shetty'},
        {src:'assets/media/aesthetics/dental-aligner-example.jpg', title:'Dental alignment example', category:'COSMETIC DENTISTRY', alt:'Clear dental aligner photographed against a mountain landscape'},
        {src:'assets/media/aesthetics/cosmetic-dentistry-before.jpg', title:'Dental image 1', category:'COSMETIC DENTISTRY', alt:'Clinical dental image from the supplied collection'},
        {src:'assets/media/aesthetics/cosmetic-dentistry-after.jpg', title:'Dental image 2', category:'COSMETIC DENTISTRY', alt:'Second clinical dental image from the supplied collection'},
        {src:'assets/media/aesthetics/dr-shetty-professional-panel.jpg', title:'Professional event', category:'PROFESSIONAL ACTIVITY', alt:'Dr Shetty at a professional panel discussion'}
      ],
      reviews: [
        {name:'Sadhika Nanda', rating:5, theme:'Skin & hair care', text:'The reviewer describes a thoughtful approach to longstanding skin and hair concerns, and notes that treatment can take time and address underlying causes.'},
        {name:'Anil0912', rating:5, theme:'Doctor communication', text:'The reviewer appreciates an open, friendly consultation and treatment recommendations that suit their budget.'},
        {name:'Devraj Chowdhury', rating:5, theme:'Hair care experience', text:'The reviewer describes a positive experience with Dr. Shetty, Dr. Bala and the wider team, and appreciates their guidance.'},
        {name:'Manasa Sadananda', rating:5, theme:'Treatment approach', text:'The reviewer says they were satisfied with the services and appreciated a careful approach tailored to individual requirements.'},
        {name:'Sheela Samuel', rating:5, theme:'Clinic experience', text:'The reviewer was pleased with the experience and appreciated honest explanations and a well-maintained clinic.'},
        {name:'Nihal Colaco', rating:5, theme:'Consultation', text:'The reviewer appreciated answers to their skin-care questions and described the staff as honest, friendly and helpful.'},
        {name:'Kabir M Aswani', rating:5, theme:'Clear explanations', text:'The reviewer appreciated that the doctor took time to explain the options and the approach to care.'},
        {name:'Blanca Pinto', rating:4, theme:'Dermatology', text:'The review praises Dr. Sandhya’s attention to detail, warm manner, calm demeanour and consultation skills.'},
        {name:'Jerusha S J', rating:5, theme:'Care from the team', text:'The reviewer appreciated the explanations, the options discussed and the friendly staff.'},
        {name:'Vipin Joshi', rating:5, theme:'Clinic reputation', text:'The reviewer describes Dr. M. K. Shetty’s clinic as a world-class skin centre in Bangalore.'},
        {name:'Zulekha Navas', rating:5, theme:'Patient communication', text:'The review highlights clear explanations, care from Dr. Sandhya and a positive experience with cosmetic treatment.'},
              ],
      care: [
        {icon:'01', title:'Dermatology', text:'Clinical assessment and management of skin concerns listed in the historic clinic material.'},
        {icon:'02', title:'Trichology & hair restoration', text:'Hair and scalp consultations, including hair-loss assessment and restoration options.'},
        {icon:'03', title:'Laser procedures', text:'Clinic material references hair reduction, resurfacing, pigment and tattoo concerns, and other laser procedures.'},
        {icon:'04', title:'Peels & skin rejuvenation', text:'Chemical, carbon and jet peels, along with other resurfacing and rejuvenation approaches noted in the brochure.'},
        {icon:'05', title:'Aesthetic procedures', text:'Archived material mentions injectables and device-based procedures. Assessment, risks and alternatives require medical discussion.'},
        {icon:'06', title:'Surgical & dental specialties', text:'Older signs and brochures also list cosmetic surgery and cosmetic dentistry. Current availability must be confirmed directly.'}
      ]
    }
  };
  const state = {mode:'triderma', galleryAll:false, reviewsAll:false, lightboxItems:[], lightboxIndex:0, lastFocus:null};
  const $ = (id) => document.getElementById(id);
  const setText = (id, text) => { const el=$(id); if(el) el.textContent=text; };
  const setHTML = (id, html) => { const el=$(id); if(el) el.innerHTML=html; };
  const setAttr = (id, attr, value) => { const el=$(id); if(el) el.setAttribute(attr,value); };
  function renderCare(data){
    $('care-grid').innerHTML = data.care.map(item => `<article class="care-card reveal"><div class="care-icon">${item.icon}</div><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.text)}</p></article>`).join('');
    refreshReveal();
  }
  function visibleGallery(data){ return state.galleryAll ? data.galleries : data.galleries.slice(0,4); }
  function renderGallery(data){
    const items=visibleGallery(data);
    $('gallery-grid').innerHTML=items.map((item,index)=>`<button class="gallery-card reveal" type="button" data-gallery-index="${index}" aria-label="Open photo: ${escapeAttr(item.title)}"><span class="gallery-img-wrap"><img src="${item.src}" alt="${escapeAttr(item.alt)}" loading="lazy"></span><figcaption><span><strong>${escapeHTML(item.title)}</strong><br><small>${escapeHTML(item.category)}</small></span><span aria-hidden="true">↗</span></figcaption></button>`).join('');
    setText('gallery-count', `${items.length.toString().padStart(2,'0')} selected ${items.length===1?'image':'images'}`);
    setText('show-gallery-more', state.galleryAll ? 'Show selected photos ↗' : 'Show all photos ↗');
    $('show-gallery-more').hidden = data.galleries.length <= 4;
    setText('gallery-description', data.galleryDescription);
    refreshReveal();
  }
  function renderReviews(data){
    const items=state.reviewsAll ? data.reviews : data.reviews.slice(0,6);
    $('reviews-grid').innerHTML=items.map(item=>`<article class="review-card reveal"><div class="review-meta"><div class="review-author"><span class="review-avatar" aria-hidden="true">${escapeHTML(item.name.trim().charAt(0).toUpperCase())}</span><div><strong>${escapeHTML(item.name)}</strong><small>Summary of supplied review</small></div></div><span class="review-stars" aria-label="${item.rating} out of 5 stars">${'★'.repeat(item.rating)}${'☆'.repeat(5-item.rating)}</span></div><blockquote>${escapeHTML(item.text)}</blockquote><div class="review-theme">${escapeHTML(item.theme)}</div></article>`).join('');
    setText('show-reviews-more', state.reviewsAll ? 'Show fewer reviews ↗' : `Read more reviews (${Math.max(data.reviews.length-6,0)}) ↗`);
    $('show-reviews-more').hidden = data.reviews.length <= 6;
    setText('reviews-intro', state.mode==='triderma' ? 'Selected reviews for TRIDERMA from the screenshots you supplied. Excerpts are presented as patient feedback, not as a promise of clinical outcomes.' : 'Selected reviews from the older Dr. Shetty’s Aesthetics profile. Excerpts are presented as patient feedback, not as a promise of clinical outcomes.');
    refreshReveal();
  }
  function updateMode(mode){
    if(!modes[mode]) return;
    state.mode=mode; state.galleryAll=false; state.reviewsAll=false;
    const d=modes[mode]; document.body.dataset.mode=mode;
    document.querySelectorAll('[data-mode-choice]').forEach(btn=>{
      const active=btn.dataset.modeChoice===mode;
      btn.classList.toggle('is-active',active); btn.setAttribute('aria-pressed',String(active));
    });
    ['header-logo','hero-logo','visit-card-logo'].forEach(id=>{setAttr(id,'src',d.logo);setAttr(id,'alt',d.logoAlt);});
    setText('hero-eyebrow',d.modeLabel);
    setHTML('hero-title',d.title);
    setText('hero-description',d.description);
    const cred=d.credentials.split('|');
    setHTML('hero-credentials', `<span>${escapeHTML(cred[0])}</span><i aria-hidden="true"></i><span>${escapeHTML(cred[1])}</span>`);
    setText('hero-brand-caption',d.subtitle);
    setText('hero-note',d.note);
    setText('hero-image-kicker',d.imageKicker); setText('hero-image-caption',d.imageCaption);
    const hero=$('hero-image'); hero.classList.add('is-changing'); setAttr('hero-image','src',d.heroImage); setAttr('hero-image','alt',d.heroAlt);
    hero.onload=()=>hero.classList.remove('is-changing');
    setText('care-intro',d.careIntro);
    setText('visit-description',d.visitDescription);
    setText('visit-card-title',d.brand);
    setText('visit-card-eyebrow',mode==='triderma'?'CURRENT LOCATION':'LEGACY PROFILE');
    setText('visit-address',d.address);
    setHTML('visit-hours',d.hours);
    setText('visit-phone-label',mode==='triderma'?'+91 96112 69064':'+91 80 4911 9000');
    setAttr('visit-call','href',`tel:${PHONE[mode]}`); setAttr('header-call','href',`tel:${PHONE[mode]}`); setAttr('hero-call','href',`tel:${PHONE[mode]}`); setAttr('visit-card-phone','href',`tel:${PHONE[mode]}`); setText('visit-card-phone',mode==='triderma'?'+91 96112 69064':'+91 80 4911 9000');
    setAttr('hero-directions','href',MAPS[mode]); setAttr('visit-map','href',MAPS[mode]);
    setText('visit-disclaimer',d.visitNotice);
    setText('gallery-title', mode==='triderma'?'A closer look.':'A closer look back.');
    setText('gallery-description',d.galleryDescription);
    renderCare(d); renderGallery(d); renderReviews(d);
    document.title = mode==='triderma' ? 'Dr. M. K. Shetty | TRIDERMA' : 'Dr. M. K. Shetty | Dr. Shetty’s Aesthetics archive';
  }
  function escapeHTML(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function escapeAttr(value){return escapeHTML(value);}
  function refreshReveal(){
    const targets=document.querySelectorAll('.reveal:not([data-observed])');
    if(!('IntersectionObserver' in window)){targets.forEach(el=>{el.classList.add('is-visible');el.dataset.observed='true';});return;}
    targets.forEach(el=>{el.dataset.observed='true';observer.observe(el);});
  }
  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.08,rootMargin:'0px 0px -24px 0px'}) : null;
  function openLightbox(index){
    const d=modes[state.mode]; state.lightboxItems=visibleGallery(d); state.lightboxIndex=Math.max(0,Math.min(index,state.lightboxItems.length-1)); state.lastFocus=document.activeElement;
    updateLightbox(); $('lightbox').hidden=false; document.body.style.overflow='hidden'; $('lightbox-close')?.focus(); document.querySelector('.lightbox-close').focus();
  }
  function updateLightbox(){const item=state.lightboxItems[state.lightboxIndex]; if(!item)return; setAttr('lightbox-image','src',item.src);setAttr('lightbox-image','alt',item.alt);setText('lightbox-caption',`${item.title} · ${item.category}`);}
  function closeLightbox(){ $('lightbox').hidden=true; document.body.style.overflow=''; if(state.lastFocus && typeof state.lastFocus.focus==='function')state.lastFocus.focus(); }
  function stepLightbox(delta){state.lightboxIndex=(state.lightboxIndex+delta+state.lightboxItems.length)%state.lightboxItems.length;updateLightbox();}
  const menuButton=document.querySelector('.mobile-menu-button');
  menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menuButton.setAttribute('aria-label',open?'Open menu':'Close menu');$('mobile-nav').hidden=open;});
  document.querySelectorAll('#mobile-nav a').forEach(a=>a.addEventListener('click',()=>{menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open menu');$('mobile-nav').hidden=true;}));
  document.querySelectorAll('[data-mode-choice]').forEach(btn=>btn.addEventListener('click',()=>updateMode(btn.dataset.modeChoice)));
  $('show-gallery-more').addEventListener('click',()=>{state.galleryAll=!state.galleryAll;renderGallery(modes[state.mode]);});
  $('show-reviews-more').addEventListener('click',()=>{state.reviewsAll=!state.reviewsAll;renderReviews(modes[state.mode]);});
  $('gallery-grid').addEventListener('click',e=>{const btn=e.target.closest('[data-gallery-index]');if(btn)openLightbox(Number(btn.dataset.galleryIndex));});
  document.querySelector('.lightbox-close').addEventListener('click',closeLightbox);
  document.querySelector('.lightbox-prev').addEventListener('click',()=>stepLightbox(-1));
  document.querySelector('.lightbox-next').addEventListener('click',()=>stepLightbox(1));
  $('lightbox').addEventListener('click',e=>{if(e.target===$('lightbox'))closeLightbox();});
  document.addEventListener('keydown',e=>{if(!$('lightbox').hidden){if(e.key==='Escape')closeLightbox();if(e.key==='ArrowLeft')stepLightbox(-1);if(e.key==='ArrowRight')stepLightbox(1);}});
  setText('current-year',new Date().getFullYear().toString());
  updateMode('triderma');
})();
