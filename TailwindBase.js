import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'
const xsPixels = '360px'

const withOpacity = (colorVariable) => {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rbga(var(${colorVariable}), ${opacityValue})`
        }
        return `rgb(var(${colorVariable}))`
    }
}

const config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        screens: {
            'xs': xsPixels,
            ...defaultTheme.screens,
        },
        extend: {
            animation: {
                wiggle: 'wiggle 5s infinite'
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': {
                        transform: 'translateY(0.5rem) scale(0.5)'
                    },
                    '50%': {
                        transform: 'translateY(0) scale(0.5)'
                    }
                }
            },
            lineClamp: {
                7: '7',
                8: '8',
                9: '9',
                10: '10',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        typography
    ],
    important: true
}

const zero = 0;
const xs = xsPixels.replace('px', '') * 1;
const sm = defaultTheme.screens.sm.replace('px', '') * 1;
const md = defaultTheme.screens.md.replace('px', '') * 1;
const lg = defaultTheme.screens.lg.replace('px', '') * 1;
const xl = defaultTheme.screens.xl.replace('px', '') * 1;
const xxl = defaultTheme.screens['2xl'].replace('px', '') * 1;

export default config
export { zero }
export { xs }
export { sm }
export { md }
export { lg }
export { xl }
export { xxl }
