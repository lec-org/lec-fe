import { createOrdinal } from './ordinal'
import { brand, BrandOptions } from './utils'

export function createBand(options: BrandOptions) {
	const { bandRange, bandWith, step } = brand(options)
	const scale = createOrdinal({ ...options, range: bandRange })

	scale['bandwidth'] = () => bandWith
	scale['step'] = () => step

	return scale
}
