// * Log 比例尺

import { createLinear } from './linear'
import { log, nice, ticks } from './utils'

export function createLog({
	domain,
	range,
	base = Math.E,
}: {
	domain: [number, number]
	range: [number, number]
	base?: number
}) {
	const transform = (x: number) => Math.log(x)
	let linear = createLinear({
		domain: domain.map(transform) as [number, number],
		range,
	})
	const scale = (x: number) => linear(transform(x))

	;(scale as any).ticks = (count: number = 5) => {
		const [min, max] = domain.map((x) => log(x, base))
		return ticks(min, max, count).map((x) => base ** x)
	}
	;(scale as any).nice = () => {
		domain = nice(domain, {
			floor: (x) => base ** Math.floor(log(x, base)),
			ceil: (x) => base ** Math.ceil(log(x, base)),
		})
		linear = createLinear({
			domain: domain.map(transform) as [number, number],
			range,
		})
	}

	return scale
}
