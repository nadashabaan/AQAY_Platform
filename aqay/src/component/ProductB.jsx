// // // import React from "react";
// // // import { FaExpandAlt, FaShoppingCart } from "react-icons/fa";
// // // import { CiHeart } from "react-icons/ci";
// // // import { Link } from "react-router-dom";

// // // const ProductB = ({ product, onRemove, onExpand, onAddToCart }) => {
// // //   return (
// // //     <div className="relative bg-ogrange border rounded-lg shadow-md p-4 mb-4 flex">
// // //       <div className="w-1/4 flex justify-center items-center">
// // //         <img
// // //           src={product.image}
// // //           alt={product.name}
// // //           className="max-w-full max-h-full"
// // //         />
// // //       </div>
// // //       <div className="w-3/4 relative p-4">
// // //         <Link
// // //           to="/proudDetails"
// // //           className="absolute top-2 right-2 text-xl text-red-500"
// // //         >
// // //           <FaExpandAlt />
// // //         </Link>
// // //         <div className="text-red-400 font-bold text-sm">{product.category}</div>
// // //         <div className="text-xl font-bold">{product.name}</div>
// // //         <div className="text-red-500 text-lg">${product.price}</div>
// // //         <div className="mt-2">
// // //           <span className="text-yellow-500">
// // //             {"★".repeat(product.rating)}
// // //             {"☆".repeat(5 - product.rating)}
// // //           </span>
// // //           <span className="text-gray-500 text-sm ml-2">
// // //             ({product.rating}/5) | {product.reviews} Reviews
// // //           </span>
// // //         </div>
// // //         <div className="mt-4 flex items-center">
// // //           <button
// // //             className="text-3xl text-red-500 mr-4"
// // //             onClick={() => onRemove(product.id)}
// // //           >
// // //             <CiHeart />
// // //           </button>
// // //           <button
// // //             className="flex items-center bg-red-500 text-white px-4 py-2 rounded"
// // //             onClick={() => onAddToCart(product.id)}
// // //           >
// // //             <FaShoppingCart />
// // //             <span className="ml-2">ADD TO CART</span>
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProductB;

// // // import React from "react";
// // // import { FaExpandAlt, FaShoppingCart } from "react-icons/fa";
// // // import { CiHeart } from "react-icons/ci";
// // // import { Link } from "react-router-dom";

// // // const ProductB = ({ product, onRemove, onExpand, onAddToCart }) => {
// // //   return (
// // //     <div className="relative bg-ogrange border rounded-lg shadow-md p-4 mb-4 flex">
// // //       <div className="w-1/4 flex justify-center items-center">
// // //         <img
// // //           src={product.image}
// // //           alt={product.name}
// // //           className="max-w-full max-h-full"
// // //         />
// // //       </div>
// // //       <div className="w-3/4 relative p-4">
// // //         <Link
// // //           to="/proudDetails"
// // //           className="absolute top-2 right-2 text-xl text-red-500"
// // //         >
// // //           <FaExpandAlt />
// // //         </Link>
// // //         <div className="text-red-400 font-bold text-sm">{product.category}</div>
// // //         <div className="text-xl font-bold">{product.name}</div>
// // //         <div className="text-red-500 text-lg">${product.price}</div>
// // //         <div className="mt-2">
// // //           <span className="text-yellow-500">
// // //             {"★".repeat(product.rating)}
// // //             {"☆".repeat(5 - product.rating)}
// // //           </span>
// // //           <span className="text-gray-500 text-sm ml-2">
// // //             ({product.rating}/5) | {product.reviews} Reviews
// // //           </span>
// // //         </div>
// // //         <div className="mt-4 flex items-center">
// // //           <button
// // //             className="text-3xl text-red-500 mr-4"
// // //             onClick={() => onRemove(product.id)}
// // //           >
// // //             <CiHeart />
// // //           </button>
// // //           <button
// // //             className="flex items-center bg-red-500 text-white px-4 py-2 rounded"
// // //             onClick={() => onAddToCart(product.id)}
// // //           >
// // //             <FaShoppingCart />
// // //             <span className="ml-2">ADD TO CART</span>
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default ProductB;

