"use strict";

const electron = require( "electron" );
const app = electron.app;
const ipc = electron.ipcMain;
const dialog = electron.dialog;
const BrowserWindow = electron.BrowserWindow;
const reload = require( "electron-reload" );
reload( __dirname );

let mainWindow = null;

app.on( "window-all-closed", function() {
	if ( process.platform !== "darwin" ) {
		app.quit();
	}
} );

app.on( "ready", function() {
	mainWindow = new BrowserWindow( { width: 800, height: 600 } );
	mainWindow.loadURL( "file://" + __dirname + "/index.html" );

	mainWindow.webContents.openDevTools( { detach: true } );

	mainWindow.on( "closed", function() {
		mainWindow = null;
	} );
} );

ipc.on( "show-dialog", function( e, arg ) {
	let msgInfo = {
		title: "My App Alert",
		message: arg.message,
		buttons: [ "OK" ]
	};
	dialog.showMessageBox( msgInfo );
} );
