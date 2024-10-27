import { atom } from "jotai";

enum Theme {
  Light = 'light',
  Dark = 'dark',
  System ='system',
}

const theme = atom(Theme.Light)

export {
  theme
}