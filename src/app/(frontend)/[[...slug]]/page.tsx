import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import type { PaginatedDocs } from 'payload'
import BgOverlay from '@/components/customUI/BgOverlay.tsx'

// https://mycolor.space/gradient3?ori=circle&hex=%23F9F295&hex2=%23E0AA3E&hex3=%23B88A44&submit=submit
export default async function Page({ slug }: { slug: string }) {
    const payload = await getPayloadHMR({ config })
    console.log('slug: ', slug)
    let layouts
    let mediaLayout
    try {
        const screens = await payload.find({
            collection: 'screen',
            depth: 1,
            pagination: false,
            locale: 'en',
        })
        layouts = screens.docs[0].layout
        mediaLayout = layouts?.filter(layout=>layout.key==='backgroundImg')[0]
        throw {
            message: '',
        }
    } catch (error) {
    }

    return (
        <div className="text-txtcolor bg-base60 flex flex-row h-dvh overflow-hidden">
            <div
                className={`relative grow overflow-x-hidden overflow-y-auto p-4 scroll-smooth
            `}>
                <BgOverlay url={mediaLayout?.mediaImg?.url} />
                {layouts &&
                    layouts.map((layout) => {
                        return (
                            <div
                                key={layout.id}
                                className="w-full h-full rounded flex items-center justify-center">
                                <h1
                                    className={`
                            bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
                            from-[#F9F295] via-[#E0AA3E] to-[#B88A44] bg-clip-text text-transparent
                            text-center scroll-m-20 text-4xl font-bold tracking-tight lg:text-8xl p-10
                            drop-shadow-[0px_0px_4px_rgba(245,245,245,0.5)]
                            transition-all duration-300 ease-in-out
                            cursor-pointer
                            `}>
                                    {layout.content}
                                </h1>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
