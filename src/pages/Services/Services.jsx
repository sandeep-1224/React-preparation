import React, { useState } from "react";
import TableService from "./TableService";
import Details from "./Details";

function Services() {
  const [selectedUserData, setSelectedUserData] = useState(null);
  
  console.log(selectedUserData)

  const handleDataFromChild = (data) => {
    setSelectedUserData(data);
  };
  return ( 
    <>
    
      <TableService sendDataToParent={handleDataFromChild} />
    
      
      <Details  selectedUserData ={selectedUserData}/>
    </>
  );
}

export default Services;