// // import React from "react";
// // import axios from "axios";
// // import { FaExpandAlt, FaShoppingCart } from "react-icons/fa";
// // import { CiHeart } from "react-icons/ci";
// // import { Link } from "react-router-dom";

// // const ProductB = ({ product }) => {
// //   const fetchAndAddFirstVariantToCart = async (productId) => {
// //     try {
// //       // Fetch product variants
// //       const variantResponse = await axios.get(
// //         `http://aqay.runasp.net/api/Products/variants?productId=${productId}`
// //       );
// //       if (variantResponse.data && variantResponse.data.$values.length > 0) {
// //         const firstVariantId = variantResponse.data.$values[0].id;
// //         // Add first variant to shopping cart
// //         const shoppingCartId = 15; // Assuming a fixed shoppingCartId for simplicity
// //         await axios.post(
// //           `http://aqay.runasp.net/api/ShoppingCart/${shoppingCartId}/addProduct?productVariantId=${firstVariantId}`
// //         );
// //         alert("Product variant added to cart successfully");
// //       } else {
// //         alert("No variants available for this product");
// //       }
// //     } catch (error) {
// //       console.error("Error adding variant to cart:", error);
// //       alert("Failed to add product variant to cart");
// //     }
// //   };

// //   return (
// //     <div className="relative bg-orange border rounded-lg shadow-md p-4 mb-4 flex">
// //       <div className="w-1/4 flex justify-center items-center">
// //         <img
// //           src={product.image}
// //           alt={product.name}
// //           className="max-w-full max-h-full"
// //         />
// //       </div>
// //       <div className="w-3/4 relative p-4">
// //         <Link
// //           to={`/productDetails/${product.id}`}
// //           className="absolute top-2 right-2 text-xl text-red-500"
// //         >
// //           <FaExpandAlt />
// //         </Link>
// //         <div className="text-red-400 font-bold text-sm">{product.category}</div>
// //         <div className="text-xl font-bold">{product.name}</div>
// //         <div className="text-red-500 text-lg">${product.price}</div>
// //         <div className="mt-2">
// //           <span className="text-yellow-500">
// //             {"★".repeat(product.rating)}
// //             {"☆".repeat(5 - product.rating)}
// //           </span>
// //           <span className="text-gray-500 text-sm ml-2">
// //             ({product.reviews} Reviews)
// //           </span>
// //         </div>
// //         <div className="mt-4 flex items-center">
// //           <button
// //             className="text-3xl text-red-500 mr-4"
// //             onClick={() => alert("Wishlist functionality not implemented")}
// //           >
// //             <CiHeart />
// //           </button>
// //           <button
// //             className="flex items-center bg-red-500 text-white px-4 py-2 rounded"
// //             onClick={() => fetchAndAddFirstVariantToCart(product.id)}
// //           >
// //             <FaShoppingCart />
// //             <span className="ml-2">ADD TO CART</span>
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProductB;

// import React from "react";
// import axios from "axios";
// import { FaExpandAlt, FaShoppingCart } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";
// import { Link } from "react-router-dom";

// const ProductB = ({ product }) => {
//   const fetchAndAddFirstVariantToCart = async (productId) => {
//     try {
//       const variantResponse = await axios.get(
//         `http://aqay.runasp.net/api/Products/variants?productId=${productId}`
//       );
//       console.log("Variants fetched:", variantResponse.data);

//       if (variantResponse.data.$values.length > 0) {
//         const firstVariantId = variantResponse.data.$values[0].id;
//         console.log("Attempting to add variant ID:", firstVariantId);

//         // Add first variant to shopping cart
//         const shoppingCartId = 15; // Assuming a fixed shoppingCartId for simplicity
//         const cartResponse = await axios.post(
//           `http://aqay.runasp.net/api/ShoppingCart/${shoppingCartId}/addProduct?productVariantId=${firstVariantId}`
//         );
//         console.log("Added to cart response:", cartResponse.data);

