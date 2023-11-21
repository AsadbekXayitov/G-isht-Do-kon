let burger = document.querySelector(".burger");
let links = document.querySelector(".links");
let linksLi = document.querySelectorAll(".links li");
let container = document.querySelector(".container");
let div = document.querySelectorAll("div");
let btn = document.querySelector(".btn");
let close = document.querySelector(".close");
let new_page = document.querySelector(".new_page");
let loader = document.querySelector(".wrap")

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        loader.style.display= "none";
    }, 1000);
});


burger.addEventListener("click", () =>{
    links.classList.toggle("links-active");

    linksLi.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
            div.forEach(element => {
                element.style.filter = "brightness(100%)";
            });
        } else {
            link.style.animation = `harakat 0.5s ease forwards ${index / 7 + 0.5}s`
            div.forEach(element => {
                element.style.filter = "brightness(50%)";
            });
        }
    });
    burger.classList.toggle("toggle");
});


//bot token 6593852187:AAF12zh_rz8zlOeFjTgq7_ppKxtaEH7mj4o
var telegram_bot_id = "6593852187:AAF12zh_rz8zlOeFjTgq7_ppKxtaEH7mj4o"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
//chat id
var chat_id = 890420801; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
var ism, familiya, tel, rang, son, razmer, message;

var ready = function() {
    ism = document.getElementById("ism").value;
    familiya = document.getElementById("familiya").value;
    tel = document.getElementById("tel").value;
    rang = document.getElementById("rang").value;
    son = document.getElementById("son").value;
    razmer = document.getElementsByClassName("select").value;
    message = "Ismi: " + ism + "\nFamiliyasi: " + familiya + "\nTel: " + tel + "\nRang" + rang + "\nSoni" + son + "\nRazmeri" + razmer;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("ism").value = "";
    document.getElementById("familiya").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("rang").value = "";
    document.getElementById("son").value = "";
    document.getElementsByClassName("select").value = "standart";
    return false;
};


btn.addEventListener("click", () => {
    new_page.classList.add("new_page_toggle")
});

close.addEventListener("click", () => {
    new_page.classList.remove("new_page_toggle")
});
