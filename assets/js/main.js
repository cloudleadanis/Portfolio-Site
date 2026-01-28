(() => {
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');

  // Initialize theme from localStorage (html.dark)
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') root.classList.add('dark');

  // Theme toggle
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = root.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      themeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    });
  }

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = link.getAttribute('href');
      if (!target || target === '#') return;
      const el = document.querySelector(target);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // update URL without scrolling again
        history.replaceState(null, '', target);
      }
    });
  });

  // Modal handling
  const modal = document.getElementById('modal');
  const modalContent = document.getElementById('modal-content');
  const closeModal = () => {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    modal.style.display = 'none';
    modalContent.innerHTML = '';
  };

  document.querySelectorAll('.card-open').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!modal) return;
      const card = btn.closest('.project-card');
      const project = card && card.dataset && card.dataset.project;
      const templates = {
        lanes: `<h3 id=\"modal-title\">Lanes</h3><p>HIG‑compliant Kanban board for macOS (placeholder details).</p>`,
        fart: `<h3 id=\"modal-title\">Fart Simulator Pro</h3><p>Playful iOS app (placeholder details).</p>`,
        tonikaku: `<h3 id=\"modal-title\">Tonikaku Community</h3><p>Community powered by CloudKit + AWS (placeholder details).</p>`
      };
      modalContent.innerHTML = templates[project] || '<h3 id=\"modal-title\">Project</h3><p>Details coming soon.</p>';
      modal.setAttribute('aria-hidden', 'false');
      modal.style.display = 'block';
      // focus first heading for accessibility
      const title = modalContent.querySelector('#modal-title');
      if (title) title.focus({preventScroll: true});
    });
  });

  const closeBtn = document.querySelector('.modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

  // close on Escape
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  // Initialize highlight.js if available
  if (window.hljs && typeof hljs.highlightAll === 'function') {
    hljs.highlightAll();
  }
})();