import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

const Home=()=>{
  return (
    <>
    <NavBar />
    
    <main className="mx-auto max-w-7xl px-6 py-10">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to StivelyShop</h1>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default Home;