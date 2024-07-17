import type { FieldHook } from 'payload'

// Field hook type is a generic that takes three arguments:
// 1: The document type
// 2: The value type
// 3: The sibling data type

export const preventMutateBlockHook: FieldHook = (args) => {
    const {
        value, // array contains blocks value
        previousValue, 
        // data, // Typed as a Partial of your ExampleDocumentType
        // siblingData, // Typed as a Partial of SiblingDataType
        // // originalDoc, // Typed as ExampleDocumentType
        operation,
        req,
    } = args
    if (req.user?.roles.some(role=>role==='admin')){
        return value
    }
    if (operation ==='update' || operation==='delete'){
        console.log('operation', operation)
        console.log('value', value, value.length)
        console.log('previousValue', previousValue)
        if( previousValue.length != value.length){ // prevent add or delete
            return previousValue
        }else{ // prevent mutate
            const prevIDs= previousValue.map((val: any)=>val.id)
            const curIDs= value.map((val: any)=>val.id)
            const mergedArr = [...prevIDs, ...curIDs]
            const uniqueArr = [...new Set(mergedArr)]
            if (uniqueArr.length !== prevIDs.length){
                console.log('Prevent mutating')
                return previousValue
            }
        }
    }
}
