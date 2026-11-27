document.addEventListener('DOMContentLoaded', function () {

    // ======ظل النافبار :: start======
    // لما ننزل بالسكرول بيطلع خط وظل تحت النافبار
    var header = document.getElementById('siteHeader');
    function onScroll() {
        header.classList.toggle('scrolled', window.scrollY > 10);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    // ======ظل النافبار :: end======

    // ======النافبار :: start======
    // تلوين الرابط الحالي وإغلاق القائمة بالموبايل بعد الضغط
    var links = document.querySelectorAll('nav .container .collapse ul li a');
    var menu = document.getElementById('navbarSupportedContent');

    links.forEach(function (link) {
        link.addEventListener('click', function () {
            links.forEach(function (l) {
                l.classList.remove('active');
                l.removeAttribute('aria-current');
            });
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');

            if (menu.classList.contains('show')) {
                bootstrap.Collapse.getOrCreateInstance(menu).hide();
            }
        });
    });
    // ======النافبار :: end======

    // ======شريط التقدّم :: start======
    // يتعبى الشريط لما يوصله السكرول
    var bars = document.querySelectorAll('.track .w2 span');
    function fill(bar) {
        bar.style.width = bar.getAttribute('data-value') + '%';
    }
    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    fill(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.4 });
        bars.forEach(function (bar) { observer.observe(bar); });
    } else {
        bars.forEach(fill);
    }
    // ======شريط التقدّم :: end======

    // ======النشرة البريدية :: start======
    var form = document.getElementById('newsletterForm');
    var msg = document.getElementById('newsletterMsg');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var email = form.querySelector('input').value.trim();
        var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        msg.className = 's4 ' + (valid ? 'success' : 'error');
        msg.textContent = valid ? 'Thanks! You are subscribed.' : 'Please enter a valid email address.';
        if (valid) form.reset();
    });
    // ======النشرة البريدية :: end======

    // ======سنة الحقوق :: start======
    document.getElementById('year').textContent = new Date().getFullYear();
    // ======سنة الحقوق :: end======
});
