import Home from '@renderer/pages/Home'
import Login from '@renderer/pages/Login'
import Main from '@renderer/pages/Main'
import { createHashRouter, RouteObject } from 'react-router-dom'
const routes:RouteObject[] =[
  {
    path: '/',
    element: <Main />
  },
  {
    path: 'login',
    element: <Login />
  }
]
export const router: ReturnType<typeof createHashRouter> = createHashRouter(routes)
