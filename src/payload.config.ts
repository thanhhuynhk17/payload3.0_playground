// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { s3Storage } from '@payloadcms/storage-s3'

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
    localization: {
        locales: [
            {
                label: {
                    en: 'English',
                    vi: 'Tiếng Anh',
                },
                code: 'en',
            },
            {
                label: {
                    en: 'Vietnamese',
                    vi: 'Tiếng Việt',
                },
                code: 'vi',
            },
        ],
        defaultLocale: 'en',
        fallback: true,
    },
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
        s3Storage({
            collections: {
                media: {
                    prefix: 'media',
                },
            },
            bucket: process.env.S3_BUCKET as string,
            config: {
                forcePathStyle: true,
                credentials: {
                    accessKeyId: process.env.S3_ACCESS_KEY_ID as string,
                    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY as string,
                },
                region: process.env.S3_REGION,
                endpoint: process.env.S3_ENDPOINT,
            },
        }),
        // storage-adapter-placeholder
    ],
})
