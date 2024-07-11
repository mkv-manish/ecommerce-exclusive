import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/database/mongoose';
import ProductData from '@/lib/database/models/product.model';

export async function GET(
    request: NextRequest,
    { params }: { params: { productId: string } }
) {
    await connectToDatabase();

    const productId = params.productId;

    try {
        const productData = await ProductData.findOne({ 'products.id': productId });

        if (!productData) {
            console.log("Product data not found for id:", productId);
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        const product = productData.products.find((p: any) => p.id === productId);

        if (!product) {
            console.log("Product not found in products array for id:", productId);
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}