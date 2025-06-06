import {FC} from "react";
import Link from "next/link";

interface CWhiteButtonProps {
    text: string;
    url: string;
}

const CWhiteButton: FC<CWhiteButtonProps> = ({text, url}) => {


    return (
        <Link href={url}>
            <button
                className="pl-6 pr-6 h-[42px] bg-white text-blue-800 hover:font-bold font-medium regular-17 rounded-[3px] sm:text-sm"
            >
                <p className={'text-nowrap'}>{text}</p>
            </button>
        </Link>
    )
}

export default CWhiteButton;
