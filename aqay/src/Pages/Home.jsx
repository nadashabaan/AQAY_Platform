// // import React, { useState, useEffect } from "react";
// // import Navbar from "../component/Navbar";
// // import Footer from "../component/Footer";
// // import ProductB from "../component/ProductB";
// // import heroH from "../assets/Images/heroH.png";
// // import CategoryFilter from "../component/CategoryFilter";
// // import axios from "axios";

// // const Home = () => {
// //   const [products, setProducts] = useState([]);
// //   const [categoryMap, setCategoryMap] = useState({});
// //   const [selectedCategory, setSelectedCategory] = useState("All");

// //   useEffect(() => {
// //     fetchProducts();
// //   }, [selectedCategory]);

// //   const fetchProducts = async () => {
// //     const url = `http://aqay.runasp.net/api/Products${
// //       selectedCategory !== "All" ? `&category=${selectedCategory}` : ""
// //     }`;
// //     try {
// //       const { data } = await axios.get(url);
// //       const productData = data.items.$values.map(async (product) => {
// //         const category = await fetchCategoryName(product.products.categoryId);
// //         return {
// //           id: product.products.id,
// //           name: product.products.name,
// //           category: category,
// //           price: product.products.price,
// //           rating: product.products.rate,
// //           reviews: product.products.reviewCount,
// //           image:
// //             product.products.productVariants.$values.length > 0
// //               ? product.products.productVariants.$values[0].imageUrl
// //               : "https://via.placeholder.com/150x150?text=No+Image",
// //         };
// //       });
// //       Promise.all(productData).then((completed) => setProducts(completed));
// //     } catch (error) {
// //       console.error("Failed to fetch products:", error);
// //     }
// //   };

// //   const fetchCategoryName = async (categoryId) => {
// //     try {
// //       const response = await axios.get(
// //         `http://aqay.runasp.net/api/Categories/id?id=${categoryId}`
// //       );
// //       return response.data.name;
// //     } catch (error) {
// //       console.error("Error fetching category name:", error);
// //       return "Unknown";
// //     }
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <div className="flex justify-center items-center mt-8 mb-8">
// //         <img className="object-contain" src={heroH} alt="Hero Image" />
// //       </div>
// //       <CategoryFilter
// //         categories={Object.keys(categoryMap)}
// //         selectedCategory={selectedCategory}
// //         onCategoryChange={(e) => setSelectedCategory(e.target.value)}
// //       />
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// //         {products.map((product) => (
// //           <ProductB
// //             key={product.id}
// //             product={product}
// //             onRemove={() => console.log("Remove")}
// //             onExpand={() => console.log("Expand")}
// //             onAddToCart={() => console.log("Add to Cart")}
// //           />
// //         ))}
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // };

// // export default Home;

// import React, { useState, useEffect } from "react";
// import Navbar from "../component/Navbar";
// import Footer from "../component/Footer";
// import ProductB from "../component/ProductB";
// import heroH from "../assets/Images/heroH.png";
// import CategoryFilter from "../component/CategoryFilter";

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([
//     "All",
//     "Toys",
//     "Books",
//     "Games",
//   ]);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   useEffect(() => {
//     fetch("http://aqay.runasp.net/api/Products")
//       .then((response) => response.json())
//       .then((data) => {
//         const processedProducts = data.$values.map((item) => ({
//           id: item.products.id,
//           name: item.products.name,
//           category: item.products.categoryId.toString(), // Assuming categories are by ID
//           price: item.products.price,
//           rating: item.products.rate,
//           reviews: item.products.reviewCount,
//           image: item.products.productVariants.$values[0]?.imageUrl, // Use the first variant's image
//         }));
//         setProducts(processedProducts);
//       })
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   const filteredProducts = products.filter(
//     (product) =>
//       selectedCategory === "All" || product.category === selectedCategory
//   );

//   return (
//     <>
//       <Navbar />
//       <div className="flex justify-center items-center mt-8 mb-8">
//         <img className="object-contain" src={heroH} alt="Hero Image" />
//       </div>
//       <CategoryFilter
//         categories={categories}
//         selectedCategory={selectedCategory}
//         onCategoryChange={(e) => setSelectedCategory(e.target.value)}
//       />
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredProducts.map((product) => (
//           <ProductB
//             key={product.id}
//             product={product}
//             onRemove={() => console.log("Remove")}
//             onExpand={() => console.log("Expand")}
//             onAddToCart={() => console.log("Add to Cart")}
//           />
//         ))}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from "react";
// import Navbar from "../component/Navbar";
// import Footer from "../component/Footer";
// import ProductB from "../component/ProductB";
// import heroH from "../assets/Images/heroH.png";
// import CategoryFilter from "../component/CategoryFilter";

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [categoryNames, setCategoryNames] = useState({});
//   useEffect(() => {
//     fetch("http://aqay.runasp.net/api/Products")
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(
//           data.$values.map((item) => ({
//             id: item.products.id,
//             name: item.products.name,
//             categoryID: item.products.categoryId.toString(),
//             price: item.products.price,
//             rating: item.products.rate,
//             reviews: item.products.reviewCount,
//             image: item.products.productVariants.$values[0]?.imageUrl,
//           }))
//         );
//         return data.$values.map((item) => item.products.categoryId.toString());
//       })
//       .then((categoryIDs) => {
//         const uniqueCategoryIDs = Array.from(new Set(categoryIDs));
//         uniqueCategoryIDs.forEach((id) => {
//           if (!categoryNames[id]) {
//             fetch(`http://aqay.runasp.net/api/Categories/${id}`)
//               .then((response) => response.json())
//               .then((data) => {
//                 setCategoryNames((prev) => ({ ...prev, [id]: data.name }));
//               });
//           }
//         });
//       })
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="flex justify-center items-center mt-8 mb-8">
//         <img className="object-contain" src={heroH} alt="Hero Image" />
//       </div>
//       <CategoryFilter
//         categories={Object.values(categoryNames)}
//         selectedCategory={categoryNames["All"]}
//         onCategoryChange={(e) => setCategoryNames(e.target.value)}
//       />
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {products.map((product) => (
//           <ProductB
//             key={product.id}
//             product={{
//               ...product,
//               category: categoryNames[product.categoryID] || product.categoryID,
//             }}
//             onRemove={() => console.log("Remove")}
//             onExpand={() => console.log("Expand")}
//             onAddToCart={() => console.log("Add to Cart")}
//           />
//         ))}
//       </div>
//       <Footer />
//     </>
//   );
// };
// export default Home;

import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ProductB from "../component/ProductB";
import heroH from "../assets/Images/heroH.png";
import CategoryFilter from "../component/CategoryFilter";
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://aqay.runasp.net/api/Products")
      .then((response) => response.json())
      .then((data) => {
        const formattedProducts = data.$values.map((productEntry) => ({
          id: productEntry.products.id,
          name: productEntry.products.name,
          category: productEntry.products.categoryName || "Unknown",
          price: productEntry.products.price,
          rating: productEntry.products.rate,
          reviews: productEntry.products.reviewCount,
          image:
            productEntry.products.productVariants.$values[0]?.imageUrl ||
            "https://via.placeholder.com/150",
        }));
        setProducts(formattedProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory
  );

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center mt-8 mb-8">
        <img className="object-contain" src={heroH} alt="Hero Image" />
      </div>
      <div>
        <CategoryFilter
          onCategoryChange={setSelectedCategory}
          setProducts={setProducts}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductB
            key={product.id}
            product={product}
            onRemove={() => console.log("Remove")}
            onExpand={() => console.log("Expand")}
            onAddToCart={() => console.log("Add to Cart")}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
