import { createContext, useState } from "react";

const options = [['all', "All"], ['laptops', 'Laptops'], ['smartphones', 'SmartPhone'], ["fragrances", 'Fragrance'], ['skincare', 'Skincare'], ['groceries', 'Groceries']]

// crear el contexto
export const FiltersContext = createContext()

//crear el provider del contexto

export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  })
  return(
    <FiltersContext.Provider value={{
      filters,
      setFilters,
      options
    }}>
      {children}
    </FiltersContext.Provider >
  )
}

