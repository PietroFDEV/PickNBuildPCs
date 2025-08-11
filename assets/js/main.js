/* PickNBuildPCs: interactions */

(function () {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  // Mobile nav toggle
  const navToggle = $('.nav-toggle');
  const navMenu = $('#nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const next = !(navToggle.getAttribute('aria-expanded') === 'true');
      navToggle.setAttribute('aria-expanded', String(next));
      navMenu.classList.toggle('open', next);
    });
    // Close menu when clicking a link (mobile)
    $$('#nav-menu a').forEach((a) =>
      a.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
      })
    );
  }

  // Footer year
  const year = new Date().getFullYear();
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = String(year);

  // Modal controls
  const openButtons = $$('[data-open-details]');
  const closeButtons = $$('[data-close]');

  function openModal(id) {
    const modal = $(id);
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
    document.addEventListener('keydown', escListener);
  }
  function closeModal(modal) {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', escListener);
  }
  function escListener(e) {
    if (e.key === 'Escape') {
      $$('.modal[aria-hidden="false"]').forEach((m) => closeModal(m));
    }
  }
  openButtons.forEach((btn) =>
    btn.addEventListener('click', () => openModal(btn.getAttribute('data-open-details')))
  );
  closeButtons.forEach((btn) => btn.addEventListener('click', () => closeModal(btn.closest('.modal'))));

  // Build form estimate
  const estimateEl = $('#estimateTotal');
  function calcEstimate() {
    let total = 0;
    // Sum checked radio inputs
    $$('fieldset input[type="radio"]:checked').forEach((input) => {
      const price = Number(input.getAttribute('data-price') || 0);
      total += price;
    });
    if (estimateEl) estimateEl.textContent = `£${Math.round(total)}`;
  }
  document.addEventListener('change', (e) => {
    if (e.target && e.target.matches('fieldset input[type="radio"]')) {
      calcEstimate();
    }
  });
  calcEstimate();
})();


