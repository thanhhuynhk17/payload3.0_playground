import type { Block } from 'payload'

import { isAdminFieldLevel } from '@/collections/Users/access/admin'

export const TextBlock: Block = {
    slug: 'textblock', // required
    // imageURL: 'https://google.com/path/to/image.jpg',
    imageAltText: 'Text block thumbnail',
    interfaceName: 'Text Block', // optional
    labels: {
        singular: 'Text block',
        plural: 'Text blocks',
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
            name: 'content',
            type: 'text',
            required: true,
        },
        {
            name: 'subContent',
            type: 'text',
        },
    ],
}
