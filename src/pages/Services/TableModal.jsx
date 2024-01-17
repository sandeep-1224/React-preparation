import React from "react";
import "./Services.css"
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,Typography
  } from '@mui/material'
function TableModal({ user, open, setOpen}) {
  return (
    
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Row Data is Available</DialogTitle>
        <DialogContent>
          <DialogContentText className='blur' style={{height: 400}}>
            <Typography variant="h6">User Details</Typography>

            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Phone: {user.phone}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Website: {user.website}</p>
            <p>
              Address: {user.address.street}, {user.address.city},{" "}
              {user.address.zipcode}
            </p>
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className='close-button' onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
  );
}

export default TableModal;
