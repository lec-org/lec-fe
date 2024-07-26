// * 序数类比例尺 Point Scale
import { createBand } from './band'
import { BrandOptions } from './utils'

export function createPoint(options: BrandOptions) {
	return createBand({ ...options, padding: 1 })
}
