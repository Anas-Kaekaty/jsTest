import { renderHome } from './components/home.js';
import { renderDashboard } from './components/dashboard.js';
import { renderProducts } from './components/Products.js';

export function handleRoute() {
    const path = window.location.pathname;
    const app = document.getElementById('app');

    switch (path) {
        case '/':
            renderHome();
            break;
        case '/dashboard':
            renderDashboard();
            break;
        case '/products':
            renderProducts();
            break;
        default:
            app.innerHTML = '<h1>الصفحة غير موجودة</h1>';
    }
}

// دالة تغيير المسار دون إعادة تحميل الصفحة
export function navigateTo(event,path) {
    event.preventDefault();
    window.history.pushState({}, '', path);
    handleRoute();
}