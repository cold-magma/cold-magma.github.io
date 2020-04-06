window.onload = function() {
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
		document.getElementById("d1").classList.add("lax1");
		document.getElementById("d2").classList.add("lax1");
	}else{
		
		document.getElementById("d1").classList.remove("lax1");
		document.getElementById("d2").classList.remove("lax1");
	}
}