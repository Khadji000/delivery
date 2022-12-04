import React from 'react'
import Style from './ProductPage.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { setBasketCount } from '../../../store/basket/basketActions'

export const ProductPage = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  const products = [...useSelector((state) => state.products.list)]
  const product = { ...products.find((p) => p.id === +id) }

  const basket = useSelector((state) => state.basket.list)
  const _basketProduct = basket.find((p) => p.id === product.id)
  let basketProduct = _basketProduct ? { ..._basketProduct } : undefined

  const addProduct = () => {
    if (basketProduct) basketProduct.count++
    else basketProduct = { id: product.id, count: 1 }

    dispatch(setBasketCount(basketProduct))
  }

  const reduceProduct = () => {
    basketProduct.count--
    dispatch(setBasketCount(basketProduct))
  }

  return (
    <div className={Style.productPage}>
      <div className="container">
        <div className={Style.card}>
          <div className={Style.avatar}>
            <img alt="" className="card-img-top" src={product.avatar}></img>
          </div>
          <div className={Style.description}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className={Style.priceBlock}>
              <div className={Style.priceCount}>{product.price} ₽</div>

              <div className={Style.price}>
                {(basketProduct?.count || 0) > 0 && (
                  <div className={Style.count}>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => reduceProduct()}
                    >
                      -
                    </button>
                    <div>{basketProduct.count}</div>
                    <button
                      className="btn btn btn-outline-success"
                      onClick={() => addProduct()}
                    >
                      +
                    </button>
                  </div>
                )}
                {(basketProduct?.count || 0) <= 0 && (
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => addProduct()}
                  >
                    Добавить в корзину
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
