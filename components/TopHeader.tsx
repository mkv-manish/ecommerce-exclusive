import Image from "next/image"

const TopHeader = () => {
    return (
        <div className="relative h-7 w-full flex-center bg-black text-white text-sm font-extralight">
            <p className="text-white">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <div className="absolute flex-center right-20">
                English
                <Image src="/icons/dropdown.svg" height={24} width={24} alt="dropdown" />
            </div>
        </div>
    )
}
export default TopHeader