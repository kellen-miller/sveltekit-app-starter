import { sveltekit } from "@sveltejs/kit/vite";
import path from "path";
import { defineConfig } from "vite"

export default defineConfig({
	plugins: [
		sveltekit()
	],
	resolve: {
		alias: [
			{
				find: "@",
				replacement: path.resolve(__dirname, "src")
			},
			{
				find: /\$/,
				replacement: `${path.resolve(__dirname, "src")}/`
			}
		]
	},
	build: {
		minify: false
	}
});