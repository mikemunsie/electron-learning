const { app, BrowserWindow } = require('electron')

function createWindow () {
  win = new BrowserWindow({ 
      width: 800, 
      height: 600,
      transparent: true,
      fullscreen: true,
    frame: false
})
  win.loadFile('index.html')
}

app.on('ready', createWindow)
