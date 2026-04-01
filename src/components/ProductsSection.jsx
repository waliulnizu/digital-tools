import React, { use } from "react";

import ProductsCartsTitle from "./ui/ProductsCartsTitle";
import ProductCard from "./ProductCard";

const ProductsSection = ({ productsPromise, carts, setCarts }) => {
  const products = use(productsPromise);

  
  // console.log(products);
  return (
    <>
      <div className="py-12">
        
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {
            products.map((product) => (
              <ProductCard key={product.id} product={product} carts={carts} setCarts={setCarts} />

            ))
          }
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsSection;
