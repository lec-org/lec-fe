import { equal } from './utils'

// * 序数类比例尺 Ordinal Scale
interface OrdinalProps {
	domain: Array<string | number | any>
	range: Array<string | number | any>
}
export function createOrdinal({ domain, range }: OrdinalProps) {
	return function (value: string | number | any) {
		const index = domain.findIndex((x) => equal(x, value))

		return range[index % range.length]
	}
}
