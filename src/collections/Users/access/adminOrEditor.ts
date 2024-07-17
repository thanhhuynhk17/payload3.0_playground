import type { Access, FieldAccess } from 'payload'

import { checkRole } from '@/collections/Users/checkRole'

export const isAdminOrEditor: Access = ({ req: { user } }) => {
    if (user) {
        if (checkRole(['admin'], user)) {
            return true
        }
        if (checkRole(['editor'], user)) {
            return true
        }
    }

    return false
}

export const isAdminOrEditorFieldLevel: FieldAccess = ({ req: { user } }) => {
    if (user) {
        if (checkRole(['admin'], user)) {
            return true
        }
        if (checkRole(['editor'], user)) {
            return true
        }
    }

    return false
}
