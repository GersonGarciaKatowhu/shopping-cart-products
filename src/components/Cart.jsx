import { useId } from "react"
import './Cart.css'
import useCart from "../hooks/useCart"
function Cart() {
  const cartCheckboxId = useId()
  const {cart, clearCart, addToCart} = useCart()
  return (
    <>
      <label htmlFor={cartCheckboxId} className="cart-button">
        CART
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />
      <aside className="cart">
        <ul>
          {
            cart.map(item => (
          <li key={item.id}>
            <div>
              <strong className="text-white">{item.title}</strong> {item.price}
            </div>
            <footer>
              <small>
                {item.quantity}
              </small>
            </footer>
            <button onClick={() => addToCart(item)}>+</button>
          </li>
            ))
}
        </ul>
        <button onClick={clearCart}>Clear cart</button>
      </aside>
    </>
  )
}

export default Cart
