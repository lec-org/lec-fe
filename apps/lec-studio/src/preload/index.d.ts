import { ElectronAPI } from '@electron-toolkit/preload'
import { IApi } from './api'
declare global {
  interface Window {
    electron: ElectronAPI
    api: IApi
  }
}
