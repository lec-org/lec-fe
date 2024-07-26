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

