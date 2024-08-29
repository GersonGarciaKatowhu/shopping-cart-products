import { useContext } from "react";
import { CartContext } from "../context/cart";


function useCart() {
  const context = useContext(CartContext)
  if(context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  const {cleanCart, addToCart, cart, removeFromCart} = useContext(CartContext)

  return {cleanCart, addToCart, cart, removeFromCart}
}

export default useCart
