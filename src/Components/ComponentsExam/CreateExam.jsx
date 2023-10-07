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
import axios from "axios";
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
  const { exam , SetExams,Exams} = State();
  const handlePostQuestion = () => {
    // console.log(exam)
     const formData = new FormData();
    formData.append('subject', exam.Subject); 
    formData.append('topic_class', exam.Class); 
    formData.append('topic_name', exam.Topic); 
    formData.append('level', exam.Level); 
    formData.append('no_of_questions', exam.perquest); 
    formData.append('assigned_time', exam.assigned_time); 
    formData.append('instruction', "lajh"); 
    formData.append('learning', "jsnjs"); 
    formData.append('eligiblity', "js js"); 

    axios
  .post("http://localhost:5000/create_topic", formData)
      .then((response) => {
        if (response.status === 201) {
          // console.log(response.data)
          SetExams(oldArray => [response.data, ...oldArray])
          console.log("Data added successfully");
        } else {
          alert("Error occured");
        }
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }
  
  
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
                <Box sx={{display:'flex', width:"100%", mt:'56px', mb:'91px', justifyContent:'center'}}>
                    <Button variant="contained" onClick={()=>{
                      handlePostQuestion()
                    }} 
                      color="primary"
                      sx={{
                          width: "375px",
                          borderRadius: "12px",
                          background: "#7A58E6",
                          cursor: "pointer",
                          border: "none",
                          color: "#FFF",
                          fontSize: "18px",
                          fontWeight: "500",
                          textTransform: "capitalize",
                          p: "10px 10px",
                          "&:hover": {
                            background: "#7A58E6",
                          },
                        }}
                    >
                      Create Exam
                    </Button>
              </Box>
                  <Box sx={{width:'50%', mt:'30px', mb:'30px'}}>
                <SelectMenuExam dropdownName={"Quiz Type"} listArray={["Multiple choice - Single answer", "Multiple choice - multiple answers", "Yes or No", "True or False"]} add={false} value={"Quiz_Type"} val={Exams.Quiz_Type}/>

                </Box>
                {Exams.Quiz_Type === "" ? (
                  <QuestionsExam  />
                ) : Exams.Quiz_Type === "Multiple choice - multiple answers" ? (
                  <QuestionMultipleAnsExam
                  />
                ) : Exams.Quiz_Type === "True or False" ? (
                  <QuestionTrueFalseExam prop={["True", "False"]} />
                ) : Exams.Quiz_Type === "Multiple choice - Single answer" ? (
                  <QuestionsExam />
                ) : Exams.Quiz_Type === "Yes or No" ? (
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
