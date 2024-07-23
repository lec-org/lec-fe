import Home from '@renderer/pages/Home'
import Login from '@renderer/pages/Login'
import { createHashRouter, RouteObject } from 'react-router-dom'
const routes:RouteObject[] =[
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'login',
    element: <Login />
  }
]
export const router: ReturnType<typeof createHashRouter> = createHashRouter(routes)
