import React from "react";
import {Link} from "react-router-dom";
import promo from "../assets/promobanner.png";

const PromoBanner=()=>{
  return (
   
    <section className="w-full  sm:px-4 py-2">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[#FCF4F0] h-[100px] sm:h-[260px] md:h-[200px] lg:h-[300px] xl:h-[300px]">
        {/* banner image */}
        <img src={promo} alt="New season fashion presentation" className="absolute inset-0 h-full w-full object-cover object-right"/>

        {/* text*/}

      <div className="relative flex items-center p-6 sm:absolute sm:inset-y-0 sm:left-0 sm:p-0 sm:pl-[8%] lg:pl-[10%]">
      <div className="flex max-w-[280px] flex-col items-start justify-center text-left sm:max-w-none">
      <span className="text-[9px] font-bold tracking-[0.08em] text-[#8A95A5] uppercase sm:text-[11px] md:text-xs">
        Big Scale
        </span>
       <h1 className="mt-1.5 text-base font-extrabold tracking-tight text-[#111C2D] leading-tight sm:text-2xl md:text-3xl lg:text-[40px] xl:text-[46px]">
            Upto 50% off
      </h1>
      <p className="mt-2 text-[9px] text-[#7E8B9B] leading-relaxed sm:max-w-[220px] sm:text-[11px] md:mt-3 md:max-w-[280px] md:text-xs lg:max-w-[360px] lg:text-[13px] xl:text-sm">
      On selected items.Don't miss out
      </p>
     <Link to="/search" className="mt-4 inline-block rounded-full bg-[#111C2D] px-5 py-2 text-[10px] font-semibold text-white transition-all duration-200 hover:bg-[#1E2D42] sm:px-6 sm:py-2.5 sm:text-[11px] md:text-xs">
      Shop Now
    </Link>
  </div>
</div>
</div>
</section>
  );
};

export default PromoBanner;
