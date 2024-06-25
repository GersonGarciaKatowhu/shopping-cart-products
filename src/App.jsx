import { products as initialProducts } from './mocks/products.json'
import { useState } from 'react'
import './App.css'
import { Products} from './components/Products'
import Header from './components/Header'
import useFilters from './hooks/useFilters'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'

function App() {
  const {filters, filterProducts, setFilters} = useFilters()
  const [products, setProducts] = useState(initialProducts)
  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filterProducts(products)} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  )
}

export default App
