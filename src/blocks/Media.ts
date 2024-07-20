import type { Block } from 'payload'

import { isAdminFieldLevel } from '@/collections/Users/access/admin'
import { isEditorFieldLevel } from '@/collections/Users/access/editor'

export const Media: Block = {
    slug: 'mediablock', // required
    // imageURL: 'https://google.com/path/to/image.jpg',
    imageAltText: 'Media thumbnail',
    interfaceName: 'Media Block', // optional
    labels: {
        singular: 'Media block',
        plural: 'Media blocks',
    },
    fields: [
        // required
        {
            name: 'key',
            type: 'text',
            access: {
                create: isAdminFieldLevel,
                update: isAdminFieldLevel,
            },
            required: true,
        },
        {
            name: 'mediaImg',
            type: 'upload',
            label: 'image',
            relationTo: 'media',
            access: {
                update: isEditorFieldLevel,
            },
        },
    ],
}
