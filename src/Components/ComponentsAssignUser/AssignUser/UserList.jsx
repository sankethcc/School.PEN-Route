import React from 'react'
import { Box, Typography  } from '@mui/material'
import userlogo from './userlogo.png'

const UserList = ({user}) => {

  return (
    <Box>   
        {user 
        ? user.map((user)=>{
            return(
                <Box sx={{bgcolor:'#F5F6F7', borderRadius:'10px', p:'6px 14px',m:'16px 0px', display:'flex', alignItems:'center', gap:'23px'}}>
                <img src={userlogo} alt='user' style={{width:'55px', borderRadius:'6px'}}/>
                <Typography sx={{color:'#707070', fontSize:'20px', }}>{user.name}</Typography>
                </Box>
            )
        }):null}
        </Box>
  )
}

export default UserList
