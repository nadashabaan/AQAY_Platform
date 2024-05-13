import React from "react";
import { Link } from "react-router-dom";
import SI from "../assets/Images/SI.png";

export const SignIn = () => {
  return (
    <>
      <div className="container">
        <div className="left-section">
          <h1>Welcome Back to AQAY! </h1>
          <p>
            We've missed you. Explore our latest deals and products tailored
            just for you. Happy shopping!
          </p>
          <img src={SI} className="SignInPhoto" />
        </div>
        <div className="right-section-I">
          <div className="signup-form">
            <h2>SIGN IN</h2>
            <form>
              <input type="email" placeholder="Enter your email" required />
              <input
                type="password"
                placeholder="Enter your password"
                required
              />
              <Link to="/Reset">forget password </Link>
              <Link to="/SignUpFormC">
                If you don't have an account Sign up{" "}
              </Link>

              <button type="submit">SIGN IN</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
