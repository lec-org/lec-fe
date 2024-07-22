import Home from '@renderer/pages/Home'
import Login from '@renderer/pages/Login'
import { createHashRouter } from 'react-router-dom'

export const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'login',
    element: <Login />
  }
])
