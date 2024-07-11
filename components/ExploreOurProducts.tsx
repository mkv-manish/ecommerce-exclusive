import { getExploreOurProducts } from '@/lib/utils';
import ProductSection from './ProductSection';

const ExploreOurProducts = async () => {
    const exploreProducts = await getExploreOurProducts();

    return (
        <ProductSection
            title="Explore Our Products"
            subtitle="Our Products"
            products={exploreProducts}
            showViewAll="exploreYourProduct"
            layout="two-row"
        />
    );
};

export default ExploreOurProducts;