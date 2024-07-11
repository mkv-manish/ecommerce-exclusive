import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct {
    id: string;
    name: string;
    price: number;
    originalPrice: number;
    discount: number;
    rating: number;
    reviews: number;
    image: string;
    inStock: boolean;
    label?: string;
    category: string;
}

export interface ICategory {
    id: string;
    name: string;
    count: number;
}

export interface IFilter {
    priceRange: { min: number; max: number };
    ratings: number[];
    brands: string[];
}

export interface ISpecialCollection {
    name: string;
    productIds: string[];
}

export interface IProductData extends Document {
    products: IProduct[];
    categories: ICategory[];
    filters: IFilter;
    specialCollections: ISpecialCollection[];
}

const ProductDataSchema: Schema = new Schema({
    products: [{
        id: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        originalPrice: { type: Number, required: true },
        discount: { type: Number, required: true },
        rating: { type: Number, required: true },
        reviews: { type: Number, required: true },
        image: { type: String, required: true },
        inStock: { type: Boolean, required: true },
        label: { type: String },
        category: { type: String, required: true }
    }],
    categories: [{
        id: { type: String, required: true },
        name: { type: String, required: true },
        count: { type: Number, required: true }
    }],
    filters: {
        priceRange: {
            min: { type: Number, required: true },
            max: { type: Number, required: true }
        },
        ratings: [{ type: Number, required: true }],
        brands: [{ type: String, required: true }]
    },
    specialCollections: [{
        name: { type: String, required: true },
        productIds: [{ type: String, required: true }]
    }]
});

export default mongoose.models.ProductData || mongoose.model<IProductData>('ProductData', ProductDataSchema);