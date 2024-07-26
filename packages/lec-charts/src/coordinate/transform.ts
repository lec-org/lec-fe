type Transformer = (point: [number, number]) => [number, number]
export function transform(type: string, transformer: Transformer) {
	;(transformer as any).type = () => type

	return transformer
}

export function translate(tx: number = 0, ty: number = 0) {
	return transform('translate', ([px, py]: [number, number]) => [
		px + tx,
		py + ty,
	])
}

export function scale(sx: number = 1, sy: number = 1) {
	return transform('scale', ([px, py]: [number, number]) => [
		px * sx,
		py * sy,
	])
}

export function reflect() {
	return transform('reflect', scale(-1, 1))
}

export function reflectX() {
	return transform('reflectX', scale(-1, 1))
}

export function reflectY() {
	return transform('reflectY', scale(1, -1))
}

export function transpose() {
	return transform('transpose', ([px, py]) => [py, px])
}

export function polar() {
	return transform('polar', ([theta, radius]) => {
		const x = radius * Math.cos(theta)
		const y = radius * Math.sin(theta)
		return [x, y]
	})
}
