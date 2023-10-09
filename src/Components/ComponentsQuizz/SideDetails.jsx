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
const SideDetails = ({heading, number}) => {
  const { questions} = State();
  // console.log(questions)
  const list = {
    overflowY: "auto",
    margin: 0,
    padding: 0,
    listStyle: "none",
    height: "100%",
    zIndex:'10',
    '&::-webkit-scrollbar': {
      width: '0.2em'
    },
    '&::-webkit-scrollbar-track': {
      
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey'
    }
  }

  return (
    
    <Box sx={{position:'fixed', top:'0', right:'0', width:'26%', p:'38px 24px'}} className="side-details">
      <div className="amount-wrapper">
        <p className="price-heading">{heading}</p>
        <p className="price-count">{questions.length}</p>
      </div>
      <h3>Preview</h3>
      
      <Box style={{overflowY:'scroll', height:'65dvh'}} sx={list}>
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