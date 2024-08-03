import { is } from '@electron-toolkit/utils'
import { BrowserWindow } from 'electron'
import { join } from 'path'

let loginWindow: BrowserWindow | null = null
export default function createWindow(): void {
  loginWindow = new BrowserWindow({
    height: 448,
    width: 320,
    show: false,
    autoHideMenuBar: true,
    resizable: false,
    frame: false,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      contextIsolation: true,
      nodeIntegration: true
    }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    loginWindow.loadURL(`${process.env['ELECTRON_RENDERER_URL']}#/login`)
  } else {
    loginWindow.loadFile(join(__dirname, '../renderer/index.html'), {
      hash: '#/login'
    })
  }

  loginWindow.on('ready-to-show', () => {
    if (loginWindow) {
      loginWindow.show()
    }
  })
}

export function closeLoginWindow(): void {
  if (loginWindow) {
    loginWindow.close()
    loginWindow = null
  }
}
