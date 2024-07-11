import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/database/mongoose';
import ProductData from '@/lib/database/models/product.model';
import { ProductDataSchema } from '@/constants/index';

export async function GET() {
    try {
        await connectToDatabase();

        // Clear existing data
        await ProductData.deleteMany({});

        // Prepare the data
        const dataToInsert = {
            products: ProductDataSchema.products,
            categories: ProductDataSchema.categories,
            filters: ProductDataSchema.filters,
            specialCollections: Object.entries(ProductDataSchema.specialCollections).map(([name, productIds]) => ({
                name,
                productIds
            }))
        };

        // Insert the data
        const newProductData = new ProductData(dataToInsert);
        await newProductData.save();

        return NextResponse.json({ message: 'Database seeded successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error seeding database:', error);
        return NextResponse.json({ error: 'Failed to seed database' }, { status: 500 });
    }
}


// async function seedDatabase() {
//     const response = await fetch('/api/seed');
//     if (response.ok) {
//       console.log('Database seeded successfully');
//     } else {
//       console.error('Failed to seed database');
//     }
//   }