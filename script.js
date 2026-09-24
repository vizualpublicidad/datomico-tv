// =====================================================
// AÑO AUTOMÁTICO EN FOOTER
// =====================================================

const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// =====================================================
// ANIMACIONES AL HACER SCROLL
// =====================================================

// All editorial content is visible immediately, including without JavaScript.

const menu = document.querySelector('.mobile-menu');
if (menu) {
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { menu.open = false; }));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      menu.querySelector('summary').focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target)) menu.open = false;
  });
}

// =====================================================
// GOOGLE ANALYTICS
// LEAD POR CLIC EN CORREO
// =====================================================

document
  .querySelectorAll('a[href^="mailto:contacto@datomicotv.com"]')
  .forEach((link) => {

    link.addEventListener('click', () => {

      if (typeof gtag === 'function') {

        let contactSource = 'website';

        if (link.closest('.site-header')) {
          contactSource = 'header';
        }

        if (link.closest('#colaboraciones')) {
          contactSource = 'collaborations';
        }

        if (link.closest('footer')) {
          contactSource = 'footer';
        }

        gtag('event', 'generate_lead', {
          method: 'email',
          contact_source: contactSource,
          link_url: link.href
        });

      }

    });

  });

// Measure intent separately from email leads; do not count clicks as video views.
document.querySelectorAll('.story-card, .lab-teaser-card, .nav-lab, .hero .primary').forEach((link) => {
  link.addEventListener('click', () => {
    if (typeof gtag !== 'function') return;
    gtag('event', 'select_content', {
      content_type: link.classList.contains('story-card') ? 'episode' : link.pathname === '/lab' ? 'lab' : 'stories',
      item_id: link.getAttribute('href'),
      content_source: link.closest('.site-header') ? 'header' : link.closest('.hero') ? 'hero' : 'section'
    });
  });
});
