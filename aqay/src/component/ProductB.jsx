import React from "react";
import { FaExpandAlt, FaShoppingCart } from "react-icons/fa";
import "../CSS/WishlistProduct.css";
import { CiHeart } from "react-icons/ci";

const ProductB = ({ product, onRemove, onExpand, onAddToCart }) => {
  return (
    <div className="wishlist-product">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-details">
        <div className="product-category">{product.category}</div>
        <div className="product-name">{product.name}</div>
        <div className="product-price">${product.price}</div>
        <div className="product-rating">
          <span className="rating-stars">
            {"★".repeat(product.rating)}
            {"☆".repeat(5 - product.rating)}
          </span>
          <span className="rating-reviews">
            ({product.rating}/5) | {product.reviews} Reviews
          </span>
        </div>
        <div className="product-actions">
          <button
            className="action-button wishlist-button"
            onClick={() => onRemove(product.id)}
          >
            <CiHeart className="text-3xl" />
          </button>
          <button
            className="action-button expand-button"
            onClick={() => onExpand(product.id)}
          >
            <FaExpandAlt />
          </button>
          <button
            className="action-button add-to-cart-button"
            onClick={() => onAddToCart(product.id)}
          >
            <FaShoppingCart />
            <span>ADD TO CART</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductB;
