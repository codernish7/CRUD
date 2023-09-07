import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){

    
   
    return(
        <div className="nav">
            <h1>CRUD</h1>
            <ul>
            {/* <li><Link to="/" style={{textDecoration:'none',listStyle:'none',color:'white',backgroundColor:'rgb(45, 192, 180)'}}>create</Link></li>
            <br></br>
            <li><Link to="/list" style={{textDecoration:'none',listStyle:'none',color:'white',backgroundColor:'rgb(45, 192, 180)'}}>products</Link></li>
            <br></br> */}
            <li><Link to="/register" style={{textDecoration:'none',listStyle:'none',color:'white',backgroundColor:'rgb(45, 192, 180)'}}>Register</Link></li>
            <br></br>
            <li><Link to="/login" style={{textDecoration:'none',listStyle:'none',color:'white',backgroundColor:'rgb(45, 192, 180)'}}>Login</Link></li>
            </ul>
        </div>
    )
}