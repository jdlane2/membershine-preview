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
  // Also handle reverse logic: unchecking a row updates the header checkbox
  document.addEventListener('change', function(e) {
    if (e.target.type === 'checkbox') {
      const th = e.target.closest('th');
      if (th) {
        // Header checkbox — toggle all row checkboxes
        const table = th.closest('table');
        if (table) {
          const rowCheckboxes = table.querySelectorAll('tbody input[type="checkbox"]');
          rowCheckboxes.forEach(function(cb) { cb.checked = e.target.checked; });
          updateSelectedCount(table);
        }
      } else {
        // Row checkbox — update header checkbox state
        const table = e.target.closest('table');
        if (table) {
          const headerCheckbox = table.querySelector('thead input[type="checkbox"]');
          if (headerCheckbox) {
            const rowCheckboxes = table.querySelectorAll('tbody input[type="checkbox"]');
            const allChecked = Array.from(rowCheckboxes).every(function(cb) { return cb.checked; });
            const someChecked = Array.from(rowCheckboxes).some(function(cb) { return cb.checked; });
            headerCheckbox.checked = allChecked;
            headerCheckbox.indeterminate = someChecked && !allChecked;
          }
          updateSelectedCount(table);
        }
      }
    }
  });

  // Update the selected counter badge
  function updateSelectedCount(table) {
    var rowCheckboxes = table.querySelectorAll('tbody input[type="checkbox"]');
    var count = Array.from(rowCheckboxes).filter(function(cb) { return cb.checked; }).length;
    var badge = document.querySelector('.selected-count');
    if (badge) {
      badge.textContent = 'Selected: ' + count;
    }
  }

  // Sidebar toggle
  document.getElementById('sidebarToggle').addEventListener('click', function() {
    sidebar.classList.toggle('show');
  });

  // Org switcher
  var orgSwitcher = document.querySelector('.org-switcher select');
  if (orgSwitcher) {
    orgSwitcher.addEventListener('change', function() {
      var orgName = this.value;
      // Reload current page
      var activeLink = document.querySelector('.nav-link.active, .sub-nav-link.active');
      if (activeLink && activeLink.dataset.page) {
        loadPage(activeLink.dataset.page);
      }
      // Update page subtitles with new org name
      setTimeout(function() {
        document.querySelectorAll('.page-subtitle').forEach(function(el) {
          el.textContent = el.textContent.replace(/Sunrise Condos|Oak Park HOA|Lakeside Estates/g, orgName);
        });
      }, 10);
    });
  }

  // Load default page
  loadPage('dashboard');

  // Expand all sub-navs by default
  document.querySelectorAll('.sub-nav').forEach(function(s) { s.classList.add('show'); });
})();
