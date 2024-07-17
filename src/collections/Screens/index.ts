import { CollectionConfig } from 'payload'

import { isAdmin, isAdminFieldLevel } from '@/collections/Users/access/admin'
import { isAdminOrEditor } from '@/collections/Users/access/adminOrEditor'
import { checkRole } from '@/collections/Users/checkRole'

import { CallToAction } from '@/blocks/CallToAction'
import { Media } from '@/blocks/Media'
import { TextBlock } from '@/blocks/TextBlock'
import { ArrayTextBlock } from '@/blocks/ArrayTextBlock'

import { autoSetBlockTitleHook } from './hooks/autoSetBlockTitleHook'
import { preventMutateBlockHook } from './hooks/preventMutateBlockHook'

export const Screens: CollectionConfig = {
    slug: 'screen',
    labels: {
        singular: 'Screen',
        plural: 'Screens',
    },
    access: {
        create: isAdmin,
        delete: isAdmin,
        read: isAdminOrEditor,
        update: isAdminOrEditor,
    },
    admin: {
        useAsTitle: 'key',
    },
    fields: [
        {
            name: 'key',
            label: 'Screen key',
            required: true,
            unique: true,
            type: 'text',
            access: {
                update: isAdminFieldLevel,
            },
        },
        {
            name: 'isVisible',
            label: 'Show screen option',
            type: 'checkbox',
            defaultValue: true,
        },
        {
            name: 'layout',
            type: 'blocks',
            label: 'Screen layout',
            blocks: [CallToAction, Media, TextBlock, ArrayTextBlock],
            hooks: {
                beforeChange: [autoSetBlockTitleHook, preventMutateBlockHook],
            },
        },
    ],
}
