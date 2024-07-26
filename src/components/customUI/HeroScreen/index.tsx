import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Screen, MediaBlock, TextBlock, Media } from '@/payload-types'

const goldenContentTW = `
text-5xl md:text-8xl
py-4 font-extrabold tracking-tighter
bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
from-[#E0AA3E] via-[#F9F295] to-[#E0AA3E] bg-clip-text text-transparent

transition-all duration-300 ease-in-out
cursor-pointer
`
export default async function HeroScreen({
    layouts,
    id,
}: {
    layouts: Screen['layout']
    id: string
}) {
    let mediaLayout: MediaBlock | undefined = undefined
    let mediaImg: Media | undefined = undefined
    let headingBlock: TextBlock | undefined = undefined

    mediaLayout = layouts?.filter((layout) => layout.key === 'backgroundImg')[0] as MediaBlock
    mediaImg = mediaLayout.mediaImg as Media
    headingBlock = layouts?.filter((layout) => layout.key === 'heading')[0] as TextBlock

    return (
        <section className="bg-background h-dvh md:py-24 lg:py-32 flex relative">
            <div className="flex-1 container flex flex-col-reverse lg:flex-row gap-8 items-center">
                <div className="space-y-4 z-20 py-12 lg:w-1/2">
                    <div className="relative flex w-full items-center justify-center">
                        <span className={cn(goldenContentTW, 'absolute blur-xl select-none ')}>
                            {headingBlock?.content}
                        </span>
                        <h1 className={cn(goldenContentTW, 'cursor-pointer')}>
                            {headingBlock?.content}
                        </h1>
                    </div>

                    {/* <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        The complete platform for building the Web
                    </h1> */}
                    <p className="text-slate-300 md:text-xl pb-4">
                        {headingBlock?.subContent}
                    </p>
                    <Link
                        href="#screen2"
                        className={`
                        inline-flex h-10 items-center justify-center rounded-md border border-input 
                        bg-gradient-to-tr md:hover:bg-none
                        from-[#E0AA3E] to-[#F9F295]
                        px-6 text-sm text-txtcolor md:hover:text-primary30 font-medium shadow-sm 
                        transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
                        disabled:pointer-events-none disabled:opacity-50
                            `}
                        prefetch={false}>
                        Learn More
                    </Link>
                </div>

                <div
                    // drop-shadow-[0px_4px_10px_rgba(224,170,62,0.5)] rounded-xl
                    // hover:drop-shadow-[0px_0px_16px_rgba(224,170,62,1)]
                    className={`inset-0 absolute
                    cursor-pointer border border-primary30/10
                    transition-all duration-500 ease-in-out
                    `}>
                    <div
                        className={` z-10
                            absolute h-full w-full
                            bg-gradient-to-t from-base60
                            md:bg-gradient-to-r
                            `}></div>
                    <Image
                        src={`${process.env.PAYLOAD_PUBLIC_SERVER_URL}${mediaImg?.url}`}
                        fill
                        alt={`${mediaImg?.alt}`}
                        className="rounded-xl object-cover aspect-auto w-full h-full"
                    />
                </div>
            </div>
        </section>
    )
}
