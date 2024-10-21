/* changement avatar */ 

const avatar = document.querySelector('#avatar1');


avatar.addEventListener('click', () => {

    avatar.src = "./image/avatar-bis.png";

});

/* changement de prénom */ 


const nom= document.getElementById("firstname")




const username= prompt ("Quel est votre prénom?");
if (username) {
    nom.textContent= username;
    nom.style.color= "white";
}

/*changement de fond */ 

const button = document.querySelector ("changementcouleur");
const partiedescription =document.getElementById(".description")
const couleur= prompt ("Quelle couleur voulez-vous?");

button.addEventListener('click', () => {

    section.style.backgroundColor = '#750ff7';
});