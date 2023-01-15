import React from 'react'
// import { useEffect } from 'react'
// import { useState } from 'react'
import "../styles/Products.css"
// import axios from "axios"
import { Card } from '../components/Card'
import { useContext } from 'react'
import { CartItems } from '../context/CartItems'
import { useState } from 'react'
import { Filter } from '../components/Filter'

export const Products = () => {

  let {filterData}=useContext(CartItems)  /*Getting data from context `CartItems` */

  return (
    <div id='products'>

      {
        filterData.map((item)=>{return <Card Item={item} />})  /*displaying the data by sending it as `prop` to component `Card` */
      }
      
    </div>
  )
}
