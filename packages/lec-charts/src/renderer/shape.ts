import { Context } from './context'
import { applyAttributes, createSVGElement, mount } from './utils'

export function shape(type: string, ctx: Context, attributes): SVGElement {
	const { group } = ctx
	const el = createSVGElement(type)

	// * 设置属性
	applyAttributes(el, attributes)

	// * 挂载到父节点
	mount(group, el)

	return el
}

export function line(ctx: Context, attributes) {
	return shape('line', ctx, attributes)
}

export function rect(ctx: Context, attributes) {
	const { width, height, x, y } = attributes

	/**
	 * 支持 width 和 height 取负值，表示矩形的宽高为负值
	 */
	return shape('rect', ctx, {
		...attributes,
		width: Math.abs(width),
		height: Math.abs(height),
		x: width < 0 ? x + width : x,
		y: height < 0 ? y + height : y,
	})
}

export function circle(ctx: Context, attributes) {
	return shape('circle', ctx, attributes)
}

export function text(ctx: Context, attributes) {
	const { text, ...rest } = attributes

	const textEl = shape('text', ctx, rest)
	textEl.textContent = text

	return textEl
}

export function path(ctx: Context, attributes) {
	const { d } = attributes

	return shape('path', ctx, { ...attributes, d: d.flat().join(' ') })
}

// * 圆环
export function ring(ctx: Context, attributes) {
	const { cx, cy, r1, r2, ...styles } = attributes

	const { stroke, strokeWidth, fill } = styles

	const defaultStrokeWidth = 1
	// * 内环
	const innerStroke = circle(ctx, {
		fill: 'transparent',
		stroke: stroke || fill,
		strokeWidth,
		cx,
		cy,
		r: r1,
	})
	// * ring
	const ring = circle(ctx, {
		...styles,
		strokeWidth: r2 - r1 - (strokeWidth || defaultStrokeWidth),
		stroke: fill,
		fill: 'transparent',
		cx,
		cy,
		r: (r1 + r2) / 2,
	})
	// * 外环
	const outerStroke = circle(ctx, {
		fill: 'transparent',
		stroke: stroke || fill,
		strokeWidth,
		cx,
		cy,
		r: r2,
	})

	return [innerStroke, ring, outerStroke]
}
