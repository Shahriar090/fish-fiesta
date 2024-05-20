import Banner from "@/components/Banner/Banner";
import Category from "@/components/Category/Category";
import FlashSale from "@/components/FlashSale/FlashSale";
import TrendingProducts from "@/components/TrendingProducts/TrendingProducts";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <FlashSale />
      <Category />
      <TrendingProducts />
    </div>
  );
};

export default HomePage;
