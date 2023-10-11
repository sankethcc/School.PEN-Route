import {
    Avatar,
    Box,
    FormControl,
    FormGroup,
    InputLabel,
    Menu,
    MenuItem,
    Select,
    Typography,
    Button,
  } from "@mui/material";
  import React, { useState } from "react";
  import ProfileWrapper from "../ComponentsQuizz/ProfileWrapper";
  import { State } from "../Context/Provider"; 
import AssignNewUser from "./AssignUser/AssignNewUser";
import TotalUser from "./AssignUser/TotalUser";
import { Outlet } from "react-router-dom";
import CreateUser from "./AssignUser/CreateUser";
import { mainBoxStyle, sideDetail } from "../../styles/style";
  const style = {
    dflex: {
      display: "flex",
    },
    bellIcon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
  
  const AssignUser = ({
  
  }) => {
    
    
    const { quest } = State();
    return (
      <Box
      style={style.dflex}
      sx={ mainBoxStyle.first
      }
    >
      <Box
        sx={mainBoxStyle.second}
      >
           <ProfileWrapper pageName='Assign User'  /> {/* // add props for menu name */}
           <Outlet>
           </Outlet>

            {/* <CreateUser /> */}
        </Box>
        {/* preview question section */}
  
        <Box
          sx={sideDetail.first}
        >
  
          <TotalUser />
  
               
        </Box>
      </Box>
    );
  };
  
  export default AssignUser;
  