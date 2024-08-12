'use server'

import { API_URL } from '@/lib/constants'
import HttpClient from '@/lib/http.helper'
import { SignCalculator } from '@/lib/signAlgorithm'
import { cookies } from 'next/headers'

const signCalculator = new SignCalculator()

// const currencyFormatVND = (price) => {
// 	const config = { style: 'currency', currency: 'VND', maximumFractionDigits: 12 };
// 	const formated = new Intl.NumberFormat('vi-VN', config).format(price);
// 	return formated;
// };
const http = new HttpClient()

export const fetchSettls = async (dateRange, getMore, cursor) => {
    const endpoint = 'api/finance/settlements/search'
    const url = `${API_URL}/${endpoint}`
    let params = {
        app_key: process.env.TIKTOK_SERVICE_KEY,
        timestamp: Math.round(Date.now() / 1000),
    }
    const sign = signCalculator.calcSignature(endpoint, params)
    // const token =  cookies().get('tiktokAuth')
    params = {
        ...params,
        sign: sign,
        access_token: cookies().get('tiktokAuth')?.value
    }
    const data = {
        request_time_from: dateRange.start,
        request_time_to: dateRange.end,
        page_size: 50,
    }
    if (getMore && cursor !== undefined) {
        data.cursor = cursor
    }
    console.log(dateRange)

    const res = await http.postWithParams(url, params, data)
    if (res === undefined || res.code !== 0) {
        return {
            error: 'Lỗi xác thực, uỷ quyền lại bằng cách ấn Authorization',
        }
    }
    if (res.data.settlement_list === undefined) {
        return {
            error: 'Không có dữ liệu.'
        }
    }

    const resListFilter = res.data.settlement_list.filter((item) => {
        const refund = parseInt(item.settlement_info.refund)
        const userPay = parseInt(item.settlement_info.user_pay)
        // console.log(item.order_id, 'userPay, refund', userPay, refund);
        if (isNaN(userPay)) {
            return false
        }
        if (userPay !== refund) {
            return item
        }
    })
    const resList = resListFilter.map((item) => {
        return {
            order_id: item.order_id,
            settlement_amount: parseInt(item.settlement_info.settlement_amount),
            settlement_time: new Date(
                parseInt(item.settlement_info.settlement_time + '000')
            ).toLocaleDateString('en-GB'),
        }
    })

    return {
        error: undefined,
        more: res.data.more,
        next_cursor: res.data.next_cursor,
        data: resList,
    }
}
