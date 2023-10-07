import { Box } from "@mui/material"
import { State } from '../Context/Provider'
import { Button, Typography } from '@mui/material'
import React from 'react'
import TimerIcon from '@mui/icons-material/Timer';
import QuizIcon from '@mui/icons-material/Quiz';
import { Link, useNavigate } from 'react-router-dom';
const SideDetailsExam = ({heading, number}) => {
  const { questions} = State();
  const navigate = useNavigate()
  const styleButton = {
      borderRadius:'34px',
      color:'#383838',
      font:'700 16px Lato',
      width:'100%'
  }
  // console.log(questions)
  return (
    
    <div className="side-details">
      <div className="amount-wrapper">
        <p className="price-heading">{heading}</p>
        <p className="price-count">{questions.length}</p>
      </div>
      <h3>Preview</h3>
      
      <Box>
      <Box 
    >
        <Box 
        style={{background:'#F5F6F7'}}
        sx={{display:'grid', 
        gridTemplateColumns:'6fr 6fr', 
        gridRowGap:'17px',
        gridColumnGap:'16px',
        px:'32px', pb:'18px', pt:'25px',
        width:'100%', borderRadius:'32px'

        }}>
              <Typography sx={{font:'700 24px Poppins',  color:'#383838',}} variant='h4'>Mathematics</Typography>
              <Typography sx={{font:'700 24px Poppins',  color:'#383838',}} variant='h4'>12</Typography>
              <Box>
              <Typography sx={{font:'700 16px Lato', mb:'15px'}} variant='p'>Trigonometry</Typography>
              <Typography sx={{color:'#707070'}}> <QuizIcon /> 90 Questions</Typography>

              </Box>
              <Box >
              <Typography variant='p' sx={{color:'#707070', mb:'30px'}}>Beginner</Typography>
              <Typography sx={{color:'#707070'}}> <TimerIcon />180 Minutes</Typography>

              </Box>
              <Link to={'preview'}>
              <Button style={{background:'var(--Linear, linear-gradient(180deg, #8C6FE9 0%, #2D00BA 100%))', color:'#fff'}} sx={styleButton}>Check</Button>
              </Link>
              <Button style={{background:'#fff'}} sx={styleButton}>Edit</Button>

        </Box>
      
    </Box>
      </Box>

    </div>
  )
}

export default SideDetailsExam