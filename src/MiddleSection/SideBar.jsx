// import React from 'react'
// import "./SideBar.css"
// import {Link} from 'react-router-dom';
// import MenuItemComponent from '../pages/Home/MenuItem';
// // import Helps from '../pages/Helps/Helps';
// function SideBar() {
//   return (
//     <>
//     <div className="sidebar">
      
//       <MenuItemComponent className="link" label="Home" to="contact"></MenuItemComponent>
//       <MenuItemComponent className="link" label="About" to="contact"></MenuItemComponent>
//       <MenuItemComponent  className="link"label="Service" to="contact"></MenuItemComponent>
//       <MenuItemComponent className="link" label="Contact" to="contact"></MenuItemComponent>
//       <MenuItemComponent className="link" label="Help" to="contact"></MenuItemComponent>
//   <Link className='link' to="/"> Home</Link>
//   <Link className='link' to="about">About</Link>
//   <Link className='link' to="services">Services</Link>
//   <Link className='link' to="contact">Contact</Link>
//   <Link className='link' to ="helps">Helps</Link>

// </div>    
//     </>
//   )
// }

// export default SideBar



// SideBar.js
import React from 'react';
import {Link} from 'react-router-dom';
import './SideBar.css';
import MenuItemComponent from '../pages/Home/MenuItem';

function SideBar() {
  return (
    <div className="sidebar">
      <Link  to="/"><MenuItemComponent  label="Home"/></Link>
      <Link  to="about" ><MenuItemComponent className="link" label="About" useDiffrentColor="true"/></Link>
      <Link to="services"><MenuItemComponent className="link" label="Service"  /></Link>
      <Link to="contact"><MenuItemComponent className="link" label="Contact"  /></Link>
      <Link to="helps"></Link><MenuItemComponent className="link" label="Helps"/>
    </div>
  );
}

export default SideBar;
