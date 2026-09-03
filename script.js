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

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

document
  .querySelectorAll(
    '.reveal, .series-card, .story-card, .standards-panel, .collab-card'
  )
  .forEach((el) => {

    if (!el.classList.contains('reveal')) {
      el.classList.add('reveal');
    }

    observer.observe(el);

  });


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
