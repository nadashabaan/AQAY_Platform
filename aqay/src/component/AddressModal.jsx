// import React, { useState } from "react";
// const AddressModal = ({ isOpen, onClose, onSubmit }) => {
//   const [address, setAddress] = useState("");
//   const [promoCode, setPromoCode] = useState("");
//   if (!isOpen) return null;
//   const handleSubmit = () => {
//     onSubmit(address);
//     setAddress("");
//     onSubmit(promoCode);
//     setPromoCode("");
//   };
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
//         <div className="mb-4">
//           <label className="block text-gray-700">Address</label>
//           <input
//             type="text"
//             className="w-full p-2 text-black-500 border border-black-300 rounded-md"
//             placeholder="Enter your address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//           <label className="block text-gray-700">Promo-Code</label>
//           <input
//             type="text"
//             className="w-full p-2 text-black-500 border border-black-300 rounded-md"
//             placeholder=" Enter Promo-Code"
//             value={promoCode}
//             onChange={(e) => setPromoCode(e.target.value)}
//           />
//         </div>
//         <p className="mb-4 text-orange-500">
//           The only payment method available is Cash on Delivery.
//         </p>
//         <div className="flex justify-end space-x-2">
//           <button
//             onClick={onClose}
//             className="bg-gray-500 text-white px-4 py-2 rounded"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="bg-orange-500 text-white px-4 py-2 rounded"
//           >
//             OK
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddressModal;

import React, { useState } from "react";

const AddressModal = ({ isOpen, onClose, onSubmit }) => {
  const [address, setAddress] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!address) {
      setError("Address cannot be empty");
      return;
    }
    onSubmit(address, promoCode);
    setAddress("");
    setPromoCode("");
    setError("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            className="w-full p-2 text-black-500 border border-black-300 rounded-md"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <label className="block text-gray-700 mt-4">Promo-Code</label>
          <input
            type="text"
            className="w-full p-2 text-black-500 border border-black-300 rounded-md"
            placeholder="Enter Promo-Code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
        </div>
        <p className="mb-4 text-orange-500">
          The only payment method available is Cash on Delivery.
        </p>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-orange-500 text-white px-4 py-2 rounded"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddressModal;

// import React, { useState } from "react";
// import axios from "axios";

// const AddressModal = ({ isOpen, onClose, onSubmit }) => {
//   const [address, setAddress] = useState("");
//   const [PromoCode, setPromoCode] = useState("");
//   const [error, setError] = useState("");

//   if (!isOpen) return null;

//   const handleSubmit = async () => {
//     if (!address) {
//       setError("Address cannot be empty");
//       return;
//     }

//     try {
//       const shoppingCartId = 17;
//       const response = await axios.post(
//         `http://aqay.runasp.net/api/Order/checkout`,
//         null,
//         {
//           params: {
//             ShoppingCartId: shoppingCartId,
//             PromoCode: PromoCode || "",
//             Address: address,
//           },
//         }
//       );

//       if (response.data) {
//         onSubmit(address, PromoCode);
//         setAddress("");
//         setPromoCode("");
//         setError("");
//         alert("Checkout successful!");
//       } else {
//         alert("Failed to complete the checkout.");
//       }
//     } catch (error) {
//       console.error("Error during checkout:", error);
//       setError("Failed to complete the checkout.");
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
//         <div className="mb-4">
//           <label className="block text-gray-700">Address</label>
//           <input
//             type="text"
//             className="w-full p-2 text-black-500 border border-black-300 rounded-md"
//             placeholder="Enter your address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//           />
//           {error && <p className="text-red-500 text-sm">{error}</p>}
//           <label className="block text-gray-700 mt-4">Promo Code</label>
//           <input
//             type="text"
//             className="w-full p-2 text-black-500 border border-black-300 rounded-md"
//             placeholder="Enter Promo Code (optional)"
//             value={PromoCode}
//             onChange={(e) => setPromoCode(e.target.value)}
//           />
//         </div>
//         <p className="mb-4 text-orange-500">
//           The only payment method available is Cash on Delivery.
//         </p>
//         <div className="flex justify-end space-x-2">
//           <button
//             onClick={onClose}
//             className="bg-gray-500 text-white px-4 py-2 rounded"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSubmit}
//             className="bg-orange-500 text-white px-4 py-2 rounded"
//           >
//             OK
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddressModal;
