// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import ProductImage from "./ProductImage";
// import ProductInfo from "./ProductInfo";
// import Review from "./Review";
// import RelatedProducts from "./RelatedProducts";

// const ProductDetail = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     // Replace with your API endpoint
//     fetch(`YOUR_API_ENDPOINT/products/${productId}`)
//       .then((response) => response.json())
//       .then((data) => setProduct(data))
//       .catch((error) => console.error("Error fetching product:", error));
//   }, [productId]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex flex-wrap -mx-4">
//         <div className="w-full lg:w-1/2 px-4">
//           <ProductImage images={product.images} />
//         </div>
//         <div className="w-full lg:w-1/2 px-4">
//           <ProductInfo product={product} />
//         </div>
//       </div>
//       <Review reviews={product.reviews} />
//       <RelatedProducts relatedProducts={product.relatedProducts} />
//     </div>
//   );
// };

// export default ProductDetail;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import ProductImage from "./ProductImage";
// import ProductInfo from "./ProductInfo";
// import ProductReviews from "./ProductReviews";
// import RelatedProducts from "./RelatedProducts";

// const ProductDetail = () => {
//   const { productId } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     // Dummy data for testing
//     const dummyProduct = {
//       id: productId,
//       name: "Tiger Crochet Toy",
//       originalPrice: "16.99",
//       price: "14.99",
//       description:
//         "Handmade Tiger Dolls, Handmade Doll Toys, Crochet Tiger Doll with Detachable Clothes, Knitted Tiger Handcrafted Dolls for Gifts",
//       size: "11.8x5.9x4.3inch",
//       stock: 243,
//       images: ["https://via.placeholder.com/400x400?text=Main+Image"],
//       reviews: [
//         {
//           rating: 5,
//           comment: "Great product! My kid loves it.",
//           date: "2023-02-13",
//           user: "Neda",
//         },
//         {
//           rating: 4,
//           comment: "Very well made, but a bit pricey.",
//           date: "2023-05-15",
//           user: "Rana",
//         },
//         {
//           rating: 5,
//           comment: "Perfect gift for my nephew.",
//           date: "2023-03-23",
//           user: "Esraa",
//         },
//       ],
//       relatedProducts: [
//         {
//           name: "Bear Crochet Toy",
//           price: "19.99",
//           image: "https://via.placeholder.com/150x150?text=Related+1",
//         },
//         {
//           name: "Rabbit Crochet Toy",
//           price: "12.99",
//           image: "https://via.placeholder.com/150x150?text=Related+2",
//         },
//         {
//           name: "Deer Crochet Toy",
//           price: "15.99",
//           image: "https://via.placeholder.com/150x150?text=Related+3",
//         },
//         {
//           name: "Crocodile Crochet Toy",
//           price: "24.99",
//           image: "https://via.placeholder.com/150x150?text=Related+4",
//         },
//       ],
//     };

//     setProduct(dummyProduct);

//     // Uncomment and replace with your API endpoint when ready
//     /*
//     fetch(`YOUR_API_ENDPOINT/products/${productId}`)
//       .then(response => response.json())
//       .then(data => setProduct(data))
//       .catch(error => console.error('Error fetching product:', error));
//     */
//   }, [productId]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex flex-wrap -mx-4">
//         <div className="w-full lg:w-1/2 px-4">
//           <ProductImage images={product.images || []} />
//         </div>
//         <div className="w-full lg:w-1/2 px-4">
//           <ProductInfo product={product} />
//         </div>
//       </div>
//       <ProductReviews reviews={product.reviews || []} />
//       <RelatedProducts relatedProducts={product.relatedProducts || []} />
//     </div>
//   );
// };

// export default ProductDetail;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductReviews from "./ProductReviews";
import RelatedProducts from "./RelatedProducts";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const dummyProduct = {
      id: productId,
      name: "Tiger Crochet Toy",
      category: "Toys",
      price: "14.99",
      description:
        "Handmade Tiger Dolls, Handmade Doll Toys, Crochet Tiger Doll with Detachable Clothes, Knitted Tiger Handcrafted Dolls for Gifts",
      size: "11.8x5.9x4.3inch",
      color: "Orange",
      brand_name: "COCO",
      stock: 243,
      images: ["https://via.placeholder.com/400x400?text=Main+Image"],
      reviews: [
        {
          rating: 5,
          comment: "Great product! My kid loves it.",
          date: "2023-02-13",
          user: "Neda",
        },
        {
          rating: 4,
          comment: "Very well made, but a bit pricey.",
          date: "2023-05-15",
          user: "Rana",
        },
        {
          rating: 5,
          comment: "Perfect gift for my nephew.",
          date: "2023-03-23",
          user: "Esraa",
        },
      ],
      relatedProducts: [
        {
          name: "Bear Crochet Toy",
          price: "19.99",
          image: "https://via.placeholder.com/150x150?text=Related+1",
        },
        {
          name: "Rabbit Crochet Toy",
          price: "12.99",
          image: "https://via.placeholder.com/150x150?text=Related+2",
        },
        {
          name: "Deer Crochet Toy",
          price: "15.99",
          image: "https://via.placeholder.com/150x150?text=Related+3",
        },
        {
          name: "Crocodile Crochet Toy",
          price: "24.99",
          image: "https://via.placeholder.com/150x150?text=Related+4",
        },
      ],
    };

    setProduct(dummyProduct);

    // Uncomment and replace with your API endpoint when ready
    /*
    fetch(`YOUR_API_ENDPOINT/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
    */
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4">
          <ProductImage images={product.images || []} />
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <ProductInfo product={product} />
        </div>
      </div>
      <ProductReviews reviews={product.reviews || []} />
      <RelatedProducts relatedProducts={product.relatedProducts || []} />
    </div>
  );
};

export default ProductDetail;
