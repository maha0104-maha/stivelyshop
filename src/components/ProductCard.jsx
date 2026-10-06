import React from "react";
import {Link} from "react-router-dom";
import {FiHeart,FiStar} from "react-icons/fi";

const ProductCard=({product}) => {
  return (
  
    <div className="group w-full max-w-[220px]">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-103"
          />
        </Link>
      </div>
      <Link to={`/products/${product.id}`} className="block">
        <div className="mt-2 px-0.5">
          <h3 className="truncate text-xs font-medium text-gray-800 group-hover:text-black">
            {product.title}
          </h3>
          {product.rating !== undefined && (
            <div className="mt-0.5 flex items-center gap-1">
              <div className="flex items-center text-[10px] font-medium text-amber-500 gap-0.5"> 
                <FiStar /> 
                <span className="text-gray-500">{product.rating.toFixed(1)}</span> 
              </div> 
            </div>
          )}
          <div className="mt-0.5 flex items-baseline gap-1.5 dynamic-price-wrapper">
            <span className="text-xs font-semibold text-gray-900">
              ${product.price}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
