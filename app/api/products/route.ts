import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/database/mongoose';
import Product from '@/lib/database/models/product.model';

export async function GET() {
    try {
        await connectToDatabase();
        const products = await Product.find({});
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
    }
}