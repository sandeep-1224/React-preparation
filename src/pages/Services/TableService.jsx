import React, { useEffect, useState } from "react";
import "./Services.css";
import TableModal from "./TableModal";


function TableService({sendDataToParent}) {


  const API = "https://jsonplaceholder.typicode.com/users";

  const [api, setApi] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [open, setOpen] = useState(false);

  const dataUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setApi(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    dataUsers(API);
    console.log("useEffect executing");
  }, []);

  const openModal = (user) => {
    setSelectedUser(user);
    setOpen(true);

    // onDataSelected(user);
  };

  // const openModal1 = (user) => {
  //   sendDataToParent(user);
  // };

  // const closeModal = () => {
  //   setSelectedUser(null);
  // };

  return (
    <>
      <table className="student-data">
        <thead className="student-head">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Website</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {api.map((user, i) => (
            <tr
              className={i % 2 === 0 ? "white" : "lightgrey"}
              key={user.id}
              onClick={() => {
                openModal(user)
                sendDataToParent(user) 
              }}
            >
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>
                {user.address.street.concat(
                  " ",
                  user.address.city,
                  " ",
                  user.address.zipcode
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedUser && (
        <TableModal user={selectedUser} open={open} setOpen={setOpen} />
      )}
      
    </>
  );
}

export default TableService;
