import {
	reflectX,
	translate,
	transpose as transposeTransform,
} from './transform'
import { curry } from './utils'
function coordinate(transformOptions, canvasOptions) {
	return [
		transposeTransform(),
		translate(-0.5, -0.5),
		reflectX(),
		translate(0.5, 0.5),
	]
}

export const transpose = curry(coordinate)
