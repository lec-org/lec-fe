import { scale, translate } from './transform'
import { curry } from './utils'

function coordinate(transformOptions, canvasOptions) {
	const { x, y, width, height } = canvasOptions

	return [scale(width, height), translate(x, y)]
}

export const cartesian = curry(coordinate)
