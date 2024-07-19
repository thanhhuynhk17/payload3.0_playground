import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const goldenContentTW = `
text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl

bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
from-[#F9F295] via-[#E0AA3E] to-[#B88A44] bg-clip-text text-transparent
drop-shadow-[0px_0px_4px_rgba(249,242,149,0.2)]
hover:drop-shadow-[0px_0px_4px_rgba(249,242,149,0.8)]
transition-all duration-300 ease-in-out
cursor-pointer
`
export default async function HeroScreen({ layouts, id }: { layouts: unknown; id: string }) {


    let mediaLayout
    try {
        mediaLayout = layouts?.filter((layout) => layout.key === 'backgroundImg')[0]
    } catch (error) {}

    return (
        <section className="bg-background py-12 md:py-24 lg:py-32">
            <div className="container grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                    <h1
                        className={cn(goldenContentTW)}>
                        The complete platform
                    </h1>

                    {/* <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                        The complete platform for building the Web
                    </h1> */}
                    <p className="text-muted-foreground md:text-xl">
                        Beautifully designed components that you can copy and paste into your apps.
                        Accessible. Customizable. Open Source.
                    </p>
                    <div className="flex gap-4">
                        {/* <Link
                            href="#"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}>
                            Get Started
                        </Link> */}
                        <Link
                            href="#screen2"
                            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm text-primary30 font-medium shadow-sm transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                            prefetch={false}>
                            Learn More
                        </Link>
                    </div>
                </div>
                <img
                    src="/placeholder.svg"
                    width="550"
                    height="550"
                    alt="Hero"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                />
                {/* <Image
                    src={`http://localhost:3000${mediaLayout?.mediaImg?.url}`}
                    fill={true}
                    alt="alt ne"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                /> */}
            </div>
        </section>
    )
}
