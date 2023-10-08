import React, { useEffect, useState } from 'react'
import { Box } from "@mui/material"
import { State } from '../../Context/Provider'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link, useParams } from 'react-router-dom'
import profile from '../../../Data//logo.svg'
import QuestionImg from '../../../Data/QuestionImg.png'
import axios from 'axios'

const PreviewExamQuestions = ({heading, number}) => {
  const {updatePreviewQuestionExam} = State()
   const {topic_id} = useParams()
  const [examquest,setexamquest] = useState([])
  useEffect(()=>{
    const fetchQuestions = async ()=>{
      try {
        const { data } = await axios.get(`http://localhost:5000/get_topic/${topic_id}`)
        
        const objects = data.questions
        // console.log(objects)
        // for (var i = 0; i < objects.length; i++) {
        //     arr.push(objects[i]);
        // }
        setexamquest([])
        for (const key in objects) {
          const arr = Object.values(objects[key][0].options)
          const dat = []
          for (let i = 0; i < arr.length; i+=2){
            dat.push({text:arr[i], oimg: arr[i+1]})
          }
          // console.log(Object.values(objects[key][0].options))
          setexamquest(oldArray => [{
            question: objects[key][0].question_text,
            img: objects[key][0].question_image,
            ans: objects[key][0].answer,
            options:dat
          }, ...oldArray])

          // console.log(dat)
        }
        //  Object.keys(data[0].options)
        // console.log(Object.keys(arr[0][0].options))
        // setexamquest(arr)
      } catch(error){
        console.error('Error Fetching questions: ', error)
      }
    }
    fetchQuestions()
    // console.log(examquest)
  }, [updatePreviewQuestionExam])
  // console.log(questions)
  return (
    
    
      
      <Box>

        {examquest?.map((data, i) => {
        // const {question, options, id } = data
          return (
          <Box sx={{background:'#fff'}} className='preview-question' key={i}>
            <Box sx={{display:'flex', mr:'20px', mb:'20px'}}>
                {/* {data.img ? <img alt='Question image' style={{ width: '200px', height: '200px', objectFit: 'contain', marginRight: '20px' }} src={`http://127.0.0.1:5000/get_image/${data.img}`}></img> : <></>} */}
              <p>{data.question} </p>

            </Box>
            
            <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="option"
              name="radio-buttons-group"
                >
                  
              {data.options.map((option, i)=>{
                const text = option.text
                // const is_answer = option.is_answer             
                return(
                  <Box sx={{ display: 'flex', mr: '20px', mb: '20px' }}>{
                    option.oimg?<img src={`http://127.0.0.1:5000/get_image/${option.oimg}`} alt='get-image' style={{ width: '100px', height: '100px', objectFit: 'contain', marginRight: '20px' }}  />:<></>
                    }
                    <FormControlLabel key={i}   value="option" control={<Radio /> } label={text} />
                    {/* disabled={!is_answer} */}
                  </Box>
                )
              })}
            </RadioGroup>
          </FormControl>
              </Box>
        )
        })}

      </Box>


  )
}

export default PreviewExamQuestions