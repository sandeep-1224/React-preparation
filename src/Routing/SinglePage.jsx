import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import Helps from "../pages/Helps/Helps";
// import MenuItemComponent from "../pages/Home/MenuItem";

function SinglePage() {
  return (
    <>
      <Routes>
        {/* <Route path="/about" element={<MenuItemComponent label={<About/>}/>} /> */}
        <Route path ="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/helps" element={<Helps/>}/>
      </Routes>
    </>
  );
}

export default SinglePage;
