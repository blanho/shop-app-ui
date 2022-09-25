import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
} from "../actions";

const product_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN) {
    return { ...state, isSidebarOpen: true };
  }

  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  if (action.type === GET_PRODUCTS_START)
    return { ...state, products_loading: true };

  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter(
      (product) => product.featured === true
    );

    return {
      ...state,
      products_loading: false,
      featured_products,
      products: action.payload,
    };
  }
  if (action.type === GET_PRODUCTS_ERROR) {
    return { ...state, products_loading: false, products_error: true };
  }
  throw new Error(`No matching ${action.type} - action type`);
};

export default product_reducer;
