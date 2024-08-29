export const initialState = []
export const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  CLEAN_CART: 'CLEAN_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART'
}


export const cartReducer = (state, action) => {
  const {type: actionType, payload: actionPayload} = action
  switch (actionType) {
    case actionTypes.ADD_TO_CART: {
      const { id } = actionPayload

      const productInCart = state.findIndex(item => item.id === id)
      if(productInCart >= 0) {
        const newState = structuredClone(state)
        newState[productInCart].quantity += 1
        return newState
      }
      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
    }
    case actionTypes.CLEAN_CART: {
      return []
    }
    case actionTypes.REMOVE_FROM_CART: {
      const { id } = actionPayload
      return state.filter(item => item.id !== id)
    }
  }
  return state
}