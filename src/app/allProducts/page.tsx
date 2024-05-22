import Filltering from "@/shared/Filltering/Filltering";

const AllProductsDetails = async () => {
  const res = await fetch(
    "https://bounty-basket-server.vercel.app/all-products"
  );
  const allProducts = await res.json();

  return (
    <section className="pt-16 lg:pt-48 w-full max-w-screen-2xl mx-auto px-4 lg:px-36 ">
      <div className="filtering-box">
        <h1 className="text-xl font-medium text-black uppercase">
          Our collection of products
        </h1>
        <div className="h-1 w-28 bg-green-500"></div>
        <div className="filter-container mt-4">
          <Filltering allProducts={allProducts} />
        </div>
      </div>
    </section>
  );
};

export default AllProductsDetails;
