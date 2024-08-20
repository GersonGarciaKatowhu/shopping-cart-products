import { useId } from "react"
import './Cart.css'
function Cart() {
  const cartCheckboxId = useId()
  return (
    <>
      <label htmlFor={cartCheckboxId} className="cart-button">
        CART
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />
      <aside className="cart">
        <ul>
          <li>
            <div>
              <strong className="text-white">IPhone - $1499</strong> 
            </div>
            <footer>
              <small>
                Qty: 1
              </small>
            </footer>
            <button>+</button>
          </li>
        </ul>
        <button>Clear cart</button>
      </aside>
    </>
  )
}

export default Cart
