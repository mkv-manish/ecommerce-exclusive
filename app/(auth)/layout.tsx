import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "Authentication | Exclusive",
    description: "Discover a world of shopping at your fingertips. Our e-commerce platform offers a seamless, enjoyable, and secure online shopping experience for everyone. With a vast selection of products across various categories, we are committed to providing quality, value, and convenience.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <main className={`${poppins.className} flex container bg-white`}>
            <div className="w-[60%] py-12 pr-12">
                <Image
                    src="/side-image.svg"
                    alt="Shopping cart with smartphone"
                    width={600}
                    height={600}
                    className="object-cover"
                />
            </div>
            {children}
        </main>
    );
}
