import React, { createContext } from 'react'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'


export const CartItems= createContext()

export const CartItemsProvider = ({children}) => {

    const [itemCount,setItemCount]=useState(0)
    
    const [data,setData]=useState([])
  
    const [cartItem,setCartItem]=useState([]) 



    // const InitialFetch=async()=>(
  
    
    // )
  
    useEffect(()=>{
      axios.get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json?limit=6")
      .then((res)=>{setData(res.data)})
      .catch((err)=>{alert(err)})
    },[])
    // InitialFetch()


    const Filtering=(color,gender,price,type)=>{
//  console.log(color,gender,type,price)
      let temp=price.split("-")
      console.log(temp)
      let filter= data.filter((item)=>{
        if(item.price>=[+temp[0]] && item.price<=[+temp[1]]){
          return item
        }})
       
    }



  const AddToCart=(Id)=>{

    let check=cartItem.find((ele)=>{return ele.id===Id})

    if(!check){

        let find= data.find((ele)=>{return ele.id===Id})
        setCartItem([...cartItem,{...find,count:1}])
        setItemCount(cartItem.length)
        
    }
    else{

        if(check.count<check.quantity){
        check.count++
        setCartItem([...cartItem])
        
        }
        else{
            alert("Out of quantity")
        }
    }

  }

  const DeleteItem=(Id)=>{
  
    let Filter=cartItem.filter((item)=>{ return item.id!=Id})
    setCartItem(Filter)

  }


  const DecreaseItem=(Id)=>{
    let find= cartItem.find((item)=>{return (item.id===Id)})

    if(find.count>1){
        find.count--
        setCartItem([...cartItem])
       
    }
   
  }

  
 
    

  return (
    <CartItems.Provider value={{itemCount, data, cartItem,AddToCart,DeleteItem,DecreaseItem,Filtering}}>
        {children}
    </CartItems.Provider>
  )
}
