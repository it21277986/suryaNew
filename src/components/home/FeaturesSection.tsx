'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CBlueButton from "@/components/common/CBlueButton";

type TabImages = {
    [key: string]: string;
};

const FeaturesSection = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [gradientStyle, setGradientStyle] = useState<string>('');
    const [imageLoaded, setImageLoaded] = useState(true);

    const tabImages: TabImages = {
        Dashboard: '/static/images/features/Dashboard.svg',
        Teams: '/static/images/features/Teams.svg',
        Courses: '/static/images/features/Courses.svg',
        Discussions: '/static/images/features/Discussions.svg',
        Scheduling: '/static/images/features/Schedule.svg',
    };

    const handleTabClick = (tab: string) => {
        setImageLoaded(false);
        setActiveTab(tab);
    };

    useEffect(() => {
        const updateGradient = () => {
            const newGradientStyle = window.innerWidth <= 640
                ? 'linear-gradient(180deg, #001C27 0%, #630091 73%, #FFFFFF 73%, #FFFFFF 100%)'
                : 'linear-gradient(180deg, #001C27 0%, #630091 52%, #FFFFFF 52%, #FFFFFF 100%)';
            setGradientStyle(newGradientStyle);
        };

        updateGradient();
        window.addEventListener('resize', updateGradient);

        return () => {
            window.removeEventListener('resize', updateGradient);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const spanElement = document.querySelector('.animate-slider:last-of-type span') as HTMLElement;

            if (spanElement) {
                let animationPercentage: number;

                if (window.innerWidth <= 640) {
                    animationPercentage = 90;
                    spanElement.style.paddingLeft = '6px';
                } else {
                    const screenWidth = window.innerWidth;
                    const baseWidth = 640;
                    const basePercentage = 98;

                    animationPercentage = (basePercentage * baseWidth) / screenWidth;
                    spanElement.style.paddingLeft = '14px';
                }

                const keyframes = `
                    @keyframes reveal {
                        0% {opacity:0;width:0;}
                        20% {opacity:1;width:0;}
                        30% {width:${animationPercentage}vw;}
                        80% {opacity:1;}
                        100% {opacity:0;width:${animationPercentage}vw;}
                    }
                `;

                const oldStyleTag = document.getElementById('reveal-keyframes');
                if (oldStyleTag) oldStyleTag.remove();

                const styleTag = document.createElement('style');
                styleTag.setAttribute('id', 'reveal-keyframes');
                styleTag.innerHTML = keyframes;
                document.head.appendChild(styleTag);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <section className="flex justify-center flex-col pt-[150px] items-center bg-white sm:pl-6 sm:pr-6"
            style={{ background: gradientStyle }}>
            <div className="text-6xl font-bold text-center pb-5 sm:text-3xl sm:pb-5">
                <div className="flex flex-col justify-center items-center">
                    <p className="sm:mb-0 text-white pb-3.5">
                        Elevate your team&apos;s <span className="text-[#F7941D]">skills </span>
                    </p>
                    <div className="flex sm:flex-col">
                        <div className="text-white animate-slider sm:!animate-slider">for</div>
                        <div className="animate-slider h-[9vh] sm:h-auto">
                            <span className="text-[#7DABFF]">unparalleled growth.</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center text-center regular-17 pt-4 pb-12 text-white">
                <p>Transforming Your Competitive Landscape Through Strategic Workforce</p>
                <p>Building. Elevate Your Business with a Skilled and Talented Team</p>
            </div>

            <div className="flex flex-row gap-8 pl-12 pr-12 text-white sm:flex-col sm:pl-0 sm:pr-0 sm:gap-2 sm:pb-10">
                <div className="flex flex-row gap-5 justify-center items-center p-5 rounded-[5px]"
                    style={{ border: 'solid 0.2px gray' }}>
                    <Image src="/static/icons/MagicWand.svg" alt="Magic Wand" width={24} height={24} />
                    <p className="regular-17">Strengthen critical skills with a trusted platform</p>
                </div>

                <div className="flex flex-row gap-5 justify-center items-center p-5 rounded-[5px]"
                    style={{ border: 'solid 0.2px gray' }}>
                    <Image src="/static/icons/TerminalWindow.svg" alt="Terminal Window" width={24} height={24} />
                    <p className="regular-17">Develop, retain, and advance critical talent</p>
                </div>

                <div className="flex flex-row gap-5 justify-center items-center p-5 rounded-[5px]"
                    style={{ border: 'solid 0.2px gray' }}>
                    <Image src="/static/icons/CurrencyEth.svg" alt="Currency Eth" width={24} height={24} />
                    <p className="regular-17">Lower training costs without sacrificing quality</p>
                </div>

                <div className="flex flex-row gap-5 justify-center items-center p-5 rounded-[5px]"
                    style={{ border: 'solid 0.2px gray' }}>
                    <Image src="/static/icons/Swatches.svg" alt="Swatches" width={24} height={24} />
                    <p className="regular-17">Track and measure skills to demonstrate ROI</p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-16 sm:pb-20 sm:mt-0">
                <div className="regular-17 font-medium text-center text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700 sm:text-[11px]">
                    <ul className="flex flex-wrap -mb-px gap-10 sm:gap-1">
                        {Object.keys(tabImages).map((tab) => (
                            <li key={tab} className="me-2">
                                <button
                                    onClick={() => handleTabClick(tab)}
                                    className={`inline-block p-4 sm:p-0 text-nowrap rounded-t-lg hover:text-gray-600 dark:hover:text-gray-300 ${activeTab === tab ? 'text-white font-bold' : ''}`}
                                    aria-current={activeTab === tab ? 'page' : undefined}
                                >
                                    {tab}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="tab-content pt-4">
                    <Image
                        src={tabImages[activeTab]}
                        alt={activeTab}
                        onLoad={() => setImageLoaded(true)}
                        className={`transition-opacity rounded-sm md:rounded-[5px] duration-500 ease-in-out ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        width={1256}
                        height={785}
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                </div>

                <div className="flex flex-row gap-5 items-center justify-center pt-24 sm:pt-10">
                    <CBlueButton text="Compare Plans" url="/pricing" />
                    <CBlueButton text="Request a Demo" url="/demo" />
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
