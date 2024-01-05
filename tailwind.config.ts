import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/features/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            primary: '#2176AE',
            primaryDark: '#1D689A',
            secondary: '#BB0A21',
            accent: '#214E34',
            white: '#fcfcfc',
            black: '#000',
            gray: '#7286A0',
            background: '#100D33',
            backgroundLight: '#1A1551',
            transparent: 'transparent',
            current: 'currentColor',
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
export default config
