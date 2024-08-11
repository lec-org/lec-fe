import useMount from '@lec/hooks/src/useMount'
import { useInsertionEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { useInsertCss } from './hook'
import { router } from './routers/router'
import useConfigStore from './stores/config'
import usePageStore from './stores/pages'

const Root = () => {
	const configStore = useConfigStore()

	useInsertionEffect(() => {
		useInsertCss(configStore.cssConfig)
	})
	const state = usePageStore((state) => state)
	useMount(() => {
		console.log(state)
	})

	return <RouterProvider router={router} />
}

export default Root
