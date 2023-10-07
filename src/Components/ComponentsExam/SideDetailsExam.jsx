import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import TimerIcon from '@mui/icons-material/Timer';
import QuizIcon from '@mui/icons-material/Quiz';
import { Link,NavLink, useNavigate } from 'react-router-dom';
import {State} from '../Context/Provider'

const SideDetailsExam = ({heading}) => {
  const { Exams} = State();
  const navigate = useNavigate()
    const styleButton = {
        borderRadius:'34px',
        color:'#383838',
        font:'700 16px Lato',
        width:'100%'
  }
  
  return (
    <div className="side-details">
      <div className="amount-wrapper">
        <p className="price-heading">{heading}</p>
        <p className="price-count">{Exams.length}</p>
      </div>
      <h3>Preview</h3>
      
      <Box>
    <Box 
    >
      {Exams?.map((data, i) => {

          return (
        <Box 
        style={{background:'#F5F6F7'}}
        sx={{display:'grid', 
        gridTemplateColumns:'6fr 6fr', 
        gridRowGap:'17px',
        gridColumnGap:'16px',
        px:'32px', pb:'18px', pt:'25px',
        width:'100%', borderRadius:'32px',
        mb:'21px'

        }}>
              <Typography sx={{ font: '700 24px Poppins', color: '#383838', }} variant='h4'>{data.topic_name}</Typography>
              <Typography sx={{ font: '700 24px Poppins', color: '#383838', }} variant='h4'>{data.topic_class}</Typography>
              <Box>
                <Typography sx={{ font: '700 16px Lato', mb: '15px' }} variant='p'>{data.subject}</Typography>
                <Typography sx={{ color: '#707070' }}> <QuizIcon /> {data.no_of_questions}</Typography>

              </Box>
              <Box >
              <Typography variant='p' sx={{color:'#707070', mb:'30px'}}>{data.level}</Typography>
                <Typography sx={{ color: '#707070' }}> <TimerIcon />{data.assigned_time}</Typography>

              </Box>
              <NavLink to={'preview'}>
              <Button style={{background:'var(--Linear, linear-gradient(180deg, #8C6FE9 0%, #2D00BA 100%))', color:'#fff'}} sx={styleButton}>Check</Button>
              </NavLink>
              <Button style={{background:'#fff'}} sx={styleButton}>Edit</Button>

        </Box>
      )
        })}
    </Box>
    </Box>

</div>
  )
}

export default SideDetailsExam