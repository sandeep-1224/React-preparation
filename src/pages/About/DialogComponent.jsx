import React from 'react'
import "./DialogComponent.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

const DialogComponent = ({open, setOpen, text, setText}) => {
  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>This is Dialog box</DialogTitle>
        <DialogContent>
          <DialogContentText className='blur' style={{height: 400}}>
            <input
              type="text"
              style={{width: 500, height: 100, marginTop: 10}}
              value={text}
              placeholder="Enter sample text"
              onChange={(e) => {
                setText(e.target.value)
              }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button className='close-button' onClick={() => setOpen(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DialogComponent
