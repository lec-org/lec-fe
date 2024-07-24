import { useMemo, useState } from 'react'

interface Actions<T> {
	setStart: () => void
	setEnd: () => void
	toggle: () => void
	set: (value: T) => void
}

function useToggle<T = boolean>(): [boolean, Actions<T>]

function useToggle<T>(start: T): [T, Actions<T>]

function useToggle<S, E>(start: S, end: E): [S | E, Actions<S | E>]

function useToggle<S, E>(start: S = false as unknown as S, end?: E) {
	const [value, setValue] = useState<S | E>(start)

	const actions = useMemo(() => {
		const reverse = (end === undefined ? !start : end) as S | E

		const setStart = () => setValue(start)
		const setEnd = () => setValue(reverse)
		const toggle = () => setValue(value === start ? reverse : start)
		const set = (value: S | E) => setValue(value)

		return {
			setStart,
			setEnd,
			toggle,
			set
		}
	}, [])

	return [value, actions]
}

export default useToggle
