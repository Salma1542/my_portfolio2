window.addEventListener('scroll', function() {
    var scrolled = document.querySelector('.container'); // استهداف الهيدر بدلًا من .container
    if (window.scrollY > 500) { // استخدام window.scrollY للتحقق من التمرير
        scrolled.style.backgroundColor = ' rgba(0, 0, 0, 0.1)'; // تعيين لون الخلفية باستخدام style
    } else {
        scrolled.style.backgroundColor = '#131B26'; // إعادة الخلفية الأصلية عند العودة للأعلى
    }
});
