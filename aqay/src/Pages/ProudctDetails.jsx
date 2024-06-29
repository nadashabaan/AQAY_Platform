import React from "react";
import Navbar from "../component/Navbar";
import PersonalInfo from "./PersonalInfo";
import ProductImage from "../component/ProductImage";
import RelatedProducts from "../component/RelatedProducts";
import ProductDetail from "../component/ProductDetail";
import Review from "../component/ProductReviews";
import Footer from "../component/Footer";

const ProudctDetails = () => {
  return (
    <div>
      <>
        <Navbar />
        <PersonalInfo />
        <ProductDetail />
        <ProductImage />
        <RelatedProducts />
        <Review />
        <Footer />
      </>
    </div>
  );
};

export default ProudctDetails;
