const { app, Menu } = require("electron");
const isDev = require("electron-is-dev");

const buildMenu = () => {
	const template = [];

	// If running on macOS, create a standard App menu
	if (process.platform === "darwin") {
		template.push({
			label: app.getName(),
			submenu: [
				{ role: "about" },
				{ type: "separator" },
				{ role: "services", submenu: [] },
				{ type: "separator" },
				{ role: "hide" },
				{ role: "hideothers" },
				{ role: "unhide" },
				{ type: "separator" },
				{ role: "quit" }
			]
		});
	}
	// Create an Edit menu
	template.push({
		label: "Edit",
		submenu: [
			{ role: "undo" },
			{ role: "redo" },
			{ type: "separator" },
			{ role: "cut" },
			{ role: "copy" },
			{ role: "paste" },
			{ role: "pasteandmatchstyle" },
			{ role: "delete" },
			{ role: "selectall" }
		]
	});

	// If running in Dev mode, enable Reload, DevTools, etc.
	if (isDev) {
		template.push({
			label: "View",
			submenu: [
				{ role: "reload" },
				{ role: "forcereload" },
				{ role: "toggledevtools" },
				{ type: "separator" },
				{ role: "resetzoom" },
				{ role: "zoomin" },
				{ role: "zoomout" },
				{ type: "separator" },
				{ role: "togglefullscreen" }
			]
		});
	}
	// Build a menu from the array of menu items
	const menu = Menu.buildFromTemplate(template);

	// Set the
	Menu.setApplicationMenu(menu);
};

// Export the function so it's available to the rest of the app using require( "./menus" )
module.exports = {
	buildMenu
};