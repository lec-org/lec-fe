import { useEffect, useInsertionEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { useInsertCss } from './hook'
import { router } from './routers/router'
import useConfigStore from './stores/config'
const Root = () => {
  const configStore = useConfigStore()

  useInsertionEffect(() => {
    useInsertCss(configStore.cssConfig)
  })
  useEffect(() => {})
  return <RouterProvider router={router} />
}

export default Root
