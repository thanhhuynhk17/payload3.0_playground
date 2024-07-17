import { RenderBlocks } from '../../utils/RenderBlocks'

export default async function Page({ screen }) {
    return (
        <div>
            <RenderBlocks layout={screen.layout}></RenderBlocks>
        </div>
    )
}
