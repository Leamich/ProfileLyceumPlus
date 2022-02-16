window.addEventListener('load', (event) => {
	console.log('page is fully loaded');

	/* Dark theme */

	const darkThemeSwitch = document.getElementById("darkThemeSwitch");
	const svgSun = document.getElementById("sun-button");
	const svgMoon = document.getElementById("moon-button");

	darkThemeSwitch.addEventListener('change', (event) => {
		let darkTheme = darkThemeSwitch.checked;

		if (darkTheme) {
			document.body.classList.add("dark-body");
			
			svgMoon.classList.add("show-btn-theme");
			svgSun.classList.remove("show-btn-theme");

			svgMoon.classList.remove("hide-btn-theme");
			svgSun.classList.add("hide-btn-theme");
		} else {
			document.body.classList.remove("dark-body");
			
			svgMoon.classList.remove("show-btn-theme");
			svgSun.classList.add("show-btn-theme");

			svgMoon.classList.add("hide-btn-theme");
			svgSun.classList.remove("hide-btn-theme");
		}
	});

	/* Popup */

	const closePopup = document.querySelectorAll(".popup-window > div > button");
	closePopup.forEach((e) => e.addEventListener("click", (event) => {
		window.location.hash = "";
		document.body.classList.remove("scroll-disable");
	}));

	window.addEventListener("hashchange", () => {
		let el = document.getElementById(window.location.hash.slice(1));

		if (el != null && el.classList.contains("popup-window")) {
			document.body.classList.add("scroll-disable");
		}
	});

	/* Copy */

	const tableCopyEl = document.querySelectorAll("#questionnaire table td:last-child:not(#github-cell)");
	tableCopyEl.forEach((e) => e.addEventListener("click", (event) => {
		let targ = event.target;

		try {
			navigator.clipboard.writeText(targ.innerHTML)
			.then(() => {
				targ.classList.add("copied-success");
				setTimeout(removeClass, 2000, targ, "copied-success");
			})
			.catch((err) => {
				targ.classList.add("copied-fail");
				console.log(err);
				setTimeout(removeClass, 2000, targ, "copied-fail");
			});
		} catch(err) {
			targ.classList.add("copied-fail");
			console.log(err);
			setTimeout(removeClass, 2000, targ, "copied-fail");
		}
	}));

	const showMenuButton = document.getElementById("menu-switch");
	const containerShowMenuButton = document.querySelector("#menu > div");
	const menuButtons = document.querySelectorAll("#menu > ul > li");

	let showMenu = false;
	showMenuButton.addEventListener("change", (event) => {
		showMenu = showMenuButton.checked;

		if (showMenu) {
			containerShowMenuButton.classList.add("show-menu");
		} else {
			containerShowMenuButton.classList.remove("show-menu");
		}
	});

	menuButtons.forEach((e) => e.addEventListener("click", (event) => {
		if (showMenu) {
			containerShowMenuButton.classList.remove("show-menu");
		}
	}));
});


function removeClass(obj, cls) {
	obj.classList.remove(cls);
}
