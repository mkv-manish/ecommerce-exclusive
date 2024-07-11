'use client'

import { carouselItems, sidebarLinks } from "@/constants"
import Image from "next/image"
import Carousel from "./Carousel"

const Sidebar = () => {
    return (
        <div className="flex container mx-auto">
            <div className="min-w-fit w-1/5 bg-white border-r pt-10">
                <ul className="flex flex-col gap-1">
                    {sidebarLinks.map((item, i) => (
                        <li key={i} className="flex-between mr-3 cursor-pointer">
                            <a href="#" className="block p-2 text-base font-light">{item.label}</a>
                            {item.icon && <Image src={item.icon} height={24} width={24} alt="arrow" className="-rotate-90 filter invert" />}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-4/5 pl-5  pt-10">
                <Carousel items={carouselItems} autoSlideInterval={7000} />
            </div>
        </div>
    )
}
export default Sidebar