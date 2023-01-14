import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "../styles/Products.css"
import axios from "axios"
import { Card } from '../components/Card'

export const Products = () => {

  const [data,setData]=useState([])
  

  const InitialFetch=async()=>(

    axios.get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json?limit=6")
    .then((res)=>{setData(res.data)})
    .catch((err)=>{alert(err)})
  )

  

 useEffect(()=>{InitialFetch()},[])
console.log(data)

  return (
    <div id='products'>
      {/* <h3>Products</h3><br/> */}
      {
        data.map((item)=>{return <Card Item={item}/>})
      }
    </div>
  )
}
