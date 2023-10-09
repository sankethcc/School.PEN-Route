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
import Questions from "./Questions";
import ProfileWrapper from "../ProfileWrapper";
import LanguageAndDotMenu from "../LanguageAndDotMenu";
import SelectContainer from "./SelectContainer";
import SideDetails from "../SideDetails";
import QuestionMultipleAns from "./QuestionMultipleAns";
import QuestionTrueFalse from "./QuestionTrueFalse";
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

const CreateQuiz = ({

}) => {
  
  
  const { quest } = State();
  return (
    <Box
      style={style.dflex}
      sx={{
        justifyContent:'start',
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
         <ProfileWrapper pageName='Create Quiz'  /> {/* // add props for menu name */}
          <Box>
            <LanguageAndDotMenu  />
              <Box>
                <SelectContainer />
                {quest.Quiz_Type === "" ? (
                  <Questions  />
                ) : quest.Quiz_Type === "Multiple choice - multiple answers" ? (
                  <QuestionMultipleAns
                  />
                ) : quest.Quiz_Type === "True or False" ? (
                  <QuestionTrueFalse prop={["True", "False"]} />
                ) : quest.Quiz_Type === "Multiple choice - Single answer" ? (
                  <Questions />
                ) : quest.Quiz_Type === "Yes or No" ? (
                  <QuestionTrueFalse
                    prop={["Yes", "No"]}
                  />
                ) : null}
              </Box>
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

        <SideDetails heading='Total Quiz'  />


             
      </Box>
    </Box>
  );
};

export default CreateQuiz;
