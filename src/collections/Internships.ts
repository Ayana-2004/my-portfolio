import type { CollectionConfig } from 'payload'

export const Internships: CollectionConfig = {
  slug: 'internships',
  admin: {
    useAsTitle: 'role',
    defaultColumns: ['role', 'company', 'startDate', 'endDate'],
    group: 'Portfolio',
  },
  fields: [
    {
      name: 'role',
      type: 'text',
      label: 'Job Title / Role',
      required: true,
    },
    {
      name: 'company',
      type: 'text',
      label: 'Company Name',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      label: 'Location (e.g. Remote, Kochi)',
    },
    {
      name: 'startDate',
      type: 'date',
      label: 'Start Date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'monthOnly',
          displayFormat: 'MMM yyyy',
        },
      },
    },
    {
      name: 'endDate',
      type: 'date',
      label: 'End Date',
      admin: {
        description: 'Leave empty if currently ongoing.',
        date: {
          pickerAppearance: 'monthOnly',
          displayFormat: 'MMM yyyy',
        },
      },
    },
    {
      name: 'current',
      type: 'checkbox',
      label: 'Currently working here?',
      defaultValue: false,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
      admin: {
        description: 'Briefly describe your responsibilities and what you worked on.',
      },
    },
    {
      name: 'techStack',
      type: 'array',
      label: 'Tech Stack / Tools Used',
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
      name: 'logo',
      type: 'upload',
      label: 'Company Logo',
      relationTo: 'media',
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
