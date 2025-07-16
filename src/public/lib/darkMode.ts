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
  _: isDarkModeEnabled(),
  set on(v: boolean) {
    storeDarkMode(v);
    this._ = v;
  },
  get on() {
    return this._;
  },
  toggle() {
    this._ = !this._;
  },
};

Alpine.store("darkMode", darkMode);
