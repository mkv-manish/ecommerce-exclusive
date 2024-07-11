import { signOut } from 'next-auth/react'
import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import Image from 'next/image'
import { accountDropDownList } from '@/constants'
import { useRouter } from 'next/navigation'

const AccountPopover = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)

    const handleLogout = async () => {
        try {
            await signOut({ redirect: false })
            router.push('/') // Redirect to home page after logout
        } catch (error) {
            console.error('Logout error:', error)
        }
    }

    const handleItemClick = (route: string) => {
        setTimeout(() => {
            setOpen(false)
        }, 1000)

        if (route !== '#') {
            router.push(route)
        }
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Image
                    src="/icons/user-off.svg"
                    height={24}
                    width={24}
                    alt="user"
                    className="cursor-pointer"
                />
            </PopoverTrigger>
            {/* bg-gradient-to-t from-purple-300 to-black */}
            <PopoverContent className="w-60 bg-white text-black px-4 py-4 rounded-md border-none space-y-1 font-poppins" align="end">
                {accountDropDownList.map((item, i) => (
                    item.label === 'Logout' ? (
                        <button
                            key={i}
                            onClick={() => {
                                setOpen(false)
                                handleLogout()
                            }}
                            className="flex items-center text-sm font-normal gap-3 w-full hover:bg-[var(--secondary)] p-2 rounded-md"
                        >
                            <Image src={item.icon} width={22} height={22} alt="user" className="h-6 object-cover filter invert " />
                            {item.label}
                        </button>
                    ) : (
                        <button
                            key={i}
                            onClick={() => handleItemClick(item.route)}
                            className="flex items-center text-sm font-normal gap-3 w-full hover:bg-[var(--secondary)] p-2 rounded-md"
                        >
                            <Image src={item.icon} width={22} height={22} alt="user" className={`${item.icon == "/icons/user.svg" && "h-7"} ${item.icon == "/icons/logout.svg" && "h-6"} object-cover filter invert`} />
                            {item.label}
                        </button>
                    )
                ))}
            </PopoverContent>
        </Popover>
    )
}

export default AccountPopover