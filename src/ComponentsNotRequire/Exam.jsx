// import React from "react";
// import { Box } from '@mui/material'

// import { useState } from "react";
// import Menu from "../QuizP1/Menu/Menu";
// import SideDetails from "../ComponentsQuizz/SideDetails";
// import MiddleColumn from "./MiddleColumn";



// const Exam = () => {
//   // hamburger functionality for responsive page
//   const [toggle, setToggle] = useState(true)
//   const [close, setClose] = useState("")
//   const [dBlock, setDBlock] = useState("")
//   const toggleMenu = ()=>{
//     if(toggle){
//       setToggle(!toggle)
//       setClose("close-hamburger")
//       setDBlock("d-block")
//     }else{
//       setToggle(!toggle)
//       setClose("")
//       setDBlock("")
//     }
//   }
//   const props = {
//     toggle,
//     close,
//     toggleMenu, 
//     dBlock
//   }

//   return (
//     <Box sx={{width:'100%', display:'flex'}} >
//       <Menu {...props} />
//       <MiddleColumn />
//       <SideDetails />
//     </Box>
//   );
// };

// export default Exam;
