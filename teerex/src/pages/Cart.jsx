import React, { useContext } from 'react'
import { Card } from '../components/Card'
import { CartItems } from '../context/CartItems'
import "../styles/Cart.css"
import empty from "../images/EmptyCart.png"
import { useState } from 'react'
import { Navbar } from '../components/Navbar'

export const Cart = () => {

  let {cartItem,AddToCart,DecreaseItem,DeleteItem}=useContext(CartItems)
  // const [count,setCount]=useState(0)
  let total=0
  return (

   
    <div id='cart'>
     { cartItem.length===0?<img src={empty} id="emptycart"></img>:
      <table>
        <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {
        cartItem.map((item)=>{
        total += item.count*[+item.price]

        return (<tr>
          <td><img src={item.imageURL}></img></td>
          <td><h3>{item.name}</h3></td>
          <td> <h3>{item.price}</h3></td>
          <td> <div><button onClick={()=>{DecreaseItem(item.id)}} disabled={item.count===1}>-</button><span>{item.count}</span><button onClick={()=>{AddToCart(item.id)}} disabled={item.count===item.quantity}>+</button></div></td>
          <td><button onClick={()=>{DeleteItem(item.id)}}>Remove</button></td>
        </tr>) })
       }
         <tr>
          <td>Total</td>
          <td>{total}</td>
         </tr>
        </tbody>
      </table>
 }
    </div>

  )
}
