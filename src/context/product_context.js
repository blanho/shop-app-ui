import React from "react";
import { useContext } from "react";

const initialState = {};

const ProductContext = React.createContext();

export const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value="product context">
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
