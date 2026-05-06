import type { CollectionConfig } from 'payload'

export const Education: CollectionConfig = {
  slug: 'education',
  fields: [
    {
      name: 'degree',
      type: 'text',
      required: true,
    },
    {
      name: 'institution',
      type: 'text',
      required: true,
    },
    {
      name: 'duration',
      type: 'text',
    },
    {
      name: 'grade',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'logo', // ← added this
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
