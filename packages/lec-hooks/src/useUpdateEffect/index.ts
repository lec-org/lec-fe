import { useEffect, useRef } from 'react'

const useUpdateEffect: typeof useEffect = (effect, deps) => {
	const isMounted = useRef(false)

	useEffect(() => {
		return () => {
			isMounted.current = false
		}
	}, [])

	useEffect(() => {
		if (!isMounted.current) {
			isMounted.current = true
		}
		return effect()
	}, deps)
}

export default useUpdateEffect
