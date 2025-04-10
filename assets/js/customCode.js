let site = document.querySelector("#site");
let fullStack = document.querySelector("#full-stack");

let siteButton = document.querySelector("#showSite");
let fullStackButton = document.querySelector("#showFullStack");

siteButton.addEventListener("click", (e) => {
	e.preventDefault();
	site.classList.remove("hide");
	fullStack.classList.add("hide");
	siteButton.classList.add("primary");
	fullStackButton.classList.remove("primary");
});

fullStackButton.addEventListener("click", (e) => {
	e.preventDefault();
	fullStack.classList.remove("hide");
	site.classList.add("hide");
	siteButton.classList.remove("primary");
	fullStackButton.classList.add("primary");
});

//scroll feature
function scrollToWorkSection() {
	// e.preventDefault();
	const anchor = document.querySelector("#my-work-section");
	anchor.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling effect
}
