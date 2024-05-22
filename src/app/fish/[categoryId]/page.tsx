import { FlashSalesData } from "@/types";
import CategoryCard from "@/ui/CategoryCard";

const AllProductsPage = async ({ searchParams }: { searchParams: any }) => {
  const res = await fetch(
    `https://bounty-basket-server.vercel.app/all-products?category=${searchParams.category}`,
    { cache: "no-store" }
  );
  const data = await res.json();

  return (
    <section className="pt-16 lg:pt-48  w-full max-w-screen-2xl mx-auto px-4 lg:px-36">
      <div className="w-full h-32 bg-gradient-to-r from-green-400 via-green-300 to-green-400 flex flex-col justify-center items-center rounded-md mb-10">
        <h1 className="text-black font-semibold text-2xl md:text-3xl lg:text-4xl">
          Available Item : {data.length}
        </h1>
        <p className="font-medium text-slate-800 text-lg">
          From Top Categories
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.map((item: FlashSalesData) => (
          <CategoryCard key={item._id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default AllProductsPage;
