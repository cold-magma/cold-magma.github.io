window.onload = function() {
	$(".loader-wrapper").fadeOut("slow");
	document.body.classList.remove("scroll");
	lax.setup() // init
	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}
	window.requestAnimationFrame(updateLax)
}