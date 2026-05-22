import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'techStack', 'liveUrl', 'order'],
    group: 'Portfolio',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Project Title',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
    {
      name: 'thumbnail',
      type: 'upload',
      label: 'Thumbnail Image',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'techStack',
      type: 'array',
      label: 'Tech Stack / Tags',
      fields: [
        {
          name: 'tech',
          type: 'text',
          label: 'Technology',
          required: true,
        },
      ],
    },
    {
      name: 'liveUrl',
      type: 'text',
      label: 'Live URL',
      admin: {
        description: 'Link to the deployed / live version of the project.',
      },
    },
    {
      name: 'githubUrl',
      type: 'text',
      label: 'GitHub URL',
      admin: {
        description: 'Link to the GitHub repository.',
      },
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
