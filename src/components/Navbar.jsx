import React from "react";
import {useState} from "react";
import {Link,NavLink} from "react-router-dom";
import {FiSearch,FiUser,FiShoppingCart,FiMenu,FiX} from "react-icons/fi";
const NavBar=()=>{
  //usestate for mobile version
     const [visible,setVisible] = useState(false);

  return (
    <>
    {/* Navbar */}
    <div className="relative flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 sm:px-6 lg:px-8">
      
      <Link to="/">
        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">StivelyShop</h1>
      </Link>
      {/*navigation for larger screens*/}
      <ul className="hidden items-center gap-7 text-sm text-gray-700 md:flex">
        <li>
          <NavLink to="/" className="group flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="hidden h-[1.5px] w-1/2 border-none bg-gray-900 group-hover:block" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="group flex flex-col items-center gap-1">
            <p>SEARCH</p>
            <hr className="hidden h-[1.5px] w-1/2 border-none bg-gray-900 group-hover:block" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="group flex flex-col items-center gap-1">
            <p>CATEGORIES</p>
            <hr className="hidden h-[1.5px] w-1/2 border-none bg-gray-900 group-hover:block" />
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/" className="group flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="hidden h-[1.5px] w-1/2 border-none bg-gray-900 group-hover:block" />
          </NavLink>
        </li>
        
      </ul>
    

    <div className="flex items-center gap-3 sm:gap-4">
      <Link to="/search"><FiSearch className="h-[18px] w-[18px] cursor-pinter text-gray-700"/></Link>
      <Link to="/profile"><FiUser className="h-[18px] w-[18px] cursor-pointer text-gray-700"/></Link>
     <Link to="/cart"><FiShoppingCart className="h-[18px] w-[18px] cursor-pointer text-gray-700"/></Link>
        {/* Mobile Menu */}
        <FiMenu onClick={() => setVisible(true)}className="h-5 w-5 cursor-pointer text-gray-700 md:hidden"/>
        </div>
       </div>
       <div className={`fixed inset-0 z-50 bg-white transition-all duration-300 ${visible?"translate-x-0":"translate-x-full"}`}>

        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <Link to="/" onClick={()=>setVisible(false)}>
            <h1 className="text-xl font-semibold text-gray-900">
              StivelyShop
            </h1>
          </Link>

          {/* close for mobile*/}
          <FiX onClick={()=>setVisible(false)} className="h-6 w-6 cursor-pointer text-gray-700"/>
       </div>
        <div className="flex flex-col px-6 py-8">
         <NavLink to="/" onClick={()=>setVisible(false)}className="border-b border-gray-200 py-4 text-base font-medium text-gray-700">
            HOME
          </NavLink>
          <NavLink to="/" onClick={()=>setVisible(false)}className="border-b border-gray-200 py-4 text-base font-medium text-gray-700">
            SHOP
          </NavLink>
          <NavLink to="/" onClick={()=>setVisible(false)}className="border-b border-gray-200 py-4 text-base font-medium text-gray-700">
            SEARCH
          </NavLink>
          <NavLink to="/" onClick={()=>setVisible(false)}className="border-b border-gray-200 py-4 text-base font-medium text-gray-700">
            ABOUT
          </NavLink>


  </div> 
  </div> 

    </>
  );
};

export default NavBar;