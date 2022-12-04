const defaultState = {
  list: [],
}

export const basketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'BASKET_SET_LIST':
      return { ...state, list: action.payload.basket }

    case 'BASKET_SET_COUNT':
      const oldProduct = state.list.find((p) => p.id === action.payload.id)
      if (oldProduct)
        return {
          ...state,
          list: state.list.map((p) => {
            const product = { ...p }
            if (p.id === action.payload.id) product.count = action.payload.count
            return product
          }),
        }
      else {
        const list = [...state.list]
        list.push(action.payload)

        return {
          ...state,
          list,
        }
      }

    default:
      return state
  }
}
