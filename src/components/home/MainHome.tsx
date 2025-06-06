import {FC} from "react";
import GetStartedSection from "@/components/home/GetStartedSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import UpskillSection from "@/components/home/UpskillSection";
import CommunitySection from "@/components/home/community/CommunitySection";
import UserFeedbackSection from "@/components/home/userfeedback/UserFeedbackSection";

const MainHome: FC = () => {
    return (
        <>
            <section>
                <FeaturesSection/>
                <UpskillSection/>
                <CommunitySection/>
                <UserFeedbackSection/>
                <GetStartedSection/>
            </section>
        </>
    );
}

export default MainHome;
