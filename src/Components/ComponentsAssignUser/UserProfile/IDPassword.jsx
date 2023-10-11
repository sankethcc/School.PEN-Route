import { Button, FormControl, Input } from "@mui/material";
import React, { useState } from "react";
import { btnStyle, inputStyle } from "../../../styles/style";
import { Box } from "@mui/system";


const IDPassword = () => {
  const [user, setUser] = useState({
    userId:'',
    oldPassword:'',
    newPassword:'',
  })
  const handleInputChange = (e)=>{
    const {name, value} = e.target
    setUser({...user, [name]:value})

  }

  const handleHave = ()=>{
    console.log(user)
  }
  return (
    <>
    <Box 
    sx={{
            display:'grid', gridGap:'20px', 
            }}>
      <Input
      name="userId"
      required
        disableUnderline
        placeholder="User ID"
        fullWidth
        value={user.userId}
        onChange={handleInputChange}
        style={inputStyle}
        sx={{
          color: "var(--grey, #707070)",
        }}
      />
      <Input
      type="password"
      name="oldPassword"
        disableUnderline
        placeholder="Old Password"
        fullWidth
        value={user.oldPassword}
        onChange={handleInputChange}
        style={inputStyle}
        sx={{
          color: "var(--grey, #707070)",
        }}
      />
      <Input
      type="password"
      name="newPassword"
        disableUnderline
        placeholder="New Password"
        fullWidth
        value={user.newPassword}
        onChange={handleInputChange}
        style={inputStyle}
        sx={{
          color: "var(--grey, #707070)",
        }}
      />
    </Box>
    <Box textAlign={'end'}>
        <Button type="submit" onClick={handleHave} sx={{width:'50%', mt:'25px',}} style={btnStyle}>Save</Button>
    </Box>
    </>
  );
};

export default IDPassword;
