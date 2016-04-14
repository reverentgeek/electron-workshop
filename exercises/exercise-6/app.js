"use strict";
const ipc = require( "electron" ).ipcRenderer;

document.addEventListener( "DOMContentLoaded", function() {
	let version = process.version;
	let e = document.getElementById( "info" );
	e.textContent = "I'm running Node.js version: " + version;

	let btn = document.getElementById( "clickme" );
	btn.addEventListener( "click", function() {
		console.log( "I was clicked." );
		ipc.send( "show-dialog", { message: "The button was clicked" } );
	} );
} );
