// import React from "react";

// import Menu from "./Menu/Menu";
// import MainContainer from "./MainContainer";
// import SideDetails from "../ComponentsQuizz/SideDetails";
// import { useState } from "react";


// const Quiz = () => {
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
  


//   const props = {toggle, close, toggleMenu, dBlock,  }
  

//   return (
//     <div className="main">
//       <div className="main-wrapper">
//         {/* meun section */}
//         <Menu {...props}/>
//         {/* middile section  */}
//          <MainContainer {...props} />
//         {/* preview section  */}
//         <SideDetails />
        
//       </div>
//     </div>
//   );
// };

// export default Quiz;
