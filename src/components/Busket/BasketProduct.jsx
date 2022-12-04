import React from 'react'
import Style from './Busket.module.scss'
import { setBasketCount, setBasketList } from '../../store/basket/basketActions'
import { useSelector, useDispatch } from 'react-redux'

export const BasketProduct = ({ product }) => {
  const dispatch = useDispatch()
  const basket = [...useSelector((state) => state.basket.list)]

  const addProduct = () => {
    product.count++
    const basketProduct = { id: product.id, count: product.count }

    dispatch(setBasketCount(basketProduct))
  }

  const reduceProduct = () => {
    if (product.count - 1 <= 0) {
      const newBasket = basket.filter((b) => b.id !== product.id)
      dispatch(setBasketList(newBasket))
      return
    }

    product.count--
    const basketProduct = { id: product.id, count: product.count }

    dispatch(setBasketCount(basketProduct))
  }

  return (
    <div className={Style.basketProduct}>
      <div className="mb-3">
        <div className="row g-0">
          <div className="col-md-2">
            <div className={Style.avatar}>
              <img
                src={product.avatar}
                className="img-fluid rounded-start"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className={Style.description}>
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className={Style.count}>
              <button
                className="btn btn-outline-danger"
                onClick={() => reduceProduct()}
              >
                -
              </button>
              <div>{product.count}</div>
              <button
                className="btn btn btn-outline-success"
                onClick={() => addProduct()}
              >
                +
              </button>
            </div>
          </div>
          <div className="col-md-2 text-center">
            <div className={Style.price}>{product.price * product.count} ₽</div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}
