import React, { useState } from "react";
import { Link } from "react-router-dom";
import SUC from "../assets/Images/SUC.png";

function SignUpFormC() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: { day: "", month: "", year: "" },
    gender: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your submission logic here, for example sending the data to an API endpoint
    console.log("Form data submitted:", formData);
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

          <img src={SUC} />
        </div>
        <div className="right-section">
          <div className="signup-form">
            <h2>SIGN UP</h2>
            <form>
              <input type="email" placeholder="Enter your email" required />
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
              <input
                type="password"
                placeholder="Confirm your password"
                required
              />
              <div>
                <label>Date of birth</label>
                <input
                  className="DOB"
                  type="date"
                  required
                  name="Date of birth"
                  placeholder="Date of birth"
                ></input>
              </div>
              <label>Gender</label>
              <div className="custom-radio">
                <label>
                  <input
                    className="custom-radio"
                    type="radio"
                    name="gender"
                    value="female"
                  />{" "}
                  Female
                </label>
                <label>
                  <input
                    className="custom-radio"
                    type="radio"
                    name="gender"
                    value="male"
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
