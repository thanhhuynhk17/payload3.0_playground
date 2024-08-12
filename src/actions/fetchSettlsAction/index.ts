'use server'

import { MyDateRangeSchema } from '@/lib/types'
import { DateValue, RangeValue } from '@nextui-org/react'
import { fetchSettls } from './fetchSettls'

type TActionRes = {
    error?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const fetchSettlsAction = async (data: unknown) => {
    const dateRange = MyDateRangeSchema.safeParse(data)
    if (!dateRange.success) {
        let errMsg = ''
        dateRange.error.issues.forEach((issue) => {
            errMsg = errMsg + issue.path[0] + ': ' + issue.message + '.'
        })

        return {
            error: errMsg,
        }
    }
    // Timestamp precision to second(s)
    const validData = dateRange.data
    validData.start = validData.start / 1000
    validData.end = validData.end / 1000
    if (validData.start === validData.end) {
        validData.end = validData.start + 86399;
    }
    // fetch settlements
    const res = await fetchSettls(validData, false, undefined)
    const resErr = res as TActionRes | undefined
    if (resErr){
        return {
            error: resErr.error
        }
    }
    return res
}

export type FetchSettlsAction = typeof fetchSettlsAction
