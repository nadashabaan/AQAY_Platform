import React from "react";
import { FaTrashAlt } from "react-icons/fa";
const CartItem = ({ item, onQuantityChange, onRemoveItem }) => {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (newQuantity >= 0) {
      onQuantityChange(item.id, newQuantity);
    }
  };
  return (
    <tr>
      <td className="p-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover"
        />
      </td>
      <td className="p-4">{item.color}</td>
      <td className="p-4">{item.size}</td>
      <td className="p-4">
        <input
          type="number"
          value={item.quantity}
          onChange={handleQuantityChange}
          className="w-12 text-center border border-gray-300 rounded"
        />
      </td>
      <td className="p-4">${item.price}</td>
      <td className="p-4">${item.total}</td>
      <td className="p-4">
        <button
          onClick={() => onRemoveItem(item.id)}
          className="text-gray-500 hover:text-black-700"
        >
          <FaTrashAlt />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
