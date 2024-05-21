import { FlashSalesData } from "@/types";
import Image from "next/image";

const CategoryCard = ({ data }: { data: FlashSalesData }) => {
  const { img, name, discount, price, previousPrice } = data;

  return (
    <div className="card-container relative w-full  bg-white shadow-xl mx-auto  p-5 lg:p-10">
      <figure>
        <Image
          src={img}
          width={300}
          height={100}
          alt="Fish Image"
          className="mx-auto"
        />
      </figure>
      <div className="details mt-5 text-center">
        <div>
          <p className="font-medium text-black uppercase">{name}</p>
          <p className="text-black">BDT : {price}</p>
        </div>
        <div className="discount text-sm text-black flex items-center gap-3 justify-center">
          <p>
            <del>{previousPrice}</del>
          </p>
          <p>-{discount}</p>
        </div>
      </div>
      <div className="actions border flex justify-center mt-5">
        <button className="w-full py-1 border text-green-600 font-medium border-green-600 hover:bg-green-600 hover:text-white transition-all duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
