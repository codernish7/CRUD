import React, { useEffect, useState } from "react";
import { Link,redirect,useNavigate } from "react-router-dom";

export default function Create(props){
    const [product,setProduct]=useState({id:new Date().getUTCMilliseconds(),title:"",desc:"",price:"",quantity:"",category:""})

    const navigate=useNavigate();    

   
   
    function handlechange(e){
        const property=e.target.name 
        setProduct({...product,[property]:e.target.value})
    }
    function handleform(e){
        e.preventDefault()
        
        if(!(typeof product.price==="number") && !(product.price>0)){
            alert('price must be in numbers and cannot be zero')
            return false
        }
        if(isNaN(product.quantity)){
            alert('product count must be in numericals')
            return false
        }
        if(product.title==""||product.desc==""||product.price==""||product.quantity==""||product.category==""){
            alert('all fields should be filled')
            return false
        }
        props.object(product)
        alert("product registered successfully")
        navigate("/list")
        setProduct({id:new Date().getUTCMilliseconds(),title:"",desc:"",price:"",quantity:"",category:""})
    }
    
    return(
        <>
        {/* <ul>
            <li><Link to="/">create</Link></li>
            <li ><Link to="/list">product listing</Link></li>
        </ul> */}
        <form onSubmit={handleform}>
            <label>title</label>
            <input name="title" onChange={handlechange} value={product.title}></input>
            <br></br>
            <label>description</label>
            <input name="desc" onChange={handlechange} value={product.desc}></input>
            <br></br>
            <label>price</label>
            <input name="price" onChange={handlechange} value={product.price}></input>
            <br></br>
            <label>quantity</label>
            <input name="quantity" onChange={handlechange} value={product.quantity}></input>
            <br></br>
            <label>category</label>
            <select name="category" onChange={handlechange} value={product.category} >
                <option value="----">----</option>
                <option value="food">food</option>
                <option value="electronics">electronics</option>
                <option value="clothes">clothes</option>
                <option value="groceries">groceries</option>
                <option value="books">books</option>
            </select>
            <br></br>
            <button  type="submit" >submit</button>
        </form>
        </>
    )
}