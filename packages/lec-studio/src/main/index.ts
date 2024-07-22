import { electronApp, optimizer } from '@electron-toolkit/utils'
import { app, BrowserWindow, ipcMain } from 'electron'
import createLoginWindow from './loginWin'
import { main_openMainWindow } from './mainWin'

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
  // createLoginWindow()
})
