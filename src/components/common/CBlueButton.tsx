import {FC} from "react";
import Link from "next/link";

interface CBlueButtonProps {
    text: string;
    url: string;
    hidden?: boolean;
}

const CBlueButton: FC<CBlueButtonProps> = ({text, url,hidden}) => {


    return (
        <Link href={url}>
            <button
                className={`text-white text-center py-2 px-2 w-auto pl-6 pr-6 h-[42px] font-medium regular-17 rounded-[3px] sm:${hidden ? 'hidden' : ''} sm:text-sm`}
                style={{background: 'linear-gradient(90deg, #0176FE 0%, #175AA9 100%)'}}
            >
                <p className={'text-nowrap'}>{text}</p>
            </button>
        </Link>
    )
}

export default CBlueButton;
