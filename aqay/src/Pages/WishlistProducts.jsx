import Navbar from "../component/Navbar";
import WishlistProduct from "../component/WishlistProduct";
import "../CSS/WishlistProducts.css";
import React, { useState } from "react";

const WishlistPage = () => {
  const [wishlistProducts, setWishlistProducts] = useState([
    {
      id: 1,
      image: "https://example.com/image1.jpg",
      category: "CARPETS",
      name: "Handmade Carpet",
      price: "24.99",
      rating: 4,
      reviews: 143,
    },
    {
      id: 2,
      image: "https://example.com/image2.jpg",
      category: "FURNITURE",
      name: "Elegant Lamp",
      price: "39.99",
      rating: 5,
      reviews: 102,
    },
    {
      id: 3,
      image: "https://example.com/image3.jpg",
      category: "ACCESSORIES",
      name: "Stylish Sunglasses",
      price: "19.99",
      rating: 4,
      reviews: 55,
    },
    {
      id: 4,
      image: "https://example.com/image4.jpg",
      category: "TECH",
      name: "Smart Watch",
      price: "49.99",
      rating: 4,
      reviews: 203,
    },
    {
      id: 5,
      image: "https://example.com/image5.jpg",
      category: "DECOR",
      name: "Wall Art",
      price: "14.99",
      rating: 3,
      reviews: 78,
    },
    {
      id: 6,
      image: "https://example.com/image5.jpg",
      category: "DECOR",
      name: "Wall Art",
      price: "14.99",
      rating: 3,
      reviews: 78,
    },
  ]);

  const handleRemove = (id) => {
    setWishlistProducts(
      wishlistProducts.filter((product) => product.id !== id)
    );
  };

  const handleExpand = (id) => {
    // Navigate to product details page
    console.log(`Expand product with id: ${id}`);
  };

  const handleAddToCart = (id) => {
    // Add product to cart
    console.log(`Add product with id: ${id} to cart`);
  };

  return (
    <>
      <Navbar />
      <div className="wishlist-page">
        <div className="wishlist-container">
          {wishlistProducts.map((product) => (
            <WishlistProduct
              key={product.id}
              product={product}
              onRemove={handleRemove}
              onExpand={handleExpand}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <div className="pagination">
          <button className="pagination-button">1</button>
          <button className="pagination-button">2</button>
          <button className="pagination-button">3</button>
        </div>
      </div>
    </>
  );
};

export default WishlistPage;
