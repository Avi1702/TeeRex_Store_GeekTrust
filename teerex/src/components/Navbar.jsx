import React from 'react'
import shopping_cart from "../images/shopping-cart.png"
import "../styles/Navbar.css"
import {Link} from "react-router-dom"
import Logo from "../images/Logo.png"
import { useContext } from 'react'
import { CartItems } from '../context/CartItems'
export const Navbar = () => {

  let {itemCount}=useContext(CartItems)  /*Accessing the total count of cart items from context `CartItems` */
  
  return (
    <div id='main'>
        <div id="navbar">
               <img id="logo" src={Logo}></img>
               <div>
               <Link to="/">Products</Link>
               <Link to="/cart"><img src={shopping_cart}></img></Link>
               </div>
               <p id='count'>{itemCount}</p>
        </div>
    </div>
  )
}

