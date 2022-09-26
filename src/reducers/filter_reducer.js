import { GRID_VIEW, LIST_VIEW, LOAD_PRODUCTS } from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
    };
  }
  if (action.type === GRID_VIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === LIST_VIEW) {
    return { ...state, grid_view: false };
  }
};

export default filter_reducer;
