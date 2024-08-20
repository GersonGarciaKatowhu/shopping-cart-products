
import './App.css'
import { Products} from './components/Products'
import Header from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'
import useProducts from './hooks/useProducts'
import Cart from './components/Cart'

function App() {
  const {filteredProducts} = useProducts()

  return (
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  )
}

export default App
