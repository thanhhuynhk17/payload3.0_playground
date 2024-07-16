import type { Access, FieldAccess } from 'payload'

import { checkRole } from '@/collections/Users/checkRole'


export const adminOrSelf: Access = ({ req: { user } }) => {
    if(user){
        if(checkRole(['admin'], user)){
            return true
        }

        return {
            id: {
                equals: user.id,
            },
        }
    }

    return false
}
