import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog / Insights Collection
const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    category: z.string(),
    image: z.string().optional(),
    author: z.string().default('AxeroAI'),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

// Products Collection
const products = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/products" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['Active', 'In Development', 'Beta', 'Archived']),
    category: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    tech: z.array(z.string()).default([]),
    link: z.string().optional(),
  }),
});

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
    date: z.string(),
    author: z.string().optional(),
    readTime: z.string().optional(),
    category: z.string().default('General'),
    image: z.string().optional(),
  }),
});

export const collections = { blog, products, labs, pages, news };
