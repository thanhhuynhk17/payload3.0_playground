import type { Block, RowLabelComponent } from 'payload'

import { isAdminFieldLevel } from '@/collections/Users/access/admin'
import { TextBlock } from './TextBlock'

export const ArrayTextBlock: Block = {
    slug: 'arrayText', // required
    // imageURL: 'https://google.com/path/to/image.jpg',
    imageAltText: 'Array text block thumbnail',
    interfaceName: 'Array text Block', // optional
    labels: {
        singular: 'Array text block',
        plural: 'Array text blocks',
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
            name: 'array',
            type: 'array',
            label: 'Array text',
            fields: [
                {
                    name: 'itemContent',
                    type: 'text',
                },
                {
                    name: 'itemSubContent',
                    type: 'text',
                },
            ],
            admin: {
                components: {
                    RowLabel: ({label}: any) => {
                        console.log(label)
                        return `Slide`
                    },
                },
            },
        },
    ],
}
