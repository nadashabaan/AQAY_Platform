// import React from "react";

// const ProductImage = ({ images }) => {
//   return (
//     <div>
//       <img src={images[0]} alt="Product" className="w-full h-auto" />
//       <div className="flex mt-2">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Thumbnail ${index}`}
//             className="w-20 h-20 mr-2"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductImage;

import React from "react";

const ProductImage = ({ images = [] }) => {
  if (!images.length) {
    return <div>No images available.</div>;
  }

  return (
    <div>
      <img src={images[0]} alt="Product" className="w-full h-auto" />
      <div className="flex mt-2">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className="w-20 h-20 mr-2"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
