// import React from "react";


// import { useState } from "react";
// import Menu from "../QuizP1/Menu/Menu";
// import Assign from "../src/Components/ComponentsAssignUser/AssignUser/Assign";
// import TotalUser from "../src/Components/ComponentsAssignUser/AssignUser/TotalUser";


// const User = () => {
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
//     <div className="main-wrapper">
//         <Menu {...props} />
//         <Assign />
//         <TotalUser />
//     </div>
//   );
// };

// export default User;
