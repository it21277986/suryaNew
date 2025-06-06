"use client";

import {FC, useState} from "react";
import FourteenDayTrialForm from "@/components/trial/FourteenDayTrialForm";
import AlternativeSolutionSection from "@/components/pricing/AlternativeSolutionSection";

const TrialPage: FC = () => {
    const [isView1, setIsView1] = useState<boolean>(true);

    const toggleView = () => {
        setIsView1((prev) => !prev)
    }

    return (
        <>
            <div className="flex justify-center mt-36">
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
            <FourteenDayTrialForm isEnterpirce={isView1}/> 
            <AlternativeSolutionSection/>
        </>
    );
}

export default TrialPage;
