import { darkModeHandler } from "./utils/darkmode";

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

// Event listeners
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

// Dark Mode
const darkModeBtn = "dark-mode-toggle";

const darkMode = darkModeHandler(darkModeBtn);

darkMode.darkModeToggle;
