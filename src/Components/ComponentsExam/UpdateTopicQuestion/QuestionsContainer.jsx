import { Box } from '@mui/system'
import React from 'react'
import { State } from "../../Context/Provider";
import SelectMenuTopicUpdate from './SelectMenuTopicUpdate';
import QuestionExamTopic from './QuestionsExamTopic'
import QuestionMultipleAnsTopicExam from './QuestionTrueFalseTopicExam'
import QuestionTrueFalseTopicExam from './QuestionTrueFalseTopicExam'

const QuestionsContainer = () => {
    const {quest,examquest} = State(); ///

  return (
    <Box>
                  
      {
        examquest.map((data, index) =>(
                data.que.question_type === "" ? (
            <QuestionExamTopic type={data.question_type} options={data.options} answer={data.answer } />
                ) : data.que.question_type === "Multiple choice - multiple answers" ? (
                  <QuestionMultipleAnsTopicExam />
                ) : data.que.question_type === "True or False" ? (
                  <QuestionTrueFalseTopicExam prop={["True", "False"]} />
                ) : data.que.question_type === "Multiple choice - Single answer" ? (
                  <QuestionExamTopic type={data.que.question_type} question={data.que.question_text} options={data.que.options} answer={data.que.answer } qno={data.qno} />
                ) : data.que.question_type === "Yes or No" ? (
                  <QuestionTrueFalseTopicExam
                    quest={["Yes", "No"]}
                />
            ) : null
      
      ) )}
      
    </Box>
  )
}

export default QuestionsContainer
