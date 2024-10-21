// Récupérer mon image
const IMG = document.querySelector(".title > img");

// Ajout d'un écouteur d'event
IMG.addEventListener("click", () => {
	// Modification du dom
	IMG.src = "./image/avatar.svg";
});

const BUTTON_NAME = document.querySelector("#modifyName");
const FIRSTNAME = document.querySelector("#firstname");
const PINK_BGS = document.querySelectorAll(".pink-bg");
const PINK_TXT = document.querySelectorAll(".pink-text");
const ALL_LINKS = document.querySelectorAll("a");

// #750ff7
BUTTON_NAME.addEventListener("click", () => {
	const COLOR = prompt("New color (hex only)", "#750ff7");
	const NAME = prompt("New name 💃");

	FIRSTNAME.style.color = "white";
	FIRSTNAME.textContent = NAME;

	PINK_BGS.forEach((element) => {
		element.style.backgroundColor = COLOR;
	});

	for (const TEXT of PINK_TXT) {
		TEXT.style.color = COLOR;
	}

	ALL_LINKS.forEach((link) => {
		link.style.color = COLOR;
	});

	/** Une autre version d'une boucle */
	// for (const BG of PINK_BGS) {
	// 	BG.style.backgroundColor = COLOR;
	// }
});
