import React from 'react'
import "../styles/Card.css"

export const Card = ({Item}) => {

    
  return (
    <div id="card">
      <img src={Item.imageURL}></img>
      <h3>{Item.name}</h3>
      <h3>₹{Item.price}</h3>
      <button>Add To Cart</button>
    </div>
  )
}
