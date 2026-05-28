// Simple nav toggle for mobile + form handler
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }

  // Highlight active nav item based on current page
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Contact form — placeholder. The owner should wire this up to
  // a real mail handler (Formspree, Netlify Forms, etc.) before launch.
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const msg = document.querySelector('#form-message');
      if (msg) {
        msg.style.display = 'block';
        msg.textContent = 'Thanks — please also call (207) 363-1900 to schedule. We respond to messages within one business day.';
      }
      form.reset();
    });
  }
})();
