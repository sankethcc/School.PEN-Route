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
import ExamPreviewSide from './AddExam/ExamPreviewSide'
const SideDetailsExam = ({heading, number}) => {
  const { questions} = State();
  // console.log(questions)
  return (
    
    <div className="side-details">
      <div className="amount-wrapper">
        <p className="price-heading">{heading}</p>
        <p className="price-count">{questions.length}</p>
      </div>
      <h3>Preview</h3>
      
      <Box>
        <ExamPreviewSide />
      </Box>

    </div>
  )
}

export default SideDetailsExam