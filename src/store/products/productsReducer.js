const defaultState = {
  list: [],
  filter: [],
}

export const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'PRODUCTS_SET_LIST':
      return { ...state, list: action.payload.products }

    case 'PRODUCTS_SET_FILTER':
      return { ...state, filter: action.payload.products }

    default:
      return state
  }
}
