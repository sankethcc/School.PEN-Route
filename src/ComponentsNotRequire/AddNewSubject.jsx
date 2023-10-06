// import React, { useState } from 'react';
// import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
// import { Box } from '@mui/system';
// import { styled } from '@mui/system';

// const StyledSelect = styled(Select)`
//   background: #F5F6F7;
//   width: 100%;
//   padding: 14px 10px 14px 21px;
//   border-radius: 12px;
//   text-align: left;
//   line-height: 1.5;

//   &.Mui-focused {
//     border-color: none;
//     outline: 3px solid #99CCF3;
//   }

//   &.Mui-expanded::after {
//     content: '▴';
//   }

//   &::after {
//     content: '▾';
//     float: right;
//   }
// `;

// const StyledMenuItem = styled(MenuItem)`
//   list-style: none;
//   padding: 8px;
//   padding-left: 32px;
//   border-radius: 8px;
//   cursor: pointer;
//   color: #707070;

//   &:last-of-type {
//     border-bottom: none;
//   }
// `;

// const AddSubjectComponent = () => {
//   const [selectedSubject, setSelectedSubject] = useState('');
//   const [selectedTopic, setSelectedTopic] = useState('');
//   const [subject, setSubject] = useState('');
//   const [topic, setTopic] = useState('');
//   const [subtopic, setSubtopic] = useState('');
//   const [data, setData] = useState({
//     subjects: [],
//   });

//   const subjects = ['Math', 'Science'];  // Replace with your subject data
//   const topics = {
//     Math: ['Algebra', 'Geometry'],      // Replace with your topic data
//     Science: ['Physics', 'Biology']      // Replace with your topic data
//   };

//   const handleAdd = () => {
//     const newData = { ...data };

//     if (subject) {
//       const newSubject = { name: subject, topics: [] };

//       if (topic) {
//         const newTopic = { name: topic, subtopics: [] };

//         if (subtopic) {
//           newTopic.subtopics.push(subtopic);
//         }

//         newSubject.topics.push(newTopic);
//       }

//       newData.subjects.push(newSubject);
//     }

//     setData(newData);
//     console.log('Data:', newData);
//     setSubject('');
//     setTopic('');
//     setSubtopic('');
//   };

//   return (
//     <Box>
//     <Box sx={{width:"100%", }}>
//       <h3>Add Subject, Topic, or Subtopic</h3>

//       <FormControl style={{ width:'100%' }}>
//         <StyledSelect
//           value={selectedSubject}
//           onChange={(e) => setSelectedSubject(e.target.value)}
//         >

//           {subjects.map((subject, index) => (
//             <StyledMenuItem key={index} value={subject}>
//               {subject}
//             </StyledMenuItem>
//           ))}
//           <MenuItem value="AddNewSubject">Add New Subject</MenuItem>
//         </StyledSelect>
//       </FormControl>

//       {selectedSubject === 'AddNewSubject' && (
//         <div>
//           <TextField
//             type="text"
//             label="Enter new subject"
//             value={subject}
//             onChange={(e) => setSubject(e.target.value)}
//           />
//           <TextField
//             type="text"
//             label="Enter new topic"
//             value={topic}
//             onChange={(e) => setTopic(e.target.value)}
//           />
//           <TextField
//             type="text"
//             label="Enter new subtopic"
//             value={subtopic}
//             onChange={(e) => setSubtopic(e.target.value)}
//           />
//         </div>
//       )}

//       {selectedSubject && selectedSubject !== 'AddNewSubject' && (
//         <FormControl style={{ width:'100%' }}>
//           <StyledSelect
//             value={selectedTopic}
//             onChange={(e) => setSelectedTopic(e.target.value)}
//           >
//             <MenuItem value="">
//               <em>-- Select Topic --</em>
//             </MenuItem>
//             {topics[selectedSubject].map((topic, index) => (
//               <StyledMenuItem key={index} value={topic}>
//                 {topic}
//               </StyledMenuItem>
//             ))}
//             <MenuItem value="AddNewTopic">Add New Topic</MenuItem>
//           </StyledSelect>
//         </FormControl>
//       )}

//       {selectedTopic === 'AddNewTopic' && (
//         <div>
//           <TextField
//             type="text"
//             label="Enter new topic"
//             value={topic}
//             onChange={(e) => setTopic(e.target.value)}
//           />
//         </div>
//       )}

//       {selectedTopic && selectedTopic !== 'AddNewTopic' && (
//         <div>
//           <TextField
//             type="text"
//             label="Enter subtopic"
//             value={subtopic}
//             onChange={(e) => setSubtopic(e.target.value)}
//           />
//         </div>
//       )}
//     </Box>

//       <Button variant="contained" color="primary" onClick={handleAdd}>
//         Add
//       </Button>
//     </Box>
//   );
// };

// export default AddSubjectComponent;
