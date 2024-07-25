import { createContext } from './context'
import { circle, line, path, rect, ring, text } from './shape'
export function createRenderer(width: number, height: number) {
	// * 创建上下文
	const ctx = createContext(width, height)

	// * 返回绘制函数
	return {
		line: (options) => line(ctx, options),
		circle: (options) => circle(ctx, options),
		text: (options) => text(ctx, options),
		rect: (options) => rect(ctx, options),
		path: (options) => path(ctx, options),
		ring: (options) => ring(ctx, options),
	}
}
