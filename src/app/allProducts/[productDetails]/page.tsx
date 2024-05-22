import ProductDetailsCard from "@/ui/ProductDetailsCard";

const SingleProductDetails = async ({ params }: any) => {
  const res = await fetch(
    `https://bounty-basket-server.vercel.app/all-products/${params.productDetails}`
  );
  const data = await res.json();

  return (
    <div className="pt-14 lg:pt-44 flex items-center justify-center h-screen w-full max-w-screen-2xl mx-auto px-4 lg:px-36">
      <ProductDetailsCard data={data} />;
    </div>
  );
};

export default SingleProductDetails;
