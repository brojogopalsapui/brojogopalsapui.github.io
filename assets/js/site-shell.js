(function () {
  const body = document.body;
  if (!body || body.dataset.shellInjected === 'true') return;

  const root = body.dataset.siteRoot || '';
  const navKey = body.dataset.nav || 'home';
  const showTopbar = body.dataset.showTopbar === 'true';
  const brandHintUrl = 'https://brojogopalsapui.github.io/AISecurityResearch_Mobileview/';

  const navItems = [
    { key: 'home', href: `${root}index.html`, label: 'Home' },
    { key: 'about', href: `${root}about.html`, label: 'About' },
    { key: 'research', href: `${root}research.html`, label: 'Research' },
    { key: 'trending', href: `${root}ongoing-work.html`, label: 'Trending Topics', trending: true },
    { key: 'resources', href: `${root}publications.html`, label: 'Resources' },
    { key: 'contact', href: `${root}contact.html`, label: 'Contact' }
  ];

  const navHtml = navItems.map((item) => {
    const classes = [];
    if (item.trending) classes.push('trending-link');
    if (item.key === navKey) classes.push('active');
    return `<a href="${item.href}"${classes.length ? ` class="${classes.join(' ')}"` : ''}>${item.label}</a>`;
  }).join('');

  const topbarHtml = showTopbar ? `
    <div class="topbar">
      <div class="container topbar-inner">
        <div class="research-alert" role="status" aria-live="polite">
          <span class="research-alert-badge">Latest note</span>
          <div class="hero-chips">
            <span><strong>Embodied AI security</strong> is no longer just a model problem</span>
          </div>
          <a class="research-alert-link" href="${root}ongoing-work.html#2026-03-embodied-ai-security-governance">Read the research watch →</a>
        </div>
      </div>
    </div>` : '';

  const headerHtml = `
    <header class="site-header">
      <div class="container nav-wrap">
        <div class="brand-group">
          <a class="brand" href="${root}index.html" aria-label="Brojogopal Sapui Home">B<span>S</span></a>
          <a class="brand-hint" href="${brandHintUrl}" target="_blank" rel="noopener noreferrer">Learning Portal</a>
        </div>

        <nav class="nav" id="siteNav">
          ${navHtml}
        </nav>

        <button class="menu-btn" id="menuBtn" aria-label="Toggle menu" aria-controls="siteNav" aria-expanded="false">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>`;

  const footerHtml = `
    <footer class="site-footer">
      <div class="container footer-panel footer-grid">
        <div>
          <h3>Brojogopal Sapui</h3>
          <p>AI Security• Hardware Trust • Edge/Physical AI</p>
          <p class="note">Cross-layer AI security, trustworthy deployment, hardware-aware defense, and physical intelligence.</p>
        </div>

        <div>
          <h4>Main pages</h4>
          <div class="footer-links">
            <a href="${root}research.html">Research</a>
            <a href="${root}ongoing-work.html" class="trending-link">Trending Topics</a>
            <a href="${root}publications.html">Resources</a>
          </div>
        </div>

        <div>
          <h4>More</h4>
          <div class="footer-links">
            <a href="${root}about.html">About</a>
            <a href="${root}contact.html">Contact</a>
            <a href="${brandHintUrl}" target="_blank" rel="noopener noreferrer">Learning Portal</a>
          </div>
        </div>
      </div>
    </footer>`;

  const main = body.querySelector('main');
  if (main) {
    main.insertAdjacentHTML('beforebegin', topbarHtml + headerHtml);
    main.insertAdjacentHTML('afterend', footerHtml);
  } else {
    body.insertAdjacentHTML('afterbegin', topbarHtml + headerHtml);
    body.insertAdjacentHTML('beforeend', footerHtml);
  }

  body.dataset.shellInjected = 'true';
})();
