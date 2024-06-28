// import React from "react";

// const ProductInfo = ({ product }) => {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
//       <p className="text-lg text-gray-700 mb-4 line-through">
//         ${product.originalPrice}
//       </p>
//       <p className="text-2xl font-bold text-orange-500 mb-4">
//         ${product.price}
//       </p>
//       <p className="text-gray-700 mb-4">{product.description}</p>
//       <div className="flex items-center mb-4">
//         <span className="mr-2">Size: </span>
//         {product.size}
//       </div>
//       <div className="flex items-center mb-4">
//         <span className="mr-2">Stock: </span>
//         {product.stock}
//       </div>
//       <div className="flex items-center">
//         <button className="bg-orange-500 text-white px-4 py-2 rounded mr-2">
//           Add to Bag
//         </button>
//         <button className="bg-gray-500 text-white px-4 py-2 rounded">
//           Add to Wishlist
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductInfo;

import React from "react";

const ProductInfo = ({ product = {} }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
      <p className="text-lg text-gray-700 mb-4 line-through">
        ${product.originalPrice}
      </p>
      <p className="text-2xl font-bold text-orange-500 mb-4">
        ${product.price}
      </p>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <div className="flex items-center mb-4">
        <span className="mr-2">Size: </span>
        {product.size}
      </div>
      <div className="flex items-center mb-4">
        <span className="mr-2">Stock: </span>
        {product.stock}
      </div>
      <div className="flex items-center">
        <button className="bg-orange-500 text-white px-4 py-2 rounded mr-2">
          Add to Cart
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded">
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
