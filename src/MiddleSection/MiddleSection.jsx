import React from "react";
import "./MiddleSection.css";
import SideBar from "./SideBar";
import SinglePage from "../Routing/SinglePage";
// import BottomBar from "../Bottombar/BottomBar";

function MiddleSection() {
  return (
    <>
      <div className="Middleparent">
        <div className="leftchild">
          <SideBar />
        </div>
        <div className="rightchild">
          <SinglePage />
        </div>
      </div>
    </>
  );
}

export default MiddleSection;
