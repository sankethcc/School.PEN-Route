import { Box } from '@mui/system'
import React, {useState, useEffect }  from 'react'
import { State } from "../../Context/Provider";
import MultipleAns from './QuestionTypeEdit/MultipleAns';
import SingleAns from './QuestionTypeEdit/SingleAns';
import TrueFalse from './QuestionTypeEdit/TrueFalse';
import axios from 'axios';
const QueContainerEdit = (props) => {
  const topic_id=props.topic_id
  const { quest, setexam,editexam, seteditexam } = State();
  const [examquest,setexamquest]=useState([])
  const {setInstruction, setEligiblity, setLearning} = State()
  useEffect(() => {
    // setexamquest([])
    const fetchQuestions = async ()=>{
      try {
      
        const { data } = await axios.get(`http://localhost:5000/get_topic/${topic_id}`)
        
        const obj={
          Subject: data.subject,
          Class: data.topic_class,
          Topic: data.topic_name,
          Level: data.level,
          perquest: data.no_of_questions,
          assigned_time: data.assigned_time,
          Quiz_Type: "",
          Language: ""
        }
        setInstruction(data.instruction)
        setEligiblity (data.eligibility)
        setLearning(data.learning)
        console.log(data)

        setexam (obj);
        const objects = data.questions
        
        // console.log(data.questions)
        seteditexam(data.questions)
          
      } catch(error){
        console.error('Error Fetching questions: ', error)
      }
      
    }
    fetchQuestions()
    // console.log(examquest)
  }, [])
  
  
  return (
    <Box>
                  <MultipleAns />
                  <SingleAns />
                  <TrueFalse />
      {
        editexam.map((data, index) =>(
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
