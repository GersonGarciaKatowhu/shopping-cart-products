import { createContext, useState } from "react";
import { products as initialProducts } from '../mocks/products.json'

export const ProductsContext = createContext()

export function ProductsProvider ({children}) {
  const [products, setProducts] = useState(initialProducts)
  return(
    <ProductsContext.Provider value={{
      products,
      setProducts
    }}>
      {children}
    </ProductsContext.Provider>
  )
}