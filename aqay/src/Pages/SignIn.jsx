import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SI from "../assets/Images/SI.png";
export const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    };

    try {
      const response = await fetch(
        "http://aqay.runasp.net/api/Auth/Login",
        requestOptions
      );
      const data = await response.json();
      if (data.isAuthenticated) {
        console.log("Login successful:", data);
        navigate("/DashboardA");
      } else {
        setErrorMessage("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("There was an error!", error);
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
              <Link to="/Reset">forget password</Link>
              <Link to="/SignUpFormC">
                If you don't have an account Sign up
              </Link>
              <button type="submit">SIGN IN</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import SI from "../assets/Images/SI.png";

// export const SignIn = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: formData.email,
//         password: formData.password,
//       }),
//     };

//     try {
//       const response = await fetch(
//         "http://aqay.runasp.net/api/Auth/Login",
//         requestOptions
//       );
//       const data = await response.json();
//       if (data.isAuthenticated) {
//         const roles = data.roles.$values;
//         if (roles.includes("Admin")) {
//           navigate("/SubReq");
//         } else if (roles.includes("Owner")) {
//           if (data.isSub) {
//             navigate("/storeFront");
//           } else {
//             navigate("/subscriptions");
//             alert("Please subscribe to access Dashboard.");
//           }
//         } else if (roles.includes("Consumer")) {
//           navigate("/Home");
//         }
//       } else {
//         setErrorMessage("Login failed. Please check your credentials.");
//       }
//     } catch (error) {
//       console.error("There was an error!", error);
//       setErrorMessage("Error logging in. Please try again later.");
//     }
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="left-section">
//           <h1>Welcome Back to AQAY!</h1>
//           <p>
//             We've missed you. Explore our latest deals and products tailored
//             just for you. Happy shopping!
//           </p>
//           <img src={SI} className="SignInPhoto" alt="SignIn Illustration" />
//         </div>
//         <div className="right-section-I">
//           <div className="signup-form">
//             <h2>SIGN IN</h2>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Enter your password"
//                 required
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//               {errorMessage && <p className="error">{errorMessage}</p>}
//               <Link to="/Reset">Forget password?</Link>
//               <Link to="/SignUpFormC">
//                 If you don't have an account Sign up
//               </Link>
//               <button type="submit">SIGN IN</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useUser } from "../context/UserContext";
// import SI from "../assets/Images/SI.png";

// export const SignIn = () => {
//   const navigate = useNavigate();
//   const { loginUser } = useUser();
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: formData.email,
//         password: formData.password,
//       }),
//     };

//     try {
//       const response = await fetch(
//         "http://aqay.runasp.net/api/Auth/Login",
//         requestOptions
//       );
//       const data = await response.json();
//       if (data.isAuthenticated) {
//         loginUser(data);
//         navigateBasedOnRole(data);
//       } else {
//         setErrorMessage("Login failed. Please check your credentials.");
//       }
//     } catch (error) {
//       console.error("There was an error!", error);
//       setErrorMessage("Error logging in. Please try again later.");
//     }
//   };

//   const navigateBasedOnRole = (data) => {
//     const roles = data.roles.$values;
//     if (roles.includes("Admin")) {
//       navigate("/SubReq");
//     } else if (roles.includes("Owner")) {
//       if (data.isSub) {
//         navigate("/storeFront");
//       } else {
//         navigate("/subscriptions");
//         alert("Please subscribe to access Dashboard.");
//       }
//     } else if (roles.includes("Consumer")) {
//       navigate("/Home");
//     }
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="left-section">
//           <h1>Welcome Back to AQAY!</h1>
//           <p>
//             We've missed you. Explore our latest deals and products tailored
//             just for you. Happy shopping!
//           </p>
//           <img src={SI} className="SignInPhoto" alt="SignIn Illustration" />
//         </div>
//         <div className="right-section-I">
//           <div className="signup-form">
//             <h2>SIGN IN</h2>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Enter your password"
//                 required
//                 value={formData.password}
//                 onChange={handleChange}
//               />
//               {errorMessage && <p className="error">{errorMessage}</p>}
//               <Link to="/Reset">Forget password?</Link>
//               <Link to="/SignUpFormC">
//                 If you don't have an account Sign up
//               </Link>
//               <button type="submit">SIGN IN</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
