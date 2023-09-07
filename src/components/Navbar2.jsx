import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props){

    function handleLogout(){
       localStorage.setItem('log','false')
       props.logout(false)
    }
    
    return(
        <div className="nav">
            <h1>CRUD</h1>
            <ul>
            <li><Link to="/" style={{textDecoration:'none',listStyle:'none',color:'white',backgroundColor:'rgb(45, 192, 180)'}}>create</Link></li>
            <br></br>
            <li><Link to="/list" style={{textDecoration:'none',listStyle:'none',color:'white',backgroundColor:'rgb(45, 192, 180)'}}>products</Link></li>
            <br></br>
            <li onClick={handleLogout} style={{cursor:'pointer',textDecoration:'none',listStyle:'none',color:'white',backgroundColor:'rgb(45, 192, 180)'}}>Logout</li>
            </ul>
        </div>
    )
}