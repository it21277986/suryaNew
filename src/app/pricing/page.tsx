"use client";

import { FC, useState } from "react";
import PricingView from "@/components/pricing/PricingView";
import PricingView2 from "@/components/pricing/PricingView2";
import AlternativeSolutionSection from "@/components/pricing/AlternativeSolutionSection";

const PricingPage: FC = () => {
    const [isView1, setIsView1] = useState(true);

    const toggleView = () => {
        setIsView1((prev) => !prev);
    };

    return (
        <>
        <div className="text-6xl font-bold text-center pb-10 mt-36 sm:text-3xl">
                <div className={'flex flex-row gap-2 justify-center items-center pb-3.5'}>
                    <span>Scalable </span>
                    <span className="text-[#1C75BC]">learning </span>
                    <span>for </span>
                </div>
                <div className={'flex flex-row gap-2 items-center justify-center sm:flex-col'}>
                    <span className="text-[#F7941D]">organisations </span>
                    <span>of every size </span>
                </div>
            </div>
            <div className="flex justify-center mt-3">
                <button
                    className={`text-primary ${isView1 ? 'bg-blue-800 text-white' : 'bg-white text-blue-800 border border-blue-800'} font-bold regular-17 p-4 rounded-l-[5px] w-[200px]`}
                    onClick={() => setIsView1(true)}
                >
                    Enterprise
                </button>
                <button
                    className={`text-primary ${!isView1 ? 'bg-blue-800 text-white' : 'bg-white text-blue-800 border border-blue-800'} font-bold regular-17 p-4 rounded-r-[5px] w-[200px]`}
                    onClick={() => setIsView1(false)}
                >
                    Individual
                </button>
            </div>
            {isView1 ? <PricingView /> : <PricingView2 />}
            <AlternativeSolutionSection />
        </>
    );
};

export default PricingPage;
