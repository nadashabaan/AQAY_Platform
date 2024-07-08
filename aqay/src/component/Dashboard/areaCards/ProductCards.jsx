import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useUser } from "../../../context/UserContext";

const ProductCards = () => {
  const { user, brandId } = useUser();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async (brandId) => {
      try {
        const response = await axios.get(
          `http://aqay.runasp.net/api/Products/brand?brandId=${brandId}`
        );
        const fetchedProducts = response.data.$values;
        await fetchCategories(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    const fetchCategories = async (products) => {
      const updatedProducts = await Promise.all(
        products.map(async (product) => {
          const response = await axios.get(
            `http://aqay.runasp.net/api/Categories/id?id=${product.categoryId}`
          );
          product.category = response.data.name;
          return product;
        })
      );
      setProducts(updatedProducts);
    };

    if (user && brandId) {
      fetchProducts(brandId);
    }
  }, [user, brandId]);

  const removeProductFromState = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((p) => p.id !== productId)
    );
  };

  return (
    <div className="content-area-cards">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onRemove={removeProductFromState}
        />
      ))}
    </div>
  );
};

export default ProductCards;
