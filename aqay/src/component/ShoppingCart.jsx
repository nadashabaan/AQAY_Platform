import React, { useState } from "react";
import CartItem from "./CartItem";

const initialCartItems = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    color: "Red",
    size: "M",
    quantity: 2,
    price: 20,
    total: 40,
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    color: "Blue",
    size: "L",
    quantity: 1,
    price: 25,
    total: 25,
  },
  // Add more items as needed
];

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleQuantityChange = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: quantity, total: item.price * quantity }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.total, 0);

  const handleConfirm = () => {
    alert(
      "Your order confirmed successfully.\nYou can track it through order history."
    );
  };

  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col mt-16 ">
      <div className="flex justify-center mb-8">
        <h1 className="text-right text-4xl font-bold text-gray-800">
          Your Shopping Cart has{" "}
          <span className="text-orange-500">{initialCartItems.length}</span>{" "}
          items
        </h1>
      </div>
      <div className="flex-grow flex justify-center items-center">
        <div className="overflow-x-auto w-full max-w-5xl">
          <table className="min-w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-center text-sm leading-normal text-gray-600 ">
                <th className="p-4">Image</th>
                <th className="p-4">Color</th>
                <th className="p-4">Size</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Price</th>
                <th className="p-4">Subtotal</th>
                <th className="p-4"> </th>
              </tr>
            </thead>
            <tbody className="text-sm font-light text-gray-600">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onQuantityChange={handleQuantityChange}
                  onRemoveItem={handleRemoveItem}
                />
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-4 p-4 bg-white shadow-lg rounded-lg">
            <div className="text-lg font-bold">Total: ${totalAmount}</div>
            <div className="space-x-2">
              <button className="bg-gray-500 text-white px-4 py-2 rounded">
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="bg-orange-500 text-white px-4 py-2 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
