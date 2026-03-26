// Membershine Clickable Prototype — Navigation Logic
(function() {
  const pageContent = document.getElementById('pageContent');
  const sidebar = document.getElementById('sidebar');

  // Load a page by key
  function loadPage(pageKey) {
    if (PAGES[pageKey]) {
      pageContent.innerHTML = PAGES[pageKey];
      // Update active nav
      document.querySelectorAll('.nav-link, .sub-nav-link').forEach(l => l.classList.remove('active'));
      const activeLink = document.querySelector(`[data-page="${pageKey}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
        // If sub-nav link, also expand parent and highlight parent
        const parentSub = activeLink.closest('.sub-nav');
        if (parentSub) {
          parentSub.classList.add('show');
          const parentToggle = parentSub.previousElementSibling;
          if (parentToggle) parentToggle.classList.remove('collapsed');
        }
      }
      // Scroll to top
      pageContent.scrollTop = 0;
      window.scrollTo(0, 0);
    }
  }

  // Handle nav clicks
  document.addEventListener('click', function(e) {
    const link = e.target.closest('[data-page]');
    if (link) {
      e.preventDefault();
      loadPage(link.dataset.page);
      // On mobile, close sidebar
      if (window.innerWidth < 992) {
        sidebar.classList.remove('show');
      }
    }

    // Handle sub-nav toggles
    const toggle = e.target.closest('[data-toggle]');
    if (toggle) {
      e.preventDefault();
      const subId = toggle.dataset.toggle + '-sub';
      const subNav = document.getElementById(subId);
      if (subNav) {
        subNav.classList.toggle('show');
        toggle.classList.toggle('collapsed');
      }
    }
  });

  // Select All checkbox — toggle all row checkboxes in the same table
  document.addEventListener('change', function(e) {
    if (e.target.type === 'checkbox') {
      const th = e.target.closest('th');
      if (th) {
        const table = th.closest('table');
        if (table) {
          const rowCheckboxes = table.querySelectorAll('tbody input[type="checkbox"]');
          rowCheckboxes.forEach(cb => cb.checked = e.target.checked);
        }
      }
    }
  });

  // Sidebar toggle
  document.getElementById('sidebarToggle').addEventListener('click', function() {
    sidebar.classList.toggle('show');
  });

  // Load default page
  loadPage('dashboard');

  // Expand all sub-navs by default
  document.querySelectorAll('.sub-nav').forEach(s => s.classList.add('show'));
})();
