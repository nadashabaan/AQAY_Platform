import React from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import SideBar from "../component/SideBar";
import ShoppingCart from "../component/ShoppingCart";
const Cart = () => {
  return (
    <>
      <Navbar></Navbar>
      <ShoppingCart />
      <SideBar />
      <Footer />
    </>
  );
};

export default Cart;
