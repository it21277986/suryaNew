"use client";

import {FC, useState, useEffect} from "react";
import {envLogoPath, HEADER__SLIDER_NAV_LINKS, HEADER_NAV_LINKS} from "@/base/constants";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import CBlueButton from "@/components/common/CBlueButton";
import HeaderSlider from "@/components/header/HeaderSlider";

type Props = {
    light?: boolean,
}

const Header: FC<Props> = ({light}) => {

    const pathname = usePathname();
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu open/close
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [isSticky]);

    // Check if current route is home
    const isHome = pathname === '/';

    return (
        <header
            className={`w-screen flexBetween mb-[-100px] ${
                isSticky
                    ? "fixed top-0 left-0 right-0 bg-white shadow-sm border-b-4 m-0"
                    : "relative"
            } z-10 px-[66px] py-[20px] sm:px-[33px] transition-all duration-900`}
        >
            <div className="flexCenter space-x-[54px]">
                <Link href={'/'}>
                    <Image width={147} height={32} src={envLogoPath(isSticky ? "dark" : (isHome ? "light" : "dark"))}
                           alt="logo"
                           className="w-[147px] h-[32px] sm:w-[110px]"/>
                </Link>
                <nav className={'sm:hidden pl-3 mt-1.5'}>
                    <ul className="sm:hidden md:hidden h-full gap-7 flex">
                        {HEADER_NAV_LINKS.map((link) => (
                            <Link href={link.href} key={link.key}
                                  className={`flexCenter cursor-pointer transition-all regular-17 text-blue-400 hover:font-bold ${pathname === link.href ? 'font-bold' : ''}`}>
                                {link.label}
                            </Link>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className={'mt-1.5'}>
                <CBlueButton text={'14 Day Trial'} url={'/14-day-trial'} hidden={true}/>
            </div>

            {/*Menu Item Icon - Hamburger Menu*/}
            <div
                className="cursor-pointer hidden sm:inline-block"
                onClick={toggleMenu}
            >
                <Image
                    src={isSticky ? "/static/icons/menu.svg" : (isHome ? "/static/icons/menu-light.svg" : "/static/icons/menu.svg")}
                    alt={"menu"}
                    height={32}
                    width={32}
                />
            </div>

            {/* Render the slider */}
            <HeaderSlider isOpen={isMenuOpen} onClose={closeMenu}>
                {/* Content of the slider */}
                <nav className={'pl-3 pt-20 sm:pl-1'}>
                    <ul className="hidden h-screen flex-col gap-4 2xl:flex">
                        {HEADER__SLIDER_NAV_LINKS.map((link) => (
                            <Link href={link.href} key={link.key} onClick={closeMenu}
                                  className={`cursor-pointer transition-all regular-17 text-blue-400 hover:font-bold ${pathname === link.href ? 'font-bold' : ''}`}>
                                {link.label}
                            </Link>
                        ))}
                    </ul>
                </nav>
            </HeaderSlider>

        </header>
    );
}

export default Header;
