const avatar = document.getElementById("avatar")

avatar.addEventListener("click", function () {
    if (avatar.src.includes ("svg")) {
        return avatar.src = "./image/avatar-bis.png"
    } else {        
            return avatar.src= "./image/avatar.svg"
        }
    }
)

const button = document.createElement("button");
const wrapper = document.querySelector(".button")
button.textContent = "Modify name and color"
wrapper.appendChild(button);
button.style.color = "White";
button.style.backgroundColor = "#cd5870";
button.style.borderColor = "white"
button.style.padding = "1rem";


button.addEventListener('click', function () {
    const firstName = prompt("What's your name ?");
    const wrapperName = document.getElementById('firstname');
    const background = document.querySelector('.background');
    const bgColor = prompt("Which background color ?");
    wrapperName.textContent = firstName
    wrapperName.style.color = "white"
    background.style.backgroundColor = bgColor;
});




