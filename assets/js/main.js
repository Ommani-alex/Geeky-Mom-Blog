const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const toggleBtn = document.getElementById("theme-toggle");
const htmlEl = document.documentElement;

if (toggleBtn) {
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") {
    htmlEl.setAttribute("data-theme", "dark");
    toggleBtn.textContent = "☀️";
    toggleBtn.setAttribute("aria-label", "Switch to Light Mode");
  }

  toggleBtn.addEventListener("click", () => {
    if (htmlEl.getAttribute("data-theme") === "dark") {
      htmlEl.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "🌙";
      toggleBtn.setAttribute("aria-label", "Switch to Dark Mode");
    } else {
      htmlEl.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "☀️";
      toggleBtn.setAttribute("aria-label", "Switch to Light Mode");
    }
  });
}
