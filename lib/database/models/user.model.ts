import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    address: string;
    cart: Array<{
        id: string;
        name: string;
        price: number;
        quantity: number;
        size: string;
        color: string;
        image: string;
    }>;
    wishlist: string[];
    orders: Array<{
        items: Array<{
            id: string;
            name: string;
            price: number;
            quantity: number;
            size: string;
            color: string;
            image: string;
        }>;
        total: number;
        paymentMethod: string;
        address: {
            streetAddress: string;
            apartment: string;
            townCity: string;
            phoneNumber: string;
            email: string;
        };
        createdAt: Date;
    }>;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    address: { type: String, default: '' },
    cart: [{
        id: String,
        name: String,
        price: Number,
        quantity: Number,
        size: String,
        color: String,
        image: String,
    }],
    wishlist: [{ type: String }],
    orders: [{
        items: [{
            id: String,
            name: String,
            price: Number,
            quantity: Number,
            size: String,
            color: String,
            image: String,
        }],
        total: Number,
        paymentMethod: String,
        address: {
            streetAddress: { type: String, default: '' },
            apartment: { type: String, default: '' },
            townCity: { type: String, default: '' },
            phoneNumber: { type: String, default: '' },
            email: { type: String, default: '' },
        },
        createdAt: { type: Date, default: Date.now },
    }],
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;