import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";


const Home=()=>{
 
  return (
    <>
    <NavBar />
    
    <main className="mx-auto max-w-7xl px-6 py-10">
      <section className="text-center">
        <HeroSlider />
      
      </section>
    </main>
    <Footer />
    </>
  );
};

export default Home;