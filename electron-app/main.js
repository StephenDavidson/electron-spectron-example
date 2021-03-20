const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
    title: 'My Awesome App',
  });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
});
