'use client'


import Image from "next/image"

const NewArrival = () => {
    return (
        <div className="px-4 py-16 space-y-4">
            <div className="py-2 space-y-3">
                <div className='flex items-center space-x-4'>
                    <span className='h-9 w-5 bg-[var(--secondary-2)] rounded-md' />
                    <p className='text-[var(--secondary-2)] text-sm font-medium'>Featured</p>
                </div>
                <h1 className="text-3xl font-medium tracking-widest">New Arrival</h1>
            </div>
            <div className="grid grid-cols-4 grid-rows-2 h-[30rem] gap-4">
                <div className="relative bg-black col-span-2 row-span-2 px-4 pt-4 rounded-md">
                    <Image src="/new_arrival/playstation.svg" width={200} height={300} alt="play-station" className="h-full w-full" />
                    <div className="absolute bottom-8 left-8 text-white max-w-[250px] space-y-3">
                        <h2 className="text-xl font-semibold tracking-wider">PlayStation 5</h2>
                        <p className="text-sm font-normal text-[#FAFAFA]">Black and White version of the PS5 coming out on sale.</p>
                        <button className="underline underline-offset-[5px]">Shop Now</button>
                    </div>
                </div>

                <div className="bg-black/[0.95] flex justify-between col-span-2 px-4 pt-4 rounded-md">
                    <div className="text-white max-w-[255px] space-y-3 flex justify-end flex-col pb-8">
                        <h2 className="text-xl font-semibold tracking-wider">Women`s Collections</h2>
                        <p className="text-sm font-normal text-[#FAFAFA]">Featured woman collections that give you another vibe</p>
                        <div>
                            <button className="underline underline-offset-[5px]">Shop Now</button>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/new_arrival/woman-collection.svg"
                            width={300}
                            height={400}
                            alt="women collection"
                            className="h-full w-full"
                        />
                    </div>

                </div>

                <div className="relative bg-black col-span-1 p-4 rounded-md">
                    <Image
                        src="/new_arrival/speakers.svg"
                        width={200}
                        height={300}
                        alt="play-station"
                        className="h-full w-full"
                    />
                    <div className="absolute bottom-5 left-5 text-white max-w-[250px] space-y-1">
                        <h2 className="text-xl font-semibold tracking-wider">Speakers</h2>
                        <p className="text-sm font-normal text-[#FAFAFA]">Amazon wireless speakers</p>
                        <button className="underline underline-offset-[5px]">Shop Now</button>
                    </div>
                </div>

                <div className="relative bg-black col-span-1 p-4 rounded-md">
                    <Image
                        src="/new_arrival/perfume.svg"
                        width={200}
                        height={300}
                        alt="play-station"
                        className="h-full w-full"
                    />
                    <div className="absolute bottom-5 left-5 text-white max-w-[250px] space-y-1">
                        <h2 className="text-xl font-semibold tracking-wider">Perfume</h2>
                        <p className="text-xs font-normal text-[#FAFAFA]">GUCCI INTENSE OUD EDP</p>
                        <button className="underline underline-offset-[5px]">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewArrival