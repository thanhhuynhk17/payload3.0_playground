import type { Access, FieldAccess } from 'payload'

import { checkRole } from '@/collections/Users/checkRole'


export const isAdmin: Access = ({ req: { user } }) => {
    return checkRole(['admin'], user)
}

export const isAdminFieldLevel: FieldAccess = ({ req: { user } }) => {
    return checkRole(['admin'], user)
}
