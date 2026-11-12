/* Dark/light mode toggle
   - Starts in the visitor's saved choice, or their system setting if they haven't chosen yet
   - Saves the choice in localStorage so it sticks between visits
   - Sets data-theme on <html>; styles.css swaps the color tokens from there */
(function () {
  var root = document.documentElement;
  var STORAGE_KEY = "avnee-portfolio-theme";
  var systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  function getSaved() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null; // storage blocked (private browsing, etc.)
    }
  }

  function save(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      // ignore: the toggle still works for this visit
    }
  }

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    var button = document.getElementById("theme-toggle");
    if (button) {
      var isDark = theme === "dark";
      button.setAttribute("aria-pressed", String(isDark));
      button.title = isDark ? "Switch to light mode" : "Switch to dark mode";
    }
  }

  // Runs in <head>, before the page paints, so there's no flash of the wrong theme
  apply(getSaved() || (systemDark.matches ? "dark" : "light"));

  // If the visitor never picked a theme, follow their system setting when it changes
  systemDark.addEventListener("change", function (event) {
    if (!getSaved()) {
      apply(event.matches ? "dark" : "light");
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("theme-toggle");
    apply(root.getAttribute("data-theme")); // sync the button's state and label

    button.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      apply(next);
      save(next);
    });
  });
})();
