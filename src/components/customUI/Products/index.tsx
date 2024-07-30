import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Screen, MediaBlock, TextBlock, Media } from '@/payload-types'
import { TableComponent } from '../TableComponent'

const goldenContentTW = `
text-5xl md:text-8xl
py-4 font-extrabold tracking-tighter
bg-gradient-to-r bg-clip-text text-transparent
from-violet-400 to-purple-300
transition-all duration-300 ease-in-out
cursor-pointer
`
let headingBlock: string = 'Quản lý sản phẩm'

export default async function Products() {
    return (
        <section
            className={`
                container min-h-screen max-h-max py-24
                flex flex-col items-center md:items-start justify-start
                gap-y-4
                `}>
            <div className="relative flex w-full items-center justify-start">
                <span className={cn(goldenContentTW, 'absolute blur-xl select-none ')}>
                    {headingBlock}
                </span>
                <h1 className={cn(goldenContentTW, 'cursor-pointer')}>{headingBlock}</h1>
            </div>

            <TableComponent />
        </section>
    )
}
