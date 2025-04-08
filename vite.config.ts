import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [vue()],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@use "sass:color";
					@use "@/styles/variables.scss" as *;
				`
			}
		}
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		}
	}
})
