import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productDetails, setProductDetails] = useState({ productId: null });

  return (
    <ProductContext.Provider value={{ productDetails, setProductDetails }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
