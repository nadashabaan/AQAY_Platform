import React from "react";
import "./AreaCards.css";
import ProductCard from "./ProductCard";

const ProductCards = () => {
  const products = [
    {
      image: "https://example.com/product-image.jpg",
      category: "Handmade",
      title: "Giraffe Crochet Toy",
      price: 29.99,
      rating: 4,
      reviews: 143,
    },
    {
      image: "https://example2.com/product-image.jpg",
      category: "Custom",
      title: "Custom Toy",
      price: 39.99,
      rating: 5,
      reviews: 120,
    },
    {
      image: "https://example2.com/product-image.jpg",
      category: "Custom",
      title: "Custom Toy",
      price: 39.99,
      rating: 5,
      reviews: 120,
    },
    {
      image: "https://example2.com/product-image.jpg",
      category: "Custom",
      title: "Custom Toy",
      price: 39.99,
      rating: 5,
      reviews: 120,
    },
    {
      image: "https://example2.com/product-image.jpg",
      category: "Custom",
      title: "Custom Toy",
      price: 39.99,
      rating: 5,
      reviews: 120,
    },
  ];

  return (
    <div className="content-area-cards">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductCards;
