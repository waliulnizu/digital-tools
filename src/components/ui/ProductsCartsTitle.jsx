import React from 'react';

const ProductsCartsTitle = () => {
    return (
        <div className="w-9/12 mx-auto py-12">
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
        </div>
    );
};

export default ProductsCartsTitle;