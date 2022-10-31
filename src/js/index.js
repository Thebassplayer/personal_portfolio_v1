const navToggle = document.querySelector(".nav-toggle"),
  navLinks = document.querySelectorAll(".nav__link");

// Event listeners
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});
