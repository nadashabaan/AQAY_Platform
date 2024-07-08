// import image from "../assets/Images/image.png";
// import React from "react";
// import { FaHeart, FaExpandAlt, FaShoppingCart } from "react-icons/fa";
// import "../CSS/WishlistProduct.css";

// const WishlistProduct = ({ product, onRemove, onExpand, onAddToCart }) => {
//   return (
//     <div className="wishlist-product">
//       <div className="product-image">
//         <img src={image} alt={product.name} />
//       </div>
//       <div className="product-details">
//         <div className="product-category">{product.category}</div>
//         <div className="product-name">{product.name}</div>
//         <div className="product-price">${product.price}</div>
//         <div className="product-rating">
//           <span className="rating-stars">
//             {"★".repeat(product.rating)}
//             {"☆".repeat(5 - product.rating)}
//           </span>
//           <span className="rating-reviews">
//             ({product.rating}/5) | {product.reviews} Reviews
//           </span>
//         </div>
//         <div className="product-actions">
//           <button
//             className="action-button wishlist-button"
//             onClick={() => onRemove(product.id)}
//           >
//             <FaHeart />
//           </button>
//           <button
//             className="action-button expand-button"
//             onClick={() => onExpand(product.id)}
//           >
//             <FaExpandAlt />
//           </button>
//           <button
//             className="action-button add-to-cart-button"
//             onClick={() => onAddToCart(product.id)}
//           >
//             <FaShoppingCart />
//             <span>ADD TO CART</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WishlistProduct;

import React from "react";
import axios from "axios";
import { FaExpandAlt, FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const WishlistProduct = ({ product, onRemove }) => {
  const handleAddToCart = async (productId) => {
    try {
      const variantsResponse = await axios.get(
        `http://aqay.runasp.net/api/Products/variants?productId=${productId}`
      );
      if (
        variantsResponse.data.$values &&
        variantsResponse.data.$values.length > 0
      ) {
        const firstVariantId = variantsResponse.data.$values[0].id;
        console.log("First variant ID: ", firstVariantId);
        await addToCart(firstVariantId);
      } else {
        console.error("No variants available for this product.");
        alert("No variants available for this product.");
      }
    } catch (error) {
      console.error("Failed to fetch product variants:", error);
      alert("Error fetching product variants: " + error.message);
    }
  };

  const addToCart = async (productVariantId) => {
    const shoppingCartId = 17;
    try {
      const response = await axios.post(
        `http://aqay.runasp.net/api/ShoppingCart/shoppingCartId/addProduct?shoppingCartId=${shoppingCartId}&productVariantId=${productVariantId}`
      );
      console.log("Product variant added to cart successfully", response.data);
      alert("Product variant added to cart successfully");
    } catch (error) {
      console.error("Failed to add product variant to cart:", error);
      alert(
        "Failed to add product variant to cart: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };

  return (
    <div className="relative bg-orange border rounded-lg shadow-md p-4 mb-4 flex">
      <div className="w-1/4 flex justify-center items-center">
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full max-h-full"
        />
      </div>
      <div className="w-3/4 relative p-4">
        <Link
          to={`/proudDetails`}
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
            ({product.reviews} Reviews)
          </span>
        </div>
        <div className="mt-4 flex items-center">
          <button
            className="text-3xl text-red-500 mr-4"
            onClick={() => onRemove(this.removeItem.product.id)}
          >
            <FaHeart />
          </button>

          <button
            className="flex items-center bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => handleAddToCart(product.id)}
          >
            <FaShoppingCart />
            <span className="ml-2">ADD TO CART</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistProduct;
