// import React, { useState } from "react";
// import imports from "../assets/imports.png";
// import Language from "./Language";
// import FillDetails from "../ComponentsQuizz/AddSubject/FillDetails";
// import InputQuestion from "./InputQuestion";
// import ProfileWrapper from "./ProfileWrapper";

// const MainContainer = ({ close, toggleMenu, }) => {

//   // const [input, setInput] = useState([]);
//   // const onChange = (e) => {
//   //   setInput(e.target.value);
//   // };
//   const [quizData, setQuizData] = useState({
//     language: '',
//     class: '',
//     subject:'',
//     topic: '',
//     subtopic: '',
//     level: '',
//     quizType: '',
//     questionContainer: {
//       question: '',
//       options: {
//         option1: '',
//         option2: '',
//         option3: '',
//         option4: '',
//       },
//     },
//   });
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
    
  


//       // Split the name into an array to handle nested properties
//       const nameArray = name.split('.');
  
//       // Create a copy of the quizData to avoid mutating state directly
//       const updatedQuizData = { ...quizData };
  
//       // Traverse the nested structure to update the correct property
//       let target = updatedQuizData;
//       for (let i = 0; i < nameArray.length - 1; i++) {
//         target = target[nameArray[i]];
//       }
//       target[nameArray[nameArray.length - 1]] = value;
  
//       // Update the state
//       setQuizData(updatedQuizData);
    
//   };
  

//   const handleCreateQuizz = () => {
//     console.log(quizData)
//   };

//   return (
//     <div className="main-container">
//       <ProfileWrapper toggleMenu={toggleMenu} close={close} name='Create Quiz' />
//       <Language quizData={quizData} handleInputChange={handleInputChange}  />
//       <FillDetails quizData={quizData} handleInputChange={handleInputChange} />
//       <div className="question-wrapper">
//         <h3>Question</h3>
//         <div className="input-question">
//         <input
//           type="text"
//           name="questionContainer.question"
//           value={quizData?.questionContainer?.question || ''}
//           onChange={handleInputChange}
//           placeholder="Question"
//           className="text-field"
//         />

//           <img className="imports" src={imports} alt="" />
//         </div>
//         <h3>Options:</h3>
//         <div>
//           <InputQuestion value="1" quizData={quizData.questionContainer.options.option1} handleInputChange={handleInputChange} />
//           <InputQuestion value="2" quizData={quizData.questionContainer.options.option2} handleInputChange={handleInputChange} />
//           <InputQuestion value="3" quizData={quizData.questionContainer.options.option3} handleInputChange={handleInputChange} />
//           <InputQuestion value="4" quizData={quizData.questionContainer.options.option4} handleInputChange={handleInputChange} />
//         </div>
//         <p className="add-another">Add another option</p>
//       </div>
//       <div className="btn-div">
//         <button onClick={handleCreateQuizz}>Post</button>
//       </div>
//     </div>
//   );
// };

// export default MainContainer;
