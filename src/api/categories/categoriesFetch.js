import axios from 'axios'

export const fetchCategoriesApi = () =>
  axios
    .get('https://khadji000.github.io/delivery-back/categories.json')
    .then((res) => res.data)
