import { Box } from '@mui/system'
import React from 'react'
import { State } from "../../Context/Provider";
import SelectMenuTopicUpdate from './SelectMenuTopicUpdate';
import QuestionExamTopic from './QuestionsExamTopic'
import QuestionMultipleAnsTopicExam from './QuestionTrueFalseTopicExam'
import QuestionTrueFalseTopicExam from './QuestionTrueFalseTopicExam'

const QuestionsContainer = () => {
    const {quest} = State(); ///

  return (
    <Box>
        <Box sx={{width:'50%', mt:'30px', mb:'30px'}}>
                <SelectMenuTopicUpdate dropdownName={"Quiz Type Topic"} listArray={["Multiple choice - Single answer", "Multiple choice - multiple answers", "Yes or No", "True or False"]} add={false} value={"Quiz_Type"} val={quest.Quiz_Type}/>

                </Box>
                {quest.Quiz_Type === "" ? (
                  <QuestionExamTopic  />
                ) : quest.Quiz_Type === "Multiple choice - multiple answers" ? (
                  <QuestionMultipleAnsTopicExam />
                ) : quest.Quiz_Type === "True or False" ? (
                  <QuestionTrueFalseTopicExam prop={["True", "False"]} />
                ) : quest.Quiz_Type === "Multiple choice - Single answer" ? (
                  <QuestionExamTopic />
                ) : quest.Quiz_Type === "Yes or No" ? (
                  <QuestionTrueFalseTopicExam
                    quest={["Yes", "No"]}
                  />
            ) : null}
      
    </Box>
  )
}

export default QuestionsContainer
