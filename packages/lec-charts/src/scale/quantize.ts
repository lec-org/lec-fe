import { createThreshold } from './threshold'

interface QuantizeProps {
	domain: [number, number]
	range: Array<string | number | any>
}

export function createQuantize({ domain, range }: QuantizeProps) {
	const len = range.length - 1
	const [d0, d1] = domain
	const step = (d1 - d0) / (len + 1)
	const quantizeDomain = new Array(len).fill(0).map((_, i) => step * (i + 1))

	return createThreshold({ domain: quantizeDomain, range })
}
