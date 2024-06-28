// import React from "react";

// const RelatedProducts = ({ relatedProducts }) => {
//   return (
//     <div className="mt-8">
//       <h2 className="text-2xl font-bold mb-4">Related Products</h2>
//       <div className="flex flex-wrap -mx-4">
//         {relatedProducts.map((product, index) => (
//           <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-4">
//             <div className="border rounded-lg overflow-hidden">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-bold mb-2">{product.name}</h3>
//                 <p className="text-gray-700 mb-2">${product.price}</p>
//                 <button className="bg-orange-500 text-white px-4 py-2 rounded">
//                   Add to Bag
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RelatedProducts;

import React from "react";

const RelatedProducts = ({ relatedProducts = [] }) => {
  if (!relatedProducts.length) {
    return null;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      <div className="flex flex-wrap -mx-4">
        {relatedProducts.map((product, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-4">
            <div className="border rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-2">${product.price}</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
