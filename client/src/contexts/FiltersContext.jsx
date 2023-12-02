import { createContext, useContext, useState } from "react";

export const FilterContext = createContext();

export const usefilters = () => {
  const context = useContext(FilterContext);
  if (!context)
    throw new Error("usefilters must be used withing a FiltersProvider");
  return context;
};

export function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: "All",
    brand: "All",
  });
  console.log("filter context")
  //filtrar productos
  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "All" || product.category === filters.category) &&
        (filters.brand === "All" || product.brand === filters.brand)
      );
    });
  };

  return (
    <FilterContext.Provider
      value={{
        setFilters,
        filterProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
