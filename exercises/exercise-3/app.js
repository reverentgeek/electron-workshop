"use strict";

document.addEventListener( "DOMContentLoaded", function() {
	let version = process.version;
	let e = document.getElementById( "info" );
	e.textContent = "I'm running Node.js version: " + version;
} );