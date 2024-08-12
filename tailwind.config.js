import { fontFamily } from 'tailwindcss/defaultTheme'
import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    // important: true,
    content: [
        './pages/**/*.{ts,tsx,js,jsx}',
        './components/**/*.{ts,tsx,js,jsx}',
        './app/**/*.{ts,tsx,js,jsx}',
        './src/**/*.{ts,tsx,js,jsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            fontFamily: {
                heading: ['var(--font-heading)', ...fontFamily.sans],
                body: ['var(--font-body)', ...fontFamily.sans],
            },
            colors: {
                // [BEGIN] custom colors
                base60: '#1D1D1B',
                primary30: '#E0AA3E',
                secondary10: '#F5F5F5',
                txtcolor: '#F5F5F5',
                // [END] custom colors
            },
        },
    },
    darkMode: 'class',
    plugins: [nextui()],
    // blocklist: ['table'],
}
