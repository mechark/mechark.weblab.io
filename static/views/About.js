import View from "./View.js";

export default class extends View {
    constructor() {
        super();
        this.setTitle("About");
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
                <main class="about-text">
                    <h3>Notua - це український проєкт, який революціонізує ведення нотаток. <br>
                        Завдяки технології розпізнавання мови, Notua автоматично перетворює ваш голос у текст, <br> 
                        роблячи процес створення нотаток швидким, зручним та безпроблемним</h3>
                    <img src="static/media/people.png" id="people-img"></img>
                </main>
        `;
    }
}