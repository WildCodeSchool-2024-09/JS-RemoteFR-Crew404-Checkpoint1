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

// récuperer
const TOOLS = document.querySelector("#modifyTools");
const FRONT_DEV = document.querySelectorAll("#front-dev-tools li");

// ajout d'un écouteur d'event
TOOLS.addEventListener("click", () => {
	const tools = ["Github", "VSCode", "Terminal"];

	// modifier
	for (let i = 0; i < FRONT_DEV.length; i++) {
		FRONT_DEV[i].textContent = tools[i];
	}
});

// recuperer

const FORM = document.querySelector("form");
const LIST_BACK = document.querySelector("#back-dev-tools");
const INPUT = document.querySelector("#backTool");

FORM.addEventListener("submit", (event) => {
	event.preventDefault();

	const LI = document.createElement("li");
	LI.textContent = INPUT.value;

	LIST_BACK.appendChild(LI);
	INPUT.value = "";
});
