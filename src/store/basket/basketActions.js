export const setBasketList = (basket) => ({
  type: 'BASKET_SET_LIST',
  payload: { basket },
})

export const setBasketCount = ({ id, count }) => ({
  type: 'BASKET_SET_COUNT',
  payload: { id, count },
})
