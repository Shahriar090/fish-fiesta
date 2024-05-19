import Link from "next/link";
import { categories } from "./categoryItems";
import Image from "next/image";

const Category = () => {
  return (
    <section
      id="category"
      className="pt-16 w-full max-w-screen-2xl mx-auto px-4 lg:px-36"
    >
      <div className="text-center pb-16">
        <h1 className="text-2xl text-black uppercase font-medium ">
          Top Categories
        </h1>
        <p>Choose your favorite fish item based on the categories</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((category) => (
          <Link
            href={`/fish/fish?category=${category.category}`}
            key={category.id}
          >
            <div className="cursor-pointer w-full h-44 flex items-center justify-center mx-auto">
              <div className="img relative">
                <Image
                  src={category.img}
                  width={300}
                  height={100}
                  alt="Category Of Fish"
                  className="h-44"
                />
                <h1 className="text-xl font-medium text-white absolute top-0 bg-black w-full bg-opacity-30 text-center">
                  {category.name}
                </h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Category;
