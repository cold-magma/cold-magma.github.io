function bgChange() {
	if(this.scrollY > this.innerHeight / 2){
		console.log('success');
		document.body.classList.add("activebg");
	}
	else{
		console.log('no');
		document.body.classList.remove("activebg");
	}
}

window.addEventListener("scroll", bgChange);