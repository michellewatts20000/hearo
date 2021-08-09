(function () {
  try {
    var mode = localStorage.getItem('mode');
    var supportDarkMode =
      window.matchMedia('(prefers-color-scheme: dark)').matches === true;
    if (!mode && supportDarkMode) document.body.classList.add('theme-dark');
    if (!mode) return;
    document.body.classList.add('theme-' + mode);
  } catch (e) {}
})();