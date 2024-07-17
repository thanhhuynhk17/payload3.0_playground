import { RenderBlocks } from '@/app/utils/RenderBlocks'

import { getPayloadHMR } from "@payloadcms/next/utilities";
import config from "@payload-config";

export default async function Page() {
    const payload = await getPayloadHMR({config})

    const screens = await payload.find({
        collection: 'screen'
    })
    return (
        <div className="bg-red-500 flex flex-col h-dvh">
            {
                screens.docs[0].layout.map(layout=>{
                    return <div key={layout.id}>{layout.content}</div>
                })
            }
        </div>
    )
}
