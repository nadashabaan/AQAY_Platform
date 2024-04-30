import React, { useState } from "react";
function SignUpFormM() {
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
            Calling all local brands: Unlock the power of our platform and
            showcase your passion to the world! Join our community of artisans,
            entrepreneurs, and visionaries in sharing your unique creations with
            eager customers. With our seamless onboarding process, robust
            support, and built-in marketing tools, we make it easy for you to
            grow your brand and reach new heights. Embrace the opportunity to
            connect with like-minded creators and expand your presence in the
            ever-evolving world of ecommerce. Let's elevate local talent
            together
          </p>
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
              <input
                type="password"
                placeholder="Confirm your password"
                required
              />
              <input
                type="password"
                placeholder="Confirm your password"
                required
              />
              <label>Gender</label>

              <a href="/login">if you already have an account LOGIN</a>
              <button type="submit">SIGN UP</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpFormM;
