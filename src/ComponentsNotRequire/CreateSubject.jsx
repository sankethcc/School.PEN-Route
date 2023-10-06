// import React, { useState } from 'react'
// import Menu from '../QuizP1/Menu/Menu'
// import AddSubject from '../ComponentsQuizz/AddSubject/SbujectsAccordian'
// import SideDetails from "../ComponentsQuizz/AddSubject/AddDetails";


// const CreateSubject = () => {
//    // hamburger functionality for responsive page
//    const [toggle, setToggle] = useState(true)
//    const [close, setClose] = useState("")
//    const [dBlock, setDBlock] = useState("")
//    const toggleMenu = ()=>{
//      if(toggle){
//        setToggle(!toggle)
//        setClose("close-hamburger")
//        setDBlock("d-block")
//      }else{
//        setToggle(!toggle)
//        setClose("")
//        setDBlock("")
//      }
//    }
//    const props = {
//      toggle,
//      close,
//      toggleMenu, 
//      dBlock
//    }
//    return (
//      <div className="main">
//          <div className="main-wrapper">
//              <Menu {...props} />
//              <AddSubject />
//              <SideDetails/>

//          </div>
//      </div>
//    )
// }

// export default CreateSubject
