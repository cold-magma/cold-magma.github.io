var popper = document.getElementById("popup");
var store = document.getElementById("store");
var inv = document.getElementById("comingsoon");
store.addEventListener("click", clicker);
inv.addEventListener("click", clicker);
function clicker(){
	popper.classList.toggle("popactive");
}
