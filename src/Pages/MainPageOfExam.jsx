import React, { useEffect, useState } from 'react'
import Menu from '../Components/Menu/Menu'
import { Box } from '@mui/system'
import CreateExam from '../Components/ComponentsExam/CreateExam'
import { State } from '../Components/Context/Provider'

const MainPageOfExam = () => {
  const {setInstruction, setEligiblity, setLearning} = State()
  const { setexam } = State();

  // useEffect(() => {
  //   const obj={
  //         Subject: "",
  //         Class: "",
  //         Topic: "",
  //         Level: "",
  //         perquest: "",
  //         assigned_time: "",
  //         Quiz_Type: "",
  //         Language: ""
  //   }
  //       setexam (obj);
  //       setInstruction("")
  //       setEligiblity ("")
  //       setLearning("")
  // },[])
  return (
    <Box sx={{display:'flex', alignItems:'start'}}>
        <Menu />
        <CreateExam />
    </Box>
  )
}

export default MainPageOfExam
