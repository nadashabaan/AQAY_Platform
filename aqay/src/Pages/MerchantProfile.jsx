import React, { useContext, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";
import { DARK_THEME, LIGHT_THEME } from "../constants/themeConstants";
import { ImSun } from "react-icons/im";
import { CgMoon } from "react-icons/cg";
import { MdClose } from "react-icons/md";
import { TbPhotoUp } from "react-icons/tb";

const MerchantProfile = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { brandId } = useUser();

  const [brand, setBrand] = useState({
    name: "",
    description: "",
    email: "",
    logo: "",
    tiktok: "",
    instagram: "",
    facebook: "",
    phoneNumber: "",
    about: "",
  });

  useEffect(() => {
    document.body.className = theme === DARK_THEME ? "dark-mode" : "";
    fetchBrandInfo();
  }, [theme, brandId]);

  const fetchBrandInfo = async () => {
    if (!brandId) {
      console.error("Brand ID is not available");
      return;
    }
    try {
      const response = await axios.get(
        `http://aqay.runasp.net/api/Brand/merchant-info?id=${brandId}`
      );
      const { brand } = response.data;
      setBrand({
        name: brand.name,
        description: brand.description,
        email: brand.email,
        logo: brand.logoUrl,
        tiktok: brand.tiktok,
        instagram: brand.instagram,
        facebook: brand.facebook,
        phoneNumber: brand.wpNumber,
        about: brand.about,
      });
    } catch (error) {
      console.error("Failed to fetch brand data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBrand((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogoDrop = (acceptedFiles) => {
    const imageUrl = URL.createObjectURL(acceptedFiles[0]);
    setBrand((prev) => ({ ...prev, logo: imageUrl }));
  };

  const removeLogo = () => {
    setBrand((prev) => ({ ...prev, logo: "" }));
  };

  const handleSaveProfile = async () => {
    const formData = new FormData();
    formData.append("Name", brand.name);
    formData.append("Description", brand.description);
    formData.append("Tiktok", brand.tiktok);
    formData.append("Instagram", brand.instagram);
    formData.append("Facebook", brand.facebook);
    formData.append("PhoneNumber", brand.phoneNumber);
    formData.append("About", brand.about);
    if (brand.logo && !brand.logo.startsWith("https")) {
      formData.append("Logo", brand.logo);
    }

    try {
      await axios.put(`http://aqay.runasp.net/api/Brand/${brandId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Profile updated successfully");
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert("Failed to update profile. Please try again.");
    }
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
          <label>Brand Logo</label>
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {brand.logo ? (
              <div className="uploaded-image-container">
                <img
                  src={brand.logo}
                  alt="Uploaded logo"
                  className="uploaded-image"
                />
                <MdClose className="remove-icon" onClick={removeLogo} />
              </div>
            ) : (
              <p>
                <TbPhotoUp className="upload-icon" size={50} />
                <br />
                Drop your image here, or select it <br />
                <span className="browse-link">click here to browse</span>
              </p>
            )}
          </div>
          <label>TikTok</label>
          <input
            type="text"
            name="tiktok"
            value={brand.tiktok}
            onChange={handleChange}
          />
          <label>Instagram</label>
          <input
            type="text"
            name="instagram"
            value={brand.instagram}
            onChange={handleChange}
          />
          <label>Facebook</label>
          <input
            type="text"
            name="facebook"
            value={brand.facebook}
            onChange={handleChange}
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={brand.phoneNumber}
            onChange={handleChange}
          />
          <label>About Your Brand</label>
          <textarea name="about" value={brand.about} onChange={handleChange} />
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
