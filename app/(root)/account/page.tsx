'use client'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react';
import { useToast } from "@/components/ui/use-toast"
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import axios from 'axios';

export default function AccountPage() {
    const { data: session, update } = useSession();
    const { toast } = useToast()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: '',
    });

    useEffect(() => {
        if (session?.user) {
            const [firstName, ...lastNameParts] = (session.user.name || '').split(' ');
            const lastName = lastNameParts.join(' ');
            setFormData(prevState => ({
                ...prevState,
                firstName,
                lastName,
                email: session.user.email || '',
                address: prevState.address,
            }));
        }
    }, [session]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const fullName = `${formData.firstName} ${formData.lastName}`.trim();
            const response = await axios.put('/api/user/update', {
                name: fullName,
                email: formData.email,
                address: formData.address,
                currentPassword: formData.currentPassword,
                newPassword: formData.newPassword,
            });

            if (response.status === 200) {
                toast({
                    title: "Profile updated",
                    description: "Your profile has been successfully updated.",
                    className: "toast-success",
                });
                // Update the session with new user data
                await update({
                    ...session,
                    user: {
                        ...session?.user,
                        name: fullName,
                        email: formData.email,
                        address: formData.address,
                    }
                });
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to update profile. Please try again.",
                variant: "destructive",
                className: "toast-error",
            });
        }
    };


    return (
        <div className="container mx-auto py-20 max-w-6xl">
            <header className="flex justify-between items-center mb-10">
                <Breadcrumb className="">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>

                            <BreadcrumbLink href="/account" aria-current="page" className="font-semibold text-gray-900">
                                My Account
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <div className="text-sm">Welcome! <span className="text-red-500">{session?.user?.name}</span></div>
            </header>

            <div className="flex flex-col md:flex-row gap-8">
                <nav className="w-full md:w-1/4 space-y-5">
                    <div className='space-y-3'>
                        <h2 className="font-medium">Manage My Account</h2>
                        <ul className="space-y-2 pl-5">
                            <li className="text-[var(--secondary-2)]">My Profile</li>
                            <li className="text-black opacity-50">Address Book</li>
                            <li className="text-black opacity-50">My Payment Options</li>
                        </ul>
                    </div>

                    <div className='space-y-3'>
                        <h2 className="font-medium">My Orders</h2>
                        <ul className="space-y-2 pl-5">
                            <li className="text-black opacity-50">My Returns</li>
                            <li className="text-black opacity-50">My Cancellations</li>
                        </ul>
                    </div>

                    <div className='space-y-3'>
                        <h2 className="font-medium">My WishList</h2>
                    </div>
                </nav>

                <main className="w-full md:w-3/4">
                    <Card className="p-6">
                        <h2 className="text-xl font-medium mb-6 tracking-wide text-[var(--secondary-2)]">Edit Your Profile</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-base font-normal text-gray-700 mb-1">First Name</label>
                                    <Input
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder='First Name'
                                        className="w-full bg-[var(--secondary)] px-2 border-none rounded-md pl-3 py-6"
                                    />
                                </div>
                                <div>
                                    <label className="block text-base font-normal text-gray-700 mb-1">Last Name</label>
                                    <Input
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder='Last Name'
                                        className="w-full bg-[var(--secondary)] px-2 border-none rounded-md pl-3 py-6"
                                    />
                                </div>
                                <div>
                                    <label className="block text-base font-normal text-gray-700 mb-1">Email</label>
                                    <Input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder='Email'
                                        className="w-full bg-[var(--secondary)] px-2 border-none rounded-md pl-3 py-6"
                                    />
                                </div>
                                <div>
                                    <label className="block text-base font-normal text-gray-700 mb-1">Address</label>
                                    <Input
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        placeholder='Address'
                                        className="w-full bg-[var(--secondary)] px-2 border-none rounded-md pl-3 py-6"
                                    />
                                </div>
                            </div>
                            <div className="mt-8">
                                <h3 className="text-base font-normal mb-4 font-poppins">Password Changes</h3>
                                <div className="space-y-4">
                                    <div>
                                        <Input
                                            type="password"
                                            name="currentPassword"
                                            value={formData.currentPassword}
                                            onChange={handleInputChange}
                                            placeholder='Current Password'
                                            className="w-full bg-[var(--secondary)] px-2 border-none rounded-md pl-3 py-6"
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="password"
                                            name="newPassword"
                                            value={formData.newPassword}
                                            onChange={handleInputChange}
                                            placeholder='New Password'
                                            className="w-full bg-[var(--secondary)] px-2 border-none rounded-md pl-3 py-6"
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            type="password"
                                            name="confirmNewPassword"
                                            value={formData.confirmNewPassword}
                                            onChange={handleInputChange}
                                            placeholder='Confirm New Password'
                                            className="w-full bg-[var(--secondary)] px-2 border-none rounded-md pl-3 py-6"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end mt-8 gap-4">
                                <Link href="/" className='h-14 flex items-center mr-8' type="button">Cancel</Link>
                                <Button type="submit" className="px-12 py-4 h-14 bg-[var(--button)] hover:bg-red-500 text-white text-base font-normal">Save Changes</Button>
                            </div>
                        </form>
                    </Card>
                </main>
            </div>
        </div>
    );
}