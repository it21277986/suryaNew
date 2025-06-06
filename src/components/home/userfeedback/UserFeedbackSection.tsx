import React from 'react';
import UserFeedbackCard from "@/components/home/userfeedback/UserFeedbackCard";

const userFeedbacks = [
    {
        name: 'Jane Cummings',
        userImage: '/static/avatars/avatar-1.svg',
        company: 'Logistic Online',
        feedback: 'Our members are so impressed. It\'s intuitive. Its clean. It distraction free. I am so glad we made decision!'
    },
    {
        name: 'Rich Norman',
        userImage: '/static/avatars/avatar-2.svg',
        company: 'Natural Foods',
        feedback: 'I consider using something else but Loonum was the winner. Its a perfect balance of functionality, design & price.'
    },
    {
        name: 'Andrew Steward',
        userImage: '/static/avatars/avatar-3.svg',
        company: 'Local Schools',
        feedback: 'I consider using something else but Loonum was the winner. Its a perfect balance of functionality, design & price.'
    }
];

const UserFeedbackSection = () => {
    return (
        <section className="flex justify-center flex-col items-center h-full bg-white pt-20 pb-28 sm:pt-10 sm:pb-20">
            <div className="text-6xl font-bold text-center pb-20 sm:text-3xl sm:pl-7 sm:pr-7 sm:pb-10">
                <div className={'flex flex-col gap-2 justify-center sm:mb-0 pb-3.5'}>
                    <div>
                        <span className="text-[#F7941D]">Cherished </span>
                        <span>by </span>
                        <span className="text-[#1C75BC]">thousands </span>
                        <span>of </span>
                    </div>

                </div>
                <div className={'flex flex-row gap-2 justify-center'}>
                    <span>disruptors and creators </span>
                </div>
            </div>

            <div className={'flex flex-row gap-10 sm:flex-col'}>
                {userFeedbacks.map((feedback, index) => (
                    <UserFeedbackCard key={index} {...feedback} />
                ))}
            </div>
        </section>
    );
}

export default UserFeedbackSection;
