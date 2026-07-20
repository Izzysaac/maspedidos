// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
// Import Zod
import { z } from "astro/zod";
// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
    schema: z.object({
        title: z.string().optional(),
        slug: z.string().optional(),
        pubDate: z.date().optional(),
        description: z.string().optional(),
        author: z.string().optional(),
        image: z.object({
            url: z.string().optional(),
            alt: z.string().optional(),
        }),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().optional(),
    }),
});
// Export a single `collections` object to register your collection(s)
export const collections = { blog };
