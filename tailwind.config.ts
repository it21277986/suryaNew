/** @type {import('tailwindcss').Config} */
// noinspection ES6PreferShortImport
import {appColors} from "./src/components/theme/appColors";


module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/flowbite-react/**/*.js",
        "./public/**/*.html",
    ],
    theme: {
        fontFamily: {
            sans: ['Inter', 'sans-serif'] // 'var(--font-chive)'
        },
        borderRadius: {
            'none': '0',
            '2xs': '2px',
            'xs': '8px',
            'sm': '12px',
            DEFAULT: '16px',
            'md': '16px',
            'lg': '20px',
            'xl': '24px',
            '2xl': '28px',
            '3xl': '32px',
            'full': '9999px'
        },
        extend: {
            screens: {
                sm: {max: '640px'},
                md: {max: '768px'},
                lg: {max: '1024px'},
                xl: {max: '1280px'},
                '2xl': {max: '1536px'},
            },
            maxWidth: {
                '8xl': '90rem',
            },
            spacing: {
                '18': '4.5rem',
                '68': '17rem',
                '70': '17.5rem',
                '84': '21rem',
                '88': '22rem',
                '92': '23rem',
            },
            aspectRatio: {
                '4/3': '4 / 3',
                '3/4': '3 / 4',
                '9/16': '9 / 16',
                '16/9': '16 / 9',
                '21/9': '21 / 9',
                '1/1': '1 / 1',
                '15/4': '15 / 4',
            },
            height: {
                screen: ['100vh', '100dvh'],
            },
            maxHeight: {
                'modal-content': ['90vh', '90dvh'],
            },
            gridTemplateRows: {
                '8': 'repeat(8, minmax(0, 1fr))',
                '10': 'repeat(10, minmax(0, 1fr))',
                '12': 'repeat(12, minmax(0, 1fr))',
                '16': 'repeat(16, minmax(0, 1fr))',
            },
            gridTemplateColumns: {
                '8': 'repeat(8, minmax(0, 1fr))',
                '10': 'repeat(10, minmax(0, 1fr))',
                '12': 'repeat(12, minmax(0, 1fr))',
                '16': 'repeat(16, minmax(0, 1fr))',
            },
            gridRow: {
                'span-7': 'span 7 / span 7',
                'span-8': 'span 8 / span 8',
                'span-9': 'span 9 / span 9',
                'span-10': 'span 10 / span 10',
                'span-11': 'span 11 / span 11',
                'span-12': 'span 12 / span 12',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'pattern-p1': "url('/static/images/pattern/p1.svg')",
                'pattern-p2': "url('/static/images/pattern/p2.svg')",
                'pattern-p3': "url('/static/images/pattern/p3.svg')",
                'pattern-p4': "url('/static/images/pattern/DoodlePattern.svg')",
                'pattern-p5': "url('/static/images/pattern/p5.svg')",
                'pattern-p6': "url('/static/images/pattern/p6.svg')",
                'pattern-p7': "url('/static/images/pattern/p7.svg')",
                'pattern-p8': "url('/static/images/pattern/p8.svg')",
                'pattern-p9': "url('/static/images/pattern/p9.svg')",
                'shape-bottom-1': "url('/static/images/shapes/shape-bottom-1.svg')",
            },
            fontSize: {
                '2xs': '0.625rem',
                '5xl': "70px"
            },
            boxShadow: {
                'xs': '0 3px 40px 0 rgba(0, 0, 0, 0.05)',
                'sm': '0px 4px 50px 0px rgba(0, 0, 0, 0.05)',
                'md': '0 25px 60px 0 rgba(0, 0, 0, 0.10)',
                'lg': '0px 50px 90px -30px rgba(0, 0, 0, 0.15)',
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                cursor: 'cursor .6s linear infinite alternate',
                type: 'type 1.8s ease-out .8s 1 normal both',
                'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
            },
            keyframes: {
                type: {
                    '0%': {width: '0ch'},
                    '5%, 10%': {width: '1ch'},
                    '15%, 20%': {width: '2ch'},
                    '25%, 30%': {width: '3ch'},
                    '35%, 40%': {width: '4ch'},
                    '45%, 50%': {width: '5ch'},
                    '55%, 60%': {width: '6ch'},
                    '65%, 70%': {width: '7ch'},
                    '75%, 80%': {width: '8ch'},
                    '85%, 90%': {width: '9ch'},
                    '95%': {width: '10ch'},
                },
            },
            lineClamp: {
                7: '7',
                8: '8',
                9: '9',
                10: '10',
            },
            colors: {

                ...appColors,


                // md-colors
                red: {
                    50: "#ffebee",
                    100: "#ffcdd2",
                    200: "#ef9a9a",
                    300: "#e57373",
                    400: "#ef5350",
                    500: "#f44336",
                    600: "#e53935",
                    DEFAULT: '#F03A47',
                    700: "#d32f2f",
                    800: "#c62828",
                    900: "#b71c1c",
                    a100: "#ff8a80",
                    a200: "#ff5252",
                    a400: "#ff1744",
                    a700: "#d50000"
                },
                pink: {
                    50: "#fce4ec",
                    100: "#f8bbd0",
                    200: "#f48fb1",
                    300: "#f06292",
                    400: "#ec407a",
                    500: "#e91e63",
                    600: "#d81b60",
                    700: "#c2185b",
                    800: "#ad1457",
                    900: "#880e4f",
                    a100: "#ff80ab",
                    a200: "#ff4081",
                    a400: "#f50057",
                    a700: "#c51162"
                },
                purple: {
                    50: "#f3e5f5",
                    100: "#e1bee7",
                    200: "#ce93d8",
                    300: "#ba68c8",
                    400: "#ab47bc",
                    500: "#9c27b0",
                    600: "#8e24aa",
                    700: "#7b1fa2",
                    800: "#6a1b9a",
                    900: "#4a148c",
                    a100: "#ea80fc",
                    a200: "#e040fb",
                    a400: "#d500f9",
                    a700: "#aa00ff"
                },
                deeppurple: {
                    50: "#ede7f6",
                    100: "#d1c4e9",
                    200: "#b39ddb",
                    300: "#9575cd",
                    400: "#7e57c2",
                    500: "#673ab7",
                    600: "#5e35b1",
                    700: "#512da8",
                    800: "#4527a0",
                    900: "#311b92",
                    a100: "#b388ff",
                    a200: "#7c4dff",
                    a400: "#651fff",
                    a700: "#6200ea"
                },
                indigo: {
                    50: "#e8eaf6",
                    100: "#c5cae9",
                    200: "#9fa8da",
                    300: "#7986cb",
                    400: "#5c6bc0",
                    500: "#3f51b5",
                    600: "#3949ab",
                    700: "#303f9f",
                    800: "#283593",
                    900: "#1a237e",
                    a100: "#8c9eff",
                    a200: "#536dfe",
                    a400: "#3d5afe",
                    a700: "#304ffe"
                },
                blue: {
                    50: "#e3f2fd",
                    100: "#bbdefb",
                    200: "#90caf9",
                    300: "#64b5f6",
                    400: "#42a5f5",
                    500: "#2196f3",
                    600: "#1e88e5",
                    700: "#1976d2",
                    800: "#1565c0",
                    900: "#0d47a1",
                    a100: "#82b1ff",
                    a200: "#448aff",
                    a400: "#2979ff",
                    a700: "#2962ff"
                },
                lightblue: {
                    50: "#e1f5fe",
                    100: "#b3e5fc",
                    200: "#81d4fa",
                    300: "#4fc3f7",
                    400: "#29b6f6",
                    500: "#03a9f4",
                    600: "#039be5",
                    700: "#0288d1",
                    800: "#0277bd",
                    900: "#01579b",
                    a100: "#80d8ff",
                    a200: "#40c4ff",
                    a400: "#00b0ff",
                    a700: "#0091ea"
                },
                cyan: {
                    50: "#e0f7fa",
                    100: "#b2ebf2",
                    200: "#80deea",
                    300: "#4dd0e1",
                    400: "#26c6da",
                    500: "#00bcd4",
                    600: "#00acc1",
                    700: "#0097a7",
                    800: "#00838f",
                    900: "#006064",
                    a100: "#84ffff",
                    a200: "#18ffff",
                    a400: "#00e5ff",
                    a700: "#00b8d4"
                },
                teal: {
                    50: "#e0f2f1",
                    100: "#b2dfdb",
                    200: "#80cbc4",
                    300: "#4db6ac",
                    400: "#26a69a",
                    500: "#009688",
                    600: "#00897b",
                    700: "#00796b",
                    800: "#00695c",
                    900: "#004d40",
                    a100: "#a7ffeb",
                    a200: "#64ffda",
                    a400: "#1de9b6",
                    a700: "#00bfa5"
                },
                green: {
                    50: "#e8f5e9",
                    100: "#c8e6c9",
                    200: "#a5d6a7",
                    300: "#81c784",
                    400: "#66bb6a",
                    500: "#4caf50",
                    600: "#43a047",
                    DEFAULT: '#00BD78',
                    700: "#388e3c",
                    800: "#2e7d32",
                    900: "#1b5e20",
                    a100: "#b9f6ca",
                    a200: "#69f0ae",
                    a400: "#00e676",
                    a700: "#00c853"
                },
                lightgreen: {
                    50: "#f1f8e9",
                    100: "#dcedc8",
                    200: "#c5e1a5",
                    300: "#aed581",
                    400: "#9ccc65",
                    500: "#8bc34a",
                    600: "#7cb342",
                    700: "#689f38",
                    800: "#558b2f",
                    900: "#33691e",
                    a100: "#ccff90",
                    a200: "#b2ff59",
                    a400: "#76ff03",
                    a700: "#64dd17"
                },
                lime: {
                    50: "#f9fbe7",
                    100: "#f0f4c3",
                    200: "#e6ee9c",
                    300: "#dce775",
                    400: "#d4e157",
                    500: "#cddc39",
                    600: "#c0ca33",
                    700: "#afb42b",
                    800: "#9e9d24",
                    900: "#827717",
                    a100: "#f4ff81",
                    a200: "#eeff41",
                    a400: "#c6ff00",
                    a700: "#aeea00"
                },
                yellow: {
                    50: "#fffde7",
                    100: "#fff9c4",
                    200: "#fff59d",
                    300: "#fff176",
                    400: "#ffee58",
                    500: "#ffeb3b",
                    600: "#fdd835",
                    DEFAULT: '#FFC107',
                    700: "#fbc02d",
                    800: "#f9a825",
                    900: "#f57f17",
                    a100: "#ffff8d",
                    a200: "#ffff00",
                    a400: "#ffea00",
                    a700: "#ffd600"
                },
                amber: {
                    50: "#fff8e1",
                    100: "#ffecb3",
                    200: "#ffe082",
                    300: "#ffd54f",
                    400: "#ffca28",
                    500: "#ffc107",
                    600: "#ffb300",
                    700: "#ffa000",
                    800: "#ff8f00",
                    900: "#ff6f00",
                    a100: "#ffe57f",
                    a200: "#ffd740",
                    a400: "#ffc400",
                    a700: "#ffab00"
                },
                orange: {
                    50: "#fff3e0",
                    100: "#ffe0b2",
                    200: "#ffcc80",
                    300: "#ffb74d",
                    400: "#ffa726",
                    500: "#ff9800",
                    600: "#fb8c00",
                    700: "#f57c00",
                    800: "#ef6c00",
                    900: "#e65100",
                    a100: "#ffd180",
                    a200: "#ffab40",
                    a400: "#ff9100",
                    a700: "#ff6d00"
                },
                deeporange: {
                    50: "#fbe9e7",
                    100: "#ffccbc",
                    200: "#ffab91",
                    300: "#ff8a65",
                    400: "#ff7043",
                    500: "#ff5722",
                    600: "#f4511e",
                    700: "#e64a19",
                    800: "#d84315",
                    900: "#bf360c",
                    a100: "#ff9e80",
                    a200: "#ff6e40",
                    a400: "#ff3d00",
                    a700: "#dd2c00"
                },
                brown: {
                    50: "#efebe9",
                    100: "#d7ccc8",
                    200: "#bcaaa4",
                    300: "#a1887f",
                    400: "#8d6e63",
                    500: "#795548",
                    600: "#6d4c41",
                    700: "#5d4037",
                    800: "#4e342e",
                    900: "#3e2723"
                },
                grey: {
                    50: "#fafafa",
                    100: "#f5f5f5",
                    200: "#eeeeee",
                    300: "#e0e0e0",
                    400: "#bdbdbd",
                    500: "#9e9e9e",
                    600: "#757575",
                    700: "#616161",
                    800: "#424242",
                    900: "#212121",
                },
                gray: {
                    50: "#fafafa",
                    100: "#f5f5f5",
                    200: "#eeeeee",
                    300: "#e0e0e0",
                    400: "#bdbdbd",
                    500: "#9e9e9e",
                    600: "#757575",
                    700: "#616161",
                    800: "#424242",
                    900: "#212121",
                },
                bluegrey: {
                    50: "#eceff1",
                    100: "#cfd8dc",
                    200: "#b0bec5",
                    300: "#90a4ae",
                    400: "#78909c",
                    500: "#607d8b",
                    600: "#546e7a",
                    700: "#455a64",
                    800: "#37474f",
                    900: "#263238"
                },

                // social
                social: {
                    'youtube': "#FF0302",
                    'facebook': '#35518D',
                    'twitter': "#1da1f2",
                    'linkedin': '#0a66c2',
                    'instagram': '#c32aa3',
                    'google': '#4285f4',
                    'snapchat': '#fffc00',
                    'whatsapp': '#25d366',
                    'tiktok': '#010101',
                    'thumblr': '#35465d',
                    'twitch': '#9146ff',
                    'discord': '#5865f2',
                    'dribbble': '#ea4c89',
                }
            },
        },
    },
    safelist: [
        'w-64',
        'w-1/2',
        'rounded-l-lg',
        'rounded-r-lg',
        'bg-gray-200',
        'grid-cols-4',
        'grid-cols-7',
        'h-6',
        'leading-6',
        'h-9',
        'leading-9',
        'shadow-lg'
    ],
    darkMode: 'class',

    plugins: [],
}

