import React, { useState } from 'react'
import Menu from '../Components/Menu/Menu'
import CreateQuiz from '../Components/ComponentsQuizz/CreateQuiz/CreateQuiz'
import { Box } from '@mui/system'
import AddNewSubject from '../Components/ComponentsQuizz/AddSubject/AddNewSubject'

const AddSubjectSubtopic = () => {
    const [toggle, setToggle] = useState(true)
    const [close, setClose] = useState("")
    const [dBlock, setDBlock] = useState("")
    const [openPage, setOpenPage] = useState("Create Quiz")
    const [openPageName, setOpenPageName] = useState("Create Quiz")

    const toggleMenu = ()=>{
        if(toggle){
        setToggle(!toggle)
        setClose("close-hamburger")
        setDBlock("d-block")
        }else{
        setToggle(!toggle)
        setClose("")
        setDBlock("")
        }
    }

    const handleOpenPage = (page)=>{
        setOpenPage(page)
    }
    const handleOpenPageNameUpdate = (pageName)=>{
        setOpenPageName(pageName)
        console.log(pageName)
    }

  


    const propsForMenu = {toggle, close, toggleMenu, dBlock, handleOpenPage, handleOpenPageNameUpdate, openPage  }
    const propsForCreateQuiz = {openPageName, openPage, handleOpenPage, handleOpenPageNameUpdate }

  return (
    <Box sx={{display:'flex', alignItems:'start'}}>
        <Menu {...propsForMenu} />
        <AddNewSubject />
    </Box>
  )
}

export default AddSubjectSubtopic
