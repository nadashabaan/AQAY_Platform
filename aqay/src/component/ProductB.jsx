import React from "react";
import { FaExpandAlt, FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const ProductB = ({ product, onRemove, onExpand, onAddToCart }) => {
  return (
    <div className="relative bg-ogrange border rounded-lg shadow-md p-4 mb-4 flex">
      <div className="w-1/4 flex justify-center items-center">
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full max-h-full"
        />
      </div>
      <div className="w-3/4 relative p-4">
        <Link
          to="/proudDetails"
          className="absolute top-2 right-2 text-xl text-red-500"
        >
          <FaExpandAlt />
        </Link>
        <div className="text-red-400 font-bold text-sm">{product.category}</div>
        <div className="text-xl font-bold">{product.name}</div>
        <div className="text-red-500 text-lg">${product.price}</div>
        <div className="mt-2">
          <span className="text-yellow-500">
            {"★".repeat(product.rating)}
            {"☆".repeat(5 - product.rating)}
          </span>
          <span className="text-gray-500 text-sm ml-2">
            ({product.rating}/5) | {product.reviews} Reviews
          </span>
        </div>
        <div className="mt-4 flex items-center">
          <button
            className="text-3xl text-red-500 mr-4"
            onClick={() => onRemove(product.id)}
          >
            <CiHeart />
          </button>
          <button
            className="flex items-center bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => onAddToCart(product.id)}
          >
            <FaShoppingCart />
            <span className="ml-2">ADD TO CART</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductB;
