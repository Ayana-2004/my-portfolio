import type { CollectionConfig } from 'payload'

export const About: CollectionConfig = {
  slug: 'about',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'bio',
      type: 'textarea',
      required: true,
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
    },
  ],
}
