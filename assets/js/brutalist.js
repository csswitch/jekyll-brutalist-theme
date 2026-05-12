// Brutalist — Main JS
// Progress bar, mobile nav, heading anchors, copy buttons

(function () {
  'use strict';

  // ── Reading progress bar ──────────────────────────────────────────────────
  const bar = document.querySelector('.brut-progress');
  if (bar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = docH > 0 ? (scrollTop / docH * 100) + '%' : '0%';
    }, { passive: true });
  }

  // ── Mobile nav ────────────────────────────────────────────────────────────
  const toggle = document.querySelector('.brut-masthead__toggle');
  const nav = document.querySelector('.brut-masthead__nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      toggle.textContent = nav.classList.contains('open') ? 'CLOSE' : 'MENU';
    });
  }

  // ── Active nav ────────────────────────────────────────────────────────────
  const path = window.location.pathname;
  document.querySelectorAll('.brut-masthead__nav-link').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path.startsWith(href) && href !== '/')) {
      a.classList.add('active');
    }
  });

  // ── Heading anchors ───────────────────────────────────────────────────────
  document.querySelectorAll('.post-body h2, .post-body h3').forEach(h => {
    if (!h.id) return;
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.className = 'anchor';
    a.setAttribute('aria-hidden', 'true');
    a.textContent = ' ¶';
    a.style.cssText = 'color:#888;font-size:0.6em;text-decoration:none;vertical-align:middle;';
    h.appendChild(a);
  });

  // ── Copy code ─────────────────────────────────────────────────────────────
  document.querySelectorAll('pre').forEach(pre => {
    const btn = document.createElement('button');
    btn.textContent = 'COPY';
    btn.style.cssText = 'position:absolute;top:0;right:0;padding:0.25rem 0.6rem;font-family:monospace;font-size:0.6rem;letter-spacing:0.12em;background:#e8001a;color:#fff;border:none;cursor:pointer;';
    pre.style.position = 'relative';
    pre.appendChild(btn);
    btn.addEventListener('click', () => {
      const code = pre.querySelector('code');
      navigator.clipboard.writeText(code ? code.textContent : pre.textContent).then(() => {
        btn.textContent = 'COPIED';
        setTimeout(() => { btn.textContent = 'COPY'; }, 2000);
      });
    });
  });
})();
