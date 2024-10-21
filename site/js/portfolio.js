// Récupérer mon image
const IMG = document.querySelector(".title > img");

// Ajout d'un écouteur d'event
IMG.addEventListener("click", () => {
	// Modification du dom
	IMG.src = "./image/avatar.svg";
});
