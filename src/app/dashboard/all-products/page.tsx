import Table from "@/ui/Table";

const DashboardAllProducts = async () => {
  const res = await fetch(
    "https://bounty-basket-server.vercel.app/all-products",
    {
      cache: "no-store",
    }
  );
  const allProducts = await res.json();

  return (
    <section className="pt-10 lg:pt-44 h-full">
      <div>
        <Table allProducts={allProducts} />
      </div>
    </section>
  );
};

export default DashboardAllProducts;
