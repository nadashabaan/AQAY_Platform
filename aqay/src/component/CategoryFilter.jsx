// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const response = await axios.get(
//           "http://aqay.runasp.net/api/Categories"
//         );
//         const categoriesData = response.data.$values.map((item) => item.name);
//         setCategories(categoriesData);
//       } catch (error) {
//         console.error("Failed to fetch categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <div className="flex justify-end items-center pr-10 mb-4">
//       <select
//         value={selectedCategory}
//         onChange={onCategoryChange}
//         className="p-2 rounded bg-orange-100 border shadow"
//       >
//         <option value="">Select a Category</option>
//         {categories.map((category, index) => (
//           <option key={index} value={category}>
//             {category}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const CategoryFilter = ({ onCategoryChange }) => {
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   useEffect(() => {
//     async function fetchCategories() {
//       try {
//         const response = await axios.get(
//           "http://aqay.runasp.net/api/Categories"
//         );
//         const categoriesData = [
//           { id: 0, name: "All" },
//           ...response.data.$values,
//         ];
//         setCategories(categoriesData);
//       } catch (error) {
//         console.error("Failed to fetch categories:", error);
//       }
//     }
//     fetchCategories();
//   }, []);

//   const handleCategoryChange = (e) => {
//     const category = e.target.value;
//     setSelectedCategory(category);
//     onCategoryChange(category);
//   };

//   return (
//     <div className="flex justify-end items-center pr-10 mb-4">
//       <select
//         value={selectedCategory}
//         onChange={handleCategoryChange}
//         className="p-2 rounded bg-red-500 border shadow w-32 text-white
//       "
//       >
//         {categories.map((category) => (
//           <option key={category.id} value={category.name}>
//             {category.name}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default CategoryFilter;

import React, { useState, useEffect } from "react";
import axios from "axios";

const CategoryFilter = ({ onCategoryChange, setProducts }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get(
          "http://aqay.runasp.net/api/Categories"
        );
        const categoriesData = [
          { id: 0, name: "All" },
          ...response.data.$values,
        ];
        setCategories(categoriesData);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    }
    fetchCategories();
  }, []);

  const handleCategoryChange = async (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onCategoryChange(category);

    if (category !== "All") {
      try {
        const response = await axios.get(
          `http://aqay.runasp.net/api/Products/category?categoryName=${categoryName}`
        );
        setProducts(response.data.$values);
      } catch (error) {
        console.error(`Failed to fetch products for ${category}:`, error);
      }
    }
  };

  return (
    <div className="flex justify-end items-center pr-10 mb-4">
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="p-2 rounded bg-red-500 border shadow w-32 text-white"
      >
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
