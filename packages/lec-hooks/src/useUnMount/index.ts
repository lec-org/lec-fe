import { useEffect } from 'react'

const useUnMount = (callback: () => void) => {
	useEffect(() => {
		return () => {
			callback?.()
		}
	}, [])
}

export default useUnMount
