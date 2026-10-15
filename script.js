// Mobile nav toggle
const toggle = document.querySelector(".nav__toggle");
const menu = document.getElementById("nav-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the menu after a link is tapped (mobile)
  menu.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Current year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}
