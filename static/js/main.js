import Index from "../views/Index.js"
import About from "../views/About.js";
import Try from "../views/Try.js";

const navigateTo = url =>  {
    history.pushState(null, null, url);
    router();
};


const router = async() => {

    const routes = [
        {path: "/", view : Index }, 
        {path: "/try.html", view : Try },
        {path: "/about.html", view : About },
        {path: "/error.html", view : Error }
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();
    document.querySelector(".main").innerHTML = await view.getHtml();

    console.log("Script.js is here!");
    const toggle = document.querySelector('.toggle');
    const nav = document.querySelector('.nav');
    const links = document.querySelector('.nav-links')
    toggle.addEventListener('click', ()=>{
        nav.classList.toggle('show')
        links.classList.toggle('show')
    })

    if (match.route.path === "/try.html") {
        const micro = document.querySelector('.micro img');
        micro.addEventListener('click', ()=>{
            console.log("Click")
            async function query(filename) {
            const data = "123";
            const response = await fetch(
                "https://api-inference.huggingface.co/models/Yehor/w2v-bert-2.0-uk",
                {
                    headers: { Authorization: "Bearer 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"},
                    options: { wait_for_model: true},
                    method: "POST",
                    body: data,
                }
            );

            const result = await response.json();
            return result;
        }
        
        query("../media/sample.wav").then((response) => {
                console.log(response);
                const model_output = document.querySelector('.model-output');
                console.log(model_output);
                model_output.innerHTML = `<h3>${response['error']}</h3>`
            });
        });
    }
};

window.addEventListener("popstate", router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href || e.target.parentElement.href);
        }
    });

    router();
});