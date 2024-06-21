import { useState } from 'react'
import './App.css'
import { Products} from './components/Products'
import { products as initialProducts } from './mocks/products.json'
import Header from './components/Header'

function App() {
  const [products, setProducts] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: "home-decoration",
    minPrice: 40,
  })
  function filterProducts(products) {
    return products.filter(product => product.price >= filters.minPrice && (filters.category === 'all' || product.category === filters.category))
  } 
  return (
    <>
      <Header />
      <Products products={filterProducts(products)} />
    </>
  )
}

export default App
