'use client'
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/m7VBgUGZ1MQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
    return (
        <header className="bg-background shadow">
            <div className="container flex items-center justify-between py-4 px-4 md:px-6">
                <Link href="#" className="flex items-center" prefetch={false}>
                    <MountainIcon className="h-6 w-6 mr-2" />
                    <span className="text-lg font-bold">Fimee Inc</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-6">
                    <Link
                        href="#"
                        className="text-muted-foreground hover:text-foreground"
                        prefetch={false}>
                        Features
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
                <Button>Get Started</Button>
            </div>
        </header>
    )
}

function MountainIcon(props: unknown) {
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

function XIcon(props: unknown) {
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
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}
