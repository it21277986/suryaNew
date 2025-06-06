import {FC} from "react";
import Image from "next/image";

interface UserFeedbackCardProps {
    name: string;
    userImage: string;
    company: string;
    feedback: string;
}

const UserFeedbackCard: FC<UserFeedbackCardProps> = ({name,userImage, company, feedback}) => {

    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-[5px] p-5 w-[420px] h-[240px] sm:w-[320px]"
            style={{boxShadow: '0px 4px 12px 2px rgba(0, 0, 0, 0.10)'}}
        >
            <div className="flex flex-col items-start justify-center gap-3 p-2.5">
                <div className="">
                    <span className={'regular-17'}>{feedback}</span>
                </div>

                <div className="flex flex-row items-center justify-center gap-1">
                    <Image src={userImage} width={66} height={66} alt="user profile" className="rounded-full"/>
                    <div className="flex flex-col items-start justify-center ml-2">
                        <span className="font-bold regular-24 sm:regular-17">{name}</span>
                        <span className="regular-17 sm:regular-15">{company}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserFeedbackCard;
