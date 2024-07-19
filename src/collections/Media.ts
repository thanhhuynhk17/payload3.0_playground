import type { CollectionConfig } from 'payload'

import { isAdmin } from '@/collections/Users/access/admin'
import {
    isAdminOrEditor,
    isAdminOrEditorFieldLevel,
} from '@/collections/Users/access/adminOrEditor'

export const Media: CollectionConfig = {
    slug: 'media',
    access: {
        create: isAdminOrEditor,
        delete: isAdmin,
        read: ()=>true,
        update: isAdmin,
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
            access: {
                update: isAdminOrEditorFieldLevel,
            },
        },
    ],
    upload: true,
}
