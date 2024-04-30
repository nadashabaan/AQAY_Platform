import React, { useState } from "react";
import { Link } from "react-router-dom/dist";
// import SUC from "./Images/SUC.png";

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

          {/* <img src={SUC} /> */}
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
              <label>Date of birth</label>
              {/* 
              <div className="date-of-birth">
                <select>
                  <option value="" disabled selected hidden>
                    Day
                  </option>
                  <option value="1">Monday</option>
                  <option value="2">Tuesday</option>
                  <option value="3">Wednesday</option>
                  <option value="4">Thursday</option>
                  <option value="5">Friday</option>
                  <option value="6">Saturday</option>
                  <option value="7">Sunday</option>
                </select>
                <select>
                  <option value="" disabled selected hidden>
                    Month
                  </option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <select>
                  <option value="">Year</option>
                  <option value="2000">2000</option>
                  <option value="2001">2001</option>
                  <option value="2002">2002</option>
                  <option value="2003">2003</option>
                  <option value="2004">2004</option>
                  <option value="2005">2005</option>
                  <option value="2006">2006</option>
                  <option value="2007">2007</option>
                  <option value="2008">2008</option>
                  <option value="2009">2009</option>
                  <option value="2010">2010</option>
                </select>
              </div> */}
              <label>Gender</label>
              <div>
                <label>
                  <input type="radio" name="gender" value="female" /> Female
                </label>
                <label>
                  <input type="radio" name="gender" value="male" /> Male
                </label>
              </div>
              <a href="/login">if you already have an account LOGIN</a>
              <button type="submit">SIGN UP</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpFormC;
