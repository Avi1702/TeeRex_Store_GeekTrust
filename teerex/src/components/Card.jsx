import React from 'react'
import { useContext } from 'react'
import { CartItems } from '../context/CartItems'
import "../styles/Card.css"

export const Card = ({Item}) => {

let {AddToCart}=useContext(CartItems)


  return (
    <div id="card">
      <img src={Item.imageURL}></img>
      <h3>{Item.name}</h3>
      <h3>₹{Item.price}</h3>
      <button onClick={()=>{AddToCart(Item.id)}} >Add To Cart</button>
    </div>
  )
}
