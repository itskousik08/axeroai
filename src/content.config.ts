import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Labs / Experiments Collection
const labs = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/labs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.string(),
    order: z.number().default(0),
  }),
});

// Generic Pages (Legal, FAQ, Company)
const pages = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

// News Collection
const news = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    readTime: z.string().optional(),
    category: z.string().default('General'),
    image: z.string().optional(),
  }),
});

// Research Collection
const research = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/research" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    category: z.string(),
    author: z.string().default('AxeroAI Research'),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { labs, pages, news, research };
