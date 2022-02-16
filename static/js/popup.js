function initialPopup() {
	const closePopup = document.querySelectorAll(".popup-window > div > button");
	closePopup.forEach((e) => 
		e.addEventListener("click", (event) => resetHash()));

	window.addEventListener("scroll", () => {
		let el = document.getElementById(window.location.hash.slice(1));		
		
		if (el != null && el.classList.contains("popup-window")) {
			resetHash();
		}
	});
}

function resetHash() {
	let x = window.scrollX, y = window.scrollY;
	window.location.hash = "";
	window.scrollTo(x, y);	
}
