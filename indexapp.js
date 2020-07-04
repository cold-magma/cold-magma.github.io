var menu = document.getElementById("menu");
var nav = document.getElementById("nav");
var navtext = document.getElementsByClassName("opttxt");
var menutxt = document.getElementById("menutxt");

menu.addEventListener('click',() => {
	nav.classList.toggle('navactive');
});

function bgChange() {
	if(this.scrollY > this.innerHeight / 5 && this.scrollY < 2*this.innerHeight/ 5 + 500){
		console.log(this.innerHeight + "1");
		document.body.classList.add("activebg");
		menu.classList.add("menubg");
		nav.classList.add("navbg");
		menutxt.classList.add("mtxt");

		navtext[0].classList.add("menut");
		navtext[1].classList.add("menut");
		navtext[2].classList.add("menut");
		navtext[3].classList.add("menut");
		navtext[4].classList.add("menut");

		document.body.classList.remove("activebg2");
		document.body.classList.remove("activebg3");
		document.body.classList.remove("activebg4");

		menu.classList.remove("menubg2");
		menu.classList.remove("menubg3");
		menu.classList.remove("menubg4");

		nav.classList.remove("navbg2");
		nav.classList.remove("navbg3");
		nav.classList.remove("navbg4");

		menutxt.classList.remove("mtxt2");
		menutxt.classList.remove("mtxt3");
		menutxt.classList.remove("mtxt4");

		navtext[0].classList.remove("menut2");
		navtext[1].classList.remove("menut2");
		navtext[2].classList.remove("menut2");
		navtext[3].classList.remove("menut2");
		navtext[4].classList.remove("menut2");

		navtext[0].classList.remove("menut3");
		navtext[1].classList.remove("menut3");
		navtext[2].classList.remove("menut3");
		navtext[3].classList.remove("menut3");
		navtext[4].classList.remove("menut3");

		navtext[0].classList.remove("menut4");
		navtext[1].classList.remove("menut4");
		navtext[2].classList.remove("menut4");
		navtext[3].classList.remove("menut4");
		navtext[4].classList.remove("menut4");
	}
	else if(this.scrollY > 2*this.innerHeight/5 + 500 && this.scrollY < 3 * this.innerHeight/ 5 + 1000){
		console.log(this.innerHeight + "2");
		document.body.classList.add("activebg2");
		menu.classList.add("menubg2");
		nav.classList.add("navbg2");
		menutxt.classList.add("mtxt2");
		
		navtext[0].classList.add("menut2");
		navtext[1].classList.add("menut2");
		navtext[2].classList.add("menut2");
		navtext[3].classList.add("menut2");
		navtext[4].classList.add("menut2");


		document.body.classList.remove("activebg");
		document.body.classList.remove("activebg3");
		document.body.classList.remove("activebg3");

		menu.classList.remove("menubg");
		menu.classList.remove("menubg3");
		menu.classList.remove("menubg4");

		nav.classList.remove("navbg");
		nav.classList.remove("navbg3");
		nav.classList.remove("navbg4");

		menutxt.classList.remove("mtxt");
		menutxt.classList.remove("mtxt3");
		menutxt.classList.remove("mtxt4");

		navtext[0].classList.remove("menut");
		navtext[1].classList.remove("menut");
		navtext[2].classList.remove("menut");
		navtext[3].classList.remove("menut");
		navtext[4].classList.remove("menut");

		navtext[0].classList.remove("menut3");
		navtext[1].classList.remove("menut3");
		navtext[2].classList.remove("menut3");
		navtext[3].classList.remove("menut3");
		navtext[4].classList.remove("menut3");

		navtext[0].classList.remove("menut4");
		navtext[1].classList.remove("menut4");
		navtext[2].classList.remove("menut4");
		navtext[3].classList.remove("menut4");
		navtext[4].classList.remove("menut4");
	}
	else if(this.scrollY > 3 * this.innerHeight/ 5 + 1000  && this.scrollY < 4 * this.innerHeight/ 5 + 1500) {
		console.log(this.innerHeight + "3");
		document.body.classList.add("activebg3");
		menu.classList.add("menubg3");
		nav.classList.add("navbg3");
		menutxt.classList.add("mtxt3");
		
		navtext[0].classList.add("menut3");
		navtext[1].classList.add("menut3");
		navtext[2].classList.add("menut3");
		navtext[3].classList.add("menut3");
		navtext[4].classList.add("menut3");

		document.body.classList.remove("activebg");
		document.body.classList.remove("activebg2");
		document.body.classList.remove("activebg4");

		menu.classList.remove("menubg");
		menu.classList.remove("menubg2");
		menu.classList.remove("menubg4");

		nav.classList.remove("navbg");
		nav.classList.remove("navbg2");
		nav.classList.remove("navbg4");

		menutxt.classList.remove("mtxt");
		menutxt.classList.remove("mtxt2");
		menutxt.classList.remove("mtxt4");

		navtext[0].classList.remove("menut");
		navtext[1].classList.remove("menut");
		navtext[2].classList.remove("menut");
		navtext[3].classList.remove("menut");
		navtext[4].classList.remove("menut");

		navtext[0].classList.remove("menut2");
		navtext[1].classList.remove("menut2");
		navtext[2].classList.remove("menut2");
		navtext[3].classList.remove("menut2");
		navtext[4].classList.remove("menut2");

		navtext[0].classList.remove("menut4");
		navtext[1].classList.remove("menut4");
		navtext[2].classList.remove("menut4");
		navtext[3].classList.remove("menut4");
		navtext[4].classList.remove("menut4");
	}
	else if(this.scrollY > 4 * this.innerHeight/ 5 + 1500){
		console.log(this.innerHeight + "3");
		document.body.classList.add("activebg4");
		menu.classList.add("menubg4");
		nav.classList.add("navbg4");
		menutxt.classList.add("mtxt4");
		
		navtext[0].classList.add("menut4");
		navtext[1].classList.add("menut4");
		navtext[2].classList.add("menut4");
		navtext[3].classList.add("menut4");
		navtext[4].classList.add("menut4");

		document.body.classList.remove("activebg");
		document.body.classList.remove("activebg2");
		document.body.classList.remove("activebg3");

		menu.classList.remove("menubg");
		menu.classList.remove("menubg2");
		menu.classList.remove("menubg3");

		nav.classList.remove("navbg");
		nav.classList.remove("navbg2");
		nav.classList.remove("navbg3");

		menutxt.classList.remove("mtxt");
		menutxt.classList.remove("mtxt2");
		menutxt.classList.remove("mtxt3");

		navtext[0].classList.remove("menut");
		navtext[1].classList.remove("menut");
		navtext[2].classList.remove("menut");
		navtext[3].classList.remove("menut");
		navtext[4].classList.remove("menut");

		navtext[0].classList.remove("menut2");
		navtext[1].classList.remove("menut2");
		navtext[2].classList.remove("menut2");
		navtext[3].classList.remove("menut2");
		navtext[4].classList.remove("menut2");

		navtext[0].classList.remove("menut3");
		navtext[1].classList.remove("menut3");
		navtext[2].classList.remove("menut3");
		navtext[3].classList.remove("menut3");
		navtext[4].classList.remove("menut3");
	}
	else{
		document.body.classList.remove("activebg3");
		document.body.classList.remove("activebg");
		document.body.classList.remove("activebg2");
		document.body.classList.remove("activebg4");

		menu.classList.remove("menubg");
		menu.classList.remove("menubg2");
		menu.classList.remove("menubg3");
		menu.classList.remove("menubg4");

		nav.classList.remove("navbg");
		nav.classList.remove("navbg2");
		nav.classList.remove("navbg3");
		nav.classList.remove("navbg4");

		menutxt.classList.remove("mtxt");
		menutxt.classList.remove("mtxt2");
		menutxt.classList.remove("mtxt3");
		menutxt.classList.remove("mtxt4");

		navtext[0].classList.remove("menut");
		navtext[1].classList.remove("menut");
		navtext[2].classList.remove("menut");
		navtext[3].classList.remove("menut");
		navtext[4].classList.remove("menut");

		navtext[0].classList.remove("menut2");
		navtext[1].classList.remove("menut2");
		navtext[2].classList.remove("menut2");
		navtext[3].classList.remove("menut2");
		navtext[4].classList.remove("menut2");

		navtext[0].classList.remove("menut3");
		navtext[1].classList.remove("menut3");
		navtext[2].classList.remove("menut3");
		navtext[3].classList.remove("menut3");
		navtext[4].classList.remove("menut3");

		navtext[0].classList.remove("menut4");
		navtext[1].classList.remove("menut4");
		navtext[2].classList.remove("menut4");
		navtext[3].classList.remove("menut4");
		navtext[4].classList.remove("menut4");
	}
}
window.addEventListener("scroll", bgChange);