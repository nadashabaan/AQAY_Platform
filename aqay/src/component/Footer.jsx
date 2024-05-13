import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white p-5">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <h2 className="text-6xl font-bold">AQAY</h2>
          <div class="border-t border-orange-400 mt-10"></div>
          <div className="mt-2">
            <a className="text-gray-400  mr-4">
              Privacy Policy |Terms & Condition
            </a>
          </div>
          <div className="mt-5 md:mt-0">
            <p className="text-gray-400 text-center md:text-right">
              Copyright © 2024 AQAY. All Rights Reserved.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mt-5 md:mt-0">
          <div className="md:mr-10">
            <h3 className="font-semibold">CUSTOMER SERVICES</h3>
            <ul>
              <li>
                <a className="text-gray-400 ">Shipping & Returns</a>
              </li>
              <li>
                <a className="text-gray-400 ">Secure Shopping</a>
              </li>
              <li>
                <a className="text-gray-400">International Shipping</a>
              </li>
              <li>
                <a className="text-gray-400 ">Affiliates</a>
              </li>
              <li>
                <a className="text-gray-400">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">CONTACT INFORMATION</h3>
            <p className="text-gray-400">+1 (555) 123-4567</p>
            <p className="text-gray-400">cs@aqay.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
