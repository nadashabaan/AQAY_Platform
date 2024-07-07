import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "../constants/themeConstants";
import { ImSun } from "react-icons/im";
import { CgMoon } from "react-icons/cg";
import { useParams } from "react-router-dom";
import image from "../assets/Images/image.png";
import "../CSS/EditProduct.css";

const EditProduct = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [product, setProduct] = useState(null);
  const [variations, setVariations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingVariation, setEditingVariation] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    if (theme === DARK_THEME) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  useEffect(() => {
    // Simulate fetching product and variations data
    const demoProduct = {
      id: productId,
      name: "Giraffe Crochet Toy",
      price: "29.99",
      category: "Handmade",
      description: "A cute handmade giraffe crochet toy.",
    };
    const demoVariations = [
      {
        id: 1,
        size: "Small",
        color: "Yellow",
        quantity: 10,
        image: "https://example.com/image1.jpg",
      },
      {
        id: 2,
        size: "Medium",
        color: "Yellow",
        quantity: 15,
        image: "https://example.com/image2.jpg",
      },
      {
        id: 3,
        size: "Large",
        color: "Yellow",
        quantity: 5,
        image: "https://example.com/image3.jpg",
      },
    ];

    setProduct(demoProduct);
    setVariations(demoVariations);
    setLoading(false);
  }, [productId]);

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleVariationChange = (index, e) => {
    const { name, value } = e.target;
    const updatedVariations = [...variations];
    updatedVariations[index] = { ...updatedVariations[index], [name]: value };
    setVariations(updatedVariations);
  };

  const handleVariationImageChange = (index, e) => {
    const file = e.target.files[0];
    const updatedVariations = [...variations];
    updatedVariations[index] = {
      ...updatedVariations[index],
      image: URL.createObjectURL(file),
    };
    setVariations(updatedVariations);
  };

  const handleSaveProduct = () => {
    console.log("Product updated:", product);
    alert("Product updated successfully");
  };

  const handleSaveVariation = (index) => {
    const variation = variations[index];
    console.log("Variation updated:", variation);
    alert("Variation updated successfully");
  };

  const handleRemoveVariation = (index) => {
    const variation = variations[index];
    console.log("Variation removed:", variation);
    setVariations(variations.filter((_, i) => i !== index));
    alert("Variation removed successfully");
  };

  return (
    <>
      <button type="button" className="theme-toggle-btn" onClick={toggleTheme}>
        {theme === LIGHT_THEME ? (
          <ImSun className="theme-icon" />
        ) : (
          <CgMoon className="theme-icon" />
        )}
      </button>

      {loading ? (
        <p className="text-center mt-20 text-lg text-gray-600">Loading...</p>
      ) : (
        <div className="add-product-container">
          <h2 className="add-product-title">Edit Product</h2>
          <div className="add-product-form">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleProductChange}
            />
            <label>Product Price</label>
            <input
              type="text"
              name="price"
              value={product.price}
              onChange={handleProductChange}
            />
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleProductChange}
            />
            <label>Description</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleProductChange}
            />
            <button onClick={handleSaveProduct} className="save-product-btn">
              Save Product
            </button>
          </div>

          <h3 className="add-product-title">Product Variations</h3>
          {variations.map((variation, index) => (
            <div key={variation.id} className="variation-form p-4 mb-4 ">
              {editingVariation === index ? (
                <>
                  <div className="space-y-2">
                    <div>
                      <label>Size</label>
                      <input
                        type="text"
                        name="size"
                        value={variation.size}
                        onChange={(e) => handleVariationChange(index, e)}
                      />
                    </div>
                    <div>
                      <label>Color</label>
                      <input
                        type="text"
                        name="color"
                        value={variation.color}
                        onChange={(e) => handleVariationChange(index, e)}
                      />
                    </div>
                    <div>
                      <label>Quantity</label>
                      <input
                        type="number"
                        name="quantity"
                        value={variation.quantity}
                        onChange={(e) => handleVariationChange(index, e)}
                      />
                    </div>
                    <div>
                      <label>Image</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleVariationImageChange(index, e)}
                      />
                      {variation.image && (
                        <img
                          src={image}
                          alt={`Variation ${index}`}
                          className="uploaded-image mt-2"
                        />
                      )}
                    </div>
                  </div>
                  <div className="button-group mt-4">
                    <button
                      onClick={() => handleSaveVariation(index)}
                      className="product-btn"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingVariation(null)}
                      className="product-btn discard-btn"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <p>Size: {variation.size}</p>
                      <p>Color: {variation.color}</p>
                      <p>Quantity: {variation.quantity}</p>
                      {variation.image && (
                        <img
                          src={variation.image}
                          alt={`Variation ${index}`}
                          className="uploaded-image mt-2"
                        />
                      )}
                    </div>
                  </div>
                  <div className="button-group mt-4">
                    <button
                      onClick={() => setEditingVariation(index)}
                      className="product-btn"
                    >
                      Edit
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default EditProduct;

// import React, { useContext, useEffect, useState } from "react";
// import { ThemeContext } from "../context/ThemeContext";
// import { DARK_THEME, LIGHT_THEME } from "../constants/themeConstants";
// import { ImSun } from "react-icons/im";
// import { CgMoon } from "react-icons/cg";
// import { useParams } from "react-router-dom";
// import image from "../assets/Images/image.png";
// import "../CSS/EditProduct.css";
// import axios from "axios";

// const EditProduct = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const [product, setProduct] = useState(null);
//   const [variations, setVariations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [editingVariation, setEditingVariation] = useState(null);

//   useEffect(() => {
//     if (theme === DARK_THEME) {
//       document.body.classList.add("dark-mode");
//     } else {
//       document.body.classList.remove("dark-mode");
//     }
//   }, [theme]);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(
//           `http://aqay.runasp.net/api/Products/id?id=${productId}`
//         );
//         const productData = response.data;
//         const variationsData = productData.productVariants.$values.map(
//           (variant) => ({
//             id: variant.id,
//             size: variant.size,
//             color: variant.color,
//             quantity: variant.quantity,
//             image: variant.imageUrl,
//           })
//         );

//         setProduct({
//           id: productData.id,
//           name: productData.name,
//           price: productData.price,
//           category: productData.categoryId,
//           description: productData.description,
//         });

//         setVariations(variationsData);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching product details:", error);
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   const handleProductChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleVariationChange = (index, e) => {
//     const { name, value } = e.target;
//     const updatedVariations = [...variations];
//     updatedVariations[index] = { ...updatedVariations[index], [name]: value };
//     setVariations(updatedVariations);
//   };

//   const handleVariationImageChange = (index, e) => {
//     const file = e.target.files[0];
//     const updatedVariations = [...variations];
//     updatedVariations[index] = {
//       ...updatedVariations[index],
//       image: URL.createObjectURL(file),
//     };
//     setVariations(updatedVariations);
//   };

//   const handleSaveProduct = async () => {
//     try {
//       await axios.put(`http://aqay.runasp.net/api/Products?id=${product.id}`, {
//         name: product.name,
//         price: product.price,
//         description: product.description,
//         categoryId: product.category,
//         brandId: product.brandId,
//         tagName: product.tags.map((tag) => tag.name),
//       });

//       alert("Product updated successfully");
//     } catch (error) {
//       console.error("Error updating product:", error);
//       alert("Failed to update product. Please try again.");
//     }
//   };

//   const handleSaveVariation = async (index) => {
//     const variation = variations[index];
//     try {
//       await axios.put(
//         `http://aqay.runasp.net/api/ProductVariants?id=${variation.id}`,
//         variation
//       );
//       alert("Variation updated successfully");
//     } catch (error) {
//       console.error("Error updating variation:", error);
//       alert("Failed to update variation. Please try again.");
//     }
//   };

//   const handleRemoveVariation = (index) => {
//     const variation = variations[index];
//     console.log("Variation removed:", variation);
//     setVariations(variations.filter((_, i) => i !== index));
//     alert("Variation removed successfully");
//   };

//   return (
//     <>
//       <button type="button" className="theme-toggle-btn" onClick={toggleTheme}>
//         {theme === LIGHT_THEME ? (
//           <ImSun className="theme-icon" />
//         ) : (
//           <CgMoon className="theme-icon" />
//         )}
//       </button>

//       {loading ? (
//         <p className="text-center mt-20 text-lg text-gray-600">Loading...</p>
//       ) : (
//         <div className="add-product-container">
//           <h2 className="add-product-title">Edit Product</h2>
//           <div className="add-product-form">
//             <label>Product Name</label>
//             <input
//               type="text"
//               name="name"
//               value={product.name}
//               onChange={handleProductChange}
//             />
//             <label>Product Price</label>
//             <input
//               type="text"
//               name="price"
//               value={product.price}
//               onChange={handleProductChange}
//             />
//             <label>Category</label>
//             <input
//               type="text"
//               name="category"
//               value={product.category}
//               onChange={handleProductChange}
//             />
//             <label>Description</label>
//             <textarea
//               name="description"
//               value={product.description}
//               onChange={handleProductChange}
//             />
//             <button onClick={handleSaveProduct} className="save-product-btn">
//               Save Product
//             </button>
//           </div>

//           <h3 className="add-product-title">Product Variations</h3>
//           {variations.map((variation, index) => (
//             <div key={variation.id} className="variation-form p-4 mb-4 ">
//               {editingVariation === index ? (
//                 <>
//                   <div className="space-y-2">
//                     <div>
//                       <label>Size</label>
//                       <input
//                         type="text"
//                         name="size"
//                         value={variation.size}
//                         onChange={(e) => handleVariationChange(index, e)}
//                       />
//                     </div>
//                     <div>
//                       <label>Color</label>
//                       <input
//                         type="text"
//                         name="color"
//                         value={variation.color}
//                         onChange={(e) => handleVariationChange(index, e)}
//                       />
//                     </div>
//                     <div>
//                       <label>Quantity</label>
//                       <input
//                         type="number"
//                         name="quantity"
//                         value={variation.quantity}
//                         onChange={(e) => handleVariationChange(index, e)}
//                       />
//                     </div>
//                     <div>
//                       <label>Image</label>
//                       <input
//                         type="file"
//                         accept="image/*"
//                         onChange={(e) => handleVariationImageChange(index, e)}
//                       />
//                       {variation.image && (
//                         <img
//                           src={image}
//                           alt={`Variation ${index}`}
//                           className="uploaded-image mt-2"
//                         />
//                       )}
//                     </div>
//                   </div>
//                   <div className="button-group mt-4">
//                     <button
//                       onClick={() => handleSaveVariation(index)}
//                       className="product-btn"
//                     >
//                       Save
//                     </button>
//                     <button
//                       onClick={() => setEditingVariation(null)}
//                       className="product-btn discard-btn"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <div className="flex space-x-4">
//                     <div className="flex-1">
//                       <p>Size: {variation.size}</p>
//                       <p>Color: {variation.color}</p>
//                       <p>Quantity: {variation.quantity}</p>
//                       {variation.image && (
//                         <img
//                           src={variation.image}
//                           alt={`Variation ${index}`}
//                           className="uploaded-image mt-2"
//                         />
//                       )}
//                     </div>
//                   </div>
//                   <div className="button-group mt-4">
//                     <button
//                       onClick={() => setEditingVariation(index)}
//                       className="product-btn"
//                     >
//                       Edit
//                     </button>
//                   </div>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default EditProduct;
