import { CollectionConfig } from 'payload'

import {CallToAction} from '@/blocks/CallToAction'
import {Media} from '@/blocks/Media'

import { admins } from '@/collections/Users/access/admins'

import { adminOrEditor, adminOrEditorFieldLevel } from '@/collections/Users/access/adminOrEditor'
import { checkRole } from '@/collections/Users/checkRole'

export const Screen: CollectionConfig = {
    slug: 'screen',
    labels: {
        singular: 'Screen',
        plural: 'Screens',
    },
    access: {
        admin: ({ req: { user } }) => {
            return (checkRole(['admin'], user) || checkRole(['editor'], user))
        },
        create: admins,
        delete: admins,
        read: adminOrEditor,
        update: admins,
    },
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            label: 'Screen name',
            type: 'text',
            access:{
                update: adminOrEditorFieldLevel
            }
        },
        {
            name: 'isVisible',
            label: 'Show screen option',
            type:'checkbox',
            defaultValue: true,
            access:{
                update: adminOrEditorFieldLevel
            }
        },
        {
            name: 'layout',
            type: 'blocks',
            label: 'Design layout',
            blocks: [ CallToAction, Media ]
        }
    ],
}
