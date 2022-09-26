import React from "react";
import GridView from "./GridView";
import { useFilterContext } from "../context/filter_context";
import ListView from "./ListView";

function ProductList() {
  const { filtered_products: products, grid_view } = useFilterContext();
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry, no products matched with your searching
      </h5>
    );
  }
  if (grid_view === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products} />;
}

export default ProductList;
