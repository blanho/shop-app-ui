import React from "react";
import { useContext } from "react";

const initialState = {};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  return (
    <CartContext.Provider value="cart context">{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
