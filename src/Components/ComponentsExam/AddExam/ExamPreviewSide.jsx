import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import TimerIcon from '@mui/icons-material/Timer';
import QuizIcon from '@mui/icons-material/Quiz';

const ExamPreviewSide = () => {
    const styleButton = {
        borderRadius:'34px',
        color:'#383838',
        font:'700 16px Lato',
        width:'100%'
    }
  return (
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
              <Box>
              <Typography variant='p' sx={{color:'#707070'}}>Beginner</Typography>
              <Typography sx={{color:'#707070'}}> <TimerIcon />180 Minutes</Typography>

              </Box>
              <Button style={{background:'var(--Linear, linear-gradient(180deg, #8C6FE9 0%, #2D00BA 100%))', color:'#fff'}} sx={styleButton}>Check</Button>
              <Button style={{background:'#fff'}} sx={styleButton}>Edit</Button>

        </Box>
      
    </Box>
  )
}

export default ExamPreviewSide
