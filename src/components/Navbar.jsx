import React from "react";

const NavBar=()=>{
  return (
     <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">  
        <h1 className="text-xl font-bold">StivelyShop</h1>
         <div className="flex gap-6">
          <span>Home</span>
          <span>Search</span>
          <span>Cart</span>
        </div>
</div>
 </nav>
  );
};

export default NavBar;