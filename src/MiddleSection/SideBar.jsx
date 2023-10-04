import React from 'react'
import "./SideBar.css"
import {Link} from 'react-router-dom';
function SideBar() {
  return (
    <>
    <div className="sidebar">
  <Link className='link' to="/"> Home</Link>
  <Link className='link' to="about">About</Link>
  <Link className='link' to="services">Services</Link>
  <Link className='link' to="contact">Contact</Link>
</div>    
    </>
  )
}

export default SideBar