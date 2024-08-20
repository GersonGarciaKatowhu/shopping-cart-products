import { useContext } from "react";
import { CartContext } from "../context/cart";

function useCart() {
  const context = useContext(CartContext)
  const {cart, setCart} = context
  if(context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  function addToCart(product) {
    const productInCart = cart.findIndex(item => item.id === product.id)
    if(productInCart >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCart].quantity += 1
      return setCart(newCart)
    }
    setCart(prevState => [
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ])
  }
  function clearCart() {
    setCart([])
  }
  function removeFromCart(product) {
    return setCart(prevState => prevState.filter(item => item.id !== product.id))
  }
  return {clearCart, addToCart, cart, removeFromCart}
}

export default useCart
