import Link from "next/link";
import CWhiteButton from "@/components/common/CWhiteButton";

const GetStartedSection = () => {

    return (
        <section>
            <div className="flex justify-center items-center h-full bg-white pt-10 pb-14"
                 style={{background: 'linear-gradient(180deg, #0155ED 0%, #355692 99.2%)'}}>
                <div
                    className="flex flex-col text-center justify-center text-white items-center gap-10 pb-10 sm:text-3xl p-10 sm:pb-5">
                    <span className={'text-6xl font-bold sm:text-3xl'}>Ready to get started?</span>

                    <CWhiteButton text={'Request a Demo'} url={'/demo'} />

                    <span className="text-[16px]">Its just one click away for growth.</span>
                </div>
            </div>
        </section>
    );
}

export default GetStartedSection;
