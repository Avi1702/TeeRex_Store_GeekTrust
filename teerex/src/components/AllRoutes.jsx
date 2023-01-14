import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart } from '../pages/Cart'
import { Products } from '../pages/Products'

export const AllRoutes = () => {
  return (
    <div>
    
        <Routes>
            <Route path="/" element={<Products/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
    </div>
  )
}
