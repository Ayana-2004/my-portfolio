import type { CollectionConfig } from 'payload'

export const Skills: CollectionConfig = {
  slug: 'skills',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'order'],
    group: 'Portfolio',
  },
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
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 0,
      admin: {
        description: 'Lower number = shown first.',
        position: 'sidebar',
      },
    },
  ],
}
