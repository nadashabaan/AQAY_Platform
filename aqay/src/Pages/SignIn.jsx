import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SI from "../assets/Images/SI.png";
import { useUser } from "../context/UserContext";
import axios from "axios";

export const SignIn = () => {
  const navigate = useNavigate();
  const { setUser, setBrandId } = useUser();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://aqay.runasp.net/api/Auth/Login",
        formData
      );
      const data = response.data;

      if (data.isAuthenticated) {
        localStorage.setItem("token", data.token);
        setUser(data);

        const role = data.roles.$values[0];
        switch (role) {
          case "Owner":
            const brandResponse = await axios.get(
              `http://aqay.runasp.net/api/User/brand-id?id=${data.userId}`
            );
            setBrandId(brandResponse.data.brandId.result);
            navigate(data.isSubscribed ? "/storeFront" : "/subscriptions");
            break;
          case "Admin":
            navigate("/DashboardA");
            break;
          case "Consumer":
            navigate("/Home");
            break;
          default:
            setErrorMessage(
              "Access Denied: Your role does not allow access to this area."
            );
            break;
        }
      } else {
        setErrorMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setErrorMessage("Error logging in. Please try again later.");
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
            <h2>SIGN IN</h2>
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
                name="password"
                placeholder="Enter your password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              {errorMessage && <p className="error">{errorMessage}</p>}
              <Link to="/Reset">Forget password?</Link>
              <Link to="/SignUpFormC">
                If you don't have an account, sign up
              </Link>
              <button type="submit">SIGN IN</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
