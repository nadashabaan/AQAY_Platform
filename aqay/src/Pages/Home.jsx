import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ProductH from "../component/ProductH";
import heroH from "../assets/Images/heroH.png";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-8 mb-8">
        <img className="object-contain" src={heroH} alt="Hero Image" />
      </div>

      <ProductH />
      <Footer />
    </>
  );
};

export default Home;
