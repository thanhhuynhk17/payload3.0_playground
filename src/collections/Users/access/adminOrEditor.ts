import type { Access, FieldAccess } from 'payload'

import { checkRole } from '@/collections/Users/checkRole'


export const adminOrEditor: Access = ({ req: { user } }) => {
    if(user){
        if(checkRole(['admin'], user)){
            return true
        }
        if(checkRole(['editor'], user)){
            return true
        }
    }

    return false
}

export const adminOrEditorFieldLevel: FieldAccess = ({ req: { user }})=>{
    if(user){
        if(checkRole(['admin'], user)){
            return true
        }
        if(checkRole(['editor'], user)){
            return true
        }
    }

    return false
}