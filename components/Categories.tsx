'use client'

import { browseByCategories } from "@/constants";
import Image from "next/image"
import { useRef } from "react";

const Categories = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right'): void => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="px-4 py-16 space-y-4">
            <div className="py-2 space-y-3">
                <div className='flex items-center space-x-4'>
                    <span className='h-9 w-5 bg-[var(--secondary-2)] rounded-md' />
                    <p className='text-[var(--secondary-2)] text-sm font-medium'>Categories</p>
                </div>
                <div className="flex-between">
                    <h1 className="text-3xl font-medium tracking-widest">Browse By Category</h1>
                    <div className='flex gap-2 justify-end'>
                        <button onClick={() => scroll('left')} className='bg-gray-200 rounded-full h-8 w-8 flex-center'>
                            <Image src="/icons/right-arrow.svg" height={20} width={20} alt='left' className='rotate-180 filter invert' />
                        </button>
                        <button onClick={() => scroll('right')} className='bg-gray-200 rounded-full h-8 w-8 flex-center'>
                            <Image src="/icons/right-arrow.svg" height={20} width={20} alt='right' className='filter invert' />
                        </button>
                    </div>
                </div>
            </div>
            <div
                ref={scrollContainerRef}
                className="flex-between overflow-x-auto space-x-4 py-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {browseByCategories.map((item, i) => (
                    <div key={i} className={`flex-center flex-col h-36 w-40 gap-2 border border-gray-200 rounded-sm ${item.label === "Camera" && "bg-[var(--secondary-2)] text-white"}`}>
                        <Image
                            src={item.icon}
                            width={56}
                            height={56}
                            alt={item.label}
                            className={`${item.label === "Camera" && "filter invert"}`}
                        />
                        <h2 className="text-base font-light">{item.label}</h2>
                    </div>
                ))}

            </div>
        </div>
    )
}
export default Categories