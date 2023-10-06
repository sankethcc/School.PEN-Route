import React, { useState } from 'react'
import { Box, Button, ButtonGroup, Divider, Typography } from '@mui/material'
import UserDataBox from './UserDataBox'



const UserProfile = () => {
   // hamburger functionality for responsive page
   const [toggle, setToggle] = useState(true)
   const [close, setClose] = useState("")
   const [dBlock, setDBlock] = useState("")
   const toggleMenu = ()=>{
     if(toggle){
       setToggle(!toggle)
       setClose("close-hamburger")
       setDBlock("d-block")
     }else{
       setToggle(!toggle)
       setClose("")
       setDBlock("")
     }
   }
   const props = {
     toggle,
     close,
     toggleMenu, 
     dBlock
   }
   return (
     <Box >
         <Box >
             {/* <Menu {...props} /> */}
            <Box >
             {/* <ProfileWrapper name="User Profile" /> */}
             <Box sx={{display:'flex', justifyContent:'space-between', mt:'70px', flexWrap:'wrap'}}>
                <UserDataBox name={"Total Task"} number={"1,000"} />
                <UserDataBox name={"Complete"} number={"500"} />
                <UserDataBox name={"Working"} number={"100"} />
                <UserDataBox name={"Pending"} number={"400"} />
             </Box>
            <Box sx={{width:{md:'50%'}, bgcolor:'#fff', borderRadius:'8px', mt:'30px'}}>
                <Button sx={{fontSize:'16px', bgcolor:'#7A58E6', color:'#fff', textTransform:'capitalize', borderRadius:'8px' }}>instruction</Button>
                <Button sx={{fontSize:'16px', bgcolor:'#fff', color:'#7A58E6', textTransform:'capitalize', borderRadius:'8px' }}>instruction</Button>
                <Button sx={{fontSize:'16px', bgcolor:'#fff', color:'#7A58E6', textTransform:'capitalize', borderRadius:'8px' }}>instruction</Button>
            </Box>
            <Box sx={{background:'#fff', height:{ xs:'663px' }, mt:'32px', borderRadius:'16px', p:'32px' }}>
                <Typography sx={{fontSize:'20px', fontWeight:'700px', fontFamily:'Poppins', color:'#707070', pb:'15px'}}>Working</Typography>
                <Divider style={{ opacity: 0.5, height: 1, backgroundColor: '#707070' }} />
                <Box sx={{}}>
                    <Typography sx={{fontSize:'20px', fontWeight:'700px', fontFamily:'Poppins', color:'#707070', pl:'22px', py:'24px'}}>Creating science exam</Typography>
                    <Divider style={{ opacity: 0.5, height: 1, backgroundColor: '#707070' }} />
                    <Typography sx={{fontSize:'20px', fontWeight:'700px', fontFamily:'Poppins', color:'#707070', pl:'22px', py:'24px'}}>Creating science exam</Typography>
                    <Divider style={{ opacity: 0.5, height: 1, backgroundColor: '#707070' }} />
                </Box>
            </Box>
            </Box>
            {/* <UserData /> */}
           

         </Box>
     </Box>
   )
}

export default UserProfile
