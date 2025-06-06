import { FC, ReactNode } from "react";
import Image from "next/image";
import {envLogoPath} from "@/base/constants";

type Props = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

const HeaderSlider: FC<Props> = ({ isOpen, onClose, children }) => {
    const sliderStyle: React.CSSProperties = {
        position: 'fixed',
        top: 0,
        left: 0,
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)', // Slide from left to right
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', /* semi-transparent overlay */
        zIndex: 999,
        transition: 'transform 0.3s ease',
        display: isOpen ? 'block' : 'none', // Show only when isOpen is true
    };

    const contentStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '60%', /* Adjust the width as needed */
        height: '100%',
        backgroundColor: '#fff',
        padding: '20px'
    };

    const closeButtonStyle: React.CSSProperties = {
        position: 'absolute',
        top: '20px',
        right: '20px',
        cursor: 'pointer'
    };

    return (
        <div style={sliderStyle} className={`slider ${isOpen ? 'open' : ''}`}>
            <div style={contentStyle} className="slider-content">
                <div onClick={onClose} style={closeButtonStyle}>
                    <Image src="/static/icons/close.svg" alt="Close" width={32} height={32} />
                </div>
                {children}
                {/*Show logo bottom right*/}
                <div className="absolute bottom-0 left-0 p-4 pl-8 sm:pl-6 justify-start items-start">
                    <Image src={envLogoPath("dark")} alt="Logo" width={200} height={200} />
                    <div className="text-sm">Powered by Loonum</div>
                </div>
            </div>
        </div>
    );
};

export default HeaderSlider;
