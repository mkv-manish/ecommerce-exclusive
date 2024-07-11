"use client";

import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Label } from '@/components/ui/label';
import CustomeInputForCheckout from '@/components/CustomeInputForCheckout';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import { useToast } from "@/components/ui/use-toast";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const checkoutSchema = z.object({
    firstName: z.string().min(2, "First name is required"),
    companyName: z.string().optional(),
    streetAddress: z.string().min(5, "Street address is required"),
    apartment: z.string().optional(),
    townCity: z.string().min(2, "Town/City is required"),
    phoneNumber: z.string().min(10, "Valid phone number is required"),
    email: z.string().email("Valid email is required"),
    saveInfo: z.boolean().optional(),
    paymentMethod: z.enum(["bank", "cod"]),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const CheckoutPage = () => {
    const { cart, clearCart } = useCart();
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const { toast } = useToast();
    const router = useRouter();
    const { data: session } = useSession();

    const { register, control, handleSubmit, formState: { errors }, setValue } = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutSchema),
        defaultValues: {
            paymentMethod: 'cod',
            saveInfo: false,
        },
    });

    useEffect(() => {
        // Load saved address from localStorage
        const savedAddress = localStorage.getItem('savedAddress');
        if (savedAddress) {
            const parsedAddress = JSON.parse(savedAddress);
            Object.keys(parsedAddress).forEach((key) => {
                setValue(key as keyof CheckoutFormData, parsedAddress[key]);
            });
        }
    }, [setValue]);

    const calculateSubtotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const calculateTotal = () => calculateSubtotal() - discount;

    const handleApplyCoupon = () => {
        if (couponCode === 'DISCOUNT10') {
            const newDiscount = calculateSubtotal() * 0.1;
            setDiscount(newDiscount);
            toast({
                title: "Coupon applied",
                description: `You saved $${newDiscount.toFixed(2)}`,
                className: "toast-success"
            });
        } else {
            toast({
                title: "Invalid coupon",
                description: "Please enter a valid coupon code",
                variant: "destructive",
                className: "toast-error"
            });
        }
    };



    const onSubmit = async (data: CheckoutFormData) => {

        if (cart.length === 0) {
            toast({
                title: "Empty Cart",
                description: "Your cart is empty. Please add items before checking out.",
                variant: "destructive",
                className: "toast-error"
            });
            return;
        }

        try {
            if (!session?.user?.id) {
                throw new Error("User not authenticated");
            }

            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: session.user.id,
                    orderData: {
                        firstName: data.firstName,
                        streetAddress: data.streetAddress,
                        apartment: data.apartment || '',
                        townCity: data.townCity,
                        phoneNumber: data.phoneNumber,
                        email: data.email,
                        paymentMethod: data.paymentMethod,
                        cart,
                        total: calculateTotal(),
                    },
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit order');
            }

            const result = await response.json();

            toast({
                title: "Order placed successfully",
                description: "Thank you for your purchase!",
                className: "toast-success"
            });

            clearCart();
            router.push('/order-confirmation');
        } catch (error) {
            console.error("Error during checkout:", error);
            toast({
                title: "Checkout Error",
                description: "There was an error processing your order. Please try again.",
                variant: "destructive",
                className: "toast-error"
            });
        }
    };

    return (
        <div className="container mx-auto space-y-10 py-14">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <Link href="/" passHref legacyBehavior>
                            <BreadcrumbLink>Home</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <Link href="/cart" passHref legacyBehavior>
                            <BreadcrumbLink>Cart</BreadcrumbLink>
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/checkout" aria-current="page">
                            Checkout
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <h1 className="text-3xl font-medium tracking-widest my-4 font-inter">Checkout</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4 max-w-[90%] md:max-w-[75%]">
                    <h2 className="text-2xl font-medium">Billing Details</h2>
                    <CustomeInputForCheckout
                        label="First Name"
                        {...register('firstName')}
                        error={errors.firstName?.message}
                    />
                    <CustomeInputForCheckout
                        label="Company Name (Optional)"
                        {...register('companyName')}
                    />
                    <CustomeInputForCheckout
                        label="Street Address"
                        {...register('streetAddress')}
                        error={errors.streetAddress?.message}
                    />
                    <CustomeInputForCheckout
                        label="Apartment, floor, etc. (optional)"
                        {...register('apartment')}
                    />
                    <CustomeInputForCheckout
                        label="Town/City"
                        {...register('townCity')}
                        error={errors.townCity?.message}
                    />
                    <CustomeInputForCheckout
                        label="Phone Number"
                        {...register('phoneNumber')}
                        error={errors.phoneNumber?.message}
                    />
                    <CustomeInputForCheckout
                        label="Email Address"
                        {...register('email')}
                        error={errors.email?.message}
                    />
                    <div className="flex items-center space-x-2">
                        <Controller
                            name="saveInfo"
                            control={control}
                            render={({ field }) => (
                                <Checkbox
                                    id="save-info"
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            )}
                        />
                        <label htmlFor="save-info" className="font-light">Save this information for faster check-out next time</label>
                    </div>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl font-medium">Your Order</h2>
                    <div className="space-y-4 border p-4 rounded">
                        {cart.map((item) => (
                            <div key={item.id} className="flex justify-between items-center">
                                <span className='flex gap-3'>
                                    <Image src={item.image} width={30} height={30} alt={item.name} />
                                    {item.name} x {item.quantity}
                                </span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                        <hr className="border-gray-300" />
                        <div className="flex justify-between items-center font-bold">
                            <span>Subtotal:</span>
                            <span>${calculateSubtotal().toFixed(2)}</span>
                        </div>
                        {discount > 0 && (
                            <div className="flex justify-between items-center text-green-600">
                                <span>Discount:</span>
                                <span>-${discount.toFixed(2)}</span>
                            </div>
                        )}
                        <div className="flex justify-between items-center">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <hr className="border-gray-300" />
                        <div className="flex justify-between items-center font-bold text-lg">
                            <span>Total:</span>
                            <span>${calculateTotal().toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-medium">Payment Method</h3>
                        <Controller
                            name="paymentMethod"
                            control={control}
                            render={({ field }) => (
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className='space-y-2'
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <RadioGroupItem value="bank" id="bank" />
                                            <Label htmlFor="bank" className="text-base font-normal tracking-wider">Bank Transfer</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Image src="/icons/visa.svg" width={42} height={28} alt='visa' />
                                            <Image src="/icons/mastercard.svg" width={42} height={28} alt='mastercard' />
                                            <Image src="/icons/bkash.svg" width={42} height={28} alt='bkash' />
                                            <Image src="/icons/nagad.svg" width={42} height={28} alt='nagad' />
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <RadioGroupItem value="cod" id="cod" />
                                        <Label htmlFor="cod" className="text-base font-normal tracking-wider">Cash on delivery</Label>
                                    </div>
                                </RadioGroup>
                            )}
                        />
                    </div>

                    <div className="flex space-x-2">
                        <Input
                            placeholder="Coupon Code"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            className='border border-black rounded-md focus-visible:rounded-md px-5 h-14'
                        />
                        <Button type="button" onClick={handleApplyCoupon} className='bg-[var(--secondary-2)] text-white h-14 px-6'>
                            Apply Coupon
                        </Button>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-[var(--secondary-2)] text-white h-14"
                        disabled={cart.length === 0}
                    >
                        {cart.length === 0 ? 'Cart is Empty' : 'Place Order'}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutPage;