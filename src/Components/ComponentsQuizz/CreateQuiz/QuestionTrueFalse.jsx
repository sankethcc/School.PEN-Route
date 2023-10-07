import React, { useState } from 'react';
import {
  FormControlLabel,
  Box,
  Typography,
  IconButton,
  Button,
  Radio,
  Input,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { State } from '../../Context/Provider';
import axios from 'axios';

const QuestionTrueFalse = ({ handleThreeDotMenu, prop  }) => {

  const { quest, questions, setQuestions } = State();
  const [question, setQuestion] = useState({ text: '', image: null });
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [options, setOptions] = useState([
    { text: '', image: null, answer: false },
    { text: '', image: null, answer: false },
  ]);

  const handleQuestionChange = (event) => {
    setQuestion({ ...question, text: event.target.value });
  };

  const handleRadioChange = (value) => {
    setSelectedAnswer(value);
  };

  const handleOptionChange = (event, index) => {
    const updatedOptions = [...options];
    updatedOptions[index].text = event.target.value;
    setOptions(updatedOptions);
  };



  const handleImageUpload = (event, index, type) => {
    const updatedOptions = [...options];
    if (type === 'question') {
      setQuestion({ ...question, image: event.target.files[0] });
    } else if (type === 'option') {
        updatedOptions[index].image = event.target.files[0];
        setOptions(updatedOptions);
    }
  };

  const handleDeleteOption = (index) => {
    const updatedOptions = [...options];
    updatedOptions[index].text = '';
    setOptions(updatedOptions);
  };

  const handlePostQuestion = () => {
    // const data = {
    const formData = new FormData();
    formData.append('language', quest.Language); 
    formData.append('class', quest.Class);
    formData.append('subject', quest.Subject);
    formData.append('topic', quest.Topic);
    formData.append('subtopic', quest.Sub_topic);
    formData.append('level', quest.Level);
    formData.append('quiz_type', quest.Quiz_Type);
    formData.append('question', question.text);
    formData.append('question_image', question.image);

    const popt = [],QUE=question.text;
    for (let i = 0; i < options.length; i++) {
      const optionText = options[i].text;
      const optionImageInput = options[i].image;
      formData.append(`option_${i + 1}`, optionText);
      formData.append(`option_${i + 1}_image`, optionImageInput);
      const isAnswer = options[i].answer;
      formData.append(`is_answer_${i}`, isAnswer.toString());
      popt.push({text:optionText});
    }
    
    const creatorId = Number("651276d1abd5f9a259c30025");
    axios
    .post(`http://localhost:5000/create_quiz/${creatorId}`, formData)
        .then((response) => {
          if (response.status === 201) {
            // setbool(!bool)
            console.log("Data added successfully");
            try {
              
              setQuestions(oldArray => [{ question: QUE, options: popt },...oldArray])
            }
            catch (err) {
              console.log(err)
            }
          } else {
            alert("Error occured");
          }
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
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
    <Box>
        <Box display="flex" flexDirection="column" alignItems="center" width="100%"
        sx={{
            background:'#fff', width:'100%', mt:'32px', p:'56px 48px', 
            borderRadius:'40px'
        }}
    >
      <Typography sx={{ font: '700 32px Poppins', color: 'var(--grey, #707070)', alignSelf: 'start', pb: '28px' }}>
        Question
      </Typography>
      <Box sx={{display:'flex', width:'100%'}}>
      <Input
        placeholder='Question'
        style={{ ...inputStyle, resize: 'vertical' }}
        value={question.text}
        onChange={handleQuestionChange}
        disableUnderline
      />
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
        <Typography sx={{font:'700 32px Poppins', color:'var(--grey, #707070)',alignSelf:'start', pb:"28px", mt:'28px'}} >Options:</Typography>
        <Box sx={{width:"100%", display:'grid', gridTemplateColumns:"12fr", gridRowGap:'24px'}}>

      {options.map((option, index) => (
        <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: '16px' }}>
          <Radio
            sx={{ '& .MuiSvgIcon-root': { fontSize: 35 }, marginRight: '16px' }}
            checked={selectedAnswer === index}
            onChange={() => handleRadioChange(index)}
          />
          <Input
            placeholder={`${prop[index]}`}
            style={inputStyle}
            value={option.text}
            onChange={(e) => handleOptionChange(e, index)}
            disableUnderline
          />
          <input
            type='file'
            accept='image/*'
            onChange={(e) => handleImageUpload(e, index)}
            style={{ display: 'none' }}
            id={`option-image-upload-${index}`}
          />
          <label htmlFor={`option-image-upload-${index}`}>
            <IconButton component='span' aria-label={`Upload image for Option ${index + 1}`}>
              <AddPhotoAlternateIcon sx={{ fontSize: '37px' }} />
            </IconButton>
          </label>
          <IconButton onClick={() => handleDeleteOption(index)} aria-label={`Delete Option ${index + 1}`}>
            <DeleteOutlineIcon sx={{ fontSize: '37px' }} />
          </IconButton>
        </Box>
      ))}
      </Box>
      </Box>
      <Box sx={{ display: 'flex', width: '100%', mt: '56px', mb: '91px', justifyContent: 'center' }}>
        <Button
          variant='contained'
          onClick={() => {
            handlePostQuestion();
            
          }}
          color='primary'
          sx={{
            width: '375px',
            borderRadius: '12px',
            background: '#7A58E6',
            cursor: 'pointer',
            border: 'none',
            color: '#FFF',
            fontSize: '18px',
            fontWeight: '500',
            textTransform: 'capitalize',
            p: '10px 10px',
            '&:hover': {
              background: '#7A58E6',
            },
          }}
        >
          Post Question
        </Button>
      </Box>
    </Box>
  );
};

export default QuestionTrueFalse;
