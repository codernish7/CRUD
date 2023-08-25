import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({logout}){

    
    return(
        <div className="nav">
            <h1>Title</h1>
            <ul>
            <li><Link to="/">create</Link></li>
            <li ><Link to="/list">product listing</Link></li>
            
            </ul>
        </div>
    )
}