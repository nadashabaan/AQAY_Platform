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

// export default CategoryFilter;

// import React, { useState, useEffect } from "react";

// const CategoryFilter = ({ onProductsFetched }) => {
//   const [categories, setCategories] = useState([{ id: 0, name: "All" }]);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   useEffect(() => {
//     // Fetch categories from the API
//     fetch("http://aqay.runasp.net/api/Categories?page=1")
//       .then((response) => response.json())
//       .then((data) => {
//         // Ensure "All" is first and combine with fetched categories
//         setCategories([{ id: 0, name: "All" }, ...data]);
//       })
//       .catch((error) => console.error("Error fetching categories:", error));
//   }, []);

//   useEffect(() => {
//     const fetchProducts = (categoryName) => {
//       const url =
//         categoryName === "All"
//           ? "http://aqay.runasp.net/api/Products"
//           : `http://aqay.runasp.net/api/Categories/name?name=${categoryName}`;

//       fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//           // Pass products up to the parent component
//           onProductsFetched(categoryName === "All" ? data : data.products);
//         })
//         .catch((error) => console.error(`Error fetching products:`, error));
//     };

//     fetchProducts(selectedCategory);
//   }, [selectedCategory, onProductsFetched]);

//   const handleCategoryChange = (e) => {
//     setSelectedCategory(e.target.value);
//   };

//   return (
//     <div className="flex justify-end items-center pr-10 mb-4">
//       <select
//         value={selectedCategory}
//         onChange={handleCategoryChange}
//         className="p-2 rounded bg-red-500 border shadow text-white w-32"
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
