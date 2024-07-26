export function normalize(value: number, start: number, end: number): number {
	return (value - start) / (end - start)
}

export function tickStep(min: number, max: number, count: number) {
	/**
	 * Liner 比例尺 常用间隔t算法
	 * 1 2 5 * 10^n => step = 10 ^ n * (1 | 2 | 5)
	 */
	const e10 = Math.sqrt(50)
	const e5 = Math.sqrt(10)
	const e2 = Math.sqrt(2)

	const step0 = Math.abs(max - min) / Math.max(0, count)
	// * 初始化 step1 为 10 ^ n < step0 ， n 为满足条件最大整数
	let step1 = 10 ** Math.floor(Math.log(step0) / Math.LN10)

	const error = step0 / step1 // 误差

	if (error >= e10) step1 *= 10
	else if (error >= e5) step1 *= 5
	else if (error >= e2) step1 *= 2

	return step1
}

export function ticks(min: number, max: number, count: number) {
	const step = tickStep(min, max, count)

	const start = Math.ceil(min / step)
	const end = Math.floor(max / step)
	const len = Math.ceil(end - start + 1)

	const ticks = new Array(len)
	ticks.forEach((v, i) => {
		ticks[i] = round((start + i) * step)
	})

	return ticks
}
export function round(n: number): number {
	return Math.round(n * 1e12) / 1e12
}

export function nice(
	domain: [number, number],
	interval: {
		floor: (value: number) => number
		ceil: (value: number) => number
	},
): [number, number] {
	const [min, max] = domain
	return [interval.floor(min), interval.ceil(max)]
}

export function ceil(value: number, base: number) {
	return base * Math.ceil(value / base)
}

export function floor(value: number, base: number) {
	return base * Math.floor(value / base)
}
