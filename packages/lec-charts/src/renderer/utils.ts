export function createSVGElement(type: string): SVGElement {
	return document.createElementNS('http://www.w3.org/2000/svg', type)
}

export function mount(
	parent: HTMLElement | SVGElement,
	child: HTMLElement | SVGElement,
): void {
	if (parent) {
		parent.appendChild(child)
	}
}

export function applyAttributes(element: SVGElement, attributes: Object) {
	for (const [key, value] of Object.entries(attributes)) {
		const _key = key.replace(
			/([A-Z])/g,
			(res) => `-${res.toLocaleLowerCase()}`,
		)

		element.setAttribute(_key, value)
	}
}

export function applyTransform(element: SVGElement, transform: string) {
	const oldTransform = element.getAttribute('transform') || ''

	const prefix = oldTransform ? `${oldTransform} ` : ''

	element.setAttribute('transform', `${prefix}${transform}`)
}

export function normalize(value: number, start: number, end: number): number {
	return (value - start) / (end - start)
}

export function tickStep(min: number, max: number, count: number) {
	/**
	 * Liner 比例尺 常用间隔t算法
	 * 1 2 5 * 10^n => step = 10 ^ n * (1 | 2 | 5)
	 */
	const e10 = Math.sqrt(50)
	const e5 = Math.sqrt(10)
	const e2 = Math.sqrt(2)

	const step0 = Math.abs(max - min) / Math.max(0, count)
	// * 初始化 step1 为 10 ^ n < step0 ， n 为满足条件最大整数
	let step1 = 10 ** Math.floor(Math.log(step0) / Math.LN10)

	const error = step0 / step1 // 误差

	if (error >= e10) step1 *= 10
	else if (error >= e5) step1 *= 5
	else if (error >= e2) step1 *= 2

	return step1
}
