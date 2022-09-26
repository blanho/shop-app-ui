import {
  GRID_VIEW,
  LIST_VIEW,
  LOAD_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_SORT,
} from "../actions";

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
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products: products } = state;
    let tempProducts = [];
    // If nextItem.price - currentItem.price is positive that will be swapped nextItem and currentItem together
    // If currentItem.price - nextItem.price is negative that will be sorted currentItem before nextItem, and vice versa
    if (sort === "price-lowest") {
      tempProducts = products.sort((currentItem, nextItem) => {
        return currentItem.price - nextItem.price;
      });
    }
    if (sort === "price-highest") {
      tempProducts = products.sort((currentItem, nextItem) => {
        return nextItem.price - currentItem.price;
      });
    }
    /**
     * localeCompare -> positive number if calling string appears after compared string in sort order
     * localeCompare -> negative number if calling string appears before compared string in sort order
     */
    if (sort === "name-a") {
      tempProducts = products.sort((currentItem, nextItem) => {
        return currentItem.name.localeCompare(nextItem.name);
      });
    }
    if (sort === "name-z") {
      tempProducts = products.sort((currentItem, nextItem) => {
        return nextItem.name.localeCompare(currentItem.name);
      });
    }
    return { ...state, filtered_products: tempProducts };
  }
};

export default filter_reducer;
