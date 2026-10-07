import React from "react";
const SortDropdown=({sortBy,setSortBy})=>{
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort"
        className="text-sm text-gray-600">
        Sort by:
      </label>
      <select id="sort" value={sortBy}
        onChange={(e)=>setSortBy(e.target.value)}
        className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-gray-900" >
        <option value="default">Recommended</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating-high">Rating: High to Low</option>
        <option value="name-az">Name: A to Z</option>
        <option value="name-za">Name: Z to A</option>
      </select>
    </div>
  );
};

export default SortDropdown;