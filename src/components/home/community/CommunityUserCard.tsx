import {FC} from "react";
import Image from "next/image";

interface CommunityUserCardProps {
    userImage: string;
    title: string;
    subtitle: string;
}

const CommunityUserCard: FC<CommunityUserCardProps> = ({title,userImage, subtitle}) => {

    return (
        <div className="relative bg-cover bg-center bg-no-repeat rounded-[5px] w-[420px] h-[260px] sm:w-[320px]" style={{backgroundImage: `url(${userImage})`}}>
            {/*Text Area*/}
            <div className="absolute bottom-0 left-0 w-full">
                <div className="bg-black bg-opacity-50 pt-3 pb-3 pl-5 flex flex-col">
                    <span className="font-bold text-white regular-24 sm:regular-17">{title}</span>
                    <span className="regular-17 text-white sm:regular-15">{subtitle}</span>
                </div>
            </div>
        </div>


    )
}

export default CommunityUserCard;
