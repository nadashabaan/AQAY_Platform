import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductB from "../component/ProductB";
import Navbar from "../component/Navbar";
// import CategoryFilter from "../component/CategoryFilter";

const BrandDetail = () => {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);

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
      {
        id: 2,
        name: "Bear Crochet Toy",
        category: "Toys",
        price: "19.99",
        rating: 5,
        reviews: 34,
        image: "https://via.placeholder.com/150x150?text=Product+2",
      },
      {
        id: 3,
        name: "Rabbit Crochet Toy",
        category: "Toys",
        price: "12.99",
        rating: 4,
        reviews: 23,
        image: "https://via.placeholder.com/150x150?text=Product+3",
      },
      {
        id: 4,
        name: "Deer Crochet Toy",
        category: "Toys",
        price: "15.99",
        rating: 5,
        reviews: 41,
        image: "https://via.placeholder.com/150x150?text=Product+4",
      },
      {
        id: 5,
        name: "Crocodile Crochet Toy",
        category: "Toys",
        price: "24.99",
        rating: 4,
        reviews: 37,
        image: "https://via.placeholder.com/150x150?text=Product+5",
      },
      {
        id: 6,
        name: "Lion Crochet Toy",
        category: "Toys",
        price: "18.99",
        rating: 5,
        reviews: 19,
        image: "https://via.placeholder.com/150x150?text=Product+6",
      },
      {
        id: 7,
        name: "Elephant Crochet Toy",
        category: "Toys",
        price: "22.99",
        rating: 4,
        reviews: 26,
        image: "https://via.placeholder.com/150x150?text=Product+7",
      },
      {
        id: 8,
        name: "Monkey Crochet Toy",
        category: "Toys",
        price: "16.99",
        rating: 5,
        reviews: 31,
        image: "https://via.placeholder.com/150x150?text=Product+8",
      },
      {
        id: 9,
        name: "Giraffe Crochet Toy",
        category: "Toys",
        price: "21.99",
        rating: 4,
        reviews: 24,
        image: "https://via.placeholder.com/150x150?text=Product+9",
      },
      {
        id: 10,
        name: "Panda Crochet Toy",
        category: "Toys",
        price: "20.99",
        rating: 5,
        reviews: 27,
        image: "https://via.placeholder.com/150x150?text=Product+10",
      },
    ];

    setProducts(dummyProducts);

    // Uncomment and replace with your API endpoint when ready
    /*
    // fetch(`YOUR_API_ENDPOINT/brands/${brandName}/products`)
    //   .then(response => response.json())
    //   .then(data => setProducts(data))
    //   .catch(error => console.error('Error fetching brand products:', error));
    // */
  }, [brandName]);

  const handleRemove = (productId) => {
    console.log(`Remove product with id ${productId}`);
  };

  const handleExpand = (productId) => {
    console.log(`Expand product with id ${productId}`);
  };

  const handleAddToCart = (productId) => {
    console.log(`Add to cart product with id ${productId}`);
  };
  const [categories, setCategories] = useState([
    "All",
    "Toys",
    "Books",
    "Games",
  ]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <>
      <Navbar />
      {/* <CategoryFilter /> */}
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductB
              key={product.id}
              product={product}
              onRemove={handleRemove}
              onExpand={handleExpand}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandDetail;
