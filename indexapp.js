function bgChange() {
	if(this.scrollY > this.innerHeight / 3 && this.scrollY < 2 * this.innerHeight/3 + 500){
		console.log(this.innerHeight + "1");
		document.body.classList.add("activebg");
		document.body.classList.remove("activebg2");
	}
	else if(this.scrollY > 2 * this.innerHeight/3 + 500){
		console.log(this.innerHeight + "2");
		document.body.classList.add("activebg2");
		document.body.classList.remove("activebg");
	}
	else{
		console.log(this.innerHeight + "3");
		document.body.classList.remove("activebg");
		document.body.classList.remove("activebg2");
	}
}

window.addEventListener("scroll", bgChange);