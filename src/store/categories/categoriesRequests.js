import { fetchCategoriesApi } from '../../api/categories/categoriesFetch'
import { setCategoriesList } from './categoriesAction'

export const fetchCategories = () => {
  return async (dispatch) => {
    const data = await fetchCategoriesApi()
    dispatch(setCategoriesList(data))
  }
}
