document.addEventListener("DOMContentLoaded", () => {
	const version = process.version;
	const info = document.getElementById("info");
	info.textContent = `I'm running Node.js version: ${version}`;

	const btn = document.getElementById("clickme");
	btn.addEventListener("click", e => {
		console.log("I was clicked.");
		console.log(e);
	});
});
