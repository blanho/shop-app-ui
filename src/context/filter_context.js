import React from "react";
import { useContext } from "react";

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  return (
    <FilterContext.Provider value="filter context">
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
