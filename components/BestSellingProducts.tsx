import { getBestSellingProducts } from '@/lib/utils';
import ProductSection from './ProductSection';

const BestSellingProducts = async () => {
    const bestSellingProducts = await getBestSellingProducts();

    return (
        <ProductSection
            title="Best Selling Products"
            subtitle="This Month"
            products={bestSellingProducts}
            showViewAll="viewAll"
            layout="scroll"
        />
    );
};

export default BestSellingProducts;