import { Context } from './context'
import { applyTransform, createSVGElement, mount } from './utils'

export function transform(type: string, ctx: Context, ...params) {
	const { group } = ctx

	applyTransform(group, `${type}(${params.join(', ')})`)
}

export function translate(ctx: Context, x: number, y: number) {
	transform('translate', ctx, x, y)
}

export function rotate(
	ctx: Context,
	angle: number,
	x: number = 0,
	y: number = 0,
) {
	transform('rotate', ctx, angle, x, y)
}

export function scale(ctx: Context, x: number, y: number = x) {
	transform('scale', ctx, x, y)
}

export function save(ctx: Context) {
	const { group } = ctx
	const newGroup = createSVGElement('g')
	mount(group, newGroup)

	ctx.group = newGroup
}

export function restore(ctx: Context) {
	const { group } = ctx
	const { parentNode } = group

	ctx.group = parentNode as SVGElement
}
