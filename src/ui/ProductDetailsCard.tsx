import { Products } from "@/types";
import Stars from "@/utils/Stars";
import Image from "next/image";

const ProductDetailsCard = ({ data }: { data: Products }) => {
  const { img, name, discount, price, previousPrice, rating, description } =
    data;

  return (
    <div className="w-full max-w-xl h-full bg-white shadow-xl flex justify-center items-center p-10 lg:p-14">
      <div className="content w-full">
        <div className="image ">
          <Image
            src={img}
            width={600}
            height={200}
            alt="Product Image"
            className=""
          />
        </div>
        <div className="details space-y-2">
          <p className="font-semibold text-black">{name}</p>

          <p className="font-medium text-black">{price} BDT</p>
          <Stars rating={rating} />
        </div>
        <div className="description font-semibold text-black py-5">
          Description : <p className="text-gray-800">{description}</p>
        </div>
        <div className="actions border flex justify-center">
          <button className="w-full py-1 border text-green-600 font-medium border-green-600 hover:bg-green-600 hover:text-white transition-all duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
