import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/customUI/Navbar'

const fontHeading = Inter({
    subsets: ['vietnamese'], // latin
    display: 'swap',
    variable: '--font-heading',
})

const fontBody = Inter({
    subsets: ['vietnamese'], // latin
    display: 'swap',
    variable: '--font-body',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={cn('antialiased', fontHeading.variable, fontBody.variable)}>
                <div className="flex flex-col min-h-[100vh] gap-8 overflow-hidden">
                    <Navbar />
                    <main className="flex-1 overflow-hidden overflow-y-auto">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    )
}
