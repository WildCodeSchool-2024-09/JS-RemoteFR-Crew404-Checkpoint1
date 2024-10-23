const avatar = document.getElementById("avatar")
//Changement de l'avatar au click
avatar.addEventListener("click", function () {
    if (avatar.src.includes ("svg")) {
        return avatar.src = "./image/avatar-bis.png"
    } else {        
            return avatar.src= "./image/avatar.svg"
        }
    }
)

//creation bouton "modifier nom et couleur"
const button = document.createElement("button");
const wrapper = document.querySelector(".button")
button.textContent = "Modify name and color"
wrapper.appendChild(button);
button.style.color = "White";
button.style.backgroundColor = "#cd5870";
button.style.borderColor = "white"
button.style.padding = "1rem";

//récupération des conteneurs
const wrapperName = document.getElementById('firstname');
const backgrounds = document.querySelectorAll('.pink-bg');
const texts = document.querySelectorAll('.pink-text')
const liens = document.querySelectorAll('a');
//Evenements au clic
button.addEventListener('click', function () {
    const firstName = prompt("What's your name ?"); //Prénom en blanc
    wrapperName.textContent = firstName;
    wrapperName.style.color = "white";

    const bgColor = prompt("Which background color ?"); // Couleur de fond
    for (const bg of backgrounds) {
        bg.style.background = bgColor;
    }

    button.style.background = bgColor;

    for (const txt of texts) {
        txt.style.color = bgColor;
        
    }

    for (const lien of liens) {
        lien.style.color = bgColor;
    }
    
});

//#750ff7 


