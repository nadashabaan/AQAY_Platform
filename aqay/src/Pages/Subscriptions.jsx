import React from "react";
import NavbarM from "../component/NavbarM";
import Plans from "../component/Plans";
import heroS from "../assets/Images/heroS.png";
const Subscriptions = () => {
  return (
    <>
      <NavbarM />
      {/* <img className="" src={heroS} /> */}
      <div className="flex justify-center items-center mt-8 mb-8">
        <img className="object-contain" src={heroS} alt="Hero Image" />
      </div>
      <Plans />
    </>
  );
};

export default Subscriptions;
