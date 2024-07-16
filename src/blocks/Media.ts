import type { Block } from 'payload'

import { adminsFieldLevel } from '@/collections/Users/access/admins'
import { editorsFieldLevel } from '@/collections/Users/access/editors'

export const Media: Block = {
    slug: 'media', // required
    imageURL: 'https://google.com/path/to/image.jpg',
    imageAltText: 'Media thumbnail',
    interfaceName: 'Media Block', // optional
    fields: [
        // required
        {
            name: 'key',
            type: 'text',
            access: {
                create: adminsFieldLevel,
                update: adminsFieldLevel
            },
            required: true,
        },
        {
            name: 'mediaImg',
            type: 'upload',
            label: 'image',
            relationTo: 'media',
            access:{
                update: editorsFieldLevel
            }
        },
    ],
}
