import { handleRoute, navigateTo } from './router.js';
import { renderNavbar } from './navbar.js';

// اجعل الدوال متاحة بشكل عام (لتعمل في الـ onclick)
window.navigateTo = navigateTo;

// تهيئة التطبيق عند التحميل
window.addEventListener('DOMContentLoaded', () => {
    const userRole = 'seller'; // افتراضيًا (يمكن جلبها من localStorage)
    const redirect = sessionStorage.redirect;// إعادة التوجيه إلى المسار المحفوظ بعد تحميل الصفحة
    if (redirect) {
    sessionStorage.removeItem('redirect');
    window.history.replaceState({}, '', redirect);
    renderNavbar(userRole);
    handleRoute();
    }
});

// تحديث الصفحة عند استخدام زر الرجوع/التقدم
window.addEventListener('popstate', handleRoute);
