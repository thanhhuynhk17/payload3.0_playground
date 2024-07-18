/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    mode: 'jit',
    important: true,
    content: [
        './pages/**/*.{ts,tsx,js,jsx}',
        './components/**/*.{ts,tsx,js,jsx}',
        './app/**/*.{ts,tsx,js,jsx}',
        './src/**/*.{ts,tsx,js,jsx}',
    ],
    prefix: '',
    theme: {
        // container: {
        //     center: true,
        //     padding: '2rem',
        //     screens: {
        //         '2xl': '1400px',
        //     },
        // },
        extend: {
            colors:{
                base60: '#1D1D1B',
                primary30: '#B58410',
                txtcolor: '#F5F5F5',
                secondary10: '#F5F5F5',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
    // corePlugins: { // replaced by remove tailwind base in global css
    //     preflight: false
    // },
    blocklist: ["table"]
}
