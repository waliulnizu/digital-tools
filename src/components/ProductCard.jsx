import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";

const ProductCard = ({ product, carts, setCarts }) => {

    const [subscribedProducts, setSubscribedProducts] = useState(true);

    const handleSubscribe = () => {
        setSubscribedProducts(!subscribedProducts);
        setCarts([...carts, product]);
        
    }
    return (
        <>
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
                  <button onClick={handleSubscribe} className="btn bg-[#4F39F6] text-white p-4 rounded-2xl mt-auto hover:bg-[#3a2aaf]">
                   {subscribedProducts ? "Subscribe Now" : "Subscribed"}
                  </button>
                </div>
              </div>
        </>
    );
};

export default ProductCard;