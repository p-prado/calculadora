const {app, BrowserWindow} = require("electron");


function createWindow() {
    const window = new BrowserWindow({
        width: 420,
        height: 290,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    window.loadFile("index.html");
}

app.whenReady().then(createWindow);