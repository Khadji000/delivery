const defaultState = {
  list: [],
}

export const categoriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CATEGORIES_SET_LIST':
      return { ...state, list: action.payload.categories }
    default:
      return state
  }
}
