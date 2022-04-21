let darkThemeSwitch, svgSun, svgMoon;


function initialDarkTheme() {
	darkThemeSwitch = document.getElementById("darkThemeSwitch");
	svgSun = document.getElementById("sun-button");
	svgMoon = document.getElementById("moon-button");

	darkThemeSwitch.addEventListener('change', (event) => {
		let darkTheme = darkThemeSwitch.checked;

		if (darkTheme) {
			turnOnDarkTheme();
		} else {
			turnOffDarkTheme();
		}
	});
}


function turnOnDarkTheme() {
	document.body.classList.add("dark-body");
			
	svgMoon.classList.add("show-btn-theme");
	svgSun.classList.remove("show-btn-theme");

	svgMoon.classList.remove("hide-btn-theme");
	svgSun.classList.add("hide-btn-theme");
}


function turnOffDarkTheme() {
	document.body.classList.remove("dark-body");
			
	svgMoon.classList.remove("show-btn-theme");
	svgSun.classList.add("show-btn-theme");

	svgMoon.classList.add("hide-btn-theme");
	svgSun.classList.remove("hide-btn-theme");	
}