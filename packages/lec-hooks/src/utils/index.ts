export const isFunction = (value: unknown): value is (...args: any) => any =>
	typeof value === 'function'

export const isBrowser = !!(
	typeof window !== 'undefined' &&
	window.document &&
	window.document.createElement
)
