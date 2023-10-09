import { Box } from '@mui/system'
import React from 'react'
import { State } from "../../Context/Provider";
import MultipleAns from './QuestionTypeEdit/MultipleAns';
import SingleAns from './QuestionTypeEdit/SingleAns';
import TrueFalse from './QuestionTypeEdit/TrueFalse';

const QueContainerEdit = () => {
    const {quest,examquest} = State();
    
  return (
    <Box>
                  <MultipleAns />
                  <SingleAns />
                  <TrueFalse />
      {
        examquest.map((data, index) =>(
                data.que.question_type === "" ? (
                 <SingleAns /> 
                ) : data.que.question_type === "Multiple choice - multiple answers" ? (
                  MultipleAns 
                ) : data.que.question_type === "True or False" ? (
                  <TrueFalse /> 
                ) : data.que.question_type === "Multiple choice - Single answer" ? (
                  <SingleAns />  
                ) : data.que.question_type === "Yes or No" ? (
                  <TrueFalse 
                    quest={["Yes", "No"]}
                />
            ) : null
      
      ) )}
      
    </Box>
  )
}

export default QueContainerEdit
