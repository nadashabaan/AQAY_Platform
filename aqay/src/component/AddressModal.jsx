import React, { useState } from "react";
const AddressModal = ({ isOpen, onClose, onSubmit }) => {
  const [address, setAddress] = useState("");
  const [promoCode, setPromoCode] = useState("");
  if (!isOpen) return null;
  const handleSubmit = () => {
    onSubmit(address);
    setAddress("");
    onSubmit(promoCode);
    setPromoCode("");
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Enter Your Address</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            className="w-full p-2 text-black-500 border border-black-300 rounded-md"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label className="block text-gray-700">Promo-Code</label>
          <input
            type="text"
            className="w-full p-2 text-black-500 border border-black-300 rounded-md"
            placeholder=" Enter Promo-Code"
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
