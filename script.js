// ===== Mobile nav toggle =====
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav__links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Close mobile menu after clicking a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ===== Apply each project's accent swatch as a CSS variable =====
document.querySelectorAll(".project").forEach((project) => {
  const swatch = project.getAttribute("data-swatch");
  if (swatch) {
    project.style.setProperty("--swatch", swatch);
  }
});

// ===== Scroll-reveal for project rows =====
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".project").forEach((project) => {
  revealObserver.observe(project);
});

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();
