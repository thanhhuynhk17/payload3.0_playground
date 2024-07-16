import type { CollectionConfig } from 'payload'

import { admins } from '@/collections/Users/access/admins'
import { adminOrEditor, adminOrEditorFieldLevel } from '@/collections/Users/access/adminOrEditor'

export const Media: CollectionConfig = {
    slug: 'media',
    access: {
        create: admins,
        delete: admins,
        read: adminOrEditor,
        update: admins,
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
            access: {
                update: adminOrEditorFieldLevel
            }
        },
    ],
    upload: true,
}
