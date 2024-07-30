import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import HttpClient from './lib/http.helper'

const COOKIES_AUTH_KEY = 'tiktokAuth'
const http = new HttpClient()
// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest, res: NextResponse) {
    res = NextResponse.next()
    const token = req.cookies.get(COOKIES_AUTH_KEY)
    if (token) {
        console.log('Token already exists!')
        const seller_name = req.cookies.get('seller_name')
        res = NextResponse.rewrite(
            new URL(`/?seller_name=${seller_name?.value}`, req.url)
        )
        return res
    }
    console.log('Token not found')
    if (req.nextUrl.searchParams.get('code')) {
        const authCode = req.nextUrl.searchParams.get('code')
        console.log('code ne', authCode)

        //params for auth
        const params = {
            app_key: process.env.TIKTOK_SERVICE_KEY,
            app_secret: process.env.TIKTOK_SECRET,
            auth_code: authCode,
            grant_type: 'authorized_code',
        }
        const authRes = await http.getWithParams(
            `${process.env.OAUTH_URL}/api/v2/token/get`,
            params
        )
        console.log('authRes: ', authRes)
        if (!authRes) {
            console.log('no respone')
            return
        }
        if (authRes.code === 36004004) {
            console.log('invalid auth code')
            // toast.error("Lỗi xác thực, ấn nút 'Authorization' để uỷ quyền mới.");
            return
        }
        if (authRes.code !== 0) {
            console.log('invalid respone')
            return
        }

        // toast.success("Xác thực thành công!");
        res.cookies.set(COOKIES_AUTH_KEY, authRes.data.access_token)
        res.cookies.set('seller_name', authRes.data.seller_name)

        return res
    }
}

// // See "Matching Paths" below to learn more
export const config = {
    matcher: ['/', '/product'],
}
