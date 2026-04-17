document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });

  // Language toggle
  const btn = document.getElementById('lang-toggle');
  let lang = 'en';

  btn.addEventListener('click', () => {
    lang = lang === 'en' ? 'zh' : 'en';
    btn.textContent = lang === 'en' ? '中文' : 'EN';
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh';

    document.querySelectorAll('[data-en][data-zh]').forEach(el => {
      el.textContent = el.getAttribute('data-' + lang);
    });
  });

  // Scroll fade-in
  const sections = document.querySelectorAll('section, .research-card');
  sections.forEach(s => s.classList.add('fade-in'));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(s => observer.observe(s));
});
