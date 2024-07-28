export function curry(fn) {
	const arity = fn.length

	return function curried(...args) {
		// * 无参 则是 [undefined]
		const newArgs = args.length === 0 ? [undefined] : args
		if (newArgs.length >= arity) return fn(...newArgs)
		return curried.bind(null, ...newArgs)
	}
}

export const identity = (x) => x

export function compose(...fns) {
	return fns.reduce((total, cur) => (x) => cur(total(x)), identity)
}
