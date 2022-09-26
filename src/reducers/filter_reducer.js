import {
  CLEAR_FILTERS,
  FILTER_PRODUCTS,
  GRID_VIEW,
  LIST_VIEW,
  LOAD_PRODUCTS,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    // Using the spread operator retrieves max Price and min Price as well
    let maxPrice = action.payload.map((product) => product.price);
    maxPrice = Math.max(...maxPrice);

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
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
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PRODUCTS) {
    console.log("filtering products");
    return { ...state };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filter.max_price,
        shipping: false,
      },
    };
  }
};

export default filter_reducer;
