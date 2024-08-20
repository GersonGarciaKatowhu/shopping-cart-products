import useCart from '../hooks/useCart'
import './Products.css'
export function Products({ products }) {
  const {addToCart, cart, removeFromCart} = useCart()
  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }
  return (
    <main className="products">
      <ul>
        {products.map( product => {
        const isProductInCart = checkProductInCart(product)
        return (
          <li key={product.id}>
            <p>No image</p>
            <div>
              <h3>{product.title} - ${product.price}</h3>
            </div>
            <div>
              <button onClick={() =>isProductInCart ? removeFromCart(product) : addToCart(product)}>
              {
                isProductInCart ? 'Esta en el carro' 
                :
                'Add'
              }
              </button>
            </div>
          </li>
        )})}
      </ul>
    </main>
  )
}

