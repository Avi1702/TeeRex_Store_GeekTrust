import React from 'react'
import { Route, Routes } from 'react-router-dom' /*For Routing */
import { Cart } from '../pages/Cart'             /*Cart component */
import { Products } from '../pages/Products'     /*Products component */


export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Products/>}></Route>  /* Redirects to Home page*/
            <Route path="/cart" element={<Cart/>}></Route>  /* Redirects to Cart Page*/
        </Routes>
    </div>
  )
}
