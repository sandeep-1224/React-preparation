import React from "react";
import "./Services.css"

function Details({selectedUserData}) {
  
  return (
    <>
    <div className="detials">
      <h1> I am detial components</h1>

      
      <p>ID: {selectedUserData?.id}</p>
            <p>Name: {selectedUserData?.name}</p>
            <p>Phone: {selectedUserData?.phone}</p>
            <p>Username: {selectedUserData?.username}</p>
            <p>Email: {selectedUserData?.email}</p>
            <p>Website: {selectedUserData?.website}</p>
            <p>
              Address: {selectedUserData?.address.street}, {selectedUserData?.address.city},
              {selectedUserData?.address.zipcode}
            </p>
      </div>
    </>
  );
}

export default Details;
