"use client";

import { useEffect, useState } from "react";
import AllProductsCard from "@/ui/AllProductsCard";
import { Products } from "@/types";

interface Filters {
  priceRange: string[];
  category: string[];
  rating: string[];
}

const Filltering = ({ allProducts }: { allProducts: Products[] }) => {
  const [products, setProducts] = useState(allProducts);
  const [filters, setFilters] = useState<Filters>({
    priceRange: [],
    category: [],
    rating: [],
  });

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    let filtered = [...allProducts];

    // price range filters
    if (filters.priceRange.length > 0) {
      filtered = filtered.filter((product) => {
        return filters.priceRange.some((range) => {
          const [min, max] = range.split("-");

          const price = parseFloat(product.price);
          return (
            !isNaN(price) &&
            price >= parseFloat(min) &&
            price <= parseFloat(max)
          );
        });
      });
    }

    //  category filters
    if (filters.category.length > 0) {
      filtered = filtered.filter((product) =>
        filters.category.includes(product.category)
      );
    }

    //  rating filters
    if (filters.rating.length > 0) {
      filtered = filtered.filter((product) =>
        filters.rating.includes(product.rating.toString())
      );
    }

    setProducts(filtered);
  };
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFilters((prevFilters: Filters) => {
      const updatedFilters: Filters = { ...prevFilters };
      const filterArray = updatedFilters[name as keyof Filters];

      const index = filterArray.indexOf(value);

      if (checked && index === -1) {
        updatedFilters[name as keyof Filters] = [...filterArray, value];
      } else if (!checked && index !== -1) {
        updatedFilters[name as keyof Filters] = filterArray.filter(
          (item) => item !== value
        );
      }

      return { ...updatedFilters };
    });
  };

  return (
    <div className=" flex flex-col lg:flex-row gap-5">
      <div className="flex-[1]">
        {/* PRICE RANGE */}
        <div className="price-range border flex items-center flex-col justify-center gap-4 p-3">
          <h1 className="text-lg text-black font-medium uppercase">
            Price Range
          </h1>
          {["200-400", "400-600", "600-800", "800-1200"].map((range) => (
            <div className="flex items-center gap-2" key={range}>
              <input
                type="checkbox"
                name="priceRange"
                value={range}
                onChange={handleFilterChange}
              />
              <p>BDT {range.replace("-", " - ")}</p>
            </div>
          ))}
        </div>
        {/* CATEGORY */}
        <div className="category border flex items-center flex-col justify-center gap-4 p-3">
          <h1 className="text-lg text-black font-medium uppercase">Category</h1>
          {[
            "freshwater-fish",
            "saltwater-fish",
            "seafood",
            "tropical-fish",
            "coldwater-fish",
            "shellfish",
          ].map((category) => (
            <div className="flex items-center gap-2" key={category}>
              <input
                type="checkbox"
                name="category"
                value={category}
                onChange={handleFilterChange}
              />
              <p>{category.replace("-", " ")}</p>
            </div>
          ))}
        </div>
        {/* RATING */}
        <div className="rating border flex items-center flex-col justify-center gap-4 p-3">
          <h1 className="text-lg text-black font-medium uppercase">Rating</h1>
          {[1, 2, 3, 4, 5].map((rating) => (
            <div className="flex items-center gap-2" key={rating}>
              <input
                type="checkbox"
                name="rating"
                value={rating}
                onChange={handleFilterChange}
              />
              <p>{rating} Star</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 flex-[4]">
        {products.map((product: Products) => (
          <AllProductsCard key={product._id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Filltering;
