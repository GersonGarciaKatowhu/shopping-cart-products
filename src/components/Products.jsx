import useCart from '../hooks/useCart'
import './Products.css'
import AddToCartIcon from './icons/AddToCart'
import RemoveToCartIcon from './icons/RemoveToCart'
import DefaultToImg from './DefaultToImg'

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
            <DefaultToImg src={product.thumbnail} alt={product.title} />
                  <div>
              <h3>{product.title} - ${product.price}</h3>
            </div>
            <div>
              <button onClick={() =>isProductInCart ? removeFromCart(product) : addToCart(product)}>
              {
                isProductInCart ? <RemoveToCartIcon />
                :
                <AddToCartIcon />
              }
              </button>
            </div>
          </li>
        )})}
      </ul>
    </main>
  )
}

