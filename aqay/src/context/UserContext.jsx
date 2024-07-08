import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext({
  user: null,
  setUser: () => {},
  brandId: null,
  setBrandId: () => {},
  productId: null,
  setProductId: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [brandId, setBrandId] = useState(null);
  const [productId, setProductId] = useState(null);

  const updateProductId = (newProductId) => {
    setProductId(newProductId);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        brandId,
        setBrandId,
        productId,
        setProductId: updateProductId,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
