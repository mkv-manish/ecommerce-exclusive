'use client'

import { navIcons, navLinks } from "@/constants";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AccountPopover from "./AccountPopover";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {

    const pathname = usePathname();
    const { data: session, status } = useSession();

    const isSignedIn = status === "authenticated";

    const filteredNavLinks = navLinks.filter(item =>
        !(isSignedIn && item.label === "Sign Up")
    );

    return (
        <nav className="w-full bg-white text-black sticky top-0 left-0 z-50 border-b-[0.5px] border-gray-400 shadow-sm">
            <div className={`relative flex justify-between items-center w-[95%] md:max-w-7xl mx-auto h-20 bg-white`}>
                <Link href="/" className={`${inter.className} font-bold text-2xl`}>Exclusive</Link>
                <div className="flex gap-12">
                    {filteredNavLinks.map((item, i) => (
                        <Link href={item.route} key={i} className="list-none flex cursor-pointer hover:underline hover:underline-offset-4">
                            {item.label}
                        </Link>
                    ))}
                </div>
                <div className="flex gap-3">
                    <div className="flex lg:ml-auto max-lg:w-full">
                        <div
                            className="flex xl:w-80 max-xl:w-full bg-[var(--secondary)] px-6 py-3 rounded outline outline-transparent focus-within:outline-[#007bff] focus-within:bg-transparent">
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                className="w-full text-sm bg-transparent rounded outline-none pr-2"
                            />
                            <Image
                                src="/icons/search.svg"
                                height={24}
                                width={24}
                                alt="search"
                                className=""
                            />
                        </div>
                    </div>
                    {(pathname === "/sign-up" || pathname === "/sign-in") ? "" :
                        <div className="flex items-center gap-3">
                            {navIcons.map((item, i) => (
                                <a key={i} href={item.route}>
                                    <Image
                                        src={item.icon}
                                        height={24}
                                        width={24}
                                        alt={item.icon}
                                        className=""
                                    />
                                </a>
                            ))}


                            <AccountPopover />

                        </div>
                    }
                </div>
                {/* {accountDropDown && (
                    <div className="absolute top-16 right-0">
                        <AccountDropdown />
                    </div>
                )} */}
            </div>
        </nav>
    );
};
export default Navbar;
