import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/database/mongoose';
import User from '@/lib/database/models/user.model';

export async function POST(req: NextRequest) {
    try {
        await connectToDatabase();
        const body = await req.json();

        const { userId, orderData } = body;

        if (!userId || !orderData) {
            throw new Error('Missing userId or orderData');
        }

        const newOrderAddress = {
            streetAddress: orderData.streetAddress,
            apartment: orderData.apartment || '',
            townCity: orderData.townCity,
            phoneNumber: orderData.phoneNumber,
            email: orderData.email,
        };

        const newUserAddress = `${orderData.streetAddress}, ${orderData.apartment}, ${orderData.townCity}`;

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            {
                $set: {
                    name: orderData.firstName,
                    address: newUserAddress,
                },
                $push: {
                    orders: {
                        items: orderData.cart,
                        total: orderData.total,
                        paymentMethod: orderData.paymentMethod,
                        address: newOrderAddress,
                        createdAt: new Date(),
                    },
                },
            },
            { new: true }
        );

        if (!updatedUser) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Order placed successfully', user: updatedUser });
    } catch (error) {
        console.error('Detailed error:', error);
        return NextResponse.json({ error: 'Internal Server Error', details: (error instanceof Error ? error.message : String(error)) }, { status: 500 });
    }
}