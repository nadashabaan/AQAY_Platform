import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductInfo = ({ product = {} }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-lg text-gray-700 mb-4">{product.category}</p>
      <p className="text-2xl font-bold text-orange-500 mb-4">
        ${product.price}
      </p>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <div className="flex items-center mb-4">
        <span className="mr-2">Size: </span>
        {product.size}
      </div>
      <div className="flex items-center mb-4">
        <span className="mr-2">Color: </span>
        {product.color}
      </div>
      <div className="flex items-center mb-4">
        <span className="mr-2">Brand: </span>
        <Link to={`/BrandDetail`} className="text-blue-500 hover:underline">
          {product.brand_name}
        </Link>
      </div>
      <div className="flex items-center mb-4">
        <span className="mr-2">Stock: </span>
        {product.stock}
      </div>
      <div className="flex items-center">
        <button className="bg-orange-500 text-white px-4 py-2 rounded mr-2 flex items-center">
          <FaShoppingCart className="mr-2" /> Add to Cart
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded flex items-center">
          <FaHeart className="mr-2" /> Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
