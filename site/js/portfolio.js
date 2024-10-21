const avatar = document.getElementById("avatar")

avatar.addEventListener("click", function () {
    if (avatar.src.includes ("svg")) {
        return avatar.src = "./image/avatar-bis.png"
    } else {        
            return avatar.src= "./image/avatar.svg"
        }
    }
)