import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = ({ item, onRemoveItem }) => {
  return (
    <tr>
      <td className="p-4 flex justify-center items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover  center "
        />
      </td>
      <td className="p-4">{item.color}</td>
      <td className="p-4">{item.size}</td>
      <td className="p-4">${item.price}</td>
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
