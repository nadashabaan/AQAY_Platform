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
    <div className="signup-form">
      <h2>SIGN UP</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter your password"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirm your password"
          required
        />
        <div className="date-of-birth">
          {/* You can replace these inputs with a date picker component */}
          <select
            name="day"
            value={formData.dateOfBirth.day}
            onChange={handleInputChange}
            required
          >
            {/* Populate options for days */}
          </select>
          <select
            name="month"
            value={formData.dateOfBirth.month}
            onChange={handleInputChange}
            required
          >
            {/* Populate options for months */}
          </select>
          <select
            name="year"
            value={formData.dateOfBirth.year}
            onChange={handleInputChange}
            required
          >
            {/* Populate options for years */}
          </select>
        </div>
        <div className="gender">
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleInputChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleInputChange}
            />
            Male
          </label>
        </div>
        <button type="submit">SIGN UP</button>
        <p>
          if you already have an account <a href="/login">LOGIN</a>
        </p>
      </form>
    </div>
  );
}

export default SignUpForm;
