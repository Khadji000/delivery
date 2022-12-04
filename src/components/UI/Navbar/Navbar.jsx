import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <NavLink to={`/`} className="navbar-brand">
          Delivery
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to={`/`} className="nav-link">
                Главная
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink to={`/feedback`} className="nav-link">
                Обратная связь
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="inline">
          <NavLink to={`/basket`} className="nav-link">
            <button
              href="#"
              className="btn btn-outline-light"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Корзина
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
