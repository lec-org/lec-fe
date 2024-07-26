// * 分布比例尺 Threshold Scale
interface ThresholdProps {
	domain: Array<number>
	range: Array<string | number>
}
export function createThreshold({ domain, range }: ThresholdProps) {
	const len = Math.min(domain.length, range.length - 1)

	return function (value: number) {
		const index = domain.findIndex((val: number) => value < val)

		return range[index === -1 ? len : index]
	}
}
