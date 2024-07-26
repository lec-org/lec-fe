export function curry(fn) {
	const arity = fn.length

	return function curried(...args) {
		// * 无参 则是 [undefined]
		const newArgs = args.length === 0 ? [undefined] : args
		if (newArgs.length >= arity) return fn(...newArgs)
		return curried.bind(null, ...newArgs)
	}
}
