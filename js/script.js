// ======الوضع الليلي :: start======
document.addEventListener('DOMContentLoaded', function () {
    var root = document.documentElement;
    // في زرّين: واحد للموبايل وواحد للكمبيوتر
    var buttons = document.querySelectorAll('nav .btn2');

    function setTheme(theme) {
        root.setAttribute('data-theme', theme);
        root.setAttribute('data-bs-theme', theme);
        try { localStorage.setItem('theme', theme); } catch (e) {}
        buttons.forEach(function (btn) {
            btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
        });
    }

    setTheme(root.getAttribute('data-theme') || 'light');

    buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            setTheme(next);
        });
    });
});
// ======الوضع الليلي :: end======
