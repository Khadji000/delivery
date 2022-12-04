import React, { useState, useEffect } from 'react'
import { Product } from './Product/Product'
import Style from './Products.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../../store/products/productsRequests'
import { setProductsFilter } from '../../store/products/productsAction'
import { fetchCategories } from '../../store/categories/categoriesRequests'

export const Products = () => {
  const dispatch = useDispatch()

  const products = useSelector((state) => state.products.list)
  const filterProducts = useSelector((state) => state.products.filter)
  const categories = useSelector((state) => state.categories.list)

  const [currentCategoryId, setCurrentCategoryId] = useState()

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCategories())
  }, [dispatch])

  const searchProducts = (event) => {
    dispatch(
      setProductsFilter(
        products.filter((p) =>
          new RegExp(event.target.value).test(p.name.toLowerCase()),
        ),
      ),
    )
  }

  const filterProductsByCategoryId = (event) => {
    setCurrentCategoryId(+event.target.id)

    if (+event.target.id === 0) dispatch(setProductsFilter(products))
    else
      dispatch(
        setProductsFilter(
          products.filter((p) => +event.target.id === p.categoryId),
        ),
      )
  }

  return (
    <div className={Style.main}>
      <div className="container">
        <div className="d-flex justify-content-between">
          <h4>ДОСТАВКА ЕДЫ</h4>
          <div className={Style.search}>
            <input
              className="form-control"
              type="text"
              placeholder="Найти..."
              onChange={(event) => searchProducts(event)}
            />
          </div>
        </div>
        <hr />
        <div className={Style.categories}>
          <button
            className={
              currentCategoryId === 0 ? 'btn btn-dark' : 'btn btn-outline-dark'
            }
            id={0}
            onClick={(event) => filterProductsByCategoryId(event)}
          >
            Все
          </button>
          {categories.map((c, index) => (
            <button
              className={
                c.id === currentCategoryId
                  ? 'btn btn-dark'
                  : 'btn btn-outline-dark'
              }
              id={c.id}
              onClick={(event) => filterProductsByCategoryId(event)}
              index={index}
              key={c.id}
            >
              {c.name}
            </button>
          ))}
        </div>
        <div className={Style.products}>
          {filterProducts.map((product, index) => (
            <Product product={product} index={index} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
