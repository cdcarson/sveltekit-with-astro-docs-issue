import { defineCollection } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	guides: defineCollection({ schema: docsSchema() }),
	reference: defineCollection({ schema: docsSchema() }),
};
