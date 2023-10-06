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
  import ProfileWrapper from "../ProfileWrapper";
  import LanguageAndDotMenu from "../LanguageAndDotMenu";
  import SideDetails from "../SideDetails";
  import { State } from "../../Context/Provider";
import SubjectsAccordian from "./SbujectsAccordian";
import AddDetails from "./AddDetails";
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
  
  const AddNewSubject = ({
  
  }) => {
    
    
    const { quest } = State();
    return (
      <Box
        style={style.dflex}
        sx={{
          width: {
            md: "79%",
            lg: "85%",
          },
          minHeight: "100dvh",
          background: "#F5F6F7",
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "63%",
              lg: "65%",
              xl: "69%",
            },
            px: "40px",
            pt: "38px",
          }}
        >
           <ProfileWrapper pageName={"Create Subject"}  /> {/* // add props for menu name */}
            <Box>
              <LanguageAndDotMenu  />
                <SubjectsAccordian />
            </Box>
        </Box>
        {/* preview question section */}
  
        <Box
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: "37%",
              lg: "35%",
              xl: "31%",
            },
            background: "#fff",
            p: "38px 32px",
          }}
        >
  
          <AddDetails />
  
               
        </Box>
      </Box>
    );
  };
  
  export default AddNewSubject;
  