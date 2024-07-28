import { compose } from './utils'

export function createCoordinate({
	x,
	y,
	width,
	height,
	transform: coordinates = [],
}) {
	// coordinates 是坐标系变换函数
	// 它们是已经接受了 transformOptions 的柯里化函数
	// 它们还需要我们传入一个 canvasOptions
	// 返回一个由基本变换构成的数组，所以复合前需要拍平数组
	// [[transpose, reflect], [transpose, reflect]]
	// => [transpose, reflect, transpose, reflect]

	const transforms = coordinates
		.map((coordinate) =>
			coordinate({
				x,
				y,
				width,
				height,
			}),
		)
		.flat()

	const output = compose(...transforms)

	// 某些场景需要获取坐标系的种类信息
	const types = transforms.map((transform) => transform.type())
	// 判断是否是极坐标系
	;(output as any).isPolar = () => types.indexOf('polar') !== -1

	// 判断是否可以转置
	// 只是有奇数「transpose」的时候才转置
	;(output as any).isTranspose = () =>
		types.reduce((is, type) => is ^ (type === 'transpose'), false)

	// 获得坐标系画布的中心
	;(output as any).center = () => [x + width / 2, y + height / 2]

	return output
}
