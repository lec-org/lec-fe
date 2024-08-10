import react from '@vitejs/plugin-react'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { resolve } from 'path'

export default defineConfig({
	main: {
		plugins: [externalizeDepsPlugin()],
	},
	preload: {
		plugins: [externalizeDepsPlugin()],
	},
	renderer: {
		resolve: {
			alias: {
				'@renderer': resolve('src/renderer/src'),
				'@native': resolve('native'),
				'@styles': resolve('src/renderer/src/styles'),
				'@components': resolve('src/renderer/src/components'),
				'@utils': resolve('src/renderer/src/utils'),
				'@hooks': resolve('src/renderer/src/hooks'),
				'@store': resolve('src/renderer/src/store'),
				'@router': resolve('src/renderer/src/routers'),
				'@constants': resolve('src/renderer/src/constants'),
				'@views': resolve('src/renderer/src/views'),
			},
		},
		plugins: [react()],
	},
})
