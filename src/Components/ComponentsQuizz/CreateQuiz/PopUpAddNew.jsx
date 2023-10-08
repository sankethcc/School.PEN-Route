import { Dialog, DialogTitle } from '@mui/material'
import React from 'react'

const PopUpAddNew = () => {
  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New {dropdownName}</DialogTitle>
        <DialogContent>
          <TextField
            name={(dropdownName == "Subject")?'name':(dropdownName =="Topic")?'topic':(dropdownName == 'Sub topic')?'subt1':null}
            type="text"
            label={`Enter New ${dropdownName}`}
            value={(dropdownName == "Subject")?sub.name:(dropdownName =="Topic")?sub.topic:(dropdownName == 'Sub topic')?sub.subt1:null}
            onChange={(e)=>InputEvent(e,index)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>{
            handleAdd()
            submithandler()
          
          }} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default PopUpAddNew
