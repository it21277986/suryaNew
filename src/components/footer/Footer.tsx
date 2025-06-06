import { FC } from "react";
import { envLogoPath, FOOTER_NAV_LINKS, FOOTER_NAV_LINKS_TWO, HEADER_NAV_LINKS } from "@/base/constants";
import Link from "next/link";
import Image from "next/image";

const Footer: FC = () => {
    return (
        <footer className="w-full relative h-[300px] px-[66px] py-4 sm:h-[510px] sm:px-[33px] border-t-2 bg-[#111928]">
            <div className="flex justify-between items-center flex-row sm:flex-col pt-10">

                {/*Logo - Flex start*/}
                <div className={'flex flex-col gap-20 items-start sm:items-center'}>
                    <Link href={'/'}>
                        <Image src={envLogoPath('light')} width={250} height={78} alt="logo" className="w-[250px] h-[78px] md:w-[250px]" />
                    </Link>
                    <div className="flex flex-row space-x-7 mt-5 md:mt-0 md:space-x-3 md:justify-start">
                        <Link href={'#'}>
                            <Image src="/static/icons/Link - Twitter.svg" alt="twitter" width={25} height={25} className={'md:w-8 md:h-8 cursor-pointer'} />
                        </Link>
                        <Link href={'#'}>
                            <Image src="/static/icons/Link - GitHub.svg" alt="gitHub" width={25} height={25} className={'md:w-8 md:h-8 cursor-pointer'} />
                        </Link>
                        <Link href={'#'}>
                            <Image src="/static/icons/Link - Community Slack.svg" alt="slack" width={25} height={25} className={'md:w-8 md:h-8 cursor-pointer'} />
                        </Link>
                        <Link href={'#'}>
                            <Image src="/static/icons/Link - YouTube.svg" alt="youtube" width={25} height={25} className={'md:w-8 md:h-8 cursor-pointer'} />
                        </Link>
                    </div>
                </div>

                {/*Nav Items - Flex middle*/}
                <nav className="flex gap-40 font-medium regular-17 md:gap-10 sm:mt-6 lg:gap-5 md:w-full justify-center">
                    <ul className={'space-y-1'}>
                        <h2 className="font-bold text-gray-400">Company</h2>
                        {FOOTER_NAV_LINKS.map((link) => (
                            <Link href={link.href} key={link.key}
                                className="flex justify-start items-start cursor-pointer transition-all regular-17 text-gray-600 hover:font-bold pt-5">
                                {link.label}
                            </Link>
                        ))}
                    </ul>
                    <ul>
                        <h2 className="font-bold text-gray-400">Resources</h2>
                        {FOOTER_NAV_LINKS_TWO.map((link) => (
                            <Link href={link.href} key={link.key}
                                className="flex justify-start items-start cursor-pointer transition-all regular-17 text-gray-600 hover:font-bold pt-5">
                                {link.label}
                            </Link>
                        ))}
                    </ul>
                </nav>

                {/*Social Items - Flex End*/}
                {/* <div className="flex flex-col sm:mt-6 md:w-full">
                    <div className="flex flex-row space-x-4 mt-10 md:mt-0 md:space-x-3 md:justify-start">
                        <Image src="/static/icons/facebook.svg" alt="facebook" width={41} height={41} className={'md:w-8 md:h-8'}/>
                        <Image src="/static/icons/twitter.svg" alt="twitter" width={41} height={41} className={'md:w-8 md:h-8'}/>
                        <Image src="/static/icons/instagram.svg" alt="instagram" width={41} height={41} className={'md:w-8 md:h-8'}/>
                        <Image src="/static/icons/youtube.svg" alt="youtube" width={41} height={41} className={'md:w-8 md:h-8'}/>
                    </div>

                    <div
                        className="flex text-center justify-end items-end text-[12px] pt-14 md:pt-3 md:justify-start md:text-center md:pb-10">
                        © {new Date().getFullYear()} Loonum | All rights reserved
                    </div>
                </div> */}

            </div>
        </footer>
    );
}

export default Footer;
