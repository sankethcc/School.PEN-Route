import {Box,} from "@mui/material";
import React, { useState,useEffect } from "react";
import UnstyledSelectObjectValues from "../CreateQuiz/UnstyledSelectObjectValues";

import Questions from "./Questions";
import AddDetails from "../AddSubject/AddDetails";
import ProfileWrapper from "../ProfileWrapper";
import SelectContainer from "../CreateQuiz/SelectContainer";
import AssignUser from "../../ComponentsAssignUser/AssignUser/AssignUser";
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

const UpdateQuiz = ({
  handleOpenPage,
  openPageName,
  openPage,
  handleOpenPageNameUpdate,
}) => {
  const [threeDotMenu, setThreeDotMenu] = useState("preview");
  const handleThreeDotMenu = (menuName) => {
    setThreeDotMenu(menuName);
  };
  const {quest} = State();

  const propsForProfileRow = {
    openPageName,
    handleOpenPage,
    handleOpenPageNameUpdate,
  };


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
        <ProfileWrapper {...propsForProfileRow} />
        {openPage == "Assign User" ? (
          <AssignUser />
        ) : openPage == "User Profile" ? (
          <UserProfile />
        ) : (
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
                <Questions handleThreeDotMenu={handleThreeDotMenu} />
              </Box>
            
          </Box>
        )}
      </Box>
      {/* preview question section */}

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
