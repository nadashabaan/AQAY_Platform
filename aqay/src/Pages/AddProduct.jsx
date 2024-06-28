import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/AddProduct.css";
import { ThemeContext } from "../context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "../constants/themeConstants";
import { ImSun } from "react-icons/im";
import { CgMoon } from "react-icons/cg";

const AddProduct = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
    tags: "",
  });

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://aqay.runasp.net/api/Categories?page=1")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for the API call to add the product
    console.log("Product added:", product);
    alert("Product added! Check the console for details.");
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
              name="category"
              value={product.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              {loading ? (
                <option disabled>Loading categories...</option>
              ) : (
                categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))
              )}
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

          <div className="button-group">
            <button type="submit" className="product-btn">
              <Link to="/addProductvar">Add Product Variations</Link>
            </button>
          </div>
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
