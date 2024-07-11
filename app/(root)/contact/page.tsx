import ContactUs from "@/components/ContactUs"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Image from "next/image"

const ContactPage = () => {
    return (
        <div className="py-20 container mx-auto space-y-20">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/contact" aria-current="page">Contact</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="grid grid-cols-3 gap-10">
                <div className="col-span-1 space-y-5 rounded-md shadow-custom px-14 py-20">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <Image src="/icons/icons-phone.svg" width={30} height={30} alt="phone" />
                            Call To Us
                        </div>
                        <a href="#" className="text-sm font-poppins">We are available 24/7, 7 days a week</a>
                        <a href="#" className="text-sm font-poppins">Phone: +8801611112222</a>
                    </div>

                    <hr />

                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <Image src="/icons/icons-mail.svg" width={30} height={30} alt="phone" />
                            Write To US
                        </div>
                        <p className="text-sm font-poppins">Fill out our form and we will contact you within 24 hours.</p>
                        <a href="#" className="text-sm font-poppins">Emails: customer@exclusive.com</a>
                        <a href="#" className="text-sm font-poppins">Emails: support@exclusive.com</a>
                    </div>
                </div>
                <div className="col-span-2 shadow-custom rounded-md p-8">
                    <ContactUs />
                </div>
            </div>

        </div >
    )
}
export default ContactPage