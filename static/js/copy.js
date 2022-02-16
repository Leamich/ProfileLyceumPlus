function initialCopy() {
	const tableCopyEl = document.querySelectorAll(
		"#questionnaire table td:last-child:not(#github-cell)"
	);

	tableCopyEl.forEach((e) => e.addEventListener("click", (event) => {
		let targ = event.target;

		try {
			navigator.clipboard.writeText(targ.innerHTML)
			.then(() => {
				setStatus(targ, "success");
			})
			.catch((err) => {
				setStatus(targ, "fail");
				console.log(err);
			});
		} catch(err) {
			setStatus(targ, "fail");
			console.log(err);
		}
	}));
}


function setStatus(targ, status) {
	switch(status){
		case "success":
			targ.classList.add("copied-success");
			setTimeout(removeClass, 2000, targ, "copied-success");
			break;
		case "fail":
			targ.classList.add("copied-fail");
			setTimeout(removeClass, 2000, targ, "copied-fail");
			break;
	}
}


function removeClass(obj, cls) {
	obj.classList.remove(cls);
}