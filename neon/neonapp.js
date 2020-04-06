const elem = document.getElementById("navbar");
const elem1 = document.getElementById("navheader");

function updatescreen(){
	if (window.innerWidth < 500) {
		elem.classList.add("activenav");
		elem1.classList.add("actnav");
	}
	else{
		elem.classList.remove("activenav");
		elem1.classList.remove("actnav");
	}
}

window.addEventListener("resize", updatescreen);
window.addEventListener("load", updatescreen);