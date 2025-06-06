import React, {FC} from 'react';
import Image from "next/image";
import Link from "next/link";

interface PricingCardProps {
    title: string;
    price: string;
    users: string;
    color: string;
    features: string[];
    additionalFeatures: string[];
}

const PricingCard: FC<PricingCardProps> = ({title, price, users, color, features, additionalFeatures}) => {
    return (
        <div className="w-[420px] overflow-hidden bg-white text-black mb-16 sm:mb-10 sm:w-[340px]"
             style={{boxShadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.25)'}}>

            <div className={`flex justify-center items-center  h-[60px]`} style={{backgroundColor: color}}>
                <div className="regular-24 font-bold text-white sm:text-lg">{title}</div>
            </div>

            <div className="w-full bg-white p-6 sm:w-auto">

                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="font-bold regular-17">For your team</div>
                    <div className="flex flex-row gap-2">
                        <Image src="/static/icons/user-group.svg" alt="user-group" width={20} height={20}/>
                        <span className="regular-17">{users}</span>
                    </div>

                    {/* <div className="flex flex-row justify-center items-center font-light">
                       <span className="text-[25px]">{price}</span>
                       <span className="regular-14">month per user</span>
                    </div> */}

                    <div className="pt-3 text-[19px] font-medium text-[#575757]">Billed Monthly or Annually</div>
                </div>

                <div className="justify-center items-center pt-6 pb-6">
                    <Link href={'/demo'}>
                        <button className="bg-[#F7941D] text-white font-bold regular-17 p-4 rounded-[5px] w-full"
                                style={{backgroundColor: color}}>Request Demo
                        </button>
                    </Link>
                    <div className='pt-2'>
                    <Link href={'#'}>
                        <button className="border-2 border-[#F7941D] text-[#F7941D] font-bold regular-17 p-4 rounded-[5px] w-full"
                                style={{borderColor: color, color: color}}>Request Price
                        </button>
                    </Link>
                    </div>
                </div>

                <div className="pt-6 pl-12 pr-12 text-[#575757]">
                    <div className="font-bold regular-17 mb-2">Core Features :</div>
                    <ul>
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-row gap-2 space-y-3">
                                <Image src="/static/icons/Done_ring_round_fill.svg" alt="done-ring-fill" width={19}
                                       height={19} className="pt-3"/>
                                <span className="list-disc regular-15">{feature}</span>
                            </div>
                        ))}
                    </ul>
                </div>

                <div className="pt-6 pl-12 pr-12 text-[#575757]">
                    <div className="font-bold mb-1">Plus :</div>
                    <ul>
                        {additionalFeatures.map((feature, index) => (
                            <div key={index} className="flex flex-row gap-2 space-y-3">
                                <Image src="/static/icons/Done_ring_round.svg" alt="done-ring" width={19} height={19}
                                       className="pt-3"/>
                                <span className="list-disc regular-15">{feature}</span>
                            </div>
                        ))}
                    </ul>
                </div>

            </div>

            <div className="flex justify-center text-center items-center bg-amber-500 h-[60px]"
                 style={{backgroundColor: color}}>
                <div className="flex text-[13px] p-8 uppercase text-white">We can customise a price
                    for your needs based on server and hosting requirements
                </div>
            </div>
        </div>
    );
};
export default PricingCard;
