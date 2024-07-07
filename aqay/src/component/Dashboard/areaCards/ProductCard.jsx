import image from "../../../assets/Images/image.png";

import React from "react";
import PropTypes from "prop-types";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductCard = ({ product }) => {
  const handleRemoveProduct = async (productId) => {
    try {
      const response = await axios.delete(
        `http://aqay.runasp.net/api/Products?id=${productId}`
      );
      if (response.status === 200) {
        alert("Product removed successfully!");
      } else {
        throw new Error("Failed to delete the product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to remove product. Please try again.");
    }
  };

  return (
    <div className="product-card">
      <div className="product-card-info">
        <img
          src={product.image || { image }}
          alt={product.title}
          className="product-image"
        />
        <div className="product-details">
          <h5 className="product-category">{product.category}</h5>
          <h2 className="product-title">{product.title}</h2>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <div className="product-rating">
            <span className="rating-stars">
              {"★".repeat(product.rating)}
              {"☆".repeat(5 - product.rating)}
            </span>
            <span className="rating-reviews">({product.reviews} Reviews)</span>
          </div>
        </div>
      </div>
      <div className="product-card-actions">
        <button className="product-btn">
          <Link to="/addProductvar">Add Product Variations</Link>
        </button>
        <button className="product-btn">
          <Link to="/editProduct">Edit</Link>
        </button>
        <button
          className="product-btn"
          onClick={() => handleRemoveProduct(product.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
