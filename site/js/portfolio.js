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