import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import { NextUIProvider } from "@nextui-org/react"

function App(): JSX.Element {

  return (
    <NextUIProvider>
      <RouterProvider router={router}/>
    </NextUIProvider>
  )
}

export default App
