const modeBtn = document.querySelector("input");
const bd = document.body;
const all = document.querySelectorAll("*");
const githubIcon = document.querySelector(".github-icon");
const codepenIcon = document.querySelector(".codepen-icon");
const shadowAll = document.querySelectorAll(".shadow-onoff");

modeBtn.addEventListener("click", () => {
    bd.classList.toggle("bg-color");

    all.forEach(item => {
        item.classList.toggle("text-color");
    })

    githubIcon.classList.toggle("github-color");
    codepenIcon.classList.toggle("codepen-color");

    shadowAll.forEach(item => {
        item.classList.toggle("shadow-mode");
    })
})