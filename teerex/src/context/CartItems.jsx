import React, { createContext } from 'react'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'


export const CartItems= createContext()

export const CartItemsProvider = ({children}) => {

    const [itemCount,setItemCount]=useState(0)
    
    const [data,setData]=useState([])
  
    const [cartItem,setCartItem]=useState([]) 

    const [filterData,setFilterData]=useState([])

    


    const InitialFetch=()=>(
  
      axios.get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json?limit=6")
      .then((res)=>{
        setData(res.data)
        setFilterData(res.data)
      })
      .catch((err)=>{alert(err)})
    )
  
    useEffect(()=>{
    InitialFetch()
    },[])

    // var count

    // const TotalCount=()=>{
    //    count=0

    //     for(let i=0;i<cartItem.length;i++){
    //       count+=cartItem[i].count
    //       } 
    
    // }

    const AddToCart=(Id)=>{

    let check=cartItem.find((ele)=>{return ele.id===Id})

    if(!check){

        let find= data.find((ele)=>{return ele.id===Id})
        setCartItem([...cartItem,{...find,count:1}])
        setItemCount(itemCount+1)
        
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
    alert("Item Added Successfully")
    setItemCount(itemCount+1)
 
  }

  const DeleteItem=(Id)=>{
  
    let find=cartItem.find((item)=>{ return item.id===Id})
    console.log(find.count)
    setItemCount(itemCount-find.count)
    let Filter=cartItem.filter((item)=>{ return item.id!=Id})
    setCartItem(Filter)
  
    alert("Item Deleted")
 
   

  }



  const DecreaseItem=(Id)=>{
    let find= cartItem.find((item)=>{return (item.id===Id)})

    if(find.count>1){
        find.count--
        setCartItem([...cartItem])
        setItemCount(itemCount-1)
    }
     
   
  }

  const Filtering=(color,gender,price,type)=>{

   let arr=[]

   let temp=price.split("-").map(Number)

    data.map((item)=>{
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
    console.log(arr)
    // setFilterData(filterOut)

 }

 

  
 
    

  return (
    <CartItems.Provider value={{itemCount, data, cartItem,filterData,AddToCart,DeleteItem,DecreaseItem,Filtering}}>
        {children}
    </CartItems.Provider>
  )
}
