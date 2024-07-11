import React from 'react';
import Image from 'next/image';

const ImageGallery = ({ images }: { images: string[] }) => {
    const thumbnails = [
        '/thumbnail1.svg',
        '/thumbnail2.svg',
        '/thumbnail3.svg',
        '/thumbnail4.svg',
    ];

    return (
        <div className="flex justify-between min-w-[60%] gap-8">
            <div className="grid grid-rows-4 gap-5">
                {thumbnails.map((src, index) => (
                    <div key={index} className='bg-[var(--secondary)] w-[150px] h-[150px] flex items-center justify-center'>
                        <Image
                            src={src}
                            alt={`Thumbnail ${index + 1}`}
                            width={120}
                            height={120}
                            className="rounded-sm cursor-pointer "
                        />
                    </div>
                ))}
            </div>
            <Image
                src={images[0]}
                alt="Havic HV G-92 Gamepad"
                width={400}
                height={400}
                className="w-full px-12 h-auto rounded-md bg-[var(--secondary)]"
            />

        </div>
    );
};

export default ImageGallery;