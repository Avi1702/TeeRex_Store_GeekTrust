import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { CartItems } from '../context/CartItems'
import "../styles/Search.css"

export const Search = () => {

    let {SearchItem}=useContext(CartItems)
    const [inputVal,setInputVal]=useState("")

   
  return (
    <div id="search">
        <input type={"text"} placeholder="Search" onChange={(e)=>{setInputVal(e.target.value)}} value={inputVal}></input>
        <button onClick={()=>{SearchItem(inputVal)}}>Search</button>
    </div>
  )
}
