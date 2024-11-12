import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'
import 'jotai-devtools/styles.css'

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
