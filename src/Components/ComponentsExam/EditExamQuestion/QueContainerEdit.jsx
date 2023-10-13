import { Box } from '@mui/system'
import React, {useState, useEffect }  from 'react'
import { State } from "../../Context/Provider";
import MultipleAns from './QuestionTypeEdit/MultipleAns';
import SingleAns from './QuestionTypeEdit/SingleAns';
import TrueFalse from './QuestionTypeEdit/TrueFalse';
import axios from 'axios';
const QueContainerEdit = (props) => {
  const topic_id=props.topic_id
  const { quest, setexam,editexam, seteditexam ,editid,seteditid} = State();
  // const [examquest,setexamquest]=useState([])
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
        // console.log(data._id)

        setexam (obj);
        const objects = data.questions
        seteditid({ id: data._id, qno: Object.keys(objects).length+1 })
        seteditexam([])
        // console.log(objects)
        // seteditexam(data.questions)
        for (const key in objects) {
            // console.log(objects[key][0])
            seteditexam(oldArray => [...oldArray, {que:objects[key][0], qno:key}])
        }

          
      } catch(error){
        console.error('Error Fetching questions: ', error)
      }
      
    }
    fetchQuestions()
    // console.log(examquest)
  }, [])
  
  
  return (
    <Box>
                  
      {
        editexam?.map((data, index) =>(
                data.que.question_type === "" ? (
                 <SingleAns qdata={data.que} qno={data.qno}/> 
                ) : data.que.question_type === "Multiple choice - multiple answers" ? (
                  <MultipleAns qdata={data.que} qno={data.qno} />
                ) : data.que.question_type === "True or False" ? (
                  <TrueFalse qdata={data.que} qno={data.qno}/> 
                ) : data.que.question_type === "Multiple choice - Single answer" ? (
                  <SingleAns qdata={data.que} qno={data.qno}/>  
                ) : data.que.question_type === "Yes or No" ? (
                  <TrueFalse  qdata={data.que} qno={data.qno}
                    quest={["Yes", "No"]}
                />
            ) : null
      
      ) )}
      
    </Box>
  )
}

export default QueContainerEdit
