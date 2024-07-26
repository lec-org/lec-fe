// * 连续比例尺 Time Scale
import { createLinear } from './linear'

interface TimeProps {
	domain: [Date, Date]
	range: [number, number]
}
export function createTime({ domain, range }: TimeProps) {
	const transform = (x: Date) => x.getTime()
	const transformDomain: [number, number] = domain.map(transform) as [
		number,
		number,
	]
	const linear = createLinear({ domain: transformDomain, range })
	const scale = (x: Date) => linear(transform(x))

	scale.nice = (count: number) => linear.nice(count)
	scale.ticks = (count: number) => linear.ticks(count).map((x) => new Date(x))

	return scale
}
