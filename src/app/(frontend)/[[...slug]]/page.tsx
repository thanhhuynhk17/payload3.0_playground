/**
 * v0 by Vercel.
 * @see https://v0.dev/t/X22ruh4OgJU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { cn } from '@/lib/utils'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import type { PaginatedDocs } from 'payload'
import BgOverlay from '@/components/customUI/BgOverlay.tsx'
import HeroScreen from '@/components/customUI/HeroScreen'
import Navbar from '@/components/customUI/Navbar'
import Footer from '@/components/customUI/Footer'

const goldenContentTW = `
text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl

bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
from-[#F9F295] via-[#E0AA3E] to-[#B88A44] bg-clip-text text-transparent
drop-shadow-[0px_0px_4px_rgba(249,242,149,0.2)]
hover:drop-shadow-[0px_0px_4px_rgba(249,242,149,0.8)]
transition-all duration-300 ease-in-out
cursor-pointer
`

// https://mycolor.space/gradient3?ori=circle&hex=%23F9F295&hex2=%23E0AA3E&hex3=%23B88A44&submit=submit
export default async function Page({ slug }: { slug: string }) {
    const payload = await getPayloadHMR({ config })
    let layouts
    let highlightStats
    try {
        const screens = await payload.find({
            collection: 'screen',
            depth: 1,
            pagination: false,
            locale: 'en',
        })
        layouts = screens.docs[0].layout
        highlightStats = layouts?.filter((layout) => layout.key === 'highlightStats')[0]

        throw {
            message: '',
        }
    } catch (error) {}

    return (
        <div className="flex flex-col min-h-[100dvh] gap-8 overflow-hidden">
            <Navbar />
            <main className="flex-1 overflow-hidden overflow-y-auto scroll-smooth">
                <HeroScreen id={'screen1'} layouts={layouts} />
                <section id="screen2" className="bg-base60 text-txtcolor py-12 md:py-24 lg:py-32">
                    <div className="container grid md:grid-cols-2 md:grid-rows-2 gap-12 md:gap-24 items-center">
                        {highlightStats?.array?.map((stats) => {
                            return (
                                <div
                                    key={stats.id}
                                    className="grid grid-rows-2 text-center gap-2 md:gap-4">
                                    <h2 className={cn(goldenContentTW)}>{stats.itemContent}</h2>
                                    <p className='md:text-xl'>{stats.itemSubContent}</p>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <section id="screen3" className="bg-muted py-12 md:py-24 lg:py-32 min-h-dvh">
                    Screen 3
                </section>
            </main>
            <Footer />
        </div>
    )
}
