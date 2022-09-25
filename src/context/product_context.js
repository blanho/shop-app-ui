import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/product_reducer";
import axios from "axios";
import {
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
  GET_PRODUCTS_START,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_START,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "../actions";
import { products_url as url } from "../utils/constants";

const ProductContext = React.createContext();

const initialState = {
  isSidebarOpen: false,

  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],

  single_product_loading: false,
  single_product_error: false,
  single_product: [],
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Sidebar
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  // Fetch Products
  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_START });
    try {
      const res = await axios.get(url);
      const products = res.data;

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  // Fetch Single Product
  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_START });
    try {
      const res = await axios.get(url);
      const singleProduct = res.data;

      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <ProductContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