//         alert("Product variant added to cart successfully");
//       } else {
//         alert("No variants available for this product");
//       }
//     } catch (error) {
//       console.error("Error while fetching or adding to cart:", error);
//       alert(
//         "Failed to add product variant to cart: " +
//           (error.response?.data?.message || error.message)
//       );
//     }
//   };

//   return (
//     <div className="relative bg-orange border rounded-lg shadow-md p-4 mb-4 flex">
//       <div className="w-1/4 flex justify-center items-center">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="max-w-full max-h-full"
//         />
//       </div>
//       <div className="w-3/4 relative p-4">
//         <Link
//           to={`/productDetails/${product.id}`}
//           className="absolute top-2 right-2 text-xl text-red-500"
//         >
//           <FaExpandAlt />
//         </Link>
//         <div className="text-red-400 font-bold text-sm">{product.category}</div>
//         <div className="text-xl font-bold">{product.name}</div>
//         <div className="text-red-500 text-lg">${product.price}</div>
//         <div className="mt-2">
//           <span className="text-yellow-500">
//             {"★".repeat(product.rating)}
//             {"☆".repeat(5 - product.rating)}
//           </span>
//           <span className="text-gray-500 text-sm ml-2">
//             ({product.reviews} Reviews)
//           </span>
//         </div>
//         <div className="mt-4 flex items-center">
//           <button
//             className="text-3xl text-red-500 mr-4"
//             onClick={() => alert("Wishlist functionality not implemented")}
//           >
//             <CiHeart />
//           </button>
//           <button
//             className="flex items-center bg-red-500 text-white px-4 py-2 rounded"
//             onClick={() => fetchAndAddFirstVariantToCart(product.id)}
//           >
//             <FaShoppingCart />
//             <span className="ml-2">ADD TO CART</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductB;

// import React from "react";
// import axios from "axios";
// import { FaExpandAlt, FaShoppingCart } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";
// import { Link } from "react-router-dom";

// const ProductB = ({ product }) => {
//   const handleAddToCart = async (productId) => {
//     try {
//       const variantsResponse = await axios.get(
//         `http://aqay.runasp.net/api/Products/variants?productId=${productId}`
//       );
//       if (
//         variantsResponse.data.$values &&
//         variantsResponse.data.$values.length > 0
//       ) {
//         const firstVariantId = variantsResponse.data.$values.map(
//           (item) => item.id
//         );
//         const fVz = firstVariantId[0];
//         console.log(fVz);
//         await addToCart(fVz);
//       } else {
//         console.error("No variants available for this product.");
//         alert("No variants available for this product.");
//       }
//     } catch (error) {
//       console.error("Failed to fetch product variants:", error);
//       alert("Error fetching product variants: " + error.message);
//     }
//   };

//   const addToCart = async (productVariantId) => {
//     const shoppingCartId = 17;
//     try {
//       const response = await axios.post(
//         `http://aqay.runasp.net/api/ShoppingCart/${shoppingCartId}/addProduct?productVariantId=${fVz}`
//       );
//       console.log("Product variant added to cart successfully", response.data);
//       alert("Product variant added to cart successfully");
//     } catch (error) {
//       console.error("Failed to add product variant to cart:", error);
//       alert(
//         "Failed to add product variant to cart: " +
//           (error.response ? error.response.data.message : error.message)
//       );
//     }
//   };

