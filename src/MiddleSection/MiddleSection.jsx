import React from "react";
import "./MiddleSection.css";
import SideBar from "./SideBar";
import Home from "../pages/Home";

function MiddleSection() {
  return (
    <>
      <div className="Middleparent">
        <div className="leftchild">
          <SideBar />
        </div>
        <div className="rightchild">
          <Home />
        </div>
      </div>
    </>
  );
}

export default MiddleSection;
