import React from "react";
import Link from "next/link";
import CBlueButton from "@/components/common/CBlueButton";

const upskillData = [
    {
        title: 'Your community, courses, and content – all in one place.',
        description: 'Gone are the days of needing to make a whole bunch of different tools work together. With Loonum, you can combine the exciting, interactive nature of a community with your content — all in one seamless experience.',
        image: '/static/images/upskill-section/image-1.png'
    },
    {
        title: 'Courses, group chats, events, rich profile, and more.',
        description: 'Your members are the star of the show — they just need the tools to connect with each other and shine. You want an active, buzzing community. And so do your members. With Loonum you get powerful engagement features so that you can empower your members to build that vision with you.',
        image: '/static/images/upskill-section/image-2.png'
    },
    {
        title: 'Whether you are business or an institute, with annual or monthly recurring subscriptions — Loonum has you covered.',
        description: 'Many of the top creators and brands run their entire business on Loonum. You can easily start accepting payments in minutes. Whether you’re offering a membership, one-time access to content, providing free trials or monthly recurring subscriptions —  Loonum has you covered.',
        image: '/static/images/upskill-section/image-3.png'
    },
    {
        title: 'Manage and scale your community operations',
        description: 'Get back the precious time you currently spend on repetitive, manual tasks so that you can focus on more meaningful work. Loonum comes with powerful workflows, integrations, and AI-powered content and analytics tools to help you create an extraordinary member experience.',
        image: '/static/images/upskill-section/image-4.png'
    },
];

