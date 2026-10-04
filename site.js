
(function () {
  function esc(value) {
    return String(value || "").replace(/[&<>"']/g, function (c) {
      return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c];
    });
  }

  function card(project, index) {
    var tags = (project.tags || []).map(function (t) {
      return '<span class="tag">' + esc(t) + '</span>';
    }).join("");
    var actions = "";
    if (project.live) {
      actions += '<a class="text-link" href="' + esc(project.live) + '" target="_blank" rel="noopener"><span><span class="live-dot"></span>LIVE</span><span>↗</span></a>';
    }
    if (project.repo) {
      actions += '<a class="text-link muted" href="' + esc(project.repo) + '" target="_blank" rel="noopener"><span>CODE</span><span>↗</span></a>';
    }
    return '<article class="project-card" data-categories="' + esc((project.category || []).join(" ")) + '">' +
      '<div class="project-index mono">' + String(index + 1).padStart(2, "0") + '</div>' +
      '<div class="project-main"><h3>' + esc(project.title) + '</h3><p>' + esc(project.summary) + '</p></div>' +
      '<div class="project-tags">' + tags + '</div>' +
      '<div class="project-actions">' + actions + '</div>' +
      '</article>';
  }

  function renderFeatured() {
    var root = document.querySelector("[data-featured-projects]");
    if (!root || !window.PORTFOLIO_PROJECTS) return;
    var items = window.PORTFOLIO_PROJECTS.filter(function (p) { return p.featured; }).slice(0, 6);
    root.innerHTML = items.map(card).join("");
  }

  function renderProjects(filter) {
    var root = document.querySelector("[data-projects]");
    if (!root || !window.PORTFOLIO_PROJECTS) return;
    var items = window.PORTFOLIO_PROJECTS.filter(function (p) {
      return !filter || filter === "all" || (p.category || []).indexOf(filter) !== -1;
    });
    root.innerHTML = items.map(card).join("");
  }

  function initFilters() {
    var buttons = document.querySelectorAll("[data-filter]");
    if (!buttons.length) return;
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        buttons.forEach(function (b) { b.classList.remove("active"); });
        button.classList.add("active");
        renderProjects(button.getAttribute("data-filter"));
      });
    });
  }

  function initMenu() {
    var button = document.querySelector("[data-menu-button]");
    var nav = document.querySelector("[data-menu]");
    if (!button || !nav) return;
    button.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { nav.classList.remove("open"); });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderFeatured();
    renderProjects("all");
    initFilters();
    initMenu();
  });
})();
