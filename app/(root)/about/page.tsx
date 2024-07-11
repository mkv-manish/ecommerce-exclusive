import Contact from "@/components/Contact";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const cardsData = [
    {
        icon: "/icons/icon-shop.svg", // Update the path to the actual icon path
        value: "10.5k",
        description: "Sallers active our site",
    },
    {
        icon: "/icons/icon-sale.svg",
        value: "33k",
        description: "Monthly Product Sale",
    },
    {
        icon: "/icons/icon-shopping.svg",
        value: "45.5k",
        description: "Customer active in our site",
    },
    {
        icon: "/icons/icon-moneybag.svg",
        value: "25k",
        description: "Annual gross sale in our site",
    },
];

const AboutPage = () => {
    return (
        <div className="container mx-auto  py-20 w-full space-y-16">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/about" aria-current="page">About</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="grid grid-cols-2 place-content-between gap-10">
                <div className="flex flex-col gap-10 justify-center pr-10">
                    <h1 className="text-5xl font-semibold tracking-widest">Our Story</h1>
                    <div className="flex flex-col gap-10 text-base font-normal text-gray-700">
                        <span>
                            Launced in 2015, Exclusive is South Asia`s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
                        </span>
                        <span>
                            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
                        </span>
                    </div>
                </div>
                <div>
                    <Image src="/about-side-image.svg" width={300} height={400} alt="image" className="w-full h-full" />
                </div>
            </div>

            <div className="flex justify-between py-10 gap-4">
                {cardsData.map((item, i) => (
                    <Card key={i} className={`flex-center flex-col w-64 h-56 gap-4 ${i === 1 && "bg-[var(--secondary-2)] text-white"}`}>
                        <div className={`bg-gray-300 rounded-full p-2.5 ${i === 1 && "bg-red-200"}`}>
                            <Image
                                src={item.icon}
                                width={50}
                                height={50}
                                alt="shop"
                                className={`bg-black rounded-full p-1.5 ${i === 1 && "bg-white"}`}
                            />
                        </div>
                        <div className="space-y-1 text-center">
                            <h2 className="font-bold text-3xl">{item.value}</h2>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </Card>
                ))}


            </div>

            <div className="flex justify-between">
                <Card className="flex flex-col gap-8 overflow-hidden w-96 border-none shadow-none">
                    <div className="bg-[var(--secondary)] w-full flex justify-center pt-14">
                        <Image src="/person-1.svg" width={236} height={391} alt="photo" className="object-cover"
                        />
                    </div>
                    <CardContent className="pl-0 space-y-4 max-w-fit">
                        <CardTitle className="font-medium text-3xl font-inter">Tom Cruise</CardTitle>
                        <p className="font-normal text-base">Founder & Chairman</p>
                        <div className="flex justify-between gap-3 max-w-28">
                            <Image src="/icons/facebook.svg" height={12} width={12} alt="x" className="filter invert" />
                            <Image src="/icons/instagram.svg" height={24} width={24} alt="x" className="filter invert" />
                            <Image src="/icons/linkedin.svg" height={24} width={24} alt="x" className="filter invert" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="flex flex-col gap-8 overflow-hidden w-96 border-none shadow-none">
                    <div className="bg-[var(--secondary)] w-full flex justify-center pt-14">
                        <Image src="/person-1.svg" width={236} height={391} alt="photo" className="object-cover"
                        />
                    </div>
                    <CardContent className="pl-0 space-y-4 max-w-fit">
                        <CardTitle className="font-medium text-3xl font-inter">Tom Cruise</CardTitle>
                        <p className="font-normal text-base">Founder & Chairman</p>
                        <div className="flex justify-between gap-3 max-w-28">
                            <Image src="/icons/facebook.svg" height={12} width={12} alt="x" className="filter invert" />
                            <Image src="/icons/instagram.svg" height={24} width={24} alt="x" className="filter invert" />
                            <Image src="/icons/linkedin.svg" height={24} width={24} alt="x" className="filter invert" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="flex flex-col gap-8 overflow-hidden w-96 border-none shadow-none">
                    <div className="bg-[var(--secondary)] w-full flex justify-center pt-14">
                        <Image src="/person-1.svg" width={236} height={391} alt="photo" className="object-cover"
                        />
                    </div>
                    <CardContent className="pl-0 space-y-4 max-w-fit">
                        <CardTitle className="font-medium text-3xl font-inter">Tom Cruise</CardTitle>
                        <p className="font-normal text-base">Founder & Chairman</p>
                        <div className="flex justify-between gap-3 max-w-28">
                            <Image src="/icons/facebook.svg" height={12} width={12} alt="x" className="filter invert" />
                            <Image src="/icons/instagram.svg" height={24} width={24} alt="x" className="filter invert" />
                            <Image src="/icons/linkedin.svg" height={24} width={24} alt="x" className="filter invert" />
                        </div>
                    </CardContent>
                </Card>

            </div>

            <Contact />
        </div>
    )
}
export default AboutPage