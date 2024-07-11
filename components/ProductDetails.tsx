import React from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart } from 'lucide-react';
import DeliveryInfo from './DeliveryInfo';
import StarRating from './StarRating';
import { useCart } from '@/contexts/CartContext';
import { toast } from './ui/use-toast';
import { ToastAction } from './ui/toast';
import Link from 'next/link';

interface ProductDetailsProps {
    product: {
        id: string;
        name: string;
        price: number;
        // description: string;
        rating: number;
        reviews: number;
        inStock: boolean;
        image: string;
    };
    quantity: number;
    setQuantity: React.Dispatch<React.SetStateAction<number>>;
    selectedSize: string;
    setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
    selectedColor: string;
    setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
    product,
    quantity,
    setQuantity,
    selectedSize,
    setSelectedSize,
    selectedColor,
    setSelectedColor,
}) => {
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];
    const colors = ['blue', 'red'];

    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            size: selectedSize,
            color: selectedColor,
            image: product.image,
        });
        toast({
            title: 'Product added to cart!',
            variant: 'default',
            action: (
                <ToastAction className='bg-white text-black' altText="View Cart">
                    <Link href="/cart">
                        View Cart
                    </Link>
                </ToastAction>
            ),
            className: 'toast-success'
        });
    };

    return (
        <div className="flex-1 space-y-5">
            <div className="space-y-4">
                <h1 className="text-2xl font-semibold tracking-wide">{product.name}</h1>
                <div className="flex items-center mt-2 gap-3">
                    <StarRating rating={product.rating} />
                    <span className="text-sm text-gray-500">({product.reviews} Reviews)</span> |
                    <span className="text-sm text-[var(--button-2)]">{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
                </div>
                <p className="text-2xl font-normal mt-4">${product.price.toFixed(2)}</p>
                {/* <p className="mt-4 text-sm font-normal">{product.description}</p> */}
            </div>

            <hr className='border-black' />

            <div className="flex gap-5 items-center">
                <h3 className="font-normal text-xl tracking-wide font-inter">Colours:</h3>
                <div className="flex space-x-2">
                    {colors.map((color) => (
                        <button
                            key={color}
                            className={`w-4 h-4 rounded-full ${color === 'blue' ? 'bg-blue-500' : 'bg-red-500'} ${selectedColor === color ? 'ring-2 ring-offset-2 ring-black' : ''}`}
                            onClick={() => setSelectedColor(color)}
                        />
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-5">
                <h3 className="font-normal text-xl tracking-wide">Size:</h3>
                <div className="flex space-x-3">
                    {sizes.map((size) => (
                        <Button
                            key={size}
                            size="sm"
                            variant={selectedSize === size ? "danger" : "outline"}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size}
                        </Button>
                    ))}
                </div>
            </div>

            <div className="flex items-center gap-3">
                <div className="flex items-center">
                    <Button variant="ghost" className="rounded-r-none h-11 border border-black" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</Button>
                    <Input
                        type="text"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="w-12 h-11 text-center border-y border-black pr-0
                        ring-offset-background file:border-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:rounded-none focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50
                        "
                    />
                    <Button variant="danger" className='rounded-l-none h-11 border-[var(--button)]' onClick={() => setQuantity(q => q + 1)}>+</Button>
                </div>
                <Button onClick={handleAddToCart} className="bg-[var(--button)] hover:bg-red-600 text-white px-12 h-11">Add to Cart</Button>
                <Button variant="outline" className="p-2 h-11">
                    <Heart />
                </Button>
            </div>

            <div className="border border-black/[0.8] rounded-md ">
                <DeliveryInfo icon="/icons/icon-delivery.svg" text="Free Delivery" subtext="Enter your postal code for Delivery Availability" className="underline" />

                <hr className='border-black/[0.8]' />

                <DeliveryInfo icon="/icons/Icon-return.svg" text="Return Delivery" subtext="Free 30 Days Delivery Returns. Details" />
            </div>
        </div>
    );
};

export default ProductDetails;