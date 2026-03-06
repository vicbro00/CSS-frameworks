const toggleButton = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('header ul.nav a, #mobile-menu a');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
});