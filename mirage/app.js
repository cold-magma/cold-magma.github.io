var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);

document.body.addEventListener("click", popup);

function popup(){
	var dialog = document.getElementById("popupdiv");
	var dialogbg = document.getElementById("popupdivbg");
	dialogbg.classList.toggle("show");
	dialog.classList.toggle("show");
}