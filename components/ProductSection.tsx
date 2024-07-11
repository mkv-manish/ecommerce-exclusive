'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CountdownTimer from './CountdownTimer';
import { useSession } from 'next-auth/react';

interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    rating: number;
    reviews: number;
    image: string;
    // offer?: string | number;
    label?: string;
}

interface ProductSectionProps {
    title: string;
    subtitle?: string;
    products: Product[];
    showCountdown?: boolean;
    showViewAll?: 'viewAll' | 'flashSale' | 'exploreYourProduct';
    showMoveAllToBag?: boolean;
    layout: 'grid' | 'scroll' | 'two-row';
}

const ProductSection: React.FC<ProductSectionProps> = ({
    title,
    subtitle,
    products,
    showCountdown = false,
    showViewAll = false,
    showMoveAllToBag = false,
    layout
}) => {
    const [showAll, setShowAll] = useState<boolean>(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [wishlist, setWishlist] = useState<string[]>([]);
    const { data: session } = useSession();

    const scroll = (direction: 'left' | 'right'): void => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    useEffect(() => {
        if (session) {
            fetchWishlist();
        }
    }, [session]);

    const fetchWishlist = async () => {
        const response = await fetch('/api/wishlist');
        if (response.ok) {
            const data = await response.json();
            setWishlist(data.wishlist);
        }
    };

    const handleWishlist = async (e: React.MouseEvent, productId: string) => {
        e.preventDefault();  // Prevent the default action
        e.stopPropagation();

        if (!session) {
            // Redirect to login or show login modal
            return;
        }

        const isInWishlist = wishlist.includes(productId);
        const method = isInWishlist ? 'DELETE' : 'POST';

        const response = await fetch('/api/wishlist', {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ productId }),
        });

        if (response.ok) {
            if (isInWishlist) {
                setWishlist(wishlist.filter(id => id !== productId));
            } else {
                setWishlist([...wishlist, productId]);
            }
        }

    };

    return (
        <div className="px-4 py-20 space-y-4">
            <div className="py-2 space-y-3">
                {subtitle && (
                    <div className='flex items-center space-x-4'>
                        <span className='h-9 w-5 bg-[var(--secondary-2)] rounded-md' />
                        <p className='text-[var(--secondary-2)] text-sm font-medium'>{subtitle}</p>
                    </div>
                )}

                <div className="flex-between">
                    <h1 className="text-3xl font-medium tracking-widest">{title}</h1>
                    {showCountdown && <CountdownTimer targetDate={targetDate} />}
                    {(showViewAll === 'viewAll') && (
                        <button className="bg-[var(--secondary-2)] px-10 py-3 text-white rounded-sm">
                            View All
                        </button>
                    )}
                    {showMoveAllToBag === true && (
                        <button className="border border-gray-400 px-12 py-3 rounded-md font-medium">
                            Move All To Bag
                        </button>
                    )}
                    {((showViewAll === "flashSale") || (showViewAll === "exploreYourProduct")) && (
                        <div className='flex gap-2 justify-end'>
                            <button onClick={() => scroll('left')} className='bg-gray-200 rounded-full h-8 w-8 flex-center'>
                                <Image src="/icons/right-arrow.svg" height={20} width={20} alt='left' className='rotate-180 filter invert' />
                            </button>
                            <button onClick={() => scroll('right')} className='bg-gray-200 rounded-full h-8 w-8 flex-center'>
                                <Image src="/icons/right-arrow.svg" height={20} width={20} alt='right' className='filter invert' />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div
                ref={scrollContainerRef}
                className={`${layout === 'scroll' && 'flex overflow-x-auto space-x-4 py-4 snap-x'} {${layout === 'grid' && 'flex flex-wrap sm:justify-between gap-x-3 gap-y-10'}} ${layout === "two-row" && "grid grid-flow-col auto-cols-max gap-x-5 gap-y-14 overflow-x-auto scrollbar-hide grid-rows-2"} `}
                style={{
                    scrollbarWidth: 'none', msOverflowStyle: 'none',
                    scrollSnapType: 'x mandatory',
                    scrollPadding: '0 24px',
                }}
            >
                {products?.map((product, index) => (
                    <Link href={`/${product.id}`} key={index} className={`flex-shrink-0 ${layout === 'scroll' ? 'w-64 snap-start' : 'w-64'}`}>
                        <div className="">
                            <div className="relative flex-center h-[250px] bg-gray-100 rounded-md overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={172}
                                    height={152}
                                    className="h-full"
                                />
                                {product.discount && (
                                    <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs rounded">
                                        -{product.discount}%
                                    </span>
                                )}
                                {/* {product.offer &&  (
                                    <span className="absolute top-2 left-2 bg-[var(--button-2)] text-black px-2 py-1 text-xs rounded">
                                        {product.offer}
                                    </span>
                                )} */}
                                {product.discount ? "" : product.label && (
                                    <span className="absolute top-2 left-2 bg-[var(--button-2)] text-black px-2 py-1 text-xs rounded">
                                        {product.label}
                                    </span>
                                )}
                                <div className='absolute top-2 right-2 space-y-2'>
                                    <button
                                        onClick={(e) => handleWishlist(e, product.id)}
                                        className='bg-white flex-center rounded-full h-8 w-8'
                                    >
                                        <Image
                                            src={"/icons/heart.svg"}
                                            height={24}
                                            width={24}
                                            alt='wishlist'
                                        />
                                    </button>
                                    <button className='bg-white flex-center rounded-full h-8 w-8'>
                                        <Image src={"/icons/quick-view.svg"} height={24} width={24} alt='heart' />
                                    </button>
                                </div>
                            </div>

                            <h3 className="mt-2 font-semibold truncate">{product.name}</h3>
                            <div className="flex items-center gap-3 mt-2">
                                <span className="text-red-500">${product.price}</span>
                                {product.originalPrice && (
                                    <span className="line-through text-gray-500">${product.originalPrice}</span>
                                )}
                            </div>
                            <div className="flex items-center mt-2">
                                <Image src="/flashsales/five-star.svg" height={20} width={100} alt='rating' className='' />
                                <span className="ml-2 text-sm text-gray-500">({product.reviews})</span>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>

            {((layout === 'grid') || (showViewAll === 'flashSale')) && (
                <div className='flex-center pt-10'>
                    <button className="bg-[var(--secondary-2)] px-10 py-3 text-white rounded-sm">View All Products</button>
                </div>
            )}

            {/* {showViewAll === 'flashSale' && (
                <div className='flex-center pt-10'>
                    <button className="bg-[var(--secondary-2)] px-10 py-3 text-white rounded-sm">View All Products</button>
                </div>
            )} */}

        </div>
    );
};

export default ProductSection;




{/*                     <Image
                            src={product.image}
                            alt={product.name}
                            width={172}
                            height={152}
                            className="h-full"
                            onError={(e) => {
                                e.currentTarget.src = "/placeholder-image.jpg"; // Replace with a placeholder image path
                            }}
                        /> */}