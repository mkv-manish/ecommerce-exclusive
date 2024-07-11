import { getJustForYouProducts } from '@/lib/utils';
import ProductSection from './ProductSection';

const JustForYou = async () => {
    const justForYouProducts = await getJustForYouProducts();
    return (
        <ProductSection
            title="Just For You"
            products={justForYouProducts}
            showViewAll="viewAll"
            layout="scroll"
        />
    );
};

export default JustForYou;