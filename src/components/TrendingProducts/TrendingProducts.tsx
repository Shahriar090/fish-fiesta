import { Products } from "@/types";
import TrendingProdCard from "@/ui/TrendingProdCard";

const TrendingProducts = async () => {
  const res = await fetch(
    "https://bounty-basket-server.vercel.app/all-products?sort=rating&limit=6",
    {
      next: { revalidate: 30 },
    }
  );
  const data = await res.json();

  return (
    <section className="pt-16 w-full max-w-screen-2xl mx-auto px-4 lg:px-36">
      <div className="text-center pb-16">
        <h1 className="text-2xl text-black uppercase font-medium ">
          Most Popular Products
        </h1>
        <p>
          Here are some of our most popular products based on customers ratings
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data.map((item: Products) => (
          <TrendingProdCard key={item._id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default TrendingProducts;
