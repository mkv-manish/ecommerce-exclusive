'use client'

import Image from "next/image"

const items = [
    {
        heading: "FREE AND FAST DELIVERY",
        description: "Free delivery for all orders over $140",
        icon: "/icons/icon-delivery.svg"
    },
    {
        heading: "24/7 CUSTOMER SERVICE",
        description: "Friendly 24/7 customer support",
        icon: "/icons/icon-customer-service.svg"
    },
    {
        heading: "MONEY BACK GUARANTEE",
        description: "We reurn money within 30 days",
        icon: "/icons/shield-tick.svg"
    },
]

const Contact = () => {
    return (
        <section className=" w-full py-14">
            <div className="flex justify-evenly py-5">
                {items.map((item, i) => (
                    <div key={i} className="flex-center flex-col gap-5 max-w-[300px]">
                        <div className="bg-gray-300 rounded-full p-2.5">
                            <Image
                                src={item.icon}
                                width={50}
                                height={50}
                                alt={item.heading}
                                className={`bg-black rounded-full p-1.5`}
                            />
                        </div>
                        <div className="space-y-1 text-center">
                            <h2 className="text-xl font-semibold">{item.heading}</h2>
                            <p className="text-sm font-normal">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-end py-5">
                <button className="bg-gray-200 h-11 w-11 flex-center rounded-full">
                    <Image src="/icons/right-arrow.svg" height={24} width={24} alt='left' className='-rotate-90 filter invert' />
                </button>
            </div>
        </section>
    )
}
export default Contact