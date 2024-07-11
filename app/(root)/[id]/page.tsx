"use client"

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import ImageGallery from '@/components/ImageGallery';
import ProductDetails from '@/components/ProductDetails';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { getProducts } from '@/lib/utils';
import { IProduct } from '@/lib/database/models/product.model';
import Image from 'next/image';
import Link from 'next/link';
import ProductSection from '@/components/ProductSection';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [quantity, setQuantity] = useState<number>(1);
    const [selectedSize, setSelectedSize] = useState<string>('M');
    const [selectedColor, setSelectedColor] = useState<string>('blue');

    const [relatedProducts, setRelatedProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const fetchProductAndRelated = async () => {
            try {
                setLoading(true);
                const productDataArray = await getProducts();
                if (!Array.isArray(productDataArray) || productDataArray.length === 0) {
                    throw new Error('No product data');
                }
                const productData = productDataArray[0];
                const foundProduct = productData.products.find((p: IProduct) => p.id === id);
                if (!foundProduct) {
                    throw new Error('Product not found');
                }
                setProduct(foundProduct);

                // Filter related products
                const related = productData.products.filter((p: IProduct) =>
                    p.category === foundProduct.category && p.id !== foundProduct.id
                ).slice(0, 4); // Limit to 4 related products
                setRelatedProducts(related);
            } catch (err) {
                setError('Error fetching product. Please try again.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchProductAndRelated();
        }
    }, [id]);

    if (loading) {
        return <div className='py-20'>Loading...</div>;
    }

    if (error) {
        return <div className='py-20 text-red-500'>{error}</div>;
    }

    if (!product) {
        return <div className='py-20'>Product not found</div>;
    }


    return (
        <div className="container mx-auto flex flex-col justify-center min-h-[800px] py-14 gap-16">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href='/' aria-current="page">{product.name}</BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className='flex flex-col items-center md:flex-row gap-10'>
                <ImageGallery images={[product.image]} />

                <ProductDetails
                    product={product}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                />
            </div>

            {relatedProducts.length > 0 && (
                <ProductSection
                    title="Related Item"
                    subtitle="Related Item"
                    products={relatedProducts}
                    showViewAll="exploreYourProduct"
                    layout="scroll"
                />
            )}

        </div>
    );
};

export default ProductPage;