import { useMemo } from 'react'
import useToggle from '../useToggle'

interface Actions {
	setTrue: () => void
	setFalse: () => void
	toggle: () => void
	set: (value: boolean) => void
}
function useBoolean(start: boolean = false): [boolean, Actions] {
	const [state, { toggle, set }] = useToggle(start)

	const actions = useMemo(() => {
		const setTrue = () => set(true)
		const setFalse = () => set(false)
		return {
			setTrue,
			setFalse,
			toggle,
			set
		}
	}, [])

	return [state, actions]
}

export default useBoolean
