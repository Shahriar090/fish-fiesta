import Image from "next/image";

const TrendingProdCard = ({ data }: any) => {
  const { img, rating, name, discount, price, previousPrice } = data;
  console.log(data.img);
  return (
    <div className="card-container relative w-full max-w-lg bg-white shadow-xl mx-auto  p-5 lg:p-10">
      <Image
        src={img}
        width={300}
        height={100}
        alt="Product Image"
        className="h-24 mx-auto"
      />

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
        <p>
          Rating : <span className=" font-medium"> {rating}</span>
        </p>
      </div>
      <div className="actions border flex justify-center mt-5">
        <button className="w-full py-1 border text-green-600 font-medium border-green-600 hover:bg-green-600 hover:text-white transition-all duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default TrendingProdCard;
