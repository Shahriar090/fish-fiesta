import { FlashSalesData } from "@/types";
import FlashSaleCard from "@/ui/FlashSaleCard";

const FlashSalePage = async () => {
  const res = await fetch("http://localhost:5000/flash-sale", {
    next: { revalidate: 30 },
  });
  const products = await res.json();
  console.log(products);
  return (
    <section
      id="all-flash-sell"
      className="pt-16 lg:pt-44 w-full max-w-screen-2xl mx-auto px-4 lg:px-36"
    >
      <div className="w-full h-32 bg-gradient-to-r from-green-400 via-green-300 to-green-400 flex flex-col justify-center items-center rounded-md my-12 lg:my-24">
        <h1 className="text-black font-semibold text-2xl md:text-3xl lg:text-4xl">
          Flash Sales
        </h1>
        <p className="font-medium text-slate-800 text-lg">Deals Update Daily</p>
      </div>
      <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {products?.map((product: FlashSalesData) => (
          <FlashSaleCard key={product._id} data={product} />
        ))}
      </div>
    </section>
  );
};

export default FlashSalePage;
