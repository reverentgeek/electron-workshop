"use strict";

const electron = require("electron");
const path = require("path");
const reload = require("electron-reload");
const isDev = require("electron-is-dev");
const { app, BrowserWindow, ipcMain, dialog } = electron;
let mainWindow = null;

if (isDev) {
	const electronPath = path.join(__dirname, "node_modules", ".bin", "electron");
	reload(__dirname, { electron: electronPath });
}

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("ready", () => {
	mainWindow = new BrowserWindow({ width: 800, height: 600 });
	mainWindow.loadURL(`file://${__dirname}/index.html`);
	if (isDev) {
		mainWindow.webContents.openDevTools({ mode: "detach" });
	}

	mainWindow.on("close", () => {
		mainWindow = null;
	});
});

ipcMain.on("show-dialog", (e, arg) => {
	const msgInfo = {
		title: "My App Alert",
		message: arg.message,
		buttons: ["OK"]
	};
	dialog.showMessageBox(msgInfo);
});
