import React from "react";
import ProductCard from "./ProductCard";
const ProductGrid=({products})=>{
    //if empty
    if(!products||products.length==0){
        return(
            <div className="flex min-h-[250px] items-center justify-center">
                <p className="text-sm text-gray-500">
                    No products Found
                </p>
            </div>

        )
    }
    return(
        <div className="grid grid-cols-2 gap-x-4 ap-y-8 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
            {products.map((product)=>(
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductGrid;