import React from 'react'
import { Navbar } from './components/UI/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import { Products } from './components/Products/Products'
import { ProductPage } from './components/Products/ProductPage/ProductPage'
import { Basket } from './components/Busket/Busket'
import { Feedback } from './components/Feedback/Feedback'

export const Main = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </>
  )
}
