import type { CollectionConfig } from 'payload'

import { isAdmin, isAdminFieldLevel } from '@/collections/Users/access/admin'
import { adminOrSelf } from '@/collections/Users/access/adminOrSelf'
import { anyone } from '@/collections/Users/access/anyone'
import { checkRole } from './checkRole'
import { ensureFirstUserIsAdmin } from '@/collections/Users/hooks/ensureFirstUserIsAdmin'
import { beforeDeleteHook } from './hooks/beforeDeleteHook'

export const Users: CollectionConfig = {
    slug: 'users',
    access: {
        admin: ({ req: { user } }) => {
            return checkRole(['admin'], user) || checkRole(['editor'], user)
        },
        create: anyone,
        delete: isAdmin,
        read: adminOrSelf,
        update: adminOrSelf,
    },
    admin: {
        // defaultColumns: ['name', 'email'],
        useAsTitle: 'name',
    },
    auth: true,
    fields: [
        {
            name: 'name',
            label: 'User name',
            type: 'text',
        },
        {
            name: 'roles',
            required: true,
            saveToJWT: true,
            type: 'select',
            access: {
                create: isAdminFieldLevel,
                update: isAdminFieldLevel,
            },
            defaultValue: ['user'],
            hasMany: true,
            hooks: {
                beforeChange: [ensureFirstUserIsAdmin],
            },
            options: [
                {
                    label: 'Admin',
                    value: 'admin',
                },
                {
                    label: 'Editor',
                    value: 'editor',
                },
                {
                    label: 'User',
                    value: 'user',
                },
            ],
        },
    ],
    // hooks: {
    //     beforeOperation: [beforeDeleteHook],
    // },
    timestamps: true,
}
