import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
import "../styles/Products.css"
// import axios from "axios"
import { Card } from '../components/Card'
import { useContext } from 'react'
import { CartItems } from '../context/CartItems'

export const Products = () => {

  let {data}=useContext(CartItems)


  return (
    <div id='products'>
      {/* <h3>Products</h3><br/> */}
      {
        data.map((item)=>{return <Card Item={item} />})
      }
      
    </div>
  )
}
