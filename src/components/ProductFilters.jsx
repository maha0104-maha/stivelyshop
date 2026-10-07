import React from "react";
const ProductFilters=({category,setCategory,maxPrice,setMaxPrice,minRating,setMinRating,categories})=>{
    return(
        <>
        {/*for xPrice,categories,rating*/}
        <div className="rounded-xl border border-gray-200 bg-white p-5">
            <div><label htmlFor="category" className="mb-2 text-sm font-medium text-gray-900"> 
                category
                
                </label>
                <select id="category" value={category} onChange={(e)=>setCategory(e.target.value)} 
                className="w-full  rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 outline-none focus:border-gray-900">
                    <option value="">All Categories</option>
                    {categories.map((item)=>(
                        <option key={item.slug||item}
                        value={item.slug||item}>{item.name}</option>
                    ))}
                </select>
                </div>
                <div className="mt-5">
                    <label htmlFor="maxPrice"
                    className="mb-2 block text-sm font-medium text-gray-900">Maximum Price</label>
                      
                     <input id="maxPrice" type="number" min="0"value={maxPrice}
                          onChange={(e)=>setMaxPrice(e.target.value)} placeholder="Enter maximum price" className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 outline-none focus:border-gray-900"/>
               </div>
               <div>
               <label htmlFor="rating"
                    className="mb-2 block text-sm font-medium text-gray-900">Minimum Rating</label>
                    
               <select id="rating" value={minRating} onChange={(e) => setMinRating(e.target.value)}
                   className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 outline-none focus:border-gray-900">
                    <option value="">Any Rating</option>
                    <option value="4">4 & above</option>
                    <option value="3">3 & above</option>
                    <option value="2">2 & above</option>
                    <option value="1">1 & above</option>
                    </select>
                </div>

                
        </div>
        </>
    )
}

export default ProductFilters;
