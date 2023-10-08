import React, { useState,useEffect } from 'react'
import Menu from '../Components/Menu/Menu'
import CreateQuiz from '../Components/ComponentsQuizz/CreateQuiz/CreateQuiz'
import { Box } from '@mui/system'
import { State } from '../Components/Context/Provider'
  

const MainPageOfQuiz = () => {
  const { setquest } = State();
  useEffect(() => {
    setquest({
    Subject: "",
    Class: "",
    Topic: "",
    Sub_topic: "",
    Level: "",
    Quiz_Type: "",
    Language: "",
    
  })
  },[])
  return (
    <Box sx={{display:'flex', alignItems:'start'}}>
        <Menu  />
        <CreateQuiz />
    </Box>
  )
}

export default MainPageOfQuiz
