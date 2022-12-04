import axios from 'axios'

export const fetchProductsApi = () =>
  axios
    .get('https://khadji000.github.io/delivery-back/products.json')
    .then((res) => res.data)
