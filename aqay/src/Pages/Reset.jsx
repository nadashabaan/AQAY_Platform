import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SI from "../assets/Images/SI.png";
import axios from "axios";

const Reset = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    dateOfBirth: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://aqay.runasp.net/api/Auth/ResetPassword",
        {
          email: formData.email,
          oldPassword: formData.oldPassword,
          newPassword: formData.newPassword,
          dateOfBirth: formData.dateOfBirth,
        }
      );

      if (response.data) {
        alert("Password reset successful!");
        navigate("/SignIn");
      }
    } catch (error) {
      console.error("Failed to reset password:", error);
      setErrorMessage(
        "Failed to reset password. Please check your entries and try again."
      );
    }
  };

  return (
    <>
      <div className="container">
        <div className="left-section">
          <h1>Welcome Back to AQAY!</h1>
          <p>
            We've missed you. Explore our latest deals and products tailored
            just for you. Happy shopping!
          </p>
          <img src={SI} className="SignInPhoto" alt="SignIn Illustration" />
        </div>
        <div className="right-section-I">
          <div className="signup-form">
            <h2>Reset Password</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="oldPassword"
                placeholder="Enter your old password"
                required
                value={formData.oldPassword}
                onChange={handleChange}
              />
              <input
                type="password"
                name="newPassword"
                placeholder="Enter your new password"
                required
                value={formData.newPassword}
                onChange={handleChange}
              />
              <div>
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                />
              </div>
              {errorMessage && <p className="error">{errorMessage}</p>}
              <Link to="/SignUpFormC">
                If you don't have an account Sign up
              </Link>
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reset;
