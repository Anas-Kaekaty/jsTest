export function renderDashboard() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <h1>مرحبًا في لوحة التحكم!</h1>
        <p>هنا ستجد جميع طلباتك.</p>
    `;
}