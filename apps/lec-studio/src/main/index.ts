import { electronApp, optimizer } from '@electron-toolkit/utils'
import { app, BrowserWindow, ipcMain, protocol } from 'electron'
import createLoginWindow from './loginWin'
import { main_openMainWindow } from './mainWin'
import { LifeHookPlugin } from './lifeHook'

class App {
  constructor() {
    // * 注册协议
    protocol.registerSchemesAsPrivileged([
      { scheme: 'app', privileges: { secure: true, standard: true } }
    ])

    // * 处理多应用实例
    const singleLock = app.requestSingleInstanceLock()
    if (!singleLock) {
      app.quit()
    } else {
      // * 注册插件
      ;(this as any).systemPlugins = LifeHookPlugin()
      ;(this as any).beforeReady()
      ;(this as any).onReady()
      ;(this as any).onRunning()
      ;(this as any).beforeQuit()
      ;(this as any).onQuit()
    }
  }

  beforeReady() {
    console.log('onBeforeReady')
  }

  createWindow() {
    console.log('createWindow')
  }

  onReady() {
    const readyCallback = () => {}

    if (!app.isReady()) {
      app.on('ready', readyCallback)
    } else {
      readyCallback()
    }
  }
  onRunning() {
    console.log('onRunning')
  }

  beforeQuit() {
    app.on('will-quit', () => {
      console.log('onBeforeQuit')
    })
  }

  onQuit() {
    app.on('window-all-closed', () => {
      console.log('onQuit')
    })
  }
}

app.whenReady().then(() => {
  // * 为 windows 设置「应用程序用户模型ID」
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // * 注册登录窗口
  createLoginWindow()

  // * 登录事件成功后，注册主窗口
  ipcMain.handle('open-main-window', main_openMainWindow)

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createLoginWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
  createLoginWindow()
})

export default new App()
