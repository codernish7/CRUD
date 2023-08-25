import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export default function Login({loginStatus}){

    const[login, setLogin]=useState({ email:'', password:''})
    const[userData, setUserData]=useState([])
    
    function handlechange(e){
        
        const property=e.target.name
        setLogin({...login,[property]:e.target.value})
        
    }
    console.log(login)
    function handlesubmit(){
       
        setUserData([...userData,login])
        
        loginStatus(true)
        localStorage.setItem('isloggedin','true')
       
        setLogin({ email:'', password:''})
        
    }
    console.log(userData)
   

    return(
        <div>
            <h1>welcome to login</h1>
            <br></br>
            <div style={{display:"flex",flexDirection:"column"}}>
            <label >Email</label>
            <input onChange={handlechange} name="email" type="text" placeholder="email" value={login.email} />
            <br></br>
            <label>Password</label>
            <input onChange={handlechange} name="password" type="text" placeholder="password" value={login.password}/>
            <br></br>
            <button onClick={handlesubmit}>login</button>
            </div>
        </div>
    )
}