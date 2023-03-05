import React from 'react'
import {NavLink} from "react-router-dom"

function NavBar() {
  return (
    <div className='navbar'>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        
        {/* <hr style={{height:"4px",color:"red"}}/> */}
    </div>
  )
}

export default NavBar