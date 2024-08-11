import type { MutableRefObject } from 'react'
import { useMount, useUnMount } from '../effect'
import { isBrowser, isFunction } from '../utils/index'

type TargetValue<T> = T | undefined | null

type TargetType = HTMLElement | Element | Window | Document

export type BasicTarget<T extends TargetType = Element> =
	| (() => TargetValue<T>)
	| TargetValue<T>
	| MutableRefObject<TargetValue<T>>

export function getTargetElement<T extends TargetType>(
	target: BasicTarget<T>,
	defaultElement?: T,
) {
	if (!isBrowser) {
		return undefined
	}

	if (!target) {
		return defaultElement
	}

	let targetElement: TargetValue<T>

	if (isFunction(target)) {
		targetElement = target()
	} else if ('current' in target) {
		targetElement = target.current
	} else {
		targetElement = target
	}

	return targetElement
}

const useListener = (
	type: string,
	target: React.RefObject<any> | HTMLElement | Window | Document,
	handler: (event: Event) => void,
	options?,
) => {
	// * 判断是 ref or Dom, 默认是 window
	const targetElement = getTargetElement(target.current, window)

	useMount(() => {
		targetElement.addEventListener(type, handler, options)
	})

	useUnMount(() => {
		targetElement.removeEventListener(type, handler, options)
	})
}

export default useListener
