import React, { useEffect, useState } from 'react'
import { Box } from "@mui/material"
import { State } from '../../Context/Provider'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link } from 'react-router-dom'
import profile from '../../../Data//logo.svg'
import QuestionImg from '../../../Data/QuestionImg.png'
import axios from 'axios'

const PreviewExamQuestions = ({heading, number}) => {
  const [examquest,setexamquest] = useState([])
  useEffect(()=>{
    const fetchQuestions = async ()=>{
      try {
        const creatorId = '65206c78d9a9b6e425e37bb6'
        const { data } = await axios.get(`http://localhost:5000/get_topic/${creatorId}`)
        var arr = [];
        const objects = data.questions
        // console.log(objects)
        // for (var i = 0; i < objects.length; i++) {
        //     arr.push(objects[i]);
        // }
        for (const key in objects) {
          // const value = objects[key];
          arr.push(objects[key])
        }
        console.log(arr[0][0].options)
        setexamquest(arr)
      } catch(error){
        console.error('Error Fetching questions: ', error)
      }
    }
    fetchQuestions()
  }, [])
  // console.log(questions)
  return (
    
    
      
      <Box>

        {examquest?.map((data, i) => {
        // const {question, options, id } = data
          return (
          <Box sx={{background:'#fff'}} className='preview-question' key={i}>
            <Box sx={{display:'flex', mr:'20px', mb:'20px'}}>
              <img alt='Question image' style={{width:'200px', height:'200px', objectFit:'contain', marginRight:'20px'}} src={QuestionImg}></img>
              <p>{data[0].question_text} </p>

            </Box>
            
            <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="option"
              name="radio-buttons-group"
            >
              
              {/* {data.options.map((option, i)=>{
                const text = option.text
                const is_answer = option.is_answer             
                return(
                  <Box sx={{display:'flex', mr:'20px', mb:'20px'}}>
              <img alt='Question image' style={{width:'100px', height:'100px', objectFit:'contain', marginRight:'20px'}} src={QuestionImg} />
                    <FormControlLabel key={i}  disabled={!is_answer} value="option" control={<Radio /> } label={text} />

                  </Box>
                )
              })} */}
            </RadioGroup>
          </FormControl>
              </Box>
        )
        })}

      </Box>


  )
}

export default PreviewExamQuestions