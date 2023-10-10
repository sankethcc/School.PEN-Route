import React, { useEffect, useState } from 'react'
import edits  from '../../Data/edit.png'
import { Box } from "@mui/material"
import { State } from '../Context/Provider'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link } from 'react-router-dom'
import { sideDetail } from '../../styles/style';
const SideDetails = ({heading, number}) => {
  const { questions} = State();
  // console.log(questions)
  return (
    
    <Box sx={sideDetail.second} className="side-details">
      <div className="amount-wrapper">
        <p className="price-heading">{heading}</p>
        <p className="price-count">{questions.length}</p>
      </div>
      <h3>Preview</h3>
      
      <Box>
        {questions?.map((data, i) => {
          // console.log(data)
        const {question, options, id } = data
          return (
          // <textarea className='preview-question'>
          <div className='preview-question' key={i}>
            <Link to={`/update/${id}`} >
          <img src={edits} className='edit-logo' alt="" />
            </Link>
            <p>{question}</p>
            
            <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="option"
              name="radio-buttons-group"
            >
              {options.map((option, i)=>{
                const text = option.text
                const is_answer = option.is_answer
                // console.log(is_answer)
                
                return(
                  <FormControlLabel key={i}  disabled={!is_answer} value="option" control={<Radio />} label={text} />
                  
                )
              })}
            </RadioGroup>
          </FormControl>
              </div>
          // </textarea>
        )
        })}

      </Box>

    </Box>
  )
}

export default SideDetails