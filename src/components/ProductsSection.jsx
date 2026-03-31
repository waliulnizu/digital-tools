import React, { use } from "react";
import { FaCheck } from "react-icons/fa6";

const ProductsSection = ({ productsPromise }) => {
  const products = use(productsPromise);
  console.log(products)
  return (
    <>
      <div className="w-9/12 mx-auto py-28">
        <div className="text-center">
          <h1 className="text-5xl text-[#101727FF]">Premium Digital Tools</h1>
          <p className="text-md py-4 text-[#627382FF]">
            Choose from our curated collection of premium digital products
            designed <br /> to boost your productivity and creativity.
          </p>
          <div className="space-x-2">
            <button className="btn w-[120px] bg-[#4F39F6] text-white p-4 rounded-2xl hover:bg-[#3a2aaf]">
            Products
          </button>
          <button className="btn w-[120px] bg-[#9514FA] text-white p-4 rounded-2xl hover:bg-[#7a0dbf]">
            Carts
          </button>
          </div>

        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {
            products.map((product) => (
              <div className="shadow-lg rounded-xl border-[#f2f2f2FF] px-8 py-4 " key={product.id} >
                <div className="flex flex-col  space-y-4 flex-1">
                  <div className="flex justify-between">
                    <div className="bg-[#ffffffFF] w-16 h-16 border border-gray-300 rounded-full flex items-center justify-center">
                    <img src={product.icon} alt={product.name} className="w-8 h-8 object-cover " />
                    </div>
                  <h1 className="text-2xl font-bold capitalize text-[#627382FF]">{product.tag}</h1>
                </div>
                  <h2 className="text-2xl font-bold capitalize text-[#627382FF] ">{product.name}</h2>
                  <p className="text-[#627382FF] ">{product.description}</p>
                  <p className="text-2xl">${product.price.toFixed(2)}/<span className="text-base">{product.period}</span></p>
                  <div className="flex flex-col space-y-2">
                    {product.features.map((feature, index)=>(
                        <p  key={index} className="text-[#627382FF] ">
                         <FaCheck className="inline-block mr-1 text-green-500"/> {feature}
                        </p>
                    ))}
                  </div>
                  <button className="btn bg-[#4F39F6] text-white p-4 rounded-2xl mt-auto hover:bg-[#3a2aaf]">
                    Buy Now
                  </button>
                </div>
              </div>

            ))
          }
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsSection;
