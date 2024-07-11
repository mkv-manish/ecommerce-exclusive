"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const OrderConfirmationPage = () => {
    return (
        <div className="container mx-auto py-20 text-center">
            <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
            <p className="mb-8">Your order has been received and is being processed.</p>
            <Link href="/" passHref>
                <Button className="bg-[var(--secondary-2)] text-white">
                    Continue Shopping
                </Button>
            </Link>
        </div>
    );
};

export default OrderConfirmationPage;