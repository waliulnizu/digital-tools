import React, { useState } from 'react';
import ProductsSection from '../ProductsSection';
import CartsSection from '../CartsSection';


const fetchProducts = async () => {
  const res = await fetch("/public/products.json");
  return res.json();
};

const productsPromise = fetchProducts();
const ProductsCartsTitle = ({ carts, setCarts }) => {

  const [activeTab, setActiveTab] = useState("products");
  // console.log(activeTab)

  
  // console.log(carts)
    return (
        <div className="w-9/12 mx-auto py-20">
            <div className="text-center">
          <h1 className="text-5xl text-[#101727FF]">Premium Digital Tools</h1>
          <p className="text-md py-4 text-[#627382FF]">
            Choose from our curated collection of premium digital products
            designed <br /> to boost your productivity and creativity.
          </p>
          {/* <div className="space-x-2">
            <button className="btn w-[120px] bg-[#4F39F6] text-white p-4 rounded-2xl hover:bg-[#3a2aaf]">
            Products
          </button>
          <button className="btn w-[120px] bg-[#9514FA] text-white p-4 rounded-2xl hover:bg-[#7a0dbf]">
            Carts
          </button>
          </div> */}

          {/* name of each tab group should be unique */}
          <div className="tabs tabs-box justify-center bg-transparent mt-6">
            <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products " onClick={()=>setActiveTab("Products")} defaultChecked />
            <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`Carts (${carts.length})`} onClick={()=>setActiveTab("Carts")} />
            
          </div>

           { activeTab === "Products" && <ProductsSection  productsPromise={productsPromise} carts={carts} setCarts={setCarts}/> }
            { activeTab === "Carts" && <CartsSection  carts={carts} setCarts={setCarts}/> }

        </div>
        </div>
    );
};

export default ProductsCartsTitle;