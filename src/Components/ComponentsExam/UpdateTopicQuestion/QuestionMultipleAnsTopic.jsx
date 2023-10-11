import React, { useState, useEffect } from 'react';
import {
  Checkbox,  FormControlLabel,
  Box,
  Typography,
  TextField,
  Radio,
  IconButton,
  Button,
  Input,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ClearIcon from '@mui/icons-material/Clear';
import { State } from "../../Context/Provider"
import axios from 'axios';

const QuestionMultipleAnsTopic = (props) => {
  const answer = props.answer.split(',')
  const { setexamquest,exam,examid,setexamid, quest} = State();
  const [question, setQuestion] = useState({ text: props.question, image: null });
  const [options, setOptions] = useState([]);
  const [selectedAnswerIndices, setSelectedAnswerIndices] = useState([]);
  const [drop, setdrop] = useState(props.type);
  useEffect(()=>{
    
  },[])
  useEffect(() => {
    setOptions([])
    const arr = Object.values(props.options)
    for (let i = 0; i < arr.length; i+=2){
       setOptions(oldArray => [...oldArray,{text: arr[i], image:null}])
    }
    const corrAns = answer.map((ans)=>parseInt(ans-1))
    setSelectedAnswerIndices(corrAns)
  }, [])
  
  const handleQuestionChange = (event) => {
    setQuestion({ ...question, text: event.target.value });
  };


  const handleOptionChange = (event, index) => {
    const newOptions = [...options];
    newOptions[index].text = event.target.value;
    setOptions(newOptions);
  };

  const handleCheckboxChange = (event,index) => {
    const newSelectedIndices = [...selectedAnswerIndices];
    const currentIndex = newSelectedIndices.indexOf(index);
  
    if (currentIndex === -1) {
      newSelectedIndices.push(index);
    } else {
      newSelectedIndices.splice(currentIndex, 1);
    }
  
    // Update the options with the new answer states
    const updatedOptions = options.map((option, i) => ({
      ...option,
      is_answer: newSelectedIndices.includes(i),
    }));
  
    setSelectedAnswerIndices(newSelectedIndices);
  
  };

  const handleDeleteImage = (type) => {
    if (type === 'question') {
      setQuestion({ ...question, image: null });
    } else if (type === 'option') {
      const newOptions = options.map((option, index) => {
        if (index === selectedAnswerIndices) {
          return { ...option, image: null };
        }
        return option;
      });
      setOptions(newOptions);
    }
  };
  const handleDeleteOption = (index) => {
    const newOptions = [...options];
        newOptions[index] = { text: '', image: null };
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    const newOptions = [...options, { text: '', image: null}];
    setOptions(newOptions);
  };

  const handleImageUpload = (event, index, type) => {
    const newOptions = [...options];
    if (type === 'question') {
      setQuestion({ ...question, image: event.target.files[0] });
    } else if (type === 'option') {
      newOptions[index].image = event.target.files[0];
      setOptions(newOptions);
    }
  };

   const handlePostQuestion = () => {
    // const data = {
      const selectedAns = selectedAnswerIndices.map((ans)=>ans+1)
    const formData = new FormData();
    // formData.append('question_no', examid.qno); 
    formData.append('question_type', drop);
    formData.append('question_text', question.text);
    formData.append('question_image', question.image);
    formData.append('answer', selectedAns);

    for (let i = 0; i < options.length; i++) {
      const optionText = options[i].text;
      const optionImageInput = options[i].image;
      formData.append(`option${i + 1}`, optionText);
      formData.append(`option${i + 1}_image`, optionImageInput); 
    }
    
    axios
    .post(`http://localhost:5000/update_question/${examid.id}/${props.qno}`, formData)
        .then((response) => {
          if (response.status === 201) {
            console.log("Data added successfully");
            //  console.log(response.data);
            setexamid({ id: examid.id, qno: (examid.qno + 1) })
            setexamquest(oldArray => [ ...oldArray,response.data])
          }
          else {
             console.log(response);
          }
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    
    
    // console.log('Posted Question:', { question, options, correctAnswerIndex });
  };
  const inputStyle = {
    padding: '11px 27px',
    borderRadius: '12px',
    background: '#EFF3F4',
    width: '100%',
    border: 'none',
    color: '#707070',
    fontSize: '18px',
  };

  return (
    <Box >
    <Box display="flex" flexDirection="column" alignItems="center" width="100%"
        sx={{
            background:'#fff', width:'100%', mt:'32px', p:'56px 48px', 
            borderRadius:'40px'
        }}
    >
        <Typography sx={{font:'700 32px Poppins', color:'var(--grey, #707070)',alignSelf:'start', pb:"28px"}} >Question</Typography>
        <Box sx={{display:'flex', width:'100%'}}>

            <Input
                disableUnderline
                placeholder='Question'
                multiline
                fullWidth
                value={question.text}
                onChange={handleQuestionChange}
                style={inputStyle}
                sx={{
                    color:'var(--grey, #707070)'
                }}
            />
                {/* <IconButton onClick={() => setQuestion({ ...question, text: '' })} aria-label="Clear question">
                <DeleteOutlineIcon />
                </IconButton> */}
                <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, null, 'question')}
                style={{ display: 'none' }}
                id="question-image-upload"
                />
                <label htmlFor="question-image-upload">
                <IconButton component="span" aria-label="Upload image">
                    <AddPhotoAlternateIcon sx={{fontSize:'37px'}} />
                </IconButton>
                </label>
        </Box>
        <Typography sx={{ font: '700 32px Poppins', color: 'var(--grey, #707070)', alignSelf: 'start', pb: "28px" }}>Options:</Typography>
      <Box sx={{ width: "100%", display: 'grid', gridTemplateColumns: "12fr", gridRowGap: '24px' }}>
        {options.map((option, index) => (
          <Box key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', width: '100%', gap: '32px' }}>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                  checked={selectedAnswerIndices.includes(index)}
                  onChange={(event) => handleCheckboxChange(event, index)}
                />
              }
              label=""
              labelPlacement="start"
            />
            <input
              placeholder={`Option ${index + 1}`}
              style={inputStyle}
              disableUnderline
              value={option.text}
              onChange={(e) => handleOptionChange(e, index)}
              variant="outlined"
            />
                    <Box display="flex" alignItems="center">
                        {/* {option.image && (
                        <IconButton
                            onClick={() => handleDeleteImage('option')}
                            aria-label={`Delete image for Option ${index + 1}`}
                            s
                        >
                            <DeleteOutlineIcon size="large" />
                        </IconButton>
                        )} */}


                        <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, index, 'option')}
                        style={{ display: 'none' }}
                        id={`option-image-upload-${index}`}
                        />
                        <label htmlFor={`option-image-upload-${index}`}>
                        <IconButton component="span" aria-label={`Upload image for Option ${index + 1}`}>
                            <AddPhotoAlternateIcon sx={{fontSize:'37px'}} />
                        </IconButton>
                        </label>
                        <IconButton onClick={() => handleDeleteOption(index)} aria-label={`Clear Option ${index + 1}`}>
                        <DeleteOutlineIcon sx={{fontSize:'37px'}} />
                        </IconButton>
                    </Box>
                    </Box>
                ))}
        </Box>
        <Box sx={{display:'grid', gridTemplateColumns:'4fr 4fr 4fr', justifyContent:'center', mt:'32px'}}>
          <span></span>
          <Box sx={{textAlign:'center'}}>
            <Button
              onClick={()=>{
                handlePostQuestion()
              }} 
            sx={{
              width: "60%",
              borderRadius: "12px",
              background: "#7A58E6",
              cursor: "pointer",
              border: "none",
              color: "#FFF",
              fontSize: "18px",
              fontWeight: "500",
              textTransform: "capitalize",
              p: "10px 10px",
              "&:hover": {
                background: "#7A58E6",
              },
            }}
            >Update</Button>

          </Box>
          <Box sx={{display:'flex'}}>
              <Typography sx={{cursor:'pointer', color:'#7A58E6', font:'700 20px Poppins', alignSelf:'center',}} onClick={handleAddOption} aria-label="Add option" >Add Another Options</Typography>

          </Box>
        </Box>
    </Box>
    </Box>
  );
};

export default QuestionMultipleAnsTopic;
