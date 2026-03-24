import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    description: z.string(),
    image: z.string(),
    author: z.string().optional(),
    readTime: z.string().optional(),
  }),
});

export const collections = { news };
