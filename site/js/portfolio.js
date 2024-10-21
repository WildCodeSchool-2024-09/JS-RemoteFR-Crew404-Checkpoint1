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
const wraper = document.querySelector(".button")
button.textContent = "Modify name and color"
wraper.appendChild(button);
button.style.color = "White";
button.style.backgroundColor = "#cd5870";
button.style.borderColor = "white"
button.style.padding = "1rem";


button.addEventListener('click', function () {
    const firstName = prompt("Whats' your name ?");
    const wraperName = document.getElementById('firstname');
    return ((wraperName.textContent = firstName) && (wraperName.style.color = "White")) ;
});




