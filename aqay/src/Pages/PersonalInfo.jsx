import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

function PersonalInfo() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    gender: "Female",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await axios.get(
        "http://aqay.runasp.net/profile?id=11e31ed1-3d31-4eeb-a605-85332d2260ab"
      );
      const userData = response.data;
      setFormData({
        userName: userData.userName,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        gender: userData.gender ? "Female" : "Male",
      });
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSave = async () => {
    try {
      const payload = {
        phoneNumber: formData.phoneNumber,
        gender: formData.gender === "Female",
      };
      const response = await axios.put(
        "http://aqay.runasp.net/profile?id=11e31ed1-3d31-4eeb-a605-85332d2260ab",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Failed to update profile:", error);
      alert(
        `Failed to update profile: ${
          error.response ? error.response.data.message : error.message
        }`
      );
    }
  };

  const handleCancel = () => {
    console.log("Cancel");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col lg:flex-row">
        <div className="flex-grow flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xxl">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Personal Information
            </h2>
            <form>
              <FieldGroup
                label="Username"
                value={formData.userName}
                type="text"
                disabled
              />
              <FieldGroup
                label="Email"
                value={formData.email}
                type="email"
                disabled
              />
              <FieldGroup
                label="Phone Number"
                value={formData.phoneNumber}
                handleChange={handleChange}
                name="phoneNumber"
              />
              <SelectGroup
                label="Gender"
                value={formData.gender}
                options={["Female", "Male"]}
                handleChange={handleChange}
                name="gender"
              />
              <ActionButtons onSave={handleSave} onCancel={handleCancel} />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const FieldGroup = ({
  label,
  value,
  handleChange,
  name,
  type = "text",
  disabled = false,
}) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
      className="w-full px-3 py-2 border rounded-lg"
      disabled={disabled}
    />
  </div>
);

const SelectGroup = ({ label, value, options, handleChange, name }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-gray-700 font-bold mb-2">
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
      className="w-full px-3 py-2 border rounded-lg"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const ActionButtons = ({ onSave, onCancel }) => (
  <div className="flex justify-between">
    <button
      type="button"
      onClick={onSave}
      className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-700"
    >
      Save
    </button>
    <button
      type="button"
      onClick={onCancel}
      className="px-4 py-2 bg-gray-500 text-white font-bold rounded-lg hover:bg-gray-700"
    >
      Cancel
    </button>
  </div>
);

export default PersonalInfo;
