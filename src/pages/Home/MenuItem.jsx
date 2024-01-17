import React from 'react'
import "./MenuItem.css";

function MenuItemComponent(props) {
  
  return (
    <>
    <div  className={'menu-item '+(props.useDiffrentColor?"menu-item-different-color":"")}>
        <label>{props.label}</label>

    </div>
    </>
  )
}

export default MenuItemComponent