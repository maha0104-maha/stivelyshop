import React from "react";
import {Link} from "react-router-dom";
import heroImage from "../assets/hero-1.png";

const HeroSlider = () => {
  return (
   
    <section className="w-full px-2 sm:px-4 py-2">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-[#FCF4F0] h-[190px] sm:h-[260px] md:h-[320px] lg:h-[360px] xl:h-[400px]">
        {/* hero image */}
        <img src={heroImage} alt="New season fashion presentation" className="absolute inset-0 h-full w-full object-cover object-right"/>

        {/* text*/}
        <div className="absolute inset-y-0 left-0 flex items-center pl-[6%] sm:pl-[8%] lg:pl-[10%]">
          <div className="flex flex-col items-start justify-center text-left">
            <span className="text-[9px] font-bold tracking-[0.08em] text-[#8A95A5] uppercase sm:text-[11px] md:text-xs">
              New Season
            </span>
            <h1 className="mt-1.5 text-base font-extrabold leading-[1.15] tracking-tight text-[#111C2D] sm:text-2xl md:text-3xl lg:text-[40px] xl:text-[46px]">
              Style That Fits<br />Your Life
            </h1>
            <p className="mt-2 max-w-[150px] text-[9px] leading-[1.4] text-[#7E8B9B] sm:max-w-[220px] sm:text-[11px] md:mt-3 md:max-w-[280px] md:text-xs lg:max-w-[360px] lg:text-[13px] xl:text-sm">
              Discover the latest trends in fashion, designed for your everyday moments.
            </p>
            <Link  to="/search" className="mt-3 inline-block rounded-full bg-[#111C2D] px-4 py-1.5 text-[9px] font-semibold text-white transition-all duration-200 hover:bg-[#1E2D42] sm:mt-4 sm:px-6 sm:py-2.5 sm:text-[11px] md:text-xs">
              Shop Now
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSlider;
