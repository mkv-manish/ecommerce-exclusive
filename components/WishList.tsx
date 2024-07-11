import ProductSection from './ProductSection';
import { IProduct } from '@/lib/database/models/product.model';

interface WishListProps {
    initialWishlistItems: IProduct[];
}

const WishList = ({ initialWishlistItems }: WishListProps) => {
    return (
        <ProductSection
            title={`Wishlist (${initialWishlistItems.length})`}
            products={initialWishlistItems}
            showMoveAllToBag={true}
            layout="scroll"
        />
    );
};

export default WishList;