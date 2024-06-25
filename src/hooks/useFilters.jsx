import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

function useFilters() {
  const {filters, setFilters, options} = useContext(FiltersContext)
  function filterProducts(products) {
    return products.filter(product => product.price >= filters.minPrice && (filters.category === 'all' || product.category === filters.category))
  }
  return {filters, filterProducts, setFilters, options}
}

export default useFilters


