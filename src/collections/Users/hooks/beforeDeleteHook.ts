import type { CollectionBeforeOperationHook  } from 'payload'


export const beforeDeleteHook: CollectionBeforeOperationHook  = async ({
    args, // original arguments passed into the operation
    operation, // name of the operation
    req, // full express request
    }) => {
    if (operation !== 'delete'){
        return args
    }
    // console.log(args)
    // if (req.user === null){
    //     return
    // }

    // const users = await req.payload.find({ collection: 'users', depth: 0, limit: 0 })
    // if (users.totalDocs === 0){
    //     return
    // }
    // const adminMask= users.docs.filter(user=> {
    //     if (user.id===req.user!.id){
    //         return false
    //     }
    //     return user.roles!.some(role=>role==='admin')
    // })
    // const stillRemainAdmin = adminMask.some(value => value)
    // if (!stillRemainAdmin){
    //     return
    // }

    // return args

}
