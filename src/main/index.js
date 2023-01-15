const electron = require('electron')
const path = require('path')
const url = require('url')
const presence = require('../Presence/presence')
const { app, BrowserWindow, globalShortcut } = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
      width: 2000,
      height: 1000,
      icon: 'logo.png',
    webPreferences: {
      plugins: true,
      nodeIntegration: true
    },
    });

    mainWindow.setTitle('Zeus Gang');
    mainWindow.loadURL('https://zeusgang.1bt.uk/');
    mainWindow.setMenuBarVisibility(false);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})