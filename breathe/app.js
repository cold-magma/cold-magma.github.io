const parallax = document.getElementById("bgdiv");

window.addEventListener("scroll", function() {
	let offset = window.pageYOffeset;
	parallax.style.backgroundPositionY = offset *.75 + "px";
});