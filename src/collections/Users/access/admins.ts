import type { Access, FieldAccess } from 'payload'

import { checkRole } from '@/collections/Users/checkRole'


export const admins: Access = ({ req: { user } }) => {
    return checkRole(['admin'], user)
}

export const adminsFieldLevel: FieldAccess = ({ req: { user } }) => {
    return checkRole(['admin'], user)
}
