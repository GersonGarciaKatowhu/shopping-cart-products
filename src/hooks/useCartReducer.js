export default function useCartReducer({dispatch}) {
  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })
  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })
  const cleanCart = () => dispatch({
    type: 'CLEAN_CART',
  })
  return { addToCart, removeFromCart, cleanCart }
}