import View from "./View.js";

export default class extends View {
    constructor() {
        super();
        this.setTitle("Notua");
    }

    async getHtml() {
        return `
                <nav class="nav">
                    <div class="logo">
                        <a href="main.html" ><h1 data-link>Notua</h1></a>
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
                            <a href="about.html" data-link><li data-link>Про проєкт</li></a>
                        </ul>
                    </div>
                </nav>
        
                <main class="main-text">
                    <!-- <h1>Notua</h1> -->
                    <h1>Голос-у-текст 
                        <br> нотатки українською</h1>
                        <a href="try.html" data-link>Спробувати</a>
                </main>
                <video autoplay muted loop id="waves">
                    <source src="static/media/waves1.mp4" type="video/mp4">
                </video>
        `;
    }
}