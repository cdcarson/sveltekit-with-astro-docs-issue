import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'LinketySplit Help',
			editLink: { baseUrl: 'https://github.com/LinketySplit/linketysplit-help/edit/main/' },
			expressiveCode: {
				themes: ['github-dark', 'github-light']
			},

			social: {
				github: 'https://github.com/withastro/starlight'
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: {
						directory: 'guides'
					}
				},
				{
					label: 'Reference',
					autogenerate: {
						directory: 'reference'
					}
				}
			]
		})
	]
});
