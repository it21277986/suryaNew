import React from "react";
import CommunityUserCard from "@/components/home/community/CommunityUserCard";

const communityData = [
    {
        title: 'Brands & Startups',
        subtitle: 'Building an engaged community',
        userImage: '/static/images/user/user-1.png'
    },
    {
        title: 'Customer Communities',
        subtitle: 'Having deep relationships',
        userImage: '/static/images/user/user-2.png'
    },
    {
        title: 'Organisational Communities',
        subtitle: 'Scaling your staff while upskilling',
        userImage: '/static/images/user/user-3.png'
    },
    {
        title: 'Coaching Communities',
        subtitle: 'Dedicating space for students',
        userImage: '/static/images/user/user-4.png'
    },
    {
        title: 'Membership Communities',
        subtitle: 'Subscriptions for your members',
        userImage: '/static/images/user/user-5.png'
    },
    {
        title: 'Clubs & Schools',
        subtitle: 'Educating the next generation',
        userImage: '/static/images/user/user-6.png'
    }
];

const CommunitySection = () => {
    const chunkedCommunityData = [];
    const chunkSize = 3;

    for (let i = 0; i < communityData.length; i += chunkSize) {
        chunkedCommunityData.push(communityData.slice(i, i + chunkSize));
    }

    return (
        <section className="flex justify-center flex-col items-center h-full bg-white pt-20 pb-20 sm:pt-10 sm:pl-5 sm:pr-5 sm:pb-10"
                 style={{background: 'linear-gradient(180deg, #4C0F4A 0%, #001C27 99.2%)'}}
        >
            <div className="text-6xl font-bold text-center pb-20 sm:text-3xl sm:pb-10">
                <div className={'flex flex-col justify-center text-white'}>
                    <span className={'sm:mb-0 pb-3.5'}>Discover training solutions for</span>
                    <span>every team and use case</span>
                </div>
            </div>

            {chunkedCommunityData.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-row gap-8 mb-8 sm:flex-col">
                    {row.map((feedback, index) => (
                        <CommunityUserCard key={index} {...feedback} />
                    ))}
                </div>
            ))}
        </section>
    );
}

export default CommunitySection;
