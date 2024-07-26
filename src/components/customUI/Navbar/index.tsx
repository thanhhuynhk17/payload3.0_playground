'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/m7VBgUGZ1MQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link'
import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'
import Locales from '../Locales'
import { CSSProperties, JSX } from 'react'

const goldenContentTW = `
tracking-tighter
bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
from-[#F9F295] via-[#E0AA3E] to-[#B88A44] bg-clip-text text-transparent
drop-shadow-[0px_0px_4px_rgba(249,242,149,0.2)]
hover:drop-shadow-[0px_0px_4px_rgba(249,242,149,0.8)]
transition-all duration-300 ease-in-out
cursor-pointer
`

export default function Navbar() {
    return (
        <header className="z-50 bg-background shadow absolute top-0 left-0 right-0 max-h-[80px]">
            <div className="container flex items-center justify-between py-4 px-4 md:px-6">
                <Link href="#" className="flex items-center" prefetch={false}>
                    <MountainIcon className="h-6 w-6 mr-2" />
                    <span className={cn(goldenContentTW, `text-2xl font-bold pr-4`)}>PKV Group</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-6">
                    <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                        prefetch={false}>
                        Home
                    </Link>
                    <Link
                        href="#screen2"
                        className="text-muted-foreground hover:text-foreground"
                        prefetch={false}>
                        Founder
                    </Link>
                    <Link
                        href="#screen3"
                        className="text-muted-foreground hover:text-foreground"
                        prefetch={false}>
                        About
                    </Link>
                    <Link
                        href="#screen4"
                        className="text-muted-foreground hover:text-foreground"
                        prefetch={false}>
                        Contact
                    </Link>
                </nav>
                {/* <Locales /> */}
            </div>
        </header>
    )
}

interface IconProps {
    className: string
}

function MountainIcon(props: IconProps) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}

// function XIcon(props: unknown) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round">
//             <path d="M18 6 6 18" />
//             <path d="m6 6 12 12" />
//         </svg>
//     )
// }
