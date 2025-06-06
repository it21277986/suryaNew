import {FC} from "react";
import PricingCard from "@/components/pricing/PricingCard";

const plans = [
    {
        title: 'Team Plan',
        price: '$29.99/',
        users: '5-99 users',
        color: '#008EFF',
        features: ['Rich member profiles', 'Searchable member directory', 'Discussions', 'Super Admin', 'Paid memberships', 'Custom domain', 'No hosting and server fees'],
        additionalFeatures: ['Rich member profiles', 'Searchable member directory', 'Discussions', 'Team management'],
    },
    {
        title: 'Business Plan',
        price: '$34.99/',
        users: '100-250 users',
        color: '#08AB94',
        features: ['Rich member profiles', 'Searchable member directory', 'Discussions', 'Super Admin', 'Paid memberships', 'Custom domain', 'No hosting and server fees'],
        additionalFeatures: ['Rich member profiles', 'Searchable member directory', 'Discussions', 'Team management'],
    },
    {
        title: 'Organisational Plan',
        price: '$42.99/',
        users: '251-500 users',
        color: '#BE1DF7',
        features: ['Rich member profiles', 'Searchable member directory', 'Discussions', 'Super Admin', 'Paid memberships', 'Custom domain', 'No hosting and server fees'],
        additionalFeatures: ['Rich member profiles', 'Searchable member directory', 'Discussions', 'Team management'],
    },
];

const PricingView: FC = () => {
    return (
        <div className="flex justify-center flex-col items-center h-full pt-[36px] bg-white pb-10 sm:pr-5 sm:pl-5">
            {/* <div className="text-6xl font-bold text-center pb-10 sm:text-3xl">
                <div className={'flex flex-row gap-2 justify-center items-center pb-3.5'}>
                    <span>Scalable </span>
                    <span className="text-[#1C75BC]">learning </span>
                    <span>for </span>
                </div>
                <div className={'flex flex-row gap-2 items-center justify-center sm:flex-col'}>
                    <span className="text-[#F7941D]">organisations </span>
                    <span>of every size </span>
                </div>
            </div> */}
            <div className="flex text-center space-y-6 text-blue-800 regular-28 mb-12 sm:mb-5">PLANS</div>

            <div className="flex justify-center items-center space-x-8 sm:flex-col sm:space-x-0">
                {plans.map((plan, index) => (
                    <PricingCard key={index} {...plan} />
                ))}
            </div>
        </div>
    );
}

export default PricingView;
 