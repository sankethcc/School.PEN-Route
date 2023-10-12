import React, { useEffect, useState } from 'react';
import {
  FormControlLabel,
  Box,
  Typography,
  IconButton,
  Button,
  Radio,
  Input,
  TextField,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { State } from "../../Context/Provider"
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { qStyle } from '../../../styles/style';

const QuestionTrueFalseUpdate = ({ handleThreeDotMenu, prop  }) => {
  const navigate = useNavigate()
  const {quiz_id} = useParams()


  const { quest,questions,setquest, setQuestions} = State();
  const [question, setQuestion] = useState({ text: '', question_image_url: null });
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [options, setOptions] = useState([
    { text: '', image: null, is_answer: false },
    { text: '', image: null, is_answer: false },
  ]);
  const [explanation, setExplanation] = useState('')

  const handleExplanationChange = (event)=>{
    setExplanation(event.target.value)
  }

  const handleQuestionChange = (event) => {
    setQuestion({ ...question, text: event.target.value });
  };

  const handleRadioChange = (event, selectedIndex) => {
    
    const newOptions = options.map((option, index) => ({
      ...option,
      is_answer: index === selectedIndex,
    }));
  
    setOptions(newOptions);
    setSelectedAnswer(selectedIndex);
    console.log(selectedIndex)
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

  const handleDeleteQuestion = () => {
    var usersdata = JSON.parse(localStorage.getItem('user' )) ;
    const creatorId = usersdata.user._id
    // console.log(creatorId)
    // const quiz_id= '651beef47be29762479cf0ef'
      axios
    .delete(`http://localhost:5000/delete_quizz/${quiz_id}/${creatorId}`)
        .then((response) => {
          if (response.status === 200) {
            // setbool(!bool)
            console.log("Data updated successfully");
            
          } else {
            alert("Error occured");
          }
        })
        .catch((err) => {
          console.log(err.response.data);
        });
  }
  const handlePostQuestion = () => {
    
    const formData = new FormData();
    formData.append('language', quest.Language);
    formData.append('class', quest.Class);
    formData.append('subject', quest.Subject);
    formData.append('topic', quest.Topic);
    formData.append('subtopic',  quest.Sub_topic);
    formData.append('level', quest.Level);
    formData.append('quiz_type',  quest.Quiz_Type);
    formData.append('question', question.text);
    formData.append('question_image', question.question_image_url);

    for (let i = 0; i < options.length; i++) {
      const optionText = options[i].text;
      const optionImageInput = options[i].image_url;
      formData.append(`option_${i + 1}`, optionText);
      formData.append(`option_${i + 1}_image`, optionImageInput);
      const isAnswer = options[i].is_answer;
      formData.append(`is_answer_${i + 1}`, isAnswer.toString());
    }
     
    var usersdata = JSON.parse(localStorage.getItem('user' )) ;
    const creatorId = usersdata.user._id
    console.log(creatorId)
    // const quiz_id= '651beef47be29762479cf0ef'
    axios
    .put(`http://localhost:5000/update_quizz/${quiz_id}/${creatorId}`, formData)
        .then((response) => {
          if (response.status === 200) {
            // setbool(!bool)
            console.log("Data updated successfully");
            
          } else {
            alert("Error occured");
          }
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    
    // console.log('Posted Question:', { question, options, correctAnswerIndex });
  };
  useEffect(()=>{
    const fetchstopic = async ()=>{
      try {
        const { data } = await axios.get(`http://localhost:5000/get_quizz/${quiz_id}`)
        // const temp= JSON.parse(data)
        // console.log(data.class)
        const obj = {
          Language: data.language,
          Class: data.class,
          Topic: data.topic,
          Level: data.level,
          Quiz_Type: data.quiz_type,
          Subject: data.subject,
          Sub_topic: data.subtopic
        }
        setOptions(data.question_container.options)
        setQuestion({ text: data.question_container.question, question_image_url: data.question_container.question_image_url })
        // console.log(obj)
        setquest(obj)
        data.question_container.options.map((option, i)=>{
          if(option.is_answer == true){
            setSelectedAnswer(i)
          }
        })
        
        
      } catch(error){
        console.error('Error Fetching questions: ', error)
      }
     }
     
     fetchstopic()
  }, [])
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
       sx={qStyle.question}
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
        disableUnderline = {true}
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
            onClick={(e) => handleRadioChange(e,index)}
          />
          <Input
            placeholder={`${prop[index]}`}
            style={inputStyle}
            value={option.text}
            onChange={(e) => handleOptionChange(e, index)}
            disableUnderline = {true}
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
      <Box sx={{width:'100%'}}>
        <Typography sx={{font:'700 32px Poppins', color:'var(--grey, #707070)',alignSelf:'start', pb:"28px", mt:'28px'}} >Explanation</Typography>
          <TextField 
           InputProps={{ style: { background:'#EFF3F4', paddingLeft: '20px', borderRadius:'12px'} }}
           multiline
           placeholder='Explain the answer'
           fullWidth
           minRows={2}
           sx={{border: 'none',"& fieldset": { border: 'none' },}}
           value={explanation}
           onChange={handleExplanationChange}

          
          />
        </Box>
      </Box>
      <Box sx={{display:'flex', width:"100%", mt:'56px', mb:'91px', justifyContent:'space-between'}}>
      <Button variant="contained" onClick={()=>{
        handlePostQuestion()
        navigate('/admin')
      }} 
        color="primary"
        sx={{
            width: "40%",
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
      >
        Update Question
      </Button>
      <Button variant="contained" onClick={()=>{
        handleDeleteQuestion()
        navigate('/admin')
      }} 
        color="primary"
        sx={{
            width: "40%",
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
      >
        Delete Question
      </Button>


    </Box>

    </Box>
  );
};

export default QuestionTrueFalseUpdate;
