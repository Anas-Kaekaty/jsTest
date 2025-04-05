export function renderNavbar(userRole) {
    const navbar = document.getElementById('navbar');
    let links = '';

    if (userRole === 'customer') {
        links = `
            <a onclick="navigateTo(event,'/')">الرئيسية</a>
            <a  onclick="navigateTo(event,'/dashboard')">لوحة التحكم</a>
        `;
    } else if (userRole === 'seller') {
        links = `
            <a  onclick="navigateTo(event,'/')">الرئيسية</a>
            <a  onclick="navigateTo(event,'/products')">المنتجات</a>
        `;
    }

    navbar.innerHTML = links;
}