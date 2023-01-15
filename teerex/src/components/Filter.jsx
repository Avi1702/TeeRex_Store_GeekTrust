import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { CartItems } from '../context/CartItems'
import "../styles/Filter.css"

export const Filter = () => {

  
  let {Filtering}=useContext(CartItems)    /*Accessing filtering function form Context `cartItems` */   

  const [filter,setFilter]=useState({color:"",gender:"",price:"",type:""})  /*State to keep track what user has selected as filter*/


   /*Function to save user input data*/
  const handleChange=(e)=>{
    let {name,value}=e.target
    setFilter({...filter,[name]:value})
    Filtering(color,gender,price,type)
  }

  let {color,gender,price,type}=filter

  return (
    <>
    <div id="filter">
        <h2>Filter</h2>
        <div>
          
         {/*Filter by color*/}

         <h3>Colour</h3>
         <form>
         <input onChange={handleChange} type="radio" name="color" id="Red" value="Red"></input>
         <label htmlFor="Red">Red</label><br/>
         <input onChange={handleChange} type="radio" name="color" id="Blue" value="Blue"></input>
         <label htmlFor="Blue">Blue</label><br/>
         <input onChange={handleChange} type="radio" name="color" id="Green" value="Green"></input>
         <label htmlFor="Green">Green</label><br/>
         </form>
        </div>
        <div>

         {/*Filter by Gender*/}

            <h3>Gender</h3>
          <form>  
        <input onChange={handleChange} type="radio" name="gender" id="Men" value="Men"></input>
         <label htmlFor="Men">Men</label> <br/>
         <input onChange={handleChange} type="radio" name="gender" id="Women" value="Women"></input>
         <label htmlFor="Women">Women</label>  
         </form>
        </div>
        
        <div>

         {/*Filter by Price*/}

            <h3>Price</h3>
            <form>
        <input onChange={handleChange} type="radio" name="price" id="0-250" value="0-250"></input>
         <label htmlFor="0-250">0 - 250</label> <br/>
         <input onChange={handleChange} type="radio" name="price" id="251-450" value="251-450"></input>
         <label htmlFor="251-450">251 - 450</label> <br/>
         <input onChange={handleChange} type="radio" name="price" id="450" value="450"></input>
         <label htmlFor="450">450 - above</label>
         </form>
        </div>
        <div>

         {/*Filter by Type*/}

            <h3>Type</h3>
            <form>
            <input onChange={handleChange} type="radio" name="type" id="Polo" value="Polo"></input>
         <label htmlFor="Polo">Polo</label><br/>
            <input onChange={handleChange} type="radio" name="type" id="Hoodie" value="Hoodie"></input>
         <label htmlFor="Hoodie">Hoodie</label> <br/>
         <input onChange={handleChange} type="radio" name="type" id="Basic" value="Basic"></input>
         <label htmlFor="Basic">Basic</label>
         </form>
        </div>
    </div>
    </>
  )
}
