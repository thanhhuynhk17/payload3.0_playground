
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Screen, MediaBlock, TextBlock, Media } from '@/payload-types'

const goldenContentTW = `
text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl
py-4
bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
from-[#F9F295] via-[#E0AA3E] to-[#B88A44] bg-clip-text text-transparent
drop-shadow-[0px_0px_4px_rgba(249,242,149,0.2)]
hover:drop-shadow-[0px_0px_4px_rgba(249,242,149,0.8)]
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
        <section className="bg-background min-h-dvh py-24 lg:py-32 flex ">
            <div className="container flex flex-col-reverse lg:flex-row gap-8 items-center">
                <div className="space-y-4 ">
                    <h1 className={cn(goldenContentTW)}>{headingBlock?.content}</h1>

                    {/* <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        The complete platform for building the Web
                    </h1> */}
                    <p className="text-muted-foreground md:text-xl">{headingBlock?.subContent}</p>
                    <Link
                        href="#screen2"
                        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-primary30 px-6 text-sm text-txtcolor font-medium shadow-sm transition-colors hover:bg-transparent hover:text-primary30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}>
                        Learn More
                    </Link>
                </div>

                <div
                    className={`w-full
                    grow lg:aspect-[4/3] lg-max-w-1/2 relative cursor-pointer border border-primary30/10
                    drop-shadow-[0px_4px_10px_rgba(181,132,16,0.5)] rounded-xl
                    hover:drop-shadow-[0px_0px_16px_rgba(181,132,16,1)]
                    transition-all duration-500 ease-in-out
                    `}>
                    <Image
                        src={`${process.env.PAYLOAD_PUBLIC_SERVER_URL}${mediaImg?.url}`}
                        fill
                        alt={`${mediaImg?.alt}`}
                        className="rounded-xl object-cover aspect-auto"
                    />
                </div>
            </div>
        </section>
    )
}
