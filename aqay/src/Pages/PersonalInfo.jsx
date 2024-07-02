import React, { useState } from "react";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

function PersonalInfo() {
  const [formData, setFormData] = useState({
    username: "amirmuham",
    email: "amirmuham@gj.com",
    phoneNumber: "011111133333",
    birthday: "2002-07-23",
    gender: "Female",
    balance: "$723.18",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Save functionality here
    console.log("Form Data:", formData);
  };

  const handleCancel = () => {
    // Reset to initial values or navigate away
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
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full text-gray-500  bg-gray-200 px-3 py-2 border rounded-lg"
                  disabled
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                  disabled
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full text-gray-500  bg-gray-200 px-3 py-2 border rounded-lg"
                  disabled
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneNumber"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="birthday"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Birthday
                </label>
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  value={formData.birthday}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="gender"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </select>
              </div>
              <div className="mb-4 flex justify-between items-center" />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleSave}
                  className="px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-700"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 bg-gray-500 text-white font-bold rounded-lg hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PersonalInfo;
