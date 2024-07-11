'use client'


import Image from "next/image"

const JblBoomBox = () => {
    return (
        <div className="w-full h-[500px] bg-black grid grid-cols-2 place-items-center px-10 my-10">
            <div className="flex flex-col justify-center gap-8">
                <h3 className="text-sm font-semibold text-[var(--button-2)]">Categories</h3>
                <h1 className="text-5xl max-w-[35rem] font-semibold tracking-widest text-white">Enhance Your Music Experience</h1>
                <div className="flex items-center gap-3">
                    <span className="h-14 w-14 flex-center flex-col bg-white text-black rounded-full">
                        <p className="text-[0.7rem] font-semibold">05</p>
                        <p className="text-[0.6rem]">Days</p>
                    </span>
                    <span className="h-14 w-14 flex-center flex-col bg-white text-black rounded-full">
                        <p className="text-[0.7rem] font-semibold">23</p>
                        <p className="text-[0.6rem]">Hours</p>
                    </span>
                    <span className="h-14 w-14 flex-center flex-col bg-white text-black rounded-full">
                        <p className="text-[0.7rem] font-semibold">59</p>
                        <p className="text-[0.6rem]">Minutes</p>
                    </span>
                    <span className="h-14 w-14 flex-center flex-col bg-white text-black rounded-full">
                        <p className="text-[0.7rem] font-semibold">35</p>
                        <p className="text-[0.6rem]">Seconds</p>
                    </span>
                </div>
                <div>
                    <button className="bg-[var(--button-2)] px-5 py-2 rounded-sm text-black">Buy Now!</button>
                </div>
            </div>
            <div className="relative h-full w-full">
                <Image src="/JBL_BOOMBOX_2.svg" width={200} height={200} alt="jbl boombox" className="h-full w-full drop-shadow-[0_15px_15px_rgba(255,255,255,0.2)]" />
            </div>
        </div>
    )
}
export default JblBoomBox