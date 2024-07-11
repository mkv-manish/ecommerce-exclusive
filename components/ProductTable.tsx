'use client'

import React from 'react';
import Image from 'next/image';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { CartItem } from '@/contexts/CartContext'; // Import the CartItem type

// interface ProductItem extends CartItem {
//     image: string;
// }

export interface ProductTableProps {
    products: CartItem[];
    onQuantityChange: (id: string, quantity: number) => void;
    onRemoveProduct: (id: string) => void;
}

const ProductTable = ({ products, onQuantityChange, onRemoveProduct }: ProductTableProps) => {

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead className="text-right">Subtotal</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {products.map((product) => (
                    <TableRow key={product.id}>
                        <TableCell className="flex items-center space-x-4">
                            <div className='relative'>

                                <Image src={product.image} alt={product.name} width={50} height={50} />
                                <button
                                    className="text-red-500 absolute -top-2 -left-2"
                                    onClick={() => onRemoveProduct(product.id)}
                                >
                                    ✕
                                </button>
                            </div>

                            <span>{product.name}</span>
                        </TableCell>
                        <TableCell>${product.price.toFixed(2)}</TableCell>
                        <TableCell>
                            <input
                                type="number"
                                value={product.quantity}
                                onChange={(e) => onQuantityChange(product.id, parseInt(e.target.value))}
                                min="1"
                            />
                        </TableCell>
                        <TableCell className="text-right">
                            ${(product.price * product.quantity).toFixed(2)}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default ProductTable;