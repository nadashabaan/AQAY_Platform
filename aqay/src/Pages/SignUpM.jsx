// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import SUM from "../assets/Images/SUM.png";

// function SignUpFormM() {
//   const [formData, setFormData] = useState({
//     email: "",
//     brandName: "",
//     password: "",
//     passwordConfirm: "",
//     phoneNumber: "",
//     taxRegistrationNumber: "",
//     nationalId: "",
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleRadioChange = (event) => {
//     setFormData({
//       ...formData,
//       userType: event.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Form data submitted:", formData);
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="left-section">
//           <h1>Get Started Today</h1>
//           <p>
//             Calling all local brands: Unlock the power of our platform and
//             showcase your passion to the world! Join our community of artisans,
//             entrepreneurs, and visionaries in sharing your unique creations with
//             eager customers. With our seamless onboarding process, robust
//             support, and built-in marketing tools, we make it easy for you to
//             grow your brand and reach new heights. Embrace the opportunity to
//             connect with like-minded creators and expand your presence in the
//             ever-evolving world of ecommerce. Let's elevate local talent
//             together
//           </p>
//           <img src={SUM} alt="Illustration" />
//         </div>
//         <div className="right-section-M">
//           <div className="signup-form">
//             <h2>SIGN UP</h2>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 required
//               />
//               <input
//                 type="text"
//                 name="brandName"
//                 placeholder="Enter your Brand Name"
//                 value={formData.brandName}
//                 onChange={handleInputChange}
//                 required
//               />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Enter your password"
//                 value={formData.password}
//                 onChange={handleInputChange}
//                 required
//               />
//               <input
//                 type="password"
//                 name="passwordConfirm"
//                 placeholder="Confirm your password"
//                 value={formData.passwordConfirm}
//                 onChange={handleInputChange}
//                 required
//               />
//               <input
//                 type="tel"
//                 name="phoneNumber"
//                 placeholder="Phone number"
//                 minLength="11"
//                 maxLength="11"
//                 value={formData.phoneNumber}
//                 onChange={handleInputChange}
//                 required
//               />
//               <label>
//                 <input
//                   type="radio"
//                   name="userType"
//                   value="business"
//                   checked={formData.userType === "business"}
//                   onChange={handleRadioChange}
//                 />
//                 Business company
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="userType"
//                   value="individual"
//                   checked={formData.userType === "individual"}
//                   onChange={handleRadioChange}
//                 />
//                 Individual Business
//               </label>
//               {formData.userType === "business" && (
//                 <input
//                   type="tel"
//                   name="taxRegistrationNumber"
//                   placeholder="Tax registration number"
//                   maxLength="9"
//                   value={formData.taxRegistrationNumber}
//                   onChange={handleInputChange}
//                   required
//                 />
//               )}
//               {formData.userType === "individual" && (
//                 <input
//                   type="tel"
//                   name="nationalId"
//                   placeholder="National ID"
//                   maxLength="14"
//                   value={formData.nationalId}
//                   onChange={handleInputChange}
//                   required
//                 />
//               )}
//               <Link to="/SignIn">If you already have an account Sign in</Link>
//               <button type="submit">SIGN UP</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default SignUpFormM;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import SUM from "../assets/Images/SUM.png";

function SignUpFormM() {
  const [formData, setFormData] = useState({
    email: "",
    brandName: "",
    password: "",
    passwordConfirm: "",
    phoneNumber: "",
    taxRegistrationNumber: "",
    nationalId: "",
    userType: "",
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
      userType: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.passwordConfirm) {
      alert("Passwords do not match.");
      return;
    }

    const payload = {
      email: formData.email,
      brandName: formData.brandName,
      password: formData.password,
      passwordConfirm: formData.passwordConfirm,
      phoneNumber: formData.phoneNumber,
      taxRegistrationNumber:
        formData.userType === "business" ? formData.taxRegistrationNumber : "",
      nationalId: formData.userType === "individual" ? formData.nationalId : "",
    };

    try {
      const response = await fetch(
        "http://aqay.runasp.net/api/Auth/SignupMerchant",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );
      console.log(JSON.stringify(payload));
      console.log(response.text());

      if (response.ok) {
        const data = await response.json();
        alert(data.message || "Signup successful!");
      } else {
        throw new Error(
          "HTTP error " + response.status + ": " + (await response.text())
        );
      }
    } catch (error) {
      alert("keep an eye on Your Email");
    }
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
            together.
          </p>
          <img src={SUM} alt="Illustration" />
        </div>
        <div className="right-section-M">
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
                type="text"
                name="brandName"
                placeholder="Enter your Brand Name"
                value={formData.brandName}
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
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone number"
                minLength="11"
                maxLength="11"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="business"
                  checked={formData.userType === "business"}
                  onChange={handleRadioChange}
                />
                Business company
              </label>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="individual"
                  checked={formData.userType === "individual"}
                  onChange={handleRadioChange}
                />
                Individual Business
              </label>
              {formData.userType === "business" && (
                <input
                  type="tel"
                  name="taxRegistrationNumber"
                  placeholder="Tax registration number"
                  maxLength="9"
                  value={formData.taxRegistrationNumber}
                  onChange={handleInputChange}
                  required
                />
              )}
              {formData.userType === "individual" && (
                <input
                  type="tel"
                  name="nationalId"
                  placeholder="National ID"
                  maxLength="14"
                  value={formData.nationalId}
                  onChange={handleInputChange}
                  required
                />
              )}
              <Link to="/SignIn">If you already have an account Sign in</Link>
              <button type="submit">SIGN UP</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpFormM;
