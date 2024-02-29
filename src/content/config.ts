import { z, defineCollection } from 'astro:content'

const playbookCollection = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
})

export const collections = {
  playbook: playbookCollection,
}
