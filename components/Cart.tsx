"use client";

import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import ProductTable from './ProductTable';
import { useCart } from '@/contexts/CartContext';
import { toast } from './ui/use-toast';

export default function Cart() {
    const { cart, updateQuantity, removeFromCart } = useCart();
    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return <div>Loading...</div>;
    }

    const calculateSubtotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const calculateTotal = () => calculateSubtotal() - discount;

    const handleQuantityChange = (id: string, newQuantity: number) => {
        updateQuantity(id, newQuantity);
    };

    const handleRemoveProduct = (id: string) => {
        removeFromCart(id);
    };

    const handleApplyCoupon = () => {
        if (couponCode === 'DISCOUNT10') {
            setDiscount(calculateSubtotal() * 0.1);
        } else {
            toast({
                title: 'Invalid coupon code',
                description: 'Please enter a valid coupon code',
                variant: 'destructive',
                className: 'toast-error'
            });
        }
    };

    return (
        <div className="container mx-auto p-4">
            <ProductTable
                products={cart}
                onQuantityChange={handleQuantityChange}
                onRemoveProduct={handleRemoveProduct}
            />

            <div className="flex justify-between mt-6">
                <Link href="/" passHref>
                    <Button variant="outline">
                        Return To Shop
                    </Button>
                </Link>
                <Button variant="outline">Update Cart</Button>
            </div>

            <div className="mt-8 flex justify-between">
                <div className="flex">
                    <Input
                        placeholder="Coupon Code"
                        className="rounded-l-md border-y border-l px-3 focus-visible:ring-0"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <Button
                        className="bg-red-500 hover:bg-red-600 text-white rounded-l-none"
                        onClick={handleApplyCoupon}
                    >
                        Apply Coupon
                    </Button>
                </div>

                <div className="w-80 border p-4 rounded">
                    <h2 className="text-lg font-bold mb-4">Cart Total</h2>
                    <div className="flex justify-between mb-2">
                        <span>Subtotal:</span>
                        <span>${calculateSubtotal().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Discount:</span>
                        <span>${discount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping:</span>
                        <span>Free</span>
                    </div>
                    <div className="flex justify-between font-bold mb-4">
                        <span>Total:</span>
                        <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                    <Link href="/checkout" passHref>
                        <Button
                            className="w-full bg-red-500 hover:bg-red-600 text-white"
                        >
                            Proceed to checkout
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}