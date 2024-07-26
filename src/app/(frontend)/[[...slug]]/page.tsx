/**
 * v0 by Vercel.
 * @see https://v0.dev/t/X22ruh4OgJU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { cn } from '@/lib/utils'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import type { PaginatedDocs } from 'payload'
import HeroScreen from '@/components/customUI/HeroScreen'
import Navbar from '@/components/customUI/Navbar'
import Footer from '@/components/customUI/Footer'
import type { ArrayTextBlock, Screen } from '@/payload-types'

const goldenContentTW = `
text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl

bg-gradient-to-tr
from-[#E0AA3E] to-[#F9F295]
bg-clip-text text-transparent
drop-shadow-[0px_0px_4px_rgba(249,242,149,0.5)]
hover:drop-shadow-[0px_0px_4px_rgba(249,242,149,0.8)]
transition-all duration-300 ease-in-out
cursor-pointer
`
interface PageProps {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}



// https://mycolor.space/gradient3?ori=circle&hex=%23F9F295&hex2=%23E0AA3E&hex3=%23B88A44&submit=submit
export default async function Page({ params, searchParams }: PageProps) {
    const payload = await getPayloadHMR({ config })
    let layouts: Screen['layout']
    let highlightStats: ArrayTextBlock | undefined = undefined
    try {
        const screens = await payload.find({
            collection: 'screen',
            depth: 1,
            pagination: false,
            locale: 'vi',
        })
        layouts = screens.docs[0].layout
        highlightStats = layouts?.filter((layout) => layout.key === 'highlightStats')[0] as ArrayTextBlock

        throw {
            message: '',
        }
    } catch (error) {}

    return (
        <div className="flex flex-col min-h-[100dvh] gap-8 overflow-hidden">
            <Navbar />
            <main className="flex-1 overflow-hidden overflow-y-auto scroll-smooth">
                <HeroScreen id={'screen1'} layouts={layouts} />
                <section id="screen2" className="bg-muted text-txtcolor py-12 md:py-24 lg:py-32">
                    <div className="container flex gap-6 md:gap-8 lg:gap-12 items-center">
                        <div className="w-full flex flex-col lg:flex-row text-center items-center justify-center gap-8 md:gap-16">
                            {highlightStats?.array?.map((stats) => {
                                return (
                                    <div
                                        key={stats.id}
                                        className={`w-full
                                    flex bg-secondary10 px-8 py-6 flex-col items-center justify-center
                                    rounded-lg hover:shadow-xl hover:cursor-pointer transition-shadow duration-300 ease-in-out
                                    `}>
                                        <h2 className={cn(goldenContentTW)}>{stats.itemContent}</h2>
                                        <p className="md:text-xl text-muted-foreground">
                                            {stats.itemSubContent}
                                        </p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
                <section id="screen3" className="bg-background py-12 md:py-24 lg:py-32 min-h-dvh">
                    Screen 3
                </section>
            </main>
            <Footer />
        </div>
    )
}
