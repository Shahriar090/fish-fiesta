"use server";

import { FlashSalesData } from "@/types";
import FlashSaleCard from "@/ui/FlashSaleCard";
import Link from "next/link";

const FlashSale = async () => {
  const res = await fetch("http://localhost:5000/flash-sale", {
    next: { revalidate: 30 },
  });
  const flashSales = await res.json();

  return (
    <section
      id="flash-sale"
      className="pt-16 w-full max-w-screen-2xl mx-auto px-4 lg:px-36"
    >
      <div className="pb-16 flex justify-between items-center">
        <h1 className="text-2xl text-black uppercase font-medium ">
          Flash Sale
        </h1>
        <Link href="/flash-sale">
          <button className="px-6 py-2 border text-green-600 font-medium border-green-600 hover:bg-green-600 hover:text-white transition-all duration-300">
            See All
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {flashSales?.slice(0, 4).map((item: FlashSalesData) => (
          <FlashSaleCard key={item._id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default FlashSale;
