import type { CollectionConfig } from 'payload'

export const About: CollectionConfig = {
  slug: 'about',
  admin: {
    useAsTitle: 'name',
    group: 'Portfolio',
  },
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
    {
      name: 'currentJob',
      type: 'group',
      label: 'Current Job',
      admin: {
        description: 'Shown as your current working status on the portfolio.',
      },
      fields: [
        {
          name: 'company',
          type: 'text',
          label: 'Company Name',
          defaultValue: 'Faircode',
        },
        {
          name: 'role',
          type: 'text',
          label: 'Role / Title',
        },
        {
          name: 'companyUrl',
          type: 'text',
          label: 'Company Website URL',
        },
      ],
    },
  ],
}
