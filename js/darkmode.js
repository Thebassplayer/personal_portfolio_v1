const darkModeToggle = document.getElementById("dark-mode-toggle");

const ls = window.localStorage;
const setValue = (key, value) => {
  ls.setItem(key, JSON.stringify(value));
};
const getValue = (key) => {
  return JSON.parse(ls.getItem(key));
};
const empty = () => {
  ls.clear();
};
let darkMode = getValue("darkMode");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  setValue("darkMode", true);
};

const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  setValue("darkMode", false);
};

if (darkMode) {
  enableDarkMode();
}

// Event listener

darkModeToggle.addEventListener("click", () => {
  if (darkMode) {
    disableDarkMode();
  } else {
    enableDarkMode();
  }
  darkMode = getValue("darkMode");
});
