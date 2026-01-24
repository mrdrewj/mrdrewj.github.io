// Set current year in footer
document.querySelectorAll("[data-year]").forEach(el => {
  el.textContent = new Date().getFullYear();
});

// Mark current page in nav
const path = location.pathname.replace(/\/?$/, "/");
document.querySelectorAll(".nav a").forEach(a => {
  const href = (a.getAttribute("href") || "").replace(/\/?$/, "/");
  if (path.endsWith(href) || path === href) {
    a.setAttribute("aria-current", "page");
  }
});
