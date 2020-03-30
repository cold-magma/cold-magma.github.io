function bgChange() {
	if(this.scrollY > 1 * this.innerHeight / 3 && this.scrollY < 2 * this.innerHeight / 3){
		console.log('success');
		document.body.classList.add("activebg");
		document.body.classList.remove("activebg2");
	}
	else if(this.scrollY > 2 * this.innerHeight / 3){
		console.log('no');
		document.body.classList.add("activebg2");
		document.body.classList.remove("activebg");
	}
	else{
		document.body.classList.remove("activebg");
		document.body.classList.remove("activebg2");
	}
}

window.addEventListener("scroll", bgChange);