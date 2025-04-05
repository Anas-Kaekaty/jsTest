export function renderHome() {
    const app = document.getElementById('app');
    app.innerHTML = `
    <div class="home">
        <h1>مرحبا بك في موقعنا!</h1>
        <p>هذه الصفحة الرئيسية يمكن للجميع مشاهدتها</p>
        <button onclick="navigateTo(event,'/dashboard')">الدخول إلى لوحة التحكم</button>
    </div>
    `;
}