import { createSVGElement, mount } from './utils'

export interface Context {
	node: SVGElement
	group: SVGElement
}
export function createContext(width: number, height: number) {
	// * 创建画布节点
	const node = createSVGElement('svg')

	// * 设置宽高 & viewBox
	node.setAttribute('width', `${width}px`)
	node.setAttribute('height', `${height}px`)
	node.setAttribute('viewBox', `0 0 ${width} ${height}`)

	const group = createSVGElement('g')
	mount(group, node)

	return {
		node,
		group,
	}
}
