import React, { useEffect, useReducer } from "react";
import { useContext } from "react";
import {
  GRID_VIEW,
  LIST_VIEW,
  LOAD_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_SORT,
} from "../actions";
import reducer from "../reducers/filter_reducer";
import { useProductContext } from "./product_context";

const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  // Retrieve products from product context
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  // Load products
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  // Handle View Screen
  const setGridView = () => {
    dispatch({ type: GRID_VIEW });
  };

  const setListView = () => {
    dispatch({ type: LIST_VIEW });
  };

  // Update Sort
  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };

  // Handle Sort Functionality
  useEffect(() => {
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort]);

  return (
    <FilterContext.Provider
      value={{ ...state, setListView, setGridView, updateSort }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
