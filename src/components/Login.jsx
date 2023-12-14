import { useState,useEffect } from "react";

export default function Login(props){

    const[email,setEmail]=useState('')
    const[pass,setPass]=useState('')

    function handlemail(e){
        setEmail(e.target.value)
    }
    function handlepass(e){
        setPass(e.target.value)
    }
    function handleLogin(){
        const data=JSON.parse(localStorage.getItem('token'))
        for(let i=0; i<data.length; i++){
            if(data[i].email===email && data[i].pass===pass){
              localStorage.setItem('log','true')
              props.cred(true)
            }
           
            
          }
         
        
    }
    

    return(
        <div className="login-box">
            <label>email</label>
            <input type="text" placeholder="email" onChange={handlemail} value={email}/>
            <br></br>
            <label>password</label>
            <input type="password" placeholder="password" onChange={handlepass} value={pass} />
            <br></br>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
