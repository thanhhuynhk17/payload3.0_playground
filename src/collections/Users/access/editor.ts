import type { Access, FieldAccess } from 'payload'

import { checkRole } from '@/collections/Users/checkRole'

export const isEditor: Access = ({ req: { user } }) => {
    return checkRole(['editor'], user)
}

export const isEditorFieldLevel: FieldAccess = ({ req: { user } }) => {
    return checkRole(['editor'], user)
}
