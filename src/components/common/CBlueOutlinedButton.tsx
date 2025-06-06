import { FC } from "react";
import Link from "next/link";

interface CBlueOutlinedButtonProps {
    text: string;
    url: string;
}

const CBlueOutlinedButton: FC<CBlueOutlinedButtonProps> = ({ text, url }) => {


    return (
        <Link href={url}>
            <button
                className="border-2 border-primary bg-[#EFF6FF] text-primary font-bold regular-17 p-4 rounded-[5px] w-full sm:w-3/4">
                <p className={'text-nowrap'}>{text}</p>
            </button>
        </Link>
    )
}

export default CBlueOutlinedButton;