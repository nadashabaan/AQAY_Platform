import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ProductB from "../component/ProductB";
import heroH from "../assets/Images/heroH.png";
// import CategoryFilter from "../component/CategoryFilter";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([
    "All",
    "Toys",
    "Books",
    "Games",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const dummyProducts = [
      {
        id: 1,
        name: "Tiger Crochet Toy",
        category: "Toys",
        price: "14.99",
        rating: 4,
        reviews: 29,
        image: "https://via.placeholder.com/150x150?text=Product+1",
      },
    ];
    setProducts(dummyProducts);
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory
  );

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-8 mb-8">
        <img className="object-contain" src={heroH} alt="Hero Image" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductB
            key={product.id}
            product={product}
            onRemove={() => console.log("Remove")}
            onExpand={() => console.log("Expand")}
            onAddToCart={() => console.log("Add to Cart")}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
