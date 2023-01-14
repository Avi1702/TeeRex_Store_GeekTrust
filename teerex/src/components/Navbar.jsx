import React from 'react'
import shopping_cart from "../images/shopping-cart.png"
import "../styles/Navbar.css"
import {Link} from "react-router-dom"
import Logo from "../images/Logo.png"
export const Navbar = () => {
  return (
    <div id='main'>

        <div id="navbar">
               <img id="logo" src={Logo}></img>
               <div>
               <Link to="/">Products</Link>
               <Link to="/cart"><img src={shopping_cart}></img></Link>
               </div>
        
        </div>
    </div>
  )
}

