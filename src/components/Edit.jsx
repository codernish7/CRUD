import React, { useEffect, useState } from "react";
import { Link,useNavigate, useParams } from "react-router-dom";

export default function Edit(props){
    const navigate=useNavigate()
    const  params=useParams()
    const{editID}=params
    const [product,setProduct]=useState({id:Number(editID),title:"",desc:"",price:"",quantity:"",category:""})
    useEffect(()=>{
        let update=props.updated.filter((items)=>items.id===Number(editID))
        setProduct({...product,title:update[0].title,desc:update[0].desc,price:update[0].price,quantity:update[0].quantity,category:update[0].category})
    },[])
   
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
        props.edit(product)
        alert("product registered successfully")
        navigate("/list")
        setProduct({id:new Date().getUTCMilliseconds(),title:"",desc:"",price:"",quantity:"",category:""})
    }
    
    return(
        <>
         
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
            <button type="submit">edit</button>
        </form>
        </>
    )
}