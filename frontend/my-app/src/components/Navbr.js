import React from 'react'
import { Link } from "react-router-dom";

function navbar() {
  return (
  
    <nav className="nav">
     <ul>
     <li>
       <Link to="/Crousel">Home</Link>
          
       </li>
       <li>
         <Link to="/Signin">Signin</Link>
          
         </li>
       <li>
           <Link to="/Signout">Signout</Link>
          
        </li>
        <li>
           <Link to="/Login">Login</Link>
          
        </li>
       </ul>
     </nav >
 
  
    
  )
}

export default navbar