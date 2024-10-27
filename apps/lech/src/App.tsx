import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import { DevTools } from 'jotai-devtools'
import 'jotai-devtools/styles.css'

function App() {
  return (
    <>
      <DevTools />
      <RouterProvider router={router} />
    </>
  )
}

export default App
