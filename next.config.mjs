import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your Next.js config here
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000'
            },
            {
                protocol: 'https',
                hostname: 'pkvgroup.vn',
            },
            {
                protocol: 'https',
                hostname: 'drive.usercontent.google.com',
                port: ''
            },
        ],
    },
}

export default withPayload(nextConfig)
