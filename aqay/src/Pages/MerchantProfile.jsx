import React, { useContext, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
// import "../CSS/DashboardM.css";
import { ThemeContext } from "../context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "../constants/themeConstants";
import { ImSun } from "react-icons/im";
import { CgMoon } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { TbPhotoUp } from "react-icons/tb";
import image from "../assets/Images/image.png";

const MerchantProfile = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [brand, setBrand] = useState({
    name: "BrandName",
    description: "This is a sample brand description.",
    email: "brand@example.com",
    logo: ["https://example.com/existing-logo.jpg"], // Existing logo URL
    socialMedia: "@brandname",
    phoneNumber: "123-456-7890",
  });

  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBrand({ ...brand, [name]: value });
  };

  const handleLogoDrop = (acceptedFiles) => {
    const imageUrls = acceptedFiles.map((file) => URL.createObjectURL(file));
    setBrand({ ...brand, logo: [...brand.logo, ...imageUrls] });
  };

  const removeLogo = (index) => {
    const newLogos = brand.logo.filter((_, i) => i !== index);
    setBrand({ ...brand, logo: newLogos });
  };

  const handleSaveProfile = () => {
    console.log("Profile updated:", brand);
    alert("Profile updated successfully");
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: handleLogoDrop,
  });

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
        <h2 className="add-product-title">Edit Profile</h2>
        <div className="add-product-form">
          <label>Brand Name</label>
          <input
            type="text"
            name="name"
            value={brand.name}
            onChange={handleChange}
          />
          <label>Brand Description</label>
          <textarea
            name="description"
            value={brand.description}
            onChange={handleChange}
          />
          <label>Brand Email</label>
          <input type="email" name="email" value={brand.email} readOnly />
          <label>Brand Logo</label>
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {brand.logo.length > 0 ? (
              brand.logo.map((image, index) => (
                <div key={index} className="uploaded-image-container">
                  <img
                    src={image}
                    alt={`Uploaded ${index}`}
                    className="uploaded-image"
                  />
                  <MdClose
                    className="remove-icon"
                    onClick={() => removeLogo(index)}
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
          <label>Social Media Accounts</label>
          <input
            type="text"
            name="socialMedia"
            value={brand.socialMedia}
            onChange={handleChange}
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={brand.phoneNumber}
            onChange={handleChange}
          />
          <button
            onClick={handleSaveProfile}
            className="product-btn save-product-btn"
          >
            Save Profile
          </button>
        </div>
      </div>
    </>
  );
};

export default MerchantProfile;
