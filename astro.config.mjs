// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightOpenAPI, { openAPISidebarGroups } from 'starlight-openapi'

// https://astro.build/config
export default defineConfig({
	site: 'https://docs-experimental.redotengine.org',
	integrations: [
		starlight({
			title: 'Redot Experimental Documentation',
			favicon: '/favicon.ico',
			editLink: {
				baseUrl: 'https://github.com/Redot-Experimental/redot-experimental-docs/edit/master/src/content/docs/',
			},
			social: {
				github: 'https://github.com/Redot-Engine/redot-engine',
				discord: "https://discord.gg/redot",
				'x.com': 'https://x.com/Redot_Engine',
			},
			logo: {
				light: './src/assets/logo.svg',
				dark: './src/assets/logo.svg',
				replacesTitle: true,
			},
			customCss: [
				'./src/styles/inter.css',
				'./src/styles/redot.css',
			],
			plugins: [
				starlightOpenAPI([
					{
						base: 'api',
						label: 'Redot API',
						schema: './public/openapi.yaml',
					},
				]),
			],
			sidebar: [
				{
					label: 'Contributing',
					autogenerate: { directory: 'contributing' },
				},
				...openAPISidebarGroups,
			],
		}),
	],
});
