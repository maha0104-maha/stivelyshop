import React from "react";
import {Link} from "react-router-dom"
const Headingg=({headingg,subheading,linkto})=>{
    return(
        <div className="mb-8 relative flex items-end justify-center min-h-[64px]">
        <div className="text-center">
            <p className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-gray-500">{headingg}</p>
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">{subheading}</h2>
        </div>
        <Link  to={`/${linkto}`} className="absolute right-0 -bottom-3 sm:bottom-0 text-sm font-medium text-gray-700 hover:text-black whitespace-nowrap"
      >
        View All
        </Link>
   </div>
    )
}

export default Headingg;