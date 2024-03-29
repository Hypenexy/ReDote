const { app, BrowserWindow } = require('electron')
//const EventEmitter = require('events')
const path = require('path')

var win;
// const loadingEvents = new EventEmitter()
function createWindow () {
	win = new BrowserWindow({
		webPreferences: {
			nodeIntegration: true,
			worldSafeExecuteJavaScript: true,
			contextIsolation: true,
			preload: path.join(__dirname, "dote.js")
		},
		titleBarStyle: 'hidden',
		titleBarOverlay: {
		  color: '#111',
		  symbolColor: '#c8c8c8',
		  height: 30
		},
		width: 1146,
		minWidth: 600,
		height: 633,
		backgroundColor: '#000',
		icon: __dirname + '/logoProposition1.png'
	})
	//win.removeMenu()
	  
	win.loadFile('index.html');

	win.once('ready-to-show', () => {
		win.show();
	});

}



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
