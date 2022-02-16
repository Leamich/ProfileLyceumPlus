let showMenu = false;


function initialMenu() {
	const showMenuButton = document.getElementById("menu-switch");
	const containerShowMenuButton = document.querySelector("#menu > div");
	const menuButtons = document.querySelectorAll("#menu > ul > li");

	showMenuButton.addEventListener("change", (event) => {
		showMenu = showMenuButton.checked;

		if (showMenu) {
			openMenu(containerShowMenuButton);
		} else {
			closeMenu(containerShowMenuButton);
		}
	});

	menuButtons.forEach((e) => e.addEventListener("click", (event) => {
		if (showMenu) {
			closeMenu(containerShowMenuButton);
		}
	}));

	window.addEventListener("scroll", () => {
		if (showMenu) {
			closeMenu(containerShowMenuButton);
		}
	});
}


function closeMenu(containerShowMenuButton) {
	showMenu = false;
	containerShowMenuButton.classList.remove("show-menu");
}


function openMenu(containerShowMenuButton) {
	showMenu = true;
	containerShowMenuButton.classList.add("show-menu");
}