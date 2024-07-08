// // // import React, { useState } from "react";
// // // import CartItem from "./CartItem";
// // // import AddressModal from "./AddressModal";
// // // import "../CSS/Cart.css";

// // // const initialCartItems = [
// // //   {
// // //     id: 1,
// // //     image: "https://via.placeholder.com/150",
// // //     color: "Red",
// // //     size: "M",
// // //     quantity: 2,
// // //     price: 20,
// // //     total: 40,
// // //   },
// // //   {
// // //     id: 2,
// // //     image: "https://via.placeholder.com/150",
// // //     color: "Blue",
// // //     size: "L",
// // //     quantity: 1,
// // //     price: 25,
// // //     total: 25,
// // //   },
// // // ];

// // // const ShoppingCart = () => {
// // //   const [cartItems, setCartItems] = useState(initialCartItems);
// // //   const [isModalOpen, setIsModalOpen] = useState(false);

// // //   const handleRemoveItem = (id) => {
// // //     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
// // //   };

// // //   const totalAmount = cartItems.reduce((total, item) => total + item.total, 0);

// // //   const handleConfirm = () => {
// // //     setIsModalOpen(true);
// // //   };

// // //   const handleModalSubmit = (address, promoCode) => {
// // //     setIsModalOpen(false);
// // //     alert(
// // //       `Your order confirmed successfully.\nYou can track it through order history.\nDelivery Address: ${address}\nPromo Code: ${promoCode}`
// // //     );
// // //   };

// // //   return (
// // //     <div className="container-cart mx-auto p-4 min-h-screen flex flex-col mt-16">
// // //       <div className="flex justify-center mb-4">
// // //         <h1 className="text-center text-2xl font-bold text-gray-800">
// // //           Your Shopping Cart has{" "}
// // //           <span className="text-orange-500">{cartItems.length}</span> items
// // //         </h1>
// // //       </div>
// // //       <div className="content-cart-table flex-grow flex justify-center items-center">
// // //         <div className="data-CartTable-diagram w-full max-w-8xl">
// // //           <table className="min-w-full bg-orange shadow-lg rounded-lg">
// // //             <thead>
// // //               <tr className="bg-orange-300 text-center text-sm leading-normal text-gray-600">
// // //                 <th className="p-4">Image</th>
// // //                 <th className="p-4">Color</th>
// // //                 <th className="p-4">Size</th>
// // //                 <th className="p-4">Price</th>
// // //                 <th className="p-4"> </th>
// // //               </tr>
// // //             </thead>
// // //             <tbody className="text-sm font-light text-gray-600">
// // //               {cartItems.map((item) => (
// // //                 <CartItem
// // //                   key={item.id}
// // //                   item={item}
// // //                   onRemoveItem={handleRemoveItem}
// // //                 />
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //           <div className="flex justify-between items-center mt-4 p-4 bg-orange shadow-lg rounded-lg">
// // //             <div className="text-lg font-bold">Total: ${totalAmount}</div>
// // //             <div className="space-x-2">
// // //               <button className="bg-gray-500 text-white px-4 py-2 rounded">
// // //                 Cancel
// // //               </button>
// // //               <button
// // //                 onClick={handleConfirm}
// // //                 className="bg-orange-500 text-white px-4 py-2 rounded"
// // //               >
// // //                 Confirm
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <AddressModal
// // //         isOpen={isModalOpen}
// // //         onClose={() => setIsModalOpen(false)}
// // //         onSubmit={handleModalSubmit}
// // //       />
// // //     </div>
// // //   );
// // // };

// // // export default ShoppingCart;
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";
// // import CartItem from "./CartItem";
// // import AddressModal from "./AddressModal";
// // import "../CSS/Cart.css";

// // const ShoppingCart = () => {
// //   const [cartItems, setCartItems] = useState([]);
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   useEffect(() => {
// //     const fetchCartItems = async () => {
// //       try {
// //         const response = await axios.get(
// //           "http://aqay.runasp.net/api/ShoppingCart/shoppingCartId/variants?shoppingCartId=16"
// //         );
// //         setCartItems(
// //           response.data.map((item) => ({
// //             id: item.id,
// //             productId: item.productId, // Assuming the API returns a variantId
// //             image: item.imageUrl, // Assuming the API returns an imageUrl
// //             color: item.color, // Customize these fields based on actual API response
// //             size: item.size,
// //             price: item.price,
// //           }))
// //         );
// //       } catch (error) {
// //         console.error("Failed to fetch cart items:", error);
// //       }
// //     };

// //     fetchCartItems();
// //   }, []);

// //   const handleRemoveItem = (id) => {
// //     setCartItems(cartItems.filter((item) => item.id !== id));
// //   };

// //   const totalAmount = cartItems.reduce((total, item) => total + item.total, 0);

// //   const handleConfirm = () => {
// //     setIsModalOpen(true);
// //   };

// //   const handleModalSubmit = (address, promoCode) => {
// //     setIsModalOpen(false);
// //     alert(
// //       `Your order confirmed successfully.\nYou can track it through order history.\nDelivery Address: ${address}\nPromo Code: ${promoCode}`
// //     );
// //   };

// //   return (
// //     <div className="container-cart mx-auto p-4 min-h-screen flex flex-col mt-16">
// //       <div className="flex justify-center mb-4">
// //         <h1 className="text-center text-2xl font-bold text-gray-800">
// //           Your Shopping Cart has{" "}
// //           <span className="text-orange-500">{cartItems.length}</span> items
// //         </h1>
// //       </div>
// //       <div className="content-cart-table flex-grow flex justify-center items-center">
// //         <div className="data-CartTable-diagram w-full max-w-8xl">
// //           <table className="min-w-full bg-orange shadow-lg rounded-lg">
// //             <thead>
// //               <tr className="bg-orange-300 text-center text-sm leading-normal text-gray-600">
// //                 <th className="p-4">Image</th>
// //                 <th className="p-4">Color</th>
// //                 <th className="p-4">Size</th>
// //                 <th className="p-4">Price</th>
// //                 <th className="p-4"> </th>
// //               </tr>
// //             </thead>
// //             <tbody className="text-sm font-light text-gray-600">
// //               {cartItems.map((item) => (
// //                 <CartItem
// //                   key={item.id}
// //                   item={item}
// //                   onRemoveItem={handleRemoveItem}
// //                 />
// //               ))}
// //             </tbody>
// //           </table>
// //           <div className="flex justify-between items-center mt-4 p-4 bg-orange shadow-lg rounded-lg">
// //             <div className="text-lg font-bold">Total: ${totalAmount}</div>
// //             <div className="space-x-2">
// //               <button className="bg-gray-500 text-white px-4 py-2 rounded">
// //                 Cancel
// //               </button>
// //               <button
// //                 onClick={handleConfirm}
// //                 className="bg-orange-500 text-white px-4 py-2 rounded"
// //               >
// //                 Confirm
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <AddressModal
// //         isOpen={isModalOpen}
// //         onClose={() => setIsModalOpen(false)}
// //         onSubmit={handleModalSubmit}
// //       />
// //     </div>
// //   );
// // };

// // export default ShoppingCart;

/*import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import axios from "axios";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const shoppingCartId = 14; // example shopping cart ID

  useEffect(() => {
    // Fetch cart items when component mounts
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    // Fetch the cart items from the API and set the state
    // Example:
    // const response = await axios.get('/api/ShoppingCart/items');
    // setCartItems(response.data);
  };

 

  return (
    <table>
      <tbody>
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            shoppingCartId={shoppingCartId}
            onRemoveItem={handleRemoveItem}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ShoppingCart;*/

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import CartItem from "./CartItem";
// import AddressModal from "./AddressModal";
// import "../CSS/Cart.css";

// const ShoppingCart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await axios.get(
//           "http://aqay.runasp.net/api/ShoppingCart/shoppingCartId/variants?shoppingCartId=14"
//         );
//         if (response.data.$values && Array.isArray(response.data.$values)) {
//           const formattedItems = response.data.$values.map((item) => ({
//             id: item.id,
//             image: item.imageUrl,
//             color: item.color,
//             size: item.size,
//             price: item.price,
//           }));
//           setCartItems(formattedItems);
//         } else {
//           console.error(
//             "Data fetched is not in expected format:",
//             response.data
//           );
//         }
//       } catch (error) {
//         console.error("Failed to fetch cart items:", error);
//       }
//     };

//     fetchCartItems();
//   }, []);

//   const handleRemoveItem = async (shoppingCartId, productVariantId) => {
//     try {
//       const url =
//         "http://aqay.runasp.net/api/ShoppingCart/shoppingCartId/removeProduct?shoppingCartId=${shoppingCartId}&productVariantId=${productVariantId}";

//       const response = await axios.post(url);
//       console.log("Response from API:", response.data);
//       if (response.data === true) {
//         alert("Item removed successfully!");
//         fetchCartItems();
//       } else {
//         alert("Failed to remove the item from the cart.");
//       }
//     } catch (error) {
//       console.error("Error removing item from the cart:", error);
//       alert(
//         "There was an error while trying to remove the item from the cart."
//       );
//     }
//   };
//   const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

//   const handleConfirm = () => {
//     setIsModalOpen(true);
//   };

//   const handleModalSubmit = (address, promoCode) => {
//     setIsModalOpen(false);
//     alert(
//       `Your order confirmed successfully.\nYou can track it through order history.\nDelivery Address: ${address}\nPromo Code: ${promoCode}`
//     );
//   };

//   return (
//     <div className="container-cart mx-auto p-4 min-h-screen flex flex-col mt-16">
//       <div className="flex justify-center mb-4">
//         <h1 className="text-center text-2xl font-bold text-gray-800">
//           Your Shopping Cart has{" "}
//           <span className="text-orange-500">{cartItems.length}</span> items
//         </h1>
//       </div>
//       <div className="content-cart-table flex-grow flex justify-center items-center">
//         <div className="data-CartTable-diagram w-full max-w-8xl">
//           <table className="min-w-full bg-orange shadow-lg rounded-lg">
//             <thead>
//               <tr className="bg-orange-300 text-center text-sm leading-normal text-gray-600">
//                 <th className="p-4">Image</th>
//                 <th className="p-4">Color</th>
//                 <th className="p-4">Size</th>
//                 <th className="p-4">Price</th>
//                 <th className="p-4"> </th>
//               </tr>
//             </thead>
//             <tbody className="text-sm font-light text-gray-600">
//               {cartItems.map((item) => (
//                 <CartItem
//                   key={item.id}
//                   item={item}
//                   shoppingCartId={shoppingCartId}
//                   onRemoveItem={handleRemoveItem}
//                 />
//               ))}
//             </tbody>
//           </table>
//           <div className="flex justify-between items-center mt-4 p-4 bg-orange shadow-lg rounded-lg">
//             <div className="text-lg font-bold">Total: ${totalAmount}</div>
//             <div className="space-x-2">
//               <button className="bg-gray-500 text-white px-4 py-2 rounded">
//                 Cancel
//               </button>
//               <button
//                 onClick={handleConfirm}
//                 className="bg-orange-500 text-white px-4 py-2 rounded"
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <AddressModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onSubmit={handleModalSubmit}
//       />
//     </div>
//   );
// };

// export default ShoppingCart;
// the latest

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import CartItem from "./CartItem";
// import AddressModal from "./AddressModal";
// import "../CSS/Cart.css";

// const ShoppingCart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const shoppingCartId = 17;

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       try {
//         const response = await axios.get(
//           `http://aqay.runasp.net/api/ShoppingCart/shoppingCartId/variants?shoppingCartId=${shoppingCartId}`
//         );
//         if (response.data.$values && Array.isArray(response.data.$values)) {
//           const formattedItems = response.data.$values.map((item) => ({
//             id: item.id,
//             image: item.imageUrl,
//             color: item.color,
//             size: item.size,
//             price: item.price,
//           }));
//           setCartItems(formattedItems);
//         } else {
//           console.error(
//             "Data fetched is not in expected format:",
//             response.data
//           );
//         }
//       } catch (error) {
//         console.error("Failed to fetch cart items:", error);
//       }
//     };

//     fetchCartItems();
//   }, [shoppingCartId]);

//   const handleRemoveItem = async (shoppingCartId, productVariantId) => {
//     try {
//       const url = `http://aqay.runasp.net/api/ShoppingCart/shoppingCartId/removeProduct?shoppingCartId=${shoppingCartId}&productVariantId=${productVariantId}`;

//       const response = await axios.post(url);
//       console.log("Response from API:", response.data);
//       if (response.data === true) {
//         alert("Item removed successfully!");
//         fetchCartItems();
//       } else {
//         alert("Failed to remove the item from the cart.");
//       }
//     } catch (error) {
//       console.error("Error removing item from the cart:", error);
//       alert(
//         "There was an error while trying to remove the item from the cart."
//       );
//     }
//   };

//   const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

//   const handleConfirm = () => {
//     setIsModalOpen(true);
//   };

//   const handleModalSubmit = (address, promoCode) => {
//     setIsModalOpen(false);
//     alert(
//       `Your order confirmed successfully.\nYou can track it through order history.\nDelivery Address: ${address}\nPromo Code: ${promoCode}`
//     );
//   };

//   return (
//     <div className="container-cart mx-auto p-4 min-h-screen flex flex-col mt-16">
//       <div className="flex justify-center mb-4">
//         <h1 className="text-center text-2xl font-bold text-gray-800">
//           Your Shopping Cart has{" "}
//           <span className="text-orange-500">{cartItems.length}</span> items
//         </h1>
//       </div>
//       <div className="content-cart-table flex-grow flex justify-center items-center">
//         <div className="data-CartTable-diagram w-full max-w-8xl">
//           <table className="min-w-full bg-orange shadow-lg rounded-lg">
//             <thead>
//               <tr className="bg-orange-300 text-center text-sm leading-normal text-gray-600">
//                 <th className="p-4">Image</th>
//                 <th className="p-4">Color</th>
//                 <th className="p-4">Size</th>
//                 <th className="p-4">Price</th>
//                 <th className="p-4"> </th>
//               </tr>
//             </thead>
//             <tbody className="text-sm font-light text-gray-600">
//               {cartItems.map((item) => (
//                 <CartItem
//                   key={item.id}
//                   item={item}
//                   shoppingCartId={shoppingCartId}
//                   onRemoveItem={handleRemoveItem}
//                 />
//               ))}
//             </tbody>
//           </table>
//           <div className="flex justify-between items-center mt-4 p-4 bg-orange shadow-lg rounded-lg">
//             <div className="text-lg font-bold">Total: ${totalAmount}</div>
//             <div className="space-x-2">
//               <button className="bg-gray-500 text-white px-4 py-2 rounded">
//                 Cancel
//               </button>
//               <button
//                 onClick={handleConfirm}
//                 className="bg-orange-500 text-white px-4 py-2 rounded"
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <AddressModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onSubmit={handleModalSubmit}
//       />
//     </div>
//   );
// };

// export default ShoppingCart;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import CartItem from "./CartItem";
// import AddressModal from "./AddressModal";
// import "../CSS/Cart.css";

// const ShoppingCart = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const shoppingCartId = 17;

//   // Function to fetch cart items from the API
//   const fetchCartItems = async () => {
//     try {
//       console.log("Fetching cart items..."); // Debug log
//       const response = await axios.get(
//         `http://aqay.runasp.net/api/ShoppingCart/shoppingCartId/variants?shoppingCartId=${shoppingCartId}`
//       );
//       console.log("Response from fetchCartItems:", response.data); // Debug log

//       // Check if the response has the correct structure
//       if (response.data.$values && Array.isArray(response.data.$values)) {
//         console.log("API data structure is correct."); // Debug log
//         const formattedItems = response.data.$values.map((item) => {
//           // Log the item to inspect its structure
//           console.log("Item from API response:", item);

//           return {
//             id: item.productId, // Correctly map productId to id
//             image: item.imageUrl, // Make sure this matches the field in your API response
//             color: item.color,
//             size: item.size,
//             price: item.price,
//           };
//         });
//         console.log("Formatted cart items:", formattedItems); // Debug log
//         setCartItems(formattedItems);
//       } else {
//         console.error("Data fetched is not in expected format:", response.data);
//       }
//     } catch (error) {
//       console.error("Failed to fetch cart items:", error);
//     }
//   };

//   useEffect(() => {
//     fetchCartItems();
//   }, [shoppingCartId]);

//   // Function to handle item removal from the cart
//   const handleRemoveItem = async ({ shoppingCartId, productVariantId }) => {
//     console.log("Removing item with variant ID:", productVariantId); // Debug log
//     if (!productVariantId) {
//       console.error("productVariantId is undefined");
//       return;
//     }

//     try {
//       const url = `http://aqay.runasp.net/api/ShoppingCart/shoppingCartId/removeProduct?shoppingCartId=${shoppingCartId}&productVariantId=${productVariantId}`;
//       console.log("URL for remove item:", url); // Debug log

//       const response = await axios.post(url);
//       console.log("Response from remove item API:", response.data); // Debug log
//       if (response.data === true) {
//         alert("Item removed successfully!");
//         fetchCartItems(); // Call fetchCartItems again to update the cart
//       } else {
//         alert("Failed to remove the item from the cart.");
//       }
//     } catch (error) {
//       console.error("Error removing item from the cart:", error);
//       alert(
//         "There was an error while trying to remove the item from the cart."
//       );
//     }
//   };

//   // Calculate the total amount in the cart
//   const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

//   // Handle order confirmation
//   const handleConfirm = () => {
//     setIsModalOpen(true);
//   };

//   // Handle modal submission for address and promo code
//   const handleModalSubmit = (address, promoCode) => {
//     setIsModalOpen(false);
//     alert(
//       `Your order confirmed successfully.\nYou can track it through order history.\nDelivery Address: ${address}\nPromo Code: ${promoCode}`
//     );
//   };

//   return (
//     <div className="container-cart mx-auto p-4 min-h-screen flex flex-col mt-16">
//       <div className="flex justify-center mb-4">
//         <h1 className="text-center text-2xl font-bold text-gray-800">
//           Your Shopping Cart has{" "}
//           <span className="text-orange-500">{cartItems.length}</span> items
//         </h1>
//       </div>
//       <div className="content-cart-table flex-grow flex justify-center items-center">
//         <div className="data-CartTable-diagram w-full max-w-8xl">
//           <table className="min-w-full bg-orange shadow-lg rounded-lg">
//             <thead>
//               <tr className="bg-orange-300 text-center text-sm leading-normal text-gray-600">
//                 <th className="p-4">Image</th>
//                 <th className="p-4">Color</th>
//                 <th className="p-4">Size</th>
//                 <th className="p-4">Price</th>
//                 <th className="p-4"> </th>
//               </tr>
//             </thead>
//             <tbody className="text-sm font-light text-gray-600">
//               {cartItems.map((item) => (
//                 <CartItem
//                   key={item.id}
//                   item={item}
//                   shoppingCartId={shoppingCartId}
//                   onRemoveItem={handleRemoveItem}
//                 />
//               ))}
//             </tbody>
//           </table>
//           <div className="flex justify-between items-center mt-4 p-4 bg-orange shadow-lg rounded-lg">
//             <div className="text-lg font-bold">Total: ${totalAmount}</div>
//             <div className="space-x-2">
//               <button className="bg-gray-500 text-white px-4 py-2 rounded">
//                 Cancel
//               </button>
//               <button
//                 onClick={handleConfirm}
//                 className="bg-orange-500 text-white px-4 py-2 rounded"
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <AddressModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onSubmit={handleModalSubmit}
//       />
//     </div>
//   );
// };

// export default ShoppingCart;

import React, { useState, useEffect } from "react";
import axios from "axios";
import CartItem from "./CartItem";
import AddressModal from "./AddressModal";
import "../CSS/Cart.css";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const shoppingCartId = 17;

  // Function to fetch cart items from the API
  const fetchCartItems = async () => {
    try {
      console.log("Fetching cart items..."); // Debug log
      const response = await axios.get(
        `http://aqay.runasp.net/api/ShoppingCart/shoppingCartId/variants?shoppingCartId=${shoppingCartId}`
      );
      console.log("Response from fetchCartItems:", response.data); // Debug log

      // Check if the response has the correct structure
      if (response.data.$values && Array.isArray(response.data.$values)) {
        console.log("API data structure is correct."); // Debug log
        const formattedItems = response.data.$values.map((item) => {
          // Log the item to inspect its structure
          console.log("Item from API response:", item);

          return {
            id: item.productId, // Correctly map productId to id
            image: item.imageUrl, // Make sure this matches the field in your API response
            color: item.color,
            size: item.size,
            price: item.price,
          };
        });
        console.log("Formatted cart items:", formattedItems); // Debug log
        setCartItems(formattedItems);
      } else {
        console.error("Data fetched is not in expected format:", response.data);
      }
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, [shoppingCartId]);

  // Function to handle item removal from the cart
  const handleRemoveItem = async ({ shoppingCartId, productVariantId }) => {
    console.log("Removing item with variant ID:", productVariantId); // Debug log
    if (!productVariantId) {
      console.error("productVariantId is undefined");
      return;
    }

    try {
      const url = `http://aqay.runasp.net/api/ShoppingCart/shoppingCartId/removeProduct`;
      console.log("URL for remove item:", url); // Debug log

      const response = await axios.post(url, null, {
        params: { shoppingCartId, productVariantId },
      });
      console.log("Response from remove item API:", response.data); // Debug log
      if (response.data === true) {
        alert("Item removed successfully!");
        fetchCartItems(); // Call fetchCartItems again to update the cart
      } else {
        alert("Failed to remove the item from the cart.");
      }
    } catch (error) {
      console.error("Error removing item from the cart:", error);
      alert(
        "There was an error while trying to remove the item from the cart."
      );
    }
  };

  // Calculate the total amount in the cart
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  // Handle order confirmation
  const handleConfirm = () => {
    setIsModalOpen(true);
  };

  // Handle modal submission for address and promo code
  const handleModalSubmit = (address, promoCode) => {
    setIsModalOpen(false);
    alert(
      `Your order confirmed successfully.\nYou can track it through order history.\nDelivery Address: ${address}\nPromo Code: ${promoCode}`
    );
  };

  return (
    <div className="container-cart mx-auto p-4 min-h-screen flex flex-col mt-16">
      <div className="flex justify-center mb-4">
        <h1 className="text-center text-2xl font-bold text-gray-800">
          Your Shopping Cart has{" "}
          <span className="text-orange-500">{cartItems.length}</span> items
        </h1>
      </div>
      <div className="content-cart-table flex-grow flex justify-center items-center">
        <div className="data-CartTable-diagram w-full max-w-8xl">
          <table className="min-w-full bg-orange shadow-lg rounded-lg">
            <thead>
              <tr className="bg-orange-300 text-center text-sm leading-normal text-gray-600">
                <th className="p-4">Image</th>
                <th className="p-4">Color</th>
                <th className="p-4">Size</th>
                <th className="p-4">Price</th>
                <th className="p-4"> </th>
              </tr>
            </thead>
            <tbody className="text-sm font-light text-gray-600">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  shoppingCartId={shoppingCartId}
                  onRemoveItem={handleRemoveItem}
                />
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-4 p-4 bg-orange shadow-lg rounded-lg">
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
      <AddressModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
};

export default ShoppingCart;
