import React from 'react'
import { useContext } from 'react'
import { CartItems } from '../context/CartItems'
import "../styles/Card.css"

export const Card = ({Item}) => {       /* Accessing Prop from Products component*/

let {AddToCart}=useContext(CartItems)   /* Accessing AddToCart from context `CartItems` */

  return (
    
    /*Displaying the Data*/
    <div id="card">
      <img src={Item.imageURL}></img>   
      <h3>{Item.name}</h3>
      <h3>₹{Item.price}</h3>
      <button onClick={()=>{AddToCart(Item.id)}} >Add To Cart</button>
    </div>
  )
}
