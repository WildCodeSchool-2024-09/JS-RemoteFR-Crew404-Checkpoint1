// Récupérer mon image
const IMG = document.querySelector(".title > img");

// Ajout d'un écouteur d'event
IMG.addEventListener("click", () => {
	// Modification du dom
	IMG.src = "./image/avatar.svg";
});

const BUTTON_NAME = document.querySelector("#modifyName");
const FIRSTNAME = document.querySelector("#firstname");

BUTTON_NAME.addEventListener("click", () => {
	const NAME = prompt("New name 💃");
	FIRSTNAME.style.color = "white";
	FIRSTNAME.textContent = NAME;
});
