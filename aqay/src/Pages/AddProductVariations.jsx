import { useContext, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import "../CSS/AddProduct.css";
import { ThemeContext } from "../context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "../constants/themeConstants";
import { ImSun } from "react-icons/im";
import { CgMoon } from "react-icons/cg";
import { TbPhotoUp } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const AddProductVariations = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  const [productVar, setProductVar] = useState({
    size: "",
    quantity: "",
    images: [],
    color: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "quantity" &&
      value &&
      (!/^\d+$/.test(value) || Number(value) <= 0)
    ) {
      alert("Quantity must be a positive number");
      return;
    }
    setProductVar({ ...productVar, [name]: value });
  };

  const handleDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 1) {
      alert("You can only upload one image");
      return;
    }
    const imageUrls = acceptedFiles.map((file) => URL.createObjectURL(file));
    setProductVar({
      ...productVar,
      images: imageUrls,
    });
  };

  const removeImage = (index) => {
    const newImages = productVar.images.filter((_, i) => i !== index);
    setProductVar({ ...productVar, images: newImages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for the API call to add the product
    console.log("Product added:", productVar);
    alert("Product added! Check the console for details.");
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: handleDrop,
    maxFiles: 1, // Ensure only one file is accepted
  });

  return (
    <>
      <div className="add-product-container">
        <h2 className="add-product-title">Add Product Variations</h2>
        <form onSubmit={handleSubmit} className="add-product-form">
          <label>
            Size
            <input
              type="text"
              name="size"
              value={productVar.size}
              onChange={handleChange}
              placeholder="Enter product size"
              required
            />
          </label>

          <label>
            Color
            <input
              type="text"
              name="color"
              value={productVar.color}
              onChange={handleChange}
              placeholder="Enter product color"
              required
            />
          </label>
          <label>
            Quantity
            <input
              type="text"
              name="quantity"
              value={productVar.quantity}
              onChange={handleChange}
              placeholder="Enter product quantity"
              required
            />
          </label>
          <label>
            Product Images
            <div {...getRootProps()} className="dropzone">
              {productVar.images.length > 0 ? (
                productVar.images.map((image, index) => (
                  <div key={index} className="uploaded-image-container">
                    <img
                      src={image}
                      alt={`Uploaded ${index}`}
                      className="uploaded-image"
                    />
                    <MdClose
                      className="remove-icon"
                      onClick={() => removeImage(index)}
                    />
                  </div>
                ))
              ) : (
                <p>
                  <TbPhotoUp className="upload-icon" size={50} />
                  <br />
                  Drop your image here, or select it <br />
                  <span className="browse-link">click here to browse</span>
                </p>
              )}
            </div>
          </label>
          <div className="button-group">
            <button type="submit" className="product-btn">
              <Link to="/SignIn">Add Product To Store</Link>
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

export default AddProductVariations;
