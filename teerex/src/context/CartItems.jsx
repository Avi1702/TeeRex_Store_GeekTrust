import React, { createContext } from 'react'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'


export const CartItems= createContext()

export const CartItemsProvider = ({children}) => {

    const [itemCount,setItemCount]=useState(0)   /* State to keep track of Total Cart Items count */ 
    
    const [data,setData]=useState([])            /* Storing whole data by sending a request to API */
  
    const [cartItem,setCartItem]=useState([])    /* Items which are in Cart */

    const [filterData,setFilterData]=useState([])/* State to store the filtered data when user uses filtering */

    

    /* A function to fetch the data using URL*/  
    const InitialFetch=()=>(
      axios.get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json?limit=6")
      .then((res)=>{
        setData(res.data)
        setFilterData(res.data)
      })
      .catch((err)=>{alert(err)})
      )
  

    useEffect(()=>{
    InitialFetch()                               /* Getting the data for first time when page loads*/
    },[])


  
    /*Function to add an Item to the cart */
    const AddToCart=(Id)=>{
    let check=cartItem.find((ele)=>{return ele.id===Id})
    if(!check)
    {
        let find= data.find((ele)=>{return ele.id===Id})
        setCartItem([...cartItem,{...find,count:1}])
        setItemCount(itemCount+1)  
    }
    else
    {
        if(check.count<check.quantity){
        check.count++
        setCartItem([...cartItem])
        }
        else{
            alert("Out of quantity")
        }
    }
        alert("Item Added Successfully")
        setItemCount(itemCount+1)
    }
    
    /* Function to delete an item from cart*/
   const DeleteItem=(Id)=>{
    let find=cartItem.find((item)=>{ return item.id===Id})
    setItemCount(itemCount-find.count)
    let Filter=cartItem.filter((item)=>{ return item.id!=Id})
    setCartItem(Filter)
    alert("Item Deleted")
    }

   /*Function to decrease item quantity from cart */
  const DecreaseItem=(Id)=>
  {
    let find= cartItem.find((item)=>{return (item.id===Id)})
    if(find.count>1){
        find.count--
        setCartItem([...cartItem])
        setItemCount(itemCount-1)
     }
  }


   /* Function to handle user filtering*/
  const Filtering=(color,gender,price,type)=>
  {
     let arr=[]
     let temp=price.split("-").map(Number)
     data.map((item)=>
  {
      if(item.color===color){
        arr.push(item)
      }
      else if(item.gender===gender){
       arr.push(item)

      }
      else if(item.type===type){
       arr.push(item)
      }
      else if(item.price>=temp[0] && item.price<=temp[1]){
        arr.push(item)
      }
      else if(item.price>=450){
        arr.push(item)
      }
      return arr
  })
      
       setFilterData(arr)

  }

 
  return (
    <CartItems.Provider value={{itemCount, data, cartItem,filterData,AddToCart,DeleteItem,DecreaseItem,Filtering}}>
        {children}
    </CartItems.Provider>
  )
}
