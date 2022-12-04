import React from 'react'
import Style from './Busket.module.scss'
import { useSelector } from 'react-redux'
import { BasketProduct } from './BasketProduct'

export const Basket = () => {
  const basket = [...useSelector((state) => state.basket.list)]
  const products = [...useSelector((state) => state.products.list)]

  const basketProducts = []

  basket.forEach((b) => {
    basketProducts.push({
      ...products.find((p) => p.id === b.id),
      count: b.count,
    })
  })

  const logProducts = () => {
    console.log(basketProducts)
  }

  return (
    <div className={Style.busket}>
      <div className="container">
        <div>
          <h4>Корзина</h4>
        </div>
        <hr />
        <div className={Style.products}>
          {basketProducts.map((p, index) => (
            <BasketProduct product={p} index={index} key={index} />
          ))}
        </div>
        {basketProducts.length > 0 && (
          <div className={Style.done}>
            <button
              className="btn btn-outline-dark"
              onClick={() => logProducts()}
            >
              Оформить заказ
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
