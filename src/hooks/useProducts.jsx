import { useContext } from "react"
import { ProductsContext } from "../context/products"
import useFilters from "./useFilters"

function useProducts() {
  const {products} = useContext(ProductsContext)
  const {filterProducts} = useFilters()
  const filteredProducts = filterProducts(products)

  return {filteredProducts}
}

export default useProducts
