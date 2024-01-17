import React, { useState } from "react";
import "./Helps.css";
import MenuItemComponent from "../Home/MenuItem";


function Helps() {
  const [data, setData] = useState("Sandeep");

  const ShowData = () => {
    setData("Magic Software");
  };
  return (
    <>
      <div className="righchild">
        <div>
          <MenuItemComponent label={data} onClick={ShowData} />
          <MenuItemComponent label="Home" />
          <MenuItemComponent label="About" />
          <MenuItemComponent label="Service" />
        </div>
      </div>
    </>
  );
}

export default Helps;
