import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'

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
        <html lang="en">
            <body className={cn('antialiased', fontHeading.variable, fontBody.variable)}>
                {children}
            </body>
        </html>
    )
}
