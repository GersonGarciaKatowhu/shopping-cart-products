import { useId } from "react"
import './Cart.css'
import useCart from "../hooks/useCart"
import CartIcon from './icons/Cart'
import PlusIcon from "./icons/Plus"
function Cart() {
  const cartCheckboxId = useId()
  const {cart, cleanCart, addToCart} = useCart()
  return (
    <>
      <label htmlFor={cartCheckboxId} className="cart-button">
        <CartIcon />
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
            <button onClick={() => addToCart(item)}><PlusIcon /></button>
          </li>
            ))
}
        </ul>
        <button className="clean-cart" onClick={cleanCart}>Clean cart</button>
      </aside>
    </>
  )
}

export default Cart
