import View from "./View.js";

export default class extends View {
    constructor() {
        super();
        this.setTitle("Error");
    }

    async getHtml() {
        return `
                <nav class="nav">
                    <div class="logo">
                        <a href="main.html"><h1 data-link>Notua</h1></a>
                    </div>
                    <div class="toggle">
                        <div class="toggle-line" id="line1"></div>
                        <div class="toggle-line" id="line2"></div>
                        <div class="toggle-line" id="line3"></div>
                    </div>
                    <div class="nav-links">
                        <ul>
                            <a href="error.html"><li data-link>Нотатки</li></a>
                            <a href="error.html"><li data-link>Завантажити</li></a>
                            <a href="about.html"><li data-link>Про проєкт</li></a>
                        </ul>
                    </div>
                </nav>

                <main class="main-text">
                    <!-- <h1>Notua</h1> -->
                    <h1>Упс! 
                        <br> Поки що не працює. <br>
                            Зареєструйтеся для раннього доступу</h1>
                    <div class="email-form">
                        <form>
                            <input type="email" id="email" placeholder="Введіть ваш email">
                            <input type="submit" value="Підписатися" id="submit">
                    </form>
                    </div>
                </main>
                <video autoplay muted loop id="waves">
                    <source src="static/media/waves1.mp4" type="video/mp4">
                </video>
        `;
    }
}