import { configureStore } from '@reduxjs/toolkit'
import { basketReducer } from './basket/basketReducer.js'
import { categoriesReducer } from './categories/categoriesReducer.js'
import { productsReducer } from './products/productsReducer.js'

const store = configureStore({
  reducer: {
    products: productsReducer,
    basket: basketReducer,
    categories: categoriesReducer,
  },
})

export default store
