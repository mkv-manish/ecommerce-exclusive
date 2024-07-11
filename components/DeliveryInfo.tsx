import React from 'react';
import Image from 'next/image';

interface DeliveryInfoProps {
    icon: string;
    text: string;
    subtext: string;
    className?: string;
}

const DeliveryInfo: React.FC<DeliveryInfoProps> = ({ icon, text, subtext, className }) => {

    return (
        <div className="flex items-center gap-3 py-6 px-6">
            <Image src={icon} width={40} height={40} alt='delivery' />
            <div className="flex flex-col justify-between h-14">
                <h4 className="text-lg font-semibold">{text}</h4>
                <p className={`text-sm font-medium ${className}`}>{subtext}</p>
            </div>
        </div>
    );
};

export default DeliveryInfo;