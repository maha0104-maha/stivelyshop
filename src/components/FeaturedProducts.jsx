import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../hooks/useProducts';
import { Heading } from 'lucide-react';
import Headingg from './Headingg';
import ProductCard from './ProductCard';

const FeaturedProducts=()=>{
  const {products,loading,error}=useProducts();

  // first 8 for desktop
  const featuredProducts=products?products.slice(0,8):[];
  return (
    <section className="mt-[-10px] max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Headingg headingg="discover" subheading="Featured Products" linkto="search"/>
      {/*desktop-8 phone-4 */}
      <div className="ml-[10px] grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
         {featuredProducts.map((product) => (
           <ProductCard key={product.id} product={product} />
         ))}
      </div>
    </section>
  );
};
export default FeaturedProducts;
