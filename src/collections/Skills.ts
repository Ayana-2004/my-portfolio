import type { CollectionConfig } from 'payload'

export const Skills: CollectionConfig = {
  slug: 'skills',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: ['Frontend', 'Backend', 'Database', 'Tools'],
    },
    {
      name: 'icon',
      type: 'text',
      required: false,
    },
  ],
}
