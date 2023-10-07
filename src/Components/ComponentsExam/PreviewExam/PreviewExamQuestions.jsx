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

const PreviewExamQuestions = ({heading, number}) => {
  const { questions} = State();
  // console.log(questions)
  return (
    
    
      
      <Box>

        {questions?.map((data, i) => {
        const {question, options, id } = data
          return (
          <Box sx={{background:'#fff'}} className='preview-question' key={i}>
            <Box sx={{display:'flex', mr:'20px', mb:'20px'}}>
              <img alt='Question image' style={{width:'200px', height:'200px', objectFit:'contain', marginRight:'20px'}} src={QuestionImg}></img>
              <p>Tadoba national park known for sheltering tiger, panther and bear is located in: </p>

            </Box>
            
            <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="option"
              name="radio-buttons-group"
            >
              {options.map((option, i)=>{
                const text = option.text
                const is_answer = option.is_answer             
                return(
                  <Box sx={{display:'flex', mr:'20px', mb:'20px'}}>
              <img alt='Question image' style={{width:'100px', height:'100px', objectFit:'contain', marginRight:'20px'}} src={QuestionImg} />
                    <FormControlLabel key={i}  disabled={!is_answer} value="option" control={<Radio /> } label={text} />

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