import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Screen, MediaBlock, TextBlock, Media } from '@/payload-types'
import { TableComponent } from '../TableComponent'

const goldenContentTW = `
text-2xl
py-4 font-extrabold tracking-tighter
bg-gradient-to-r bg-clip-text text-transparent
from-violet-400 to-purple-300
transition-all duration-300 ease-in-out
cursor-pointer
`

let headingBlock: string = 'Doanh thu'

type TIncomePage = {
    sellerName: string
}

export default async function IncomePage({ sellerName }: TIncomePage) {
    return (
        <section
            className={`
                container min-h-screen max-h-max py-24
                flex flex-col items-center md:items-start justify-start
                gap-y-4
                `}>
            <div className="relative flex w-full items-center justify-between rounded-lg shadow-md px-4">
                <p className='text-2xl font-bold text-slate-400'>{headingBlock}</p>
                {sellerName &&
                (
                    <div className="">
                        <span className={cn(goldenContentTW, 'absolute blur-xl select-none ')}>
                            {sellerName}
                        </span>
                        <h2 className={cn(goldenContentTW, 'cursor-pointer')}>{sellerName}</h2>
                    </div>
                )}
            </div>

            <div className="w-full">
                <TableComponent className={'w-[800px] mx-auto'} />
            </div>
        </section>
    )
}
