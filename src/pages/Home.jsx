import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";
import  CategoryCircles  from "../components/CategoryCircles";
import useCategories from "../hooks/useCategories";
import useProducts from "../hooks/useProducts";
import FeaturedProducts from "../components/FeaturedProducts";
import BestSellers from "../components/BestSellers";
import PromoBanner from "../components/PromoBanner";


const Home=()=>{
  const {categories,error,loading}=useCategories();
 
  return (
    <>
    <NavBar />
    
    <main className="mx-auto max-w-7xl px-6 py-10">
      <section className="text-center">
        <HeroSlider />
        <CategoryCircles/>
        <FeaturedProducts />
        <BestSellers />
        <PromoBanner/>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default Home;