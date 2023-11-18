let burger = document.querySelector(".burger");
let links = document.querySelector(".links");
let linksLi = document.querySelectorAll(".links li");
let container = document.querySelector(".container");
let body = document.querySelectorAll("div")

burger.addEventListener("click", () =>{
    links.classList.toggle("links-active");

    linksLi.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
            body.forEach(element => {
                element.style.filter = "brightness(100%)";
            });
        } else {
            link.style.animation = `harakat 0.5s ease forwards ${index / 7 + 0.5}s`
            body.forEach(element => {
                element.style.filter = "brightness(50%)";
            });
        }
    });
    burger.classList.toggle("toggle");
});