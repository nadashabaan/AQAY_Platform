import React, { useState, useEffect } from "react";
import axios from "axios";

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://aqay.runasp.net/api/Categories"
        );
        const categoriesData = response.data.$values.map((item) => item.name);
        setCategories(categoriesData);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex justify-end items-center pr-10 mb-4">
      <select
        value={selectedCategory}
        onChange={onCategoryChange}
        className="p-2 rounded bg-orange-100 border shadow"
      >
        <option value="">Select a Category</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
