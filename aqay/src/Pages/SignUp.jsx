import React, { useState } from "react";

function SignUpForm() {
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
          <button>Join us as Merchant</button>
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
              <div className="date-of-birth">
                <select>
                  <option value="">Day</option>
                </select>
                <select>
                  <option value="">Month</option>
                </select>
                <select>
                  <option value="">Year</option>
                </select>
              </div>
              <div>
                <label>
                  <input type="radio" name="gender" value="female" /> Female
                </label>
                <label>
                  <input type="radio" name="gender" value="male" /> Male
                </label>
              </div>
              <button type="submit">SIGN UP</button>
              <a href="/login">if you already have an account LOGIN</a>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpForm;
