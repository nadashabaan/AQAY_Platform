import React, { useState } from "react";
import { Link } from "react-router-dom";
import SUC from "../assets/Images/SUC.png";

function SignUpFormC() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    gender: "",
    dateOfBirth: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (event) => {
    setFormData({
      ...formData,
      gender: event.target.value === "female",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      email: formData.email,
      password: formData.password,
      passwordConfirm: formData.passwordConfirm,
      gender: formData.gender,
      dateOfBirth: formData.dateOfBirth,
    };

    try {
      const response = await fetch(
        "http://aqay.runasp.net/api/Auth/SignupConsumer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert(data.message || "Signup successful!");
      } else {
        throw new Error(
          "HTTP error " + response.status + ": " + (await response.text())
        );
      }
    } catch (error) {
      alert("keep an eye on Your Email .. your account is being validated");
    }
  };

  return (
    <>
      <div className="container">
        <div className="left-section">
          <h1>Get Started Today</h1>
          <p>
            Welcome to our vibrant marketplace, where every purchase tells a
            story. Dive into a world of unique finds, crafted with passion by
            local artisans. From handmade treasures to artisanal delicacies,
            explore the heart and soul of your community with each click. Join
            us in celebrating creativity, supporting local talent, and making a
            difference, one purchase at a time. Start your shopping adventure
            today!
          </p>
          <Link to="/SignUpM">
            <button>Join us as Merchant</button>
          </Link>
          <img src={SUC} alt="Illustration" />
        </div>
        <div className="right-section">
          <div className="signup-form">
            <h2>SIGN UP</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <input
                type="password"
                name="passwordConfirm"
                placeholder="Confirm your password"
                value={formData.passwordConfirm}
                onChange={handleInputChange}
                required
              />
              <div>
                <label>Date of birth</label>
                <input
                  className="DOB"
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <label>Gender</label>
              <div className="custom-radio">
                <label>
                  <input
                    className="custom-radio"
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === true}
                    onChange={handleRadioChange}
                  />{" "}
                  Female
                </label>
                <label>
                  <input
                    className="custom-radio"
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === false}
                    onChange={handleRadioChange}
                  />{" "}
                  Male
                </label>
              </div>
              <Link to="/SignIn">If you already have an account Sign in</Link>
              <button type="submit">SIGN UP</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpFormC;
