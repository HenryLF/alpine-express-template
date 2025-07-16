import Alpine from "alpinejs";

function storeDarkMode(enabled: boolean) {
  localStorage.setItem("darkMode", enabled ? "enabled" : "disabled");
}

function isDarkModeEnabled() {
  if (!localStorage.getItem("darkMode")) {
    storeDarkMode(matchMedia("(prefers-color-scheme: dark)").matches);
  }
  return localStorage.getItem("darkMode") == "enabled";
}

const darkMode = {
  on: isDarkModeEnabled(),
  toggle() {
    this.on = !this.on;
    storeDarkMode(this.on);
  },
};

Alpine.store("darkMode", darkMode);
