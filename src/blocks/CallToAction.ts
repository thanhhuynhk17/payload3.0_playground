import type { Block } from 'payload'

import { isAdminFieldLevel } from '@/collections/Users/access/admin'
import { isAdminOrEditorFieldLevel } from '@/collections/Users/access/adminOrEditor'

export const CallToAction: Block = {
    slug: 'cta', // required
    // imageURL: 'https://google.com/path/to/image.jpg',
    imageAltText: 'CTA thumbnail',
    interfaceName: 'CTA Block', // optional
    labels: {
        singular: 'Call to action block',
        plural: 'Call to action blocks',
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
            access: {
                update: isAdminOrEditorFieldLevel,
            },
            localized: true
        },
        {
            name: 'href',
            type: 'text',
            label: 'Link',
            defaultValue: '#',
            access: {
                update: isAdminOrEditorFieldLevel,
            },
        }
    ],
}
