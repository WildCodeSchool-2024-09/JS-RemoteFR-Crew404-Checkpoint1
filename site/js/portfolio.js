/*JS Etape 1 changer d'avatar*/

const avatar = document.querySelector(".avatar > img")

avatar.addEventListener("click", () => {
    avatar.src = "./image/avatar.svg";
})

/* test échec
avatar.addEventListener("click", () => {
    if (avatar.src === "./image/avatar-bis.png") {
    avatar.src = "./image/avatar.svg";
    }
    else {
    avatar.src === "./image/avatar-bis.png";
    }
})
*/


 /*JS Etape 2 changer le nom*/
function firstNamePrompt() {
let firstName = document.getElementById("firstname");
firstName.textContent = prompt("Enter your name");
}

const nameButton = document.querySelector(".firstname")

nameButton.addEventListener("click", firstNamePrompt)