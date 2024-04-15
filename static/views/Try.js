import View from "./View.js";

export default class extends View {
    constructor() {
        super();
        this.setTitle("Try");
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
        
                <main class="micro">
                    <img src="static/media/micro.svg" style="color: aliceblue;" alt=""></img>
                    <h1>Вмикай!</h1>
                    <div class="model-output"></div>
                </main>
        `;
    }
}