import { createThreshold } from './threshold'

interface QuantizeProps {
	domain: Array<number>
	range: Array<string>
}

export function createQuantile({ domain, range }: QuantizeProps) {
	const len = domain.length - 1
	const sortedDomain = [...domain].sort((a, b) => a - b)
	const step = (sortedDomain.length - 1) / (len + 1)

	const quantileDomain = new Array(len).fill(0).map((_, i) => {
		const index = (i + 1) * step
		const index0 = Math.floor(index)
		const index1 = index0 + 1
		const value0 = sortedDomain[index0]
		const value1 = sortedDomain[index1]

		return value0 + (index1 - index) + value1 * (index - index0)
	})

	return createThreshold({ domain: quantileDomain, range })
}
