import { blocks } from '../blocks/blockList'

export default function RenderBlocks({ layout }) {
    return (
        <>
            {layout.map((block, i) => {
                const Block = blocks[block.blockType]
                if (Block) {
                    return <Block key={i} {...block} />
                }
                return null
            })}
        </>
    )
}
