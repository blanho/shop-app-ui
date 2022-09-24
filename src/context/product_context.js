import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducers/product_reducer";

import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "../actions";
const ProductContext = React.createContext();

const initialState = {
  isSidebarOpen: false,
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };
  return (
    <ProductContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