const UpskillSection = () => {
    return (
        <section
            className="flex justify-center flex-col items-center h-full bg-white pt-20 pb-20 sm:pl-6 sm:pr-6 sm:-mt-24">
            <div className="text-6xl font-bold text-center pb-5 sm:text-3xl sm:pb-5">
                <div className={'flex flex-col justify-center'}>
                    <span className={'sm:mb-0 pb-3.5'}>Upskill at the pace of change</span>
                    <p className={'text-[#F7941D]'}>and grow <span className={'text-[#0241B3]'}>from there</span></p>
                </div>
            </div>

            <p className={'flex justify-center regular-17 text-center pb-12'}>Help drive business outcomes with your
                learning
                strategy.</p>

            {/* Content */}
            {/*<div className="flex-grow p-2 flex justify-center">*/}
            {/*    <div className="grid grid-cols-1 gap-16 sm:gap-10">*/}
            {/*        /!* Map over description and image pairs *!/*/}
            {/*        {upskillData.map((data, index) => (*/}
            {/*            <div key={index} className="grid grid-cols-2 sm:pl-0 sm:pr-10">*/}
            {/*                /!* Image Section *!/*/}
            {/*                {(index % 2 !== 0) ? (*/}
            {/*                    <div className="col-span-1 ml-40 sm:w-[160px] sm:ml-0">*/}
            {/*                        /!* Illustration or Image *!/*/}
            {/*                        <img src={`${data.image}`} alt="Illustration" width={'500px'}/>*/}
            {/*                    </div>*/}
            {/*                ) : null}*/}

            {/*                /!* Description Section *!/*/}
            {/*                <div*/}
            {/*                    className={`col-span-1 ${index % 2 !== 0 ? 'pl-14 pr-60 pt-2 sm:pl-10 sm:pt-0' : 'pt-5 pl-60 pr-20 sm:pl-0 sm:pt-0'}`}>*/}
            {/*                    <div className="space-y-4">*/}
            {/*                        <p className={'font-bold regular-24 sm:regular-17'}>{data.title}</p>*/}
            {/*                        <p className={'regular-17 sm:regular-15'}>{data.description}</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}

            {/*                /!* Image Section *!/*/}
            {/*                {(index % 2 === 0) ? (*/}
            {/*                    <div className="col-span-1 sm:w-[160px] sm:pr-0 sm:ml-5">*/}
            {/*                        /!* Illustration or Image *!/*/}
            {/*                        <img src={`${data.image}`} alt="Illustration" width={'500px'}/>*/}
            {/*                    </div>*/}
            {/*                ) : null}*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="flex-grow p-10 sm:p-5 flex justify-center">
                <div className="flex flex-col gap-16">

                    {/* Static text instead of map */}
                    <div className="flex flex-row items-center justify-center gap-5 space-x-24 sm:space-x-0 sm:flex-col">
                        {/* Image Section */}
                        <div className="hidden sm:block">
                            {/* Illustration or Image */}
                            <img src="/static/images/upskill-section/image-1.png" alt="Illustration" width={'500px'}/>
                        </div>

                        {/* Description Section */}
                        <div className="w-[400px] pl-10 sm:pt-5 sm:pl-0 sm:w-full">
                            <div className="space-y-4">
                                <p className={'font-bold regular-24 sm:regular-17'}>
                                    Your community, courses, and content – all in one place.
                                </p>
                                <p className={'regular-17 sm:regular-15'}>
                                    Gone are the days of needing to make a whole bunch of different tools work together.
                                    With Loonum, you can combine the exciting, interactive nature of a community with
                                    your content — all in one seamless experience.
                                </p>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="sm:hidden">
                            {/* Illustration or Image */}
                            <img src="/static/images/upskill-section/image-1.png" alt="Illustration" width={'500px'}/>
                        </div>
                    </div>

                    <div className="flex flex-row items-center gap-5 space-x-28 sm:space-x-0 justify-center sm:flex-col">
                        {/* Image Section */}
                        <div className="">
                            {/* Illustration or Image */}
                            <img src="/static/images/upskill-section/image-2.png" alt="Illustration" width={'500px'}/>
                        </div>

                        {/* Description Section */}
                        <div className="w-[400px] sm:pt-5 sm:w-full">
                            <div className="space-y-4">
                                <p className={'font-bold regular-24 sm:regular-17'}>
                                    Courses, group chats, events, rich profile, and more.
                                </p>
                                <p className={'regular-17 sm:regular-15'}>
                                    Your members are the star of the show — they just need the tools to connect with
                                    each other and shine. You want an active, buzzing community. And so do your members.
                                    With Loonum you get powerful engagement features so that you can empower your
                                    members to build that vision with you.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second set of static text */}
                    <div className="flex flex-row items-center gap-5 space-x-24 sm:space-x-0 justify-center sm:flex-col">

                        <div className="hidden sm:block">
                            {/* Illustration or Image */}
                            <img src="/static/images/upskill-section/image-3.png" alt="Illustration" width={'500px'}/>
                        </div>

                        {/* Description Section */}
                        <div className="w-[400px] pl-10 sm:pt-5 sm:pl-0 sm:w-full">
                            <div className="space-y-4">
                                <p className={'font-bold regular-24 sm:regular-17'}>
                                    Whether you are a business or an institute, with annual or monthly recurring
                                    subscriptions — Loonum has you covered.
                                </p>
                                <p className={'regular-17 sm:regular-15'}>
                                    Many of the top creators and brands run their entire business on Loonum. You can
                                    easily start accepting payments in minutes. Whether you’re offering a membership,
                                    one-time access to content, providing free trials or monthly recurring subscriptions
                                    — Loonum has you covered.
                                </p>
                            </div>
                        </div>

                        {/* Image Section */}
                        <div className="sm:hidden">
                            {/* Illustration or Image */}
                            <img src="/static/images/upskill-section/image-3.png" alt="Illustration" width={'500px'}/>
                        </div>
                    </div>

                    {/* Second set of static text */}
                    <div className="flex flex-row items-center gap-5 space-x-28 sm:space-x-0 justify-center sm:flex-col">
                        {/* Image Section */}
                        <div className="">
                        {/* Illustration or Image */}
                            <img src="/static/images/upskill-section/image-4.png" alt="Illustration" width={'500px'}/>
                        </div>

                        {/* Description Section */}
                        <div className="w-[400px] sm:pt-5 sm:w-full">
                            <div className="space-y-4">
                                <p className={'font-bold regular-24 sm:regular-17'}>
                                    Manage and scale your community operations
                                </p>
                                <p className={'regular-17 sm:regular-15'}>
                                    Get back the precious time you currently spend on repetitive, manual tasks so that
                                    you can focus on more meaningful work. Loonum comes with powerful workflows,
                                    integrations, and AI-powered content and analytics tools to help you create an
                                    extraordinary member experience.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div
                className={'flex flex-row gap-5 items-end justify-end ml-[550px] sm:justify-center sm:items-center sm:m-0 sm:p-0 sm:mt-10'}>
                <CBlueButton text={'Compare Plans'} url={'/pricing'}/>
                <CBlueButton text={'Request a Demo'} url={'/demo'}/>
            </div>
        </section>
    );
}

export default UpskillSection;
