import { ipcRenderer } from 'electron'
export function renderer_openMainWindow() {
  ipcRenderer.invoke('open-main-window')
}
