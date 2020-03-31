let menu = document.querySelectorAll(".menu")[0];
let list = document.querySelectorAll(".menu-item");
menu.insertBefore(list[2],list[1]);
let newLi = document.createElement("li");
newLi.classList.add("menu-item");
newLi.textContent = ("Пятый пункт");
menu.insertBefore(newLi,list[4]);
document.body.style.background = "url(../ex6/img/apple_true.jpg) center no-repeat";
document.getElementById('title').textContent = ("Мы продаем только подлинную технику Apple");
let market = document.querySelectorAll('.adv')[0];
market.remove();
let prom = document.getElementById("prompt"),
 quest = prompt("Ваше отношение к товарам от apple");
 prom.textContent = quest;