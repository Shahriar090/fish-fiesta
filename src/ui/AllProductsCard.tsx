import { Products } from "@/types";
import Stars from "@/utils/Stars";
import Image from "next/image";
import Link from "next/link";

const AllProductsCard = ({ data }: { data: Products }) => {
  const { _id, img, name, discount, price, previousPrice, rating } = data;

  return (
    <div className="card-container relative w-full max-w-lg  bg-white shadow-xl mx-auto  p-5 lg:p-10 flex flex-col justify-between gap-5">
      <div>
        <Image
          src={img}
          width={300}
          height={100}
          alt="Product Image"
          className=" lg:mx-auto"
        />
      </div>
      <div className="details">
        <div>
          <p className="font-medium text-black uppercase">{name}</p>
          <p className="text-black">BDT : {price}</p>
        </div>
        <div className="discount text-sm text-black flex items-center gap-3">
          <p>
            <del>{previousPrice}</del>
          </p>
          <p>-{discount}</p>
        </div>
        <div className="stars">
          <Stars rating={rating} />
        </div>
      </div>
      <div className="actions">
        <Link href={`/allProducts/${_id}`}>
          <button className="w-full py-1 border text-green-600 font-medium border-green-600 hover:bg-green-600 hover:text-white transition-all duration-300">
            Vew Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllProductsCard;
