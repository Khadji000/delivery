import { fetchProductsApi } from '../../api/products/productsFetch'
import { setProductsList, setProductsFilter } from './productsAction'

export const fetchProducts = () => {
  return async (dispatch) => {
    const data = await fetchProductsApi()
    dispatch(setProductsList(data))
    dispatch(setProductsFilter(data))
  }
}
