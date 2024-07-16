import type { CollectionConfig } from 'payload'

import { admins, adminsFieldLevel } from '@/collections/Users/access/admins'
import { adminOrSelf } from '@/collections/Users/access/adminOrSelf'
import { anyone } from '@/collections/Users/access/anyone'
import { checkRole } from './checkRole'
import { ensureFirstUserIsAdmin } from '@/collections/Users/hooks/ensureFirstUserIsAdmin'
import { beforeDeleteHook } from './hooks/beforeDeleteHook'

export const Users: CollectionConfig = {
    slug: 'users',
    access: {
        admin: ({ req: { user } }) => {
            return (checkRole(['admin'], user) || checkRole(['editor'], user))
        },
        create: anyone,
        delete: admins,
        read: adminOrSelf,
        update: adminOrSelf,
    },
    admin: {
        defaultColumns: ['name', 'email'],
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
                create: adminsFieldLevel,
                update: adminsFieldLevel,
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
