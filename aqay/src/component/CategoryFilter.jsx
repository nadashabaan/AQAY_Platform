import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex justify-end  items-center pr-10 mb-4">
      <select
        value={selectedCategory}
        onChange={onCategoryChange}
        className="p-2 rounded bg-orange-100 border shadow"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
