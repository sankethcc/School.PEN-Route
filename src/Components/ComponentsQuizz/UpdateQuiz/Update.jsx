import {Box,} from "@mui/material";
import React, { useState,useEffect } from "react";
import UnstyledSelectObjectValues from "../CreateQuiz/UnstyledSelectObjectValues";

import Questions from "./Questions";
import AddDetails from "../AddSubject/AddDetails";
import ProfileWrapper from "../ProfileWrapper";
import SelectContainer from "../CreateQuiz/SelectContainer";
import AssignUser from "../../ComponentsAssignUser/AssignUser/AssignNewUser";
import UserProfile from "../../ComponentsAssignUser/UserProfile/UserProfile";
import { State } from "../../Context/Provider";

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

const UpdateQuiz = () => {
  const {quest, openPage} = State();


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
            lg: "74%",
          },
          px: "40px",
          pt: "38px",
        }}
      >
        <ProfileWrapper pageName='Update Quiz'  />
        
          <Box>
            {/* <LanguageAndDotMenu {...propsForLanguageDotMenu} /> */}
              <Box sx={{
                  width: {
                    xs: "60%",
                    sm: "50%",
                    mt: "40px" 
                  },
                }}>
                <UnstyledSelectObjectValues
                  dropdownName={"Language"}
                    listArray={["Hindi", "English", "Urdu"]}
                    val={quest.Language}
                  add={true}
                />
              </Box>
              <Box>
                <SelectContainer />
                <Questions />
              </Box>
            
          </Box>
      </Box>

      <Box
        sx={{
          width: {
            md: "37%",
            lg: "31%",
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

export default UpdateQuiz;
