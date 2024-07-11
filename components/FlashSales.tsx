'use client'

import React from 'react';
import ProductSection from './ProductSection';
import { IProduct } from '@/lib/database/models/product.model';

const FlashSales = ({ productData }: { productData: IProduct[] }) => {

    return (
        <ProductSection
            title="Flash Sales"
            subtitle="Today's"
            products={productData.slice(0, 10)}
            showCountdown={true}
            showViewAll="flashSale"
            layout="scroll"
        />
    );
};

export default FlashSales;