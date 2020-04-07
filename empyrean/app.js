window.onload = function() {
	$(".loader-wrapper").fadeOut("slow");

	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
	updatescreen()
}

updatescreen();

function updatescreen() {
	if(window.innerWidth < 600){
		document.getElementById("d1").classList.add("small");
		document.getElementById("d2").classList.add("small");
	}else{
		
		document.getElementById("d1").classList.remove("small");
		document.getElementById("d2").classList.remove("small");
	}
}