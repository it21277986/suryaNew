export const ALLOW_MULTIPLE_ROLE = {allow: false, max: 3}


export const COURSE_LANGUAGES = [
    "English",
    "Spanish",
    "French",
    "Deutsch"
]

export const PRICING_CURRENCIES = [
    'USD'
]

// export const SOCIAL_LINKS = {
// 	instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM,
// 	twitter: process.env.NEXT_PUBLIC_SOCIAL_TWITTER,
// 	facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK,
// }


export const envIsBusinessV2FlagEnabled = () => ['1', 'true'].includes(process.env.NEXT_ENTERPRISE_PUBLIC_FLAG?.toString() ?? '')

export const envLogoPath = (color: 'light' | 'dark' = 'dark') => {
    const defaultLogo = color === 'light' ? '/Slogo-Light.svg' : '/Slogo.svg'
    if (envIsBusinessV2FlagEnabled()) {
        const logoPath = (color === 'light' ?
                process.env.NEXT_ENTERPRISE_PUBLIC_LOGO_PATH_LIGHT :
                process.env.NEXT_ENTERPRISE_PUBLIC_LOGO_PATH
        )?.toString()

        return (!logoPath || logoPath.length <= 0) ? defaultLogo : logoPath
    }
    return defaultLogo
}

// NAVIGATION
export const HEADER_NAV_LINKS = [
    {href: '/pricing', key: 'pricing', label: 'Pricing'},
    // {href: '/14-day-trial', key: '14DayTrial', label: '14 Day Trial'},
    {href: '/demo', key: 'demo', label: 'Request a Demo'},
];

export const HEADER__SLIDER_NAV_LINKS = [
    {href: '/', key: 'home', label: 'Home'},
    {href: '/pricing', key: 'pricing', label: 'Pricing'},
    // {href: '/14-day-trial', key: '14DayTrial', label: '14 Day Trial'},
    {href: '/demo', key: 'demo', label: 'Request a Demo'},
];

export const FOOTER_NAV_LINKS = [
    {href: '/pricing', key: 'pricing', label: 'Pricing'},
    {href: '/demo', key: 'demo', label: 'Request a Demo'},
    {href: '/14-day-trial', key: '14DayTrial', label: '14 Day Trial'},
];

export const FOOTER_NAV_LINKS_TWO = [
    {href: '/demo', key: 'contact', label: 'Contact'},
    {href: 'https://www.loonum.com/story/', key: 'about', label: 'About Loonum'},
    {href: '#', key: 'Policy', label: 'Privacy Policy'},
    {href: '#', key: 'Terms', label: 'Terms of service'},
];

