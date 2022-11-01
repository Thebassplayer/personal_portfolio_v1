import { storage } from "./storage";

// Local storage
const ls = storage("local");

// Dark Mode Button

// const ls = window.localStorage;

// const setValue = (key, value) => {
//   ls.setItem(key, JSON.stringify(value));
// };
// const getValue = key => {
//   return JSON.parse(ls.getItem(key));
// };

// Dark mode functionality

export const darkModeHandler = buttonID => {
  const darkModeToggleBtn = document.getElementById(`"${buttonID}"`);

  const darkMode = ls.get("darkMode");

  if (darkMode) {
    enableDarkMode();
  }

  const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    ls.set("darkMode", true);
  };

  const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    ls.set("darkMode", false);
  };

  // Event listener

  return {
    darkModeToggle() {
      darkModeToggleBtn.addEventListener("click", () => {
        if (darkMode) {
          disableDarkMode();
        } else {
          enableDarkMode();
        }
        darkMode = getValue("darkMode");
      });
    },
  };
};
