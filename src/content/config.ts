import { defineCollection, z } from "astro:content";

const projectsColletion = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        stacks: z.object({
            text: z.string(),
            icons: z.string().optional(),
        }),
        link: z.string().optional(),
        image: z.array(z.string()).optional(),
    }),
});

export const collections = {
    'projects': projectsColletion,
};
