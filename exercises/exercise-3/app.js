document.addEventListener("DOMContentLoaded", () => {
	const version = process.version;
	const info = document.getElementById("info");
	info.textContent = `I'm running Node.js version: ${version}`;
});
