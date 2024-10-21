const image = document.querySelector(".banner-image");
const button = document.querySelector(".js-button");
const listButton = document.querySelector(".list-button");
const formButton = document.querySelector("#form-button");
const name = document.querySelector("#firstname");
const bannerColor = document.querySelectorAll(".pink-bg");
const textColor = document.querySelectorAll(".pink-text");
const links = document.querySelectorAll("a");
const list1 = document.querySelector("#l1");
const list2 = document.querySelector("#l2");
const list3 = document.querySelector("#l3");
const form = document.querySelector("#form-section");
const inputTodo = document.querySelector("#toDoInput");
const devTool = document.querySelector("#frontToDo");


image.addEventListener("click", function() {
    image.src = "image/avatar.svg"
});

button.addEventListener("click", function() {
    const newName = prompt("What's your name ?");
    const newColor = prompt("Choose a color !");
    name.textContent = newName;
    name.style.color = "white";
    button.style.backgroundColor = newColor;
    listButton.style.backgroundColor = newColor;
    formButton.style.backgroundColor = newColor;

    for(let i = 0; i < bannerColor.length; i++) {
        bannerColor[i].style.backgroundColor = newColor;
    }

    for(let i = 0; i < textColor.length; i++) {
        textColor[i].style.color = newColor;
    }

    for(let i = 0; i < links.length; i++) {
        links[i].style.color = newColor;
    }
});

listButton.addEventListener("click", function() {
    list1.textContent = "VSCode";
    list2.textContent = "Github";
    list3.textContent = "Terminal";
    //oui j'ai fait ça comme un gars pas du tout organisé qui répète son code ET ALORS ????????????????????????
});

form.onsubmit = function (event) {
    event.preventDefault();
    const newList = document.createElement("li");
    newList.innerHTML = inputTodo.value;
    devTool.appendChild(newList);
    inputTodo.value = "";
  };

