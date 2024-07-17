// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'



import { Users } from './collections/Users'

import { TestComponent } from '@/components/customUI/TestComponent'
import { BeforeLoginComponent } from '@/components/customUI/BeforeLoginComponent'
import { Screens } from '@/collections/Screens'
import { Media } from '@/collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
    admin: {
        user: Users.slug,
        components: {
            beforeDashboard: [TestComponent],
            beforeLogin: [BeforeLoginComponent],
        },
    },
    collections: [Users, Screens, Media],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || '',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: mongooseAdapter({
        url: process.env.DATABASE_URI || '',
    }),
    sharp,
    plugins: [
        // storage-adapter-placeholder
    ],
})
