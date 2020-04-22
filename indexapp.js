function bgChange() {
	if(this.scrollY > this.innerHeight / 5 && this.scrollY < this.innerHeight/ 5 + 500){
		console.log(this.innerHeight + "1");
		document.body.classList.add("activebg");
		document.body.classList.remove("activebg2");
		document.body.classList.remove("activebg3");
		document.body.classList.remove("activebg4");
	}
	else if(this.scrollY > 2*this.innerHeight/5 + 500 && this.scrollY < 3 * this.innerHeight/ 5 + 1000){
		console.log(this.innerHeight + "2");
		document.body.classList.add("activebg2");
		document.body.classList.remove("activebg");
		document.body.classList.remove("activebg3");
		document.body.classList.remove("activebg3");
	}
	else if(this.scrollY > 3 * this.innerHeight/ 5 + 1000  && this.scrollY < 4 * this.innerHeight/ 5 + 1500) {
		console.log(this.innerHeight + "3");
		document.body.classList.add("activebg3");
		document.body.classList.remove("activebg");
		document.body.classList.remove("activebg2");
		document.body.classList.remove("activebg4");
	}
	else if(this.scrollY > 4 * this.innerHeight/ 4 + 1500){
		console.log(this.innerHeight + "3");
		document.body.classList.add("activebg4");
		document.body.classList.remove("activebg");
		document.body.classList.remove("activebg2");
		document.body.classList.remove("activebg3");
	}
	else{
		document.body.classList.remove("activebg3");
		document.body.classList.remove("activebg");
		document.body.classList.remove("activebg2");
		document.body.classList.remove("activebg4");
	}
}

window.addEventListener("scroll", bgChange);