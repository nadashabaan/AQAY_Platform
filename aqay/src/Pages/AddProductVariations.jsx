import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "../constants/themeConstants";
import { ImSun } from "react-icons/im";
import { CgMoon } from "react-icons/cg";
import "../CSS/AddProduct.css";

const AddProductVariations = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { productId } = useContext(UserContext);
  const navigate = useNavigate();

  const [productVar, setProductVar] = useState({
    size: "",
    color: "",
    quantity: "",
    image: null,
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setProductVar((prevState) => ({
        ...prevState,
        image: acceptedFiles[0],
      }));
    },
    multiple: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Size", productVar.size);
    formData.append("Color", productVar.color);
    formData.append("Quantity", productVar.quantity);
    formData.append("ProductId", productId);
    if (productVar.image) {
      formData.append("ImgFile", productVar.image);
    }

    try {
      const response = await axios.post(
        "http://aqay.runasp.net/api/Products/product variant",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Product variation added successfully!");
      navigate("/storeFront");
    } catch (error) {
      console.error("Failed to add product variation:", error);
      alert("Failed to add product variation. Please try again.");
    }
  };

  useEffect(() => {
    return () => {
      if (productVar.image) {
        // Clean up the object URL to avoid memory leaks
        URL.revokeObjectURL(productVar.image.preview);
      }
    };
  }, [productVar.image]);

  return (
    <>
      <button type="button" className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === LIGHT_THEME ? (
          <ImSun className="theme-icon" />
        ) : (
          <CgMoon className="theme-icon" />
        )}
      </button>
      <div className="add-product-container">
        <h2 className="add-product-title">Add Product Variations</h2>
        <form onSubmit={handleSubmit} className="add-product-form">
          <label>
            Size
            <input
              type="text"
              name="size"
              value={productVar.size}
              onChange={(e) =>
                setProductVar({ ...productVar, size: e.target.value })
              }
              required
            />
          </label>
          <label>
            Color
            <input
              type="text"
              name="color"
              value={productVar.color}
              onChange={(e) =>
                setProductVar({ ...productVar, color: e.target.value })
              }
              required
            />
          </label>
          <label>
            Quantity
            <input
              type="number"
              name="quantity"
              value={productVar.quantity}
              onChange={(e) =>
                setProductVar({ ...productVar, quantity: e.target.value })
              }
              required
            />
          </label>
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {productVar.image && (
              <div className="uploaded-image-container">
                <img
                  src={URL.createObjectURL(productVar.image)}
                  alt="Uploaded"
                  className="uploaded-image"
                />
              </div>
            )}
          </div>
          <button type="submit" className="product-btn">
            Add Product Variation
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProductVariations;
