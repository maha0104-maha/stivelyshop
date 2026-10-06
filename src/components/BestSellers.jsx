import React from "react";
import {Link} from "react-router-dom";
import useProducts from "../hooks/useProducts";
import Headingg from "./Headingg";
import ProductCard from "./ProductCard";
const BestSellers=() => {
  const {products,loading,error}=useProducts();
  const fashionCategories = [
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "tops",
  "womens-bags",
  "womens-jewellery",
  "womens-watches",
  "mens-watches",
  "sunglasses",
];
  //sort products by rating,take top 4  
  const bestSellers=products
     .filter((product) =>
    fashionCategories.includes(product.category?.toLowerCase())
  ).sort((a, b) => (b.rating || 0) - (a.rating || 0)) .slice(0, 4);


   //load and error
  

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <Headingg headingg="popular" subheading="Best sellers" linkto="search"/>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {bestSellers.map((product) => (
                <ProductCard key={product.id} product={product} />
             ))}
       </div>

    </section>
  );
};

export default BestSellers;