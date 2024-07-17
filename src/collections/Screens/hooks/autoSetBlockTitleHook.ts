import type { FieldHook } from 'payload'

// Field hook type is a generic that takes three arguments:
// 1: The document type
// 2: The value type
// 3: The sibling data type

export const autoSetBlockTitleHook: FieldHook = (args) => {
    const {
        value, // array contains blocks value
        // data, // Typed as a Partial of your ExampleDocumentType
        // siblingData, // Typed as a Partial of SiblingDataType
        // originalDoc, // Typed as ExampleDocumentType
        operation,
        // req,
    } = args
    if (operation ==='create' || operation ==='update'){
        const newValue = value.map((block: any) => {
            if (block.key === undefined){
                return block
            }
            return {
                ...block,
                blockName: `${block.key}`,
            }
        })
    
        return newValue // should return a string as typed above, undefined, or null
    }
}
