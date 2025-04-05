import { handleRoute, navigateTo } from './router.js';
import { renderNavbar } from './navbar.js';

// اجعل الدوال متاحة بشكل عام (لتعمل في الـ onclick)
window.navigateTo = navigateTo;

// تهيئة التطبيق عند التحميل
window.addEventListener('DOMContentLoaded', () => {
    const userRole = 'customer'; // افتراضيًا (يمكن جلبها من localStorage)
    renderNavbar(userRole);
    handleRoute();
    
});

// تحديث الصفحة عند استخدام زر الرجوع/التقدم
window.addEventListener('popstate', handleRoute);
