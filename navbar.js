export function renderNavbar(userRole) {
    const navbar = document.getElementById('navbar');
    let links = '';

    if (userRole === 'customer') {
        links = `
            <a onclick="navigateTo('/')">الرئيسية</a>
            <a  onclick="navigateTo('/dashboard')">لوحة التحكم</a>
        `;
    } else if (userRole === 'seller') {
        links = `
            <a href="/" onclick="navigateTo('/')">الرئيسية</a>
            <a  onclick="navigateTo('/products')">المنتجات</a>
        `;
    }

    navbar.innerHTML = links;
}