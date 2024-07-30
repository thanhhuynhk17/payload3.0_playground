/**
 * v0 by Vercel.
 * @see https://v0.dev/t/X22ruh4OgJU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { cn } from '@/lib/utils'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import IncomePage from '@/components/customUI/IncomePage'
import type { ArrayTextBlock, Screen } from '@/payload-types'
import { GetServerSidePropsContext } from 'next'

type TPageProps = {
    params: { seller_name: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

// https://mycolor.space/gradient3?ori=circle&hex=%23F9F295&hex2=%23E0AA3E&hex3=%23B88A44&submit=submit
export default async function Page({ params, searchParams }: TPageProps) {
    const payload = await getPayloadHMR({ config })
    const { seller_name } = searchParams
    console.log('params', seller_name)

    return <IncomePage sellerName={seller_name as string} />
}
