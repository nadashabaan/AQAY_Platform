import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "../constants/themeConstants";
import { ImSun } from "react-icons/im";
import { CgMoon } from "react-icons/cg";
import { UserContext } from "../context/UserContext";

const AddProduct = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user, brandId, setProductId } = useContext(UserContext);
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    categoryId: "",
    categoryName: "",
    description: "",
    tags: "",
  });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.className = theme === DARK_THEME ? "dark-mode" : "";
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://aqay.runasp.net/api/Categories"
        );
        setCategories(response.data.$values);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setLoading(false);
      }
    };
    fetchCategories();
  }, [theme]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    const category = categories.find((c) => c.id === parseInt(categoryId));
    setProduct({
      ...product,
      categoryId,
      categoryName: category ? category.name : "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tagsArray = product.tags.split(",").map((tag) => tag.trim());
    const postData = {
      ...product,
      price: parseFloat(product.price),
      categoryId: parseInt(product.categoryId),
      categoryName: product.categoryName,
      brandId: brandId,
      tags: tagsArray,
    };

    try {
      const response = await axios.post(
        "http://aqay.runasp.net/api/Products",
        postData
      );
      if (response.data && response.data.result) {
        setProductId(response.data.result);
        alert("Product added successfully!");
        navigate("/addProductvar");
      } else {
        throw new Error("Unexpected response data");
      }
    } catch (error) {
      console.error("Failed to add product:", error);
      alert("Failed to add product. Please check your input and try again.");
    }
  };

  return (
    <>
      <div className="add-product-container">
        <h2 className="add-product-title">Add Product</h2>
        <form onSubmit={handleSubmit} className="add-product-form">
          <label>
            Product Name
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="Enter your product name"
              required
            />
          </label>
          <label>
            Product Price
            <input
              type="text"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="Enter your product price"
              required
            />
          </label>
          <label>
            Category
            <select
              name="categoryId"
              value={product.categoryId}
              onChange={handleCategoryChange}
              required
            >
              <option value="">Select a category</option>
              {!loading &&
                categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
            </select>
          </label>
          <label>
            Description
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              placeholder="Write your product description here"
              required
            />
          </label>
          <label>
            Tags
            <input
              type="text"
              name="tags"
              value={product.tags}
              onChange={handleChange}
              placeholder="Enter product tags, separated by commas"
              required
            />
          </label>
          <button type="submit" className="product-btn">
            Add Product
          </button>
        </form>
      </div>
      <button type="button" className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === LIGHT_THEME ? (
          <ImSun className="theme-icon" />
        ) : (
          <CgMoon className="theme-icon" />
        )}
      </button>
    </>
  );
};

export default AddProduct;
