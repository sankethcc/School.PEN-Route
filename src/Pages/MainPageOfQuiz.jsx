import React, { useState } from 'react'
import Menu from '../Components/Menu/Menu'
import CreateQuiz from '../Components/ComponentsQuizz/CreateQuiz/CreateQuiz'
import { Box } from '@mui/system'

const MainPageOfQuiz = () => {

  return (
    <Box sx={{display:'flex', alignItems:'start'}}>
        <Menu  />
        <CreateQuiz />
    </Box>
  )
}

export default MainPageOfQuiz
