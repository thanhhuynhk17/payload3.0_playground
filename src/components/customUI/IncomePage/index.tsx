import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Screen, MediaBlock, TextBlock, Media } from '@/payload-types'
import { TableComponent } from '../TableComponent'
import { MyDateRangePicker } from '../MyDateRangePicker'

const goldenContentTW = `
text-2xl
font-extrabold tracking-tighter
bg-gradient-to-r bg-clip-text text-transparent
from-violet-400 to-purple-300
transition-all duration-300 ease-in-out
cursor-pointer
`

let headingBlock: string = 'Doanh thu'

type TIncomePage = {
    sellerName: string | undefined
}

export default async function IncomePage({ sellerName }: TIncomePage) {
    return (
        <section
            className={`
                container min-h-screen max-h-max py-24
                flex flex-col items-center md:items-start justify-start
                gap-y-4 w-[800px]
                `}>
            {sellerName && (
                <div className="">
                    <span className={cn(goldenContentTW, 'absolute blur-xl select-none ')}>
                        {sellerName}
                    </span>
                    <h2 className={cn(goldenContentTW, 'cursor-pointer')}>{sellerName.normalize('NFKC')}</h2>
                </div>
            )}
            <p className="text-xl font-bold text-slate-400">{headingBlock}</p>

            <div className="w-full">
                <MyDateRangePicker></MyDateRangePicker>
                {/* <TableComponent className={'mx-auto'} /> */}
            </div>
        </section>
    )
}
