import JustForYou from "@/components/JustForYou"
import WishList from "@/components/WishList"
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { IProduct } from '@/lib/database/models/product.model';

async function getWishlistItems(): Promise<IProduct[]> {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            console.log("No session found");
            return [];
        }

        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/wishlist`, {
            headers: {
                'Cookie': `${(await import('next/headers')).cookies().toString()}`,
            },
            cache: 'no-store'
        });

        if (!response.ok) {
            console.error('Failed to fetch wishlist', await response.text());
            return [];
        }

        const data = await response.json();

        // Fetch product details for each wishlist item
        const products = await Promise.all(data.wishlist.map(async (productId: string) => {
            try {
                const productResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/${productId}`, { cache: 'no-store' });
                if (!productResponse.ok) {
                    console.error(`Failed to fetch product with id ${productId}`, await productResponse.text());
                    return null;
                }
                const product = await productResponse.json();
                return product;
            } catch (error) {
                console.error(`Error fetching product ${productId}:`, error);
                return null;
            }
        }));

        const filteredProducts = products.filter((product): product is IProduct => product !== null);

        return filteredProducts;
    } catch (error) {
        console.error("Error in getWishlistItems:", error);
        return [];
    }
}

const WishListPage = async () => {
    const wishlistItems = await getWishlistItems();

    return (
        <section className="container mx-auto py-10">
            {wishlistItems.length > 0 && (
                <WishList initialWishlistItems={wishlistItems} />
            )}
            <JustForYou />
        </section>
    )
}

export default WishListPage