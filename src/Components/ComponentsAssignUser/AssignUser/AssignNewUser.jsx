import React from 'react'
import { Box, Button, Container } from '@mui/material'
import DropDown from './DropDown'

const AssignNewUser = () => {
  return (
    <Box
      
      sx={{
        width:'100%',

        display:"flex",
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
        pt:'100px'
      }} 
      >
        <Container maxWidth="xs"
        className='fill-details assign-user-fill'
        sx={{
          p:'42px 42px !important',
          borderRadius:'24px',
          display:'flex',
          alignItems:'center',

        }}
        >
        <DropDown dropdownName={"Language"} listArray={["Hindi", "English", "Urdu"]} add={true}/>
        <DropDown  dropdownName={"Class"} listArray={["1", "2", "3", "4", "5", "6", "7", "8", "9"]} classList={"classChange"} add={true} />
        <DropDown dropdownName={"Subject"} listArray={["Science", "Mathematics", "History"]} add={true}/>
        <DropDown dropdownName={"Topic"} listArray={["Biology", "Chemistry", "Physics"] } add={true}/>
        <DropDown dropdownName={"Add"} listArray={[]} add={false}/>
        </Container>
        <Box>
          <Button
          sx={{
            width: "375px",
            height:'75px',
            borderRadius: "12px",
            background: "#7A58E6",
            cursor: "pointer",
            border: "none",
            color: "#FFF",
            fontSize: "24px",
            fontWeight: "500",
            textTransform: "capitalize",
            p: "10px 10px",
            "&:hover": {
              background: "#7A58E6",
            },
          }}
          >Assign User</Button>
        </Box>

      </Box>
  )
}

export default AssignNewUser
