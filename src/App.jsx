import { products as initialProducts } from './mocks/products.json'
import { useState } from 'react'
import './App.css'
import { Products} from './components/Products'
import Header from './components/Header'
import useFilters from './hooks/useFilters'

function App() {
  const {filterProducts, setFilters} = useFilters()
  const [products, setProducts] = useState(initialProducts)
  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filterProducts(products)} />
    </>
  )
}

export default App