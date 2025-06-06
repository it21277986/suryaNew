import {FC} from "react";
import CWhiteButton from "@/components/common/CWhiteButton";

const AlternativeSolutionSection: FC = () => {
    return (
        <section>
            <div className="flex justify-center items-center h-full bg-white pt-20 pb-20 sm:pr-5 sm:pl-5 sm:pb-10"
                 style={{background: 'linear-gradient(180deg, #0155ED 0%, #355692 99.2%)'}}>
                <div
                    className="flex flex-col text-center justify-center text-white items-center gap-10 sm:text-3xl sm:pb-5">
                    <span className={'text-6xl font-bold sm:text-3xl'}>Alternative solutions</span>
                    <span className="regular-24 uppercase">PREMIUM MEMBER EXPERIENCE</span>
                    <span className="regular-17">
                        <span>Launch your own branded community platform to scale your business</span>
                        <br/>
                        <span>operations and sales.</span>
                    </span>
                    <div className={'p-5'}>
                        <CWhiteButton text={'Send us your requirement'} url={'/demo'}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AlternativeSolutionSection;
