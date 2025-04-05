export function renderProducts() {
    const app = document.getElementById('app');
    app.innerHTML = `
    <div class="products">
        <h1>إدارة المنتجات</h1>
        <ul>
        <li>منتج 1 - سعر 10$</li>
        <li>منتج 2 - سعر 15$</li>
        <button onclick="navigateTo('/dashboard')">العودة إلى اللوحة</button>
        </ul>
    </div>
    `;
}