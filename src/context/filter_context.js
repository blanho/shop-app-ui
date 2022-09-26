import React, { useEffect, useReducer } from "react";
import { useContext } from "react";
import { LOAD_PRODUCTS } from "../actions";
import reducer from "../reducers/filter_reducer";
import { useProductContext } from "./product_context";

const initialState = {
  filtered_products: [],
  all_products: [],
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  // Retrieve products from product context
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
