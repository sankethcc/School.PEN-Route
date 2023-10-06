// import React, { useState } from 'react'
// import Menu from '../QuizP1/Menu/Menu'
// import MainContainer from './MainContainer'
// import AddDetails from '../ComponentsQuizz/AddSubject/AddDetails'

// const Page2 = () => {
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
//     <div className="main">
//         <div className="main-wrapper">
//             <Menu {...props} />
//             <MainContainer {...props} />
//             {/* <AddDetails /> */}
//         </div>
//     </div>
//   )
// }

// export default Page2
