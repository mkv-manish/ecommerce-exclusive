import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { IProduct } from '@/lib/database/models/product.model';

async function getWishlistItems(): Promise<IProduct[]> {
    const session = await getServerSession(authOptions);
    if (!session) {
        return [];
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/wishlist`, {
        headers: {
            Cookie: `next-auth.session-token=${session.user.email}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch wishlist');
    }

    const data = await response.json();

    // Fetch product details for each wishlist item
    const products = await Promise.all(data.wishlist.map(async (productId: string) => {
        const productResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/${productId}`);
        return productResponse.json();
    }));

    return products;
}

export default async function WishListData() {
    const wishlistItems = await getWishlistItems();
    return { wishlistItems };
}