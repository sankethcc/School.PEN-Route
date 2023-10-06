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
  import QuestionsExam from "./AddQuestionExam/QuestionsExam";
  import ProfileWrapper from "../ComponentsQuizz/ProfileWrapper";
  import LanguageAndDotMenuExam from "./LanguageAndDotMenuExam";
  import SelectContainerExam from "./AddQuestionExam/SelectContainerExam";
  import SideDetailsExam from "./SideDetailsExam";
  import QuestionMultipleAnsExam from "./AddQuestionExam/QuestionMultipleAnsExam";
  import QuestionTrueFalseExam from "./AddQuestionExam/QuestionTrueFalseExam";
  import Instructions from './AddExam/Instructions'
  import { State } from "../Context/Provider";
import SelectMenuExam from "./AddQuestionExam/SelectMenuExam";
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
           <ProfileWrapper pageName='Create Exam'  /> {/* // add props for menu name */}
            <Box>
              <LanguageAndDotMenuExam  />
                <Box>
                  <SelectContainerExam />
                  <Instructions />
                  <Box sx={{width:'50%', mt:'30px', mb:'30px'}}>
                  <SelectMenuExam dropdownName={"Quiz Type"} listArray={["Multiple choice - Single answer", "Multiple choice - multiple answers", "Yes or No", "True or False"]} add={false} value={"Quiz_Type"} val={quest.Quiz_Type}/>

                  </Box>
                  {quest.Quiz_Type === "" ? (
                    <QuestionsExam  />
                  ) : quest.Quiz_Type === "Multiple choice - multiple answers" ? (
                    <QuestionMultipleAnsExam
                    />
                  ) : quest.Quiz_Type === "True or False" ? (
                    <QuestionTrueFalseExam prop={["True", "False"]} />
                  ) : quest.Quiz_Type === "Multiple choice - Single answer" ? (
                    <QuestionsExam />
                  ) : quest.Quiz_Type === "Yes or No" ? (
                    <QuestionTrueFalseExam
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
  
          <SideDetailsExam heading='Total Exam' />
  
  
               
        </Box>
      </Box>
    );
  };
  
  export default CreateQuiz;
  