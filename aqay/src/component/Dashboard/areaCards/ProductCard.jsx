import image from "../../../assets/Images/image.png";
import React from "react";
import PropTypes from "prop-types";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card-info">
        {/* <img src={product.image} alt={product.title} className="product-image" /> */}
        <img src={image} alt={product.title} className="product-image" />
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
        <button className="product-btn">Remove</button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    reviews: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
