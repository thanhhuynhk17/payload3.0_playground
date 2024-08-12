'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/m7VBgUGZ1MQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { API_URL, OAUTH_URL } from '@/lib/constants'

const goldenContentTW = `
tracking-tighter
bg-gradient-to-r bg-clip-text text-transparent
from-violet-400 to-purple-300
transition-all duration-300 ease-in-out
cursor-pointer
`

export default function Navbar() {
    const prefix = usePathname()

    return (
        <header className="z-50 bg-background shadow absolute top-0 left-0 right-0 max-h-[80px]">
            <div className="container flex items-center justify-between py-4 px-4 md:px-6">
                <Link href="/" className="flex items-center" prefetch={false}>
                    <MountainIcon className="h-6 w-6 mr-2" />
                    <span className={cn(goldenContentTW, `text-2xl font-bold pr-4`)}>
                        Lotus Shop
                    </span>
                </Link>
                <nav className="hidden md:flex items-center space-x-6">
                    <Link
                        href="/"
                        className={cn(
                            `
                        hover:text-violet-400
                        transition-all duration-300 ease-in-out
                        text-lg font-medium`,
                            prefix === '/' ? 'text-violet-400' : 'text-violet-200'
                        )}
                        prefetch={false}>
                        Income
                    </Link>
                    <Link
                        href="/product"
                        className={cn(
                            `
                        hover:text-violet-400
                        transition-all duration-300 ease-in-out
                        text-lg font-medium`,
                            prefix === '/product' ? 'text-violet-400' : 'text-violet-200'
                        )}
                        prefetch={false}>
                        Product
                    </Link>
                </nav>
                <Link
                    href={`https://services.tiktokshop.com/open/authorize?service_id=${process.env.NEXT_PUBLIC_TIKTOK_SERVICE_ID}`}
                    className={`
                        w-full md:max-w-max
                        text-center rounded-md border-input border shadow-md
                        bg-none text-violet-400
                        hover:bg-gradient-to-tr hover:text-txtcolor 
                        from-violet-400 to-purple-300
                        transition-all duration-300 ease-in-out
                        px-8 py-2 text-lg font-medium
                        `}
                    prefetch={false}>
                    Authorization
                </Link>
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
