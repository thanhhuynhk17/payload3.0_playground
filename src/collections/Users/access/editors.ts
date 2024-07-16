import type { Access, FieldAccess } from 'payload'

import { checkRole } from '@/collections/Users/checkRole'

export const editors: Access = ({ req: { user } }) => {
    return checkRole(['editor'], user)
}

export const editorsFieldLevel: FieldAccess = ({ req: { user } }) => {
    return checkRole(['editor'], user)
}
