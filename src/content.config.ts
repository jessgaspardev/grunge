import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content'; 

const works = defineCollection({
    loader: glob({pattern: "src/content/works/**/*.md"}),
    schema: ({image}) => z.object({
        title: z.string().max(50),
        slug: z.string(),
        client: z.string().max(50),
        category: z.enum(["UI/UX Design", "Web Design", "Art Direction", "Product Design", "Branding"]),
        services: z.string().max(65),
        year: z.string().max(4),
        featuredImage: image(),
        imageTwo: image(),
        imageThree: image(),
        imageFour: image(),
        liveSite: z.string().url(),
        description: z.string().max(350),
        isFeatured: z.boolean(),
        isDraft: z.boolean()
    })
})

export const collections = { works };