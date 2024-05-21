import { Products } from "@/types";
import AllProductsCard from "@/ui/AllProductsCard";

const AllProductsDetails = async () => {
  const res = await fetch("http://localhost:5000/all-products?sort=rating");
  const allProducts = await res.json();

  return (
    <section className="pt-16 lg:pt-48 w-full max-w-screen-2xl mx-auto px-4 lg:px-36">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allProducts.map((product: Products) => (
          <AllProductsCard key={product._id} data={product} />
        ))}
      </div>
    </section>
  );
};

export default AllProductsDetails;
