import type { Block } from 'payload'

import { adminsFieldLevel } from '@/collections/Users/access/admins'

export const CallToAction: Block = {
    slug: 'cta', // required
    imageURL: 'https://google.com/path/to/image.jpg',
    imageAltText: 'CTA thumbnail',
    interfaceName: 'CTA Block', // optional
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
            name: 'content',
            type: 'text',
            required: true,
        },
        {
            name: 'href',
            type: 'text',
            defaultValue: '#'
        },
    ],
}
