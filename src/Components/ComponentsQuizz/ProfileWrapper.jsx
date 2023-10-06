import { Avatar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import React from 'react'
import userImg from '../../Data/userImg.png'
import { State } from '../Context/Provider';
const style ={
    dflex:{
        display:'flex'
    },
    bellIcon:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
}

const ProfileWrapper = ({pageName}) => {
    const {setOpenPage} = State()
    setOpenPage(pageName)
  return (
    <Box style={style.dflex} sx={{justifyContent:'space-between', width:'100%'}}>
    <Typography sx={{font:'500 35px Lato'}}>{pageName}</Typography>
    <Box style={style.dflex} sx={{gap:'35px'}}>

        <Box style={style.bellIcon} sx={{borderRadius:'34px', border:'3px solid #4F78FE', height:'60px', width:'60px' }}>
            <CircleNotificationsIcon sx={{fontSize:'32px', color:'#4F78FE'}} />
        </Box>

        <Box 
            onClick={()=>{
            }}
        >
            <Avatar 
                src={userImg}
                sx={{ height:'60px', width:'60px',borderRadius:'300px', cursor:'pointer' }}   
            />
        </Box>
        
    </Box>
    </Box>
  )
}

export default ProfileWrapper
