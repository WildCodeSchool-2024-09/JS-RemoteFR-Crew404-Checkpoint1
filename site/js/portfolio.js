const image = document.querySelector(".banner-image");
const button = document.querySelector(".js-button");
const name = document.querySelector("#firstname");
const bannerColor = document.querySelectorAll(".pink-bg");
const textColor = document.querySelectorAll(".pink-text");


image.addEventListener("click", function() {
    image.src = "image/avatar.svg"
});

button.addEventListener("click", function() {
    const newName = prompt("What's your name ?");
    const newColor = prompt("Choose a color !");
    name.textContent = newName;
    name.style.color = "white";

    for(let i = 0; i < bannerColor.length; i++) {
        bannerColor[i].style.backgroundColor = newColor;
    }

    for(let i = 0; i < textColor.length; i++) {
        textColor[i].style.color = newColor;
    }
});