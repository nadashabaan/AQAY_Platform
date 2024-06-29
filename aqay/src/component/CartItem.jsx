import React from "react";
import { MdDeleteOutline } from "react-icons/md";
const CartItem = ({ item, onQuantityChange, onRemoveItem }) => {
  const { id, image, color, size, quantity, price, total } = item;

  return (
    <tr className="border-t border-gray-200">
      <td className="p-4">
        <img src={image} alt="Product" className="w-20 h-20 object-cover" />
      </td>
      <td className="p-4">{color}</td>
      <td className="p-4">{size}</td>
      <td className="p-4">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => onQuantityChange(id, Number(e.target.value))}
          className="w-16 border border-gray-300 rounded p-1"
        />
      </td>
      <td className="p-4">${price}</td>
      <td className="p-4">${total}</td>
      <td className="p-4">
        <button
          onClick={() => onRemoveItem(id)}
          className="bg-gray-200 text-black px-4 py-2 rounded"
        >
          <MdDeleteOutline />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