//   return (
//     <div className="relative bg-orange border rounded-lg shadow-md p-4 mb-4 flex">
//       <div className="w-1/4 flex justify-center items-center">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="max-w-full max-h-full"
//         />
//       </div>
//       <div className="w-3/4 relative p-4">
//         <Link
//           to={`/proudDetails`}
//           className="absolute top-2 right-2 text-xl text-red-500"
//         >
//           <FaExpandAlt />
//         </Link>
//         <div className="text-red-400 font-bold text-sm">{product.category}</div>
//         <div className="text-xl font-bold">{product.name}</div>
//         <div className="text-red-500 text-lg">${product.price}</div>
//         <div className="mt-2">
//           <span className="text-yellow-500">
//             {"★".repeat(product.rating)}
//             {"☆".repeat(5 - product.rating)}
//           </span>
//           <span className="text-gray-500 text-sm ml-2">
//             ({product.reviews} Reviews)
//           </span>
//         </div>
//         <div className="mt-4 flex items-center">
//           <button
//             className="text-3xl text-red-500 mr-4"
//             onClick={() => console.log("Add to wishlist not implemented")}
//           >
//             <CiHeart />
//           </button>
//           <button
//             className="flex items-center bg-red-500 text-white px-4 py-2 rounded"
//             onClick={() => handleAddToCart(product.id)}
//           >
//             <FaShoppingCart />
//             <span className="ml-2">ADD TO CART</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductB;

// import React from "react";
// import axios from "axios";
// import { FaExpandAlt, FaShoppingCart } from "react-icons/fa";
// import { CiHeart } from "react-icons/ci";
// import { Link } from "react-router-dom";
// const ProductB = ({ product }) => {
//   const handleAddToCart = async (productId) => {
//     try {
//       const variantsResponse = await axios.get(
//         `http://aqay.runasp.net/api/Products/variants?productId=${productId}`
//       );
//       if (
//         variantsResponse.data.$values &&
//         variantsResponse.data.$values.length > 0
//       ) {
//         const firstVariantId = variantsResponse.data.$values[0].id;
//         console.log("First variant ID: ", firstVariantId);
//         await addToCart(firstVariantId);
//       } else {
//         console.error("No variants available for this product.");
//         alert("No variants available for this product.");
//       }
//     } catch (error) {
//       console.error("Failed to fetch product variants:", error);
//       alert("Error fetching product variants: " + error.message);
//     }
//   };

//   const addToCart = async (productVariantId) => {
//     const shoppingCartId = 17;
//     try {
//       const response = await axios.post(
//         `http://aqay.runasp.net/api/ShoppingCart/shoppingCartId/addProduct?shoppingCartId=${shoppingCartId}&productVariantId=${productVariantId}`
//       );
//       console.log("Product variant added to cart successfully", response.data);
//       alert("Product variant added to cart successfully");
//     } catch (error) {
//       console.error("Failed to add product variant to cart:", error);
//       alert(
//         "Failed to add product variant to cart: " +
//           (error.response ? error.response.data.message : error.message)
//       );
//     }
//   };

//   return (
//     <div className="relative bg-orange border rounded-lg shadow-md p-4 mb-4 flex">
//       <div className="w-1/4 flex justify-center items-center">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="max-w-full max-h-full"
//         />
//       </div>
//       <div className="w-3/4 relative p-4">
//         <Link
//           to={`/proudDetails`}
//           className="absolute top-2 right-2 text-xl text-red-500"
//         >
//           <FaExpandAlt />
//         </Link>
//         <div className="text-red-400 font-bold text-sm">{product.category}</div>
//         <div className="text-xl font-bold">{product.name}</div>
//         <div className="text-red-500 text-lg">${product.price}</div>
//         <div className="mt-2">
//           <span className="text-yellow-500">
//             {"★".repeat(product.rating)}
//             {"☆".repeat(5 - product.rating)}
//           </span>
//           <span className="text-gray-500 text-sm ml-2">
//             ({product.reviews} Reviews)
//           </span>
//         </div>
//         <div className="mt-4 flex items-center">
//           <button
//             className="text-3xl text-red-500 mr-4"
//             onClick={() => console.log("Add to wishlist not implemented")}
//           >
//             <CiHeart />
//           </button>
//           <button
//             className="flex items-center bg-red-500 text-white px-4 py-2 rounded"
//             onClick={() => handleAddToCart(product.id)}
//           >
//             <FaShoppingCart />
//             <span className="ml-2">ADD TO CART</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductB;

