import BestSellingProducts from "@/components/BestSellingProducts";
import Categories from "@/components/Categories";
import Contact from "@/components/Contact";
import ExploreOurProducts from "@/components/ExploreOurProducts";
import FlashSales from "@/components/FlashSales";
import JblBoomBox from "@/components/JblBoomBox";
import NewArrival from "@/components/NewArrival";
import Sidebar from "@/components/Sidebar";
import { getProducts } from "@/lib/utils";


export default async function Home() {

  const productData = await getProducts();

  return (
    <main className="relative flex flex-col items-center w-full overflow-auto">
      <div className="h-full w-full">
        <Sidebar />
        <div className="container mx-auto">
          <FlashSales productData={productData[0].products} />
          <hr className="border-gray-300" />
          <Categories />
          <hr className="border-gray-300" />
          <BestSellingProducts />
          <JblBoomBox />
          <ExploreOurProducts />
          <NewArrival />
          <Contact />
        </div>
      </div>
    </main>
  );
}
