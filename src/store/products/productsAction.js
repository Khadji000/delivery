export const setProductsList = (products) => ({
  type: 'PRODUCTS_SET_LIST',
  payload: { products },
})

export const setProductsFilter = (products) => ({
  type: 'PRODUCTS_SET_FILTER',
  payload: { products },
})
