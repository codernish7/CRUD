import { useEffect, useState } from "react";

export default function Register(){
    const[cred, setCred]=useState({name:'',email:'',pass:''})

    const[register,setRegister]=useState(registData())

    function handleChange(e){
        const property=e.target.name
        setCred({...cred,[property]:e.target.value})
    }

    function handleReg(){
        setRegister([...register,cred])
        setCred({name:'',email:'',pass:''})
    }

    useEffect(()=>{
        localStorage.setItem('token',JSON.stringify(register))
    },[register])

    function registData(){
        const retain=localStorage.getItem('token')
        if(retain){
            return JSON.parse(retain)
        }
        else{
            return []
        }
    }
    return(
        <div>

            <label>name</label>
            <input type="text" name='name' placeholder="name" onChange={handleChange} value={cred.name} />
            <br></br>
            <label >email</label>
            <input type="text" name='email' placeholder="email" onChange={handleChange} value={cred.email}/>
            <br></br>
            <label>password</label>
            <input type="text" name='pass' placeholder="password" onChange={handleChange} value={cred.pass}/>
            <button onClick={handleReg}>Register</button>
        </div>
    )
}

