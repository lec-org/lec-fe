import {
	polar as polarTransform,
	reflectY,
	scale,
	translate,
} from './transform'
import { curry } from './utils'

function coordinate(transformOptions, canvasOptions) {
	const { width, height } = canvasOptions
	const { innerRadius, outerRadius, startAngle, endAngle } = transformOptions

	// * 保证最后经过 cartesian 变换之后是应该圆形
	// * 根据画布宽高调整
	const aspect = width / height
	const sx = aspect > 1 ? 1 / aspect : aspect
	const sy = aspect > 1 ? 1 : aspect

	return [
		// 以画布中心为原点，沿 y 方向旋转
		translate(0, -0.5),
		reflectY(),
		translate(0, 0.5),

		// 调整角度和半径的范围
		scale(endAngle - startAngle, outerRadius - innerRadius),
		translate(startAngle, innerRadius),
		polarTransform(),

		// 改变大小 -> 内切画布
		scale(sx, sy),
		scale(0.5, 0.5),

		// 移动到画布中心
		translate(0.5, 0.5),
	]
}

export const polar = curry(coordinate)
