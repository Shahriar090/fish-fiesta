import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  img: string;
  price: string;
  category: string;
}

interface AllProductsProps {
  allProducts: Product[];
}

const Table = ({ allProducts }: AllProductsProps) => {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="border ">
              <th>Img</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {allProducts?.map((product: Product) => (
              <tr key={product._id} className="border cursor-pointer bg-white">
                <td>
                  <div className="flex items-center gap-3 justify-center">
                    <div className="avatar">
                      <div className="mask mask-squircle">
                        <Image
                          src={product.img}
                          width={48}
                          height={48}
                          alt={product.name}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="flex justify-center items-center flex-col">
                  <div className="font-medium">{product.name}</div>
                  {/* <div className="text-sm opacity-50">{product.category}</div> */}
                </td>
                <td className=" text-center">{product.price} BDT</td>
                <td className="text-center">{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
