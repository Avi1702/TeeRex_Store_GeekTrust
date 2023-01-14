import React from 'react'
import "../styles/Filter.css"

export const Filter = () => {
  return (
    <>
    <div id="filter">
        <h2>Filter</h2>
        <div>
         <h3>Colour</h3>
         <input type="checkbox" name="red" id="red" value="red"></input>
         <lable htmlFor="red">Red</lable><br/>
         <input type="checkbox" name="blue" id="blue" value="blue"></input>
         <lable htmlFor="blue">Blue</lable><br/>
         <input type="checkbox" name="green" id="green" value="green"></input>
         <lable htmlFor="green">Green</lable><br/>
        </div>
        <div>
            <h3>Gender</h3>
        <input type="checkbox" name="men" id="men" value="men"></input>
         <lable htmlFor="men">Men</lable> <br/>
         <input type="checkbox" name="women" id="women" value="women"></input>
         <lable htmlFor="women">Women</lable>  
        </div>
        
        <div>
            <h3>Price</h3>
        <input type="checkbox" name="0-250" id="0-250" value="0-250"></input>
         <lable htmlFor="0-250">0 - 250</lable> <br/>
         <input type="checkbox" name="251-450" id="251-450" value="251-450"></input>
         <lable htmlFor="251-450">251 - 450</lable> <br/>
         <input type="checkbox" name="450" id="450" value="450"></input>
         <lable htmlFor="450">450 - above</lable>
        </div>
        <div>
            <h3>Type</h3>
            <input type="checkbox" name="Polo" id="Polo" value="Polo"></input>
         <lable htmlFor="Polo">Polo</lable><br/>
            <input type="checkbox" name="Hoodie" id="Hoodie" value="Hoodie"></input>
         <lable htmlFor="Hoodie">Hoodie</lable> <br/>
         <input type="checkbox" name="Basic" id="Basic" value="Basic"></input>
         <lable htmlFor="Basic">Basic</lable>
        </div>
    </div>
    </>
  )
}
