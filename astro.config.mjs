import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  srcDir: './static-docs',
  outDir: './static/docs',
  base: '/docs',
  integrations: [
    starlight({
      title: 'Docs',
      expressiveCode: {
        themes:  ['github-dark', 'github-light'],
      
      },
      
      social: {
        github: 'https://github.com/withastro/starlight'
      },
      sidebar: [{
        label: 'Guides',
        autogenerate: {
          directory: 'guides'
        }
      }, {
        label: 'Reference',
        autogenerate: {
          directory: 'reference'
        }
      }]
    })
  ]
});
