import { useId } from "react"
import './Cart.css'
import useCart from "../hooks/useCart"
import CartIcon from './icons/Cart'
import PlusIcon from "./icons/Plus"
import DefaultToImg from "./DefaultToImg"
function Cart() {
  const cartCheckboxId = useId()
  const {cart, cleanCart, addToCart} = useCart()
  return (
    <div className="cart__container">
      <label htmlFor={cartCheckboxId} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />
      <aside className="cart">
        <ul className="cart__ul">
          {
            cart.map(item => (
          <li key={item.id}>
                        <DefaultToImg src={item.thumbnail} alt={item.title} />

            <div>
              <strong>{item.title}</strong> {item.price}
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
    </div>
  )
}

export default Cart