//this

import React from "react";
import axios from "axios";
import { FaExpandAlt, FaShoppingCart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const ProductB = ({ product }) => {
  const handleAddToCart = async (productId) => {
    try {
      const variantsResponse = await axios.get(
        `http://aqay.runasp.net/api/Products/variants?productId=${productId}`
      );
      if (
        variantsResponse.data.$values &&
        variantsResponse.data.$values.length > 0
      ) {
        const firstVariantId = variantsResponse.data.$values[0].id;
        console.log("First variant ID: ", firstVariantId);
        await addToCart(firstVariantId);
      } else {
        console.error("No variants available for this product.");
        alert("No variants available for this product.");
      }
    } catch (error) {
      console.error("Failed to fetch product variants:", error);
      alert("Error fetching product variants: " + error.message);
    }
  };

  const addToCart = async (productVariantId) => {
    const shoppingCartId = 17;
    try {
      const response = await axios.post(
        `http://aqay.runasp.net/api/ShoppingCart/shoppingCartId/addProduct?shoppingCartId=${shoppingCartId}&productVariantId=${productVariantId}`
      );
      console.log("Product variant added to cart successfully", response.data);
      alert("Product variant added to cart successfully");
    } catch (error) {
      console.error("Failed to add product variant to cart:", error);
      alert(
        "Failed to add product variant to cart: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };

  const handleAddToWishlist = async (productId) => {
    try {
      const variantsResponse = await axios.get(
        `http://aqay.runasp.net/api/Products/variants?productId=${productId}`
      );
      if (
        variantsResponse.data.$values &&
        variantsResponse.data.$values.length > 0
      ) {
        const firstVariantId = variantsResponse.data.$values[0].id;
        console.log("First variant ID for wishlist: ", firstVariantId);
        await addToWishlist(firstVariantId);
      } else {
        console.error("No variants available for this product.");
        alert("No variants available for this product.");
      }
    } catch (error) {
      console.error("Failed to fetch product variants:", error);
      alert("Error fetching product variants: " + error.message);
    }
  };

  const addToWishlist = async (productVariantId) => {
    try {
      const response = await axios.post(
        `http://aqay.runasp.net/api/WishList/addProduct?id=1&productVariantId=${productVariantId}`
      );
      console.log(
        "Product variant added to wishlist successfully",
        response.data
      );
      alert("Product variant added to wishlist successfully");
    } catch (error) {
      console.error("Failed to add product variant to wishlist:", error);
      alert(
        "Failed to add product variant to wishlist: " +
          (error.response ? error.response.data.message : error.message)
      );
    }
  };

  return (
    <div className="relative bg-orange border rounded-lg shadow-md p-4 mb-4 flex">
      <div className="w-1/4 flex justify-center items-center">
        <img
          src={product.image}
          alt={product.name}
          className="max-w-full max-h-full"
        />
      </div>
      <div className="w-3/4 relative p-4">
        <Link
          to={`/proudDetails`}
          className="absolute top-2 right-2 text-xl text-red-500"
        >
          <FaExpandAlt />
        </Link>
        <div className="text-red-400 font-bold text-sm">{product.category}</div>
        <div className="text-xl font-bold">{product.name}</div>
        <div className="text-red-500 text-lg">${product.price}</div>
        <div className="mt-2">
          <span className="text-yellow-500">
            {"★".repeat(product.rating)}
            {"☆".repeat(5 - product.rating)}
          </span>
          <span className="text-gray-500 text-sm ml-2">
            ({product.reviews} Reviews)
          </span>
        </div>
        <div className="mt-4 flex items-center">
          <button
            className="text-3xl text-red-500 mr-4"
            onClick={() => handleAddToWishlist(product.id)}
          >
            <CiHeart />
          </button>
          <button
            className="flex items-center bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => handleAddToCart(product.id)}
          >
            <FaShoppingCart />
            <span className="ml-2">ADD TO CART</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductB;
