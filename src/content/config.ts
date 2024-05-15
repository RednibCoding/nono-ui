import { z, defineCollection } from "astro:content"

const componentCollection = defineCollection({
    schema: z.object({
        name: z.string(),
        description: z.string(),
        category: z.string(),
    })
});

export const collections = {
    components: componentCollection,
};