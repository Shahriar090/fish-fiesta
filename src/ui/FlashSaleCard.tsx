import { FlashSalesData } from "@/types";
import Image from "next/image";

const FlashSaleCard = ({ data }: { data: FlashSalesData }) => {
  const { img, description, name, discount, price, previousPrice, flashSale } =
    data;
  return (
    <>
      <div className="card-container relative w-full max-w-lg bg-white shadow-xl mx-auto  p-5 lg:p-10">
        <figure>
          <Image
            src={img}
            width={200}
            height={100}
            alt="Fish Image"
            className="mx-auto h-32"
          />
        </figure>
        <div className="details mt-5">
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
          <div className="flash-sale absolute top-1 left-1  text-sm text-green-600 font-medium uppercase">
            {flashSale && (
              <div className="flash-sale-label bg-green-600 text-white rounded-md p-1">
                Flash Sale
              </div>
            )}
          </div>
        </div>
        <div className="actions border flex justify-center mt-5">
          <button className="w-full py-1 border text-green-600 font-medium border-green-600 hover:bg-green-600 hover:text-white transition-all duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default FlashSaleCard;
