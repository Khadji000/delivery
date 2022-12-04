import React, { useState } from 'react'
import Style from './Product.module.scss'
import { CSSTransition } from 'react-transition-group'
import './ProductCard.animation.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setBasketCount } from '../../../store/basket/basketActions'
import { NavLink } from 'react-router-dom'

export const Product = ({ product, index }) => {
  const [isViewDescription, setIsViewDescription] = useState(false)

  const dispatch = useDispatch()
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
    <div className={Style.product}>
      <div className="card align-self-center text-center">
        <NavLink to={`/product/${product.id}`} className="nav-link">
          <div
            className={`card-header ${Style.cardHeader}`}
            onMouseEnter={() => setIsViewDescription(!isViewDescription)}
            onMouseLeave={() => setIsViewDescription(!isViewDescription)}
          >
            <img
              alt=""
              width="600"
              height="300"
              className="card-img-top"
              src={product.avatar}
            ></img>
            <CSSTransition
              key={product.id}
              in={isViewDescription}
              classNames="compound-body"
              timeout={300}
              unmountOnExit
            >
              <div className="compound-body">
                <div className="compound-shadow"></div>
                <p>
                  <div>
                    <div>
                      <strong> Описание: </strong> <br /> {product.description}.
                    </div>
                  </div>
                </p>
              </div>
            </CSSTransition>
          </div>
        </NavLink>
        <div className="card-body">
          <i className="fa fa-shopping-basket" aria-hidden="true"></i>
          <h5 className="card-title">{product.name}</h5>
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
                {product.price} ₽
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
