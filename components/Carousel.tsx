'use client'

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { Inter, Poppins } from 'next/font/google';
import { useSwipeable } from 'react-swipeable';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['400'], subsets: ['latin'] });

interface CarouselItem {
    title: string;
    offer: string;
    image: string;
}

interface CarouselProps {
    items: CarouselItem[];
    autoSlideInterval?: number; // in milliseconds
}

const Carousel = ({ items, autoSlideInterval = 5000 }: CarouselProps) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const goToNextSlide = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, [items.length]);

    const goToPrevSlide = useCallback(() => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    }, [items.length]);

    useEffect(() => {
        const timer = setInterval(goToNextSlide, autoSlideInterval);
        return () => clearInterval(timer);
    }, [goToNextSlide, autoSlideInterval]);

    const handlers = useSwipeable({
        onSwipedLeft: () => goToNextSlide(),
        onSwipedRight: () => goToPrevSlide(),
        trackMouse: true,
    });

    return (
        <div {...handlers} className="relative w-full h-96 bg-black text-white overflow-hidden">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`absolute w-full h-full transition-transform duration-300 ease-in-out ${index === activeIndex ? 'translate-x-0' :
                        index < activeIndex ? '-translate-x-full' : 'translate-x-full'
                        }`}
                >
                    <div className="flex h-full">
                        <div className={`${inter.className} w-1/2 flex-center flex-col`}>
                            <div className="space-y-5">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src="/icons/apple.svg"
                                        height={49}
                                        width={40}
                                        alt="iphone"
                                    />
                                    <p className={`${poppins.className} text-sm font-normal`}>{item.title}</p>
                                </div>

                                <h1 className="text-5xl max-w-[22rem] font-bold tracking-widest leading-[1.3]">{item.offer}</h1>

                                <a href="#" className="flex text-sm underline underline-offset-8">
                                    Shop Now
                                    <Image
                                        src="/icons/right-arrow.svg"
                                        width={20}
                                        height={20}
                                        alt="right"
                                        className="ml-2"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className="w-1/2 flex-center">
                            <Image
                                src={item.image}
                                width={550}
                                height={450}
                                alt="Banner"
                                className="inset-0 object-cover opacity-70"
                            />
                        </div>
                    </div>
                </div>
            ))}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-2 flex-center">
                {items.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-red-500 w-3 h-3' : 'bg-gray-300'}`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;