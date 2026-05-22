import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { About } from './collections/About'
import { Skills } from './collections/Skills'
import { Education } from './collections/Education'
import { Projects } from './collections/Projects'
import { Internships } from './collections/Internships'

const filename = typeof import.meta.url === 'string' ? fileURLToPath(import.meta.url) : __filename

const dirname =
  typeof import.meta.url === 'string' ? path.dirname(fileURLToPath(import.meta.url)) : __dirname

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, About, Skills, Education, Projects, Internships],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
  plugins: [],
})
