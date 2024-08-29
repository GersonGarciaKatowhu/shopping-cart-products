import { createContext, useReducer } from "react";
import useCartReducer from '../hooks/useCartReducer'
import { initialState, cartReducer } from "../reducers/cart";

export const CartContext = createContext()





export function CartProvider({children}) {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  const {addToCart, removeFromCart, cleanCart} = useCartReducer({dispatch})
  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      cleanCart
    }}>
      {children}
    </CartContext.Provider>
  )
}