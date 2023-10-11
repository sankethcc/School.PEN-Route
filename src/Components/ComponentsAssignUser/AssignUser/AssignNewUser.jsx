import React from 'react'
import { Box, Button, Container } from '@mui/material'
import DropDown from './DropDown'
import SelectMenuAssign from './SelectMenuAssign'

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
          <SelectMenuAssign dropdownName={"Function"} listArray={['Quiz', 'Exam']} add={false} />
          <SelectMenuAssign dropdownName={"Language"} listArray={["Hindi", "English", "Urdu"]} add={true} />
          <SelectMenuAssign dropdownName={"Class"} listArray={["Hindi", "English", "Urdu"]} add={true} />
          <SelectMenuAssign dropdownName={"Subject"} listArray={["Hindi", "English", "Urdu"]} add={true} />
          <SelectMenuAssign dropdownName={"Topic"} listArray={["Hindi", "English", "Urdu"]} add={true} />
          <SelectMenuAssign dropdownName={"Select User"} listArray={["Hindi", "English", "Urdu"]} add={false} />
          
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
