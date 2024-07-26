import { ceil, floor, nice, normalize, round, ticks, tickStep } from './utils'

interface LinearProps {
	domain: [number, number]
	range: [number, number]
	interpolate?: (t: number, start: number, end: number) => number
}
export function createLinear(props: LinearProps) {
	const { domain, range, interpolate = interpolateNumber } = props

	const [d0, d1] = domain
	const [r0, r1] = range

	const scale = (x: number) => {
		const t = normalize(x, d0, d1)

		return interpolate(t, r0, r1)
	}

	scale.ticks = (count: number) => ticks(d0, d1, count)
	scale.nice = (ticksCount: number) => {
		const step = tickStep(d0, d1, ticksCount)
		;[d0, d1] = nice([d0, d1], {
			floor: (x: number) => floor(x, step),
			ceil: (x: number) => ceil(x, step),
		})
	}
	return (x: number) => {
		const t = normalize(x, d0, d1)

		return interpolate(t, r0, r1)
	}
}

export function interpolateNumber(
	t: number,
	start: number,
	end: number,
): number {
	return start * (1 - t) + end * t
}

export function interpolateColor(
	t: number,
	start: number[],
	end: number[],
): string {
	const r = interpolateNumber(t, start[0], end[0])
	const g = interpolateNumber(t, start[1], end[1])
	const b = interpolateNumber(t, start[2], end[2])
	return `rgb(${r}, ${g}, ${b})`
}

/**
 *
 * @param min 定义域最小值
 * @param max 定义域最大值
 * @param count 刻度数量
 */
export function simpleTicks(min: number, max: number, count: number) {
	const step = tickStep(min, max, count)
	const start = Math.ceil(min / step)
	const end = Math.floor(max / step)
	const len = Math.ceil(end - start + 1)

	const ticks = new Array(len).fill(0)

	ticks.forEach((_tick, index) => {
		ticks[index] = round((start + index) * step)
	})

	return ticks
}
