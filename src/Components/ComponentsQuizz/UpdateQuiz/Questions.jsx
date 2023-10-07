import React, { useState,useEffect } from 'react';
import {
  TextField,
  Radio,
  FormControlLabel,
  Box,
  IconButton,
  Button,
  Typography,
  Input,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { State } from '../../Context/Provider';

const CreateQuiz = () => {
  const navigate = useNavigate()
  const {quiz_id} = useParams()
  
  const { quest,questions,setquest, setQuestions} = State();
  const [question, setQuestion] = useState({ text: '', question_image_url: null });
  const [options, setOptions] = useState([
    { text: '', image_url: null ,is_answer: false},
    { text: '', image_url: null ,is_answer: false},
    { text: '', image_url: null ,is_answer: false},
    { text: '', image_url: null ,is_answer: false},
  ]);
  const [bool, setbool]=useState(true)
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);

  const handleQuestionChange = (event) => {
    setQuestion({ ...question, text: event.target.value });
  };

  const handleOptionChange = (event, index) => {
    const newOptions = [...options];
    newOptions[index].text = event.target.value;
    setOptions(newOptions);
  };

  const handleRadioChange = (event) => {
    setCorrectAnswerIndex(parseInt(event.target.value, 10));
  };

  const handleDeleteImage = (type) => {
    if (type === 'question') {
      setQuestion({ ...question, question_image_url: null });
    } else if (type === 'option') {
      const newOptions = options.map((option, index) => {
        if (index === correctAnswerIndex) {
          return { ...option, image_url: null };
        }
        return option;
      });
      setOptions(newOptions);
    }
  };

  const handleDeleteOption = (index) => {
    const newOptions = [...options];
    newOptions[index] = { text: '', image_url: null };
    setOptions(newOptions);
    // quest.Language()
  };

  const handleAddOption = () => {
    const newOptions = [...options, { text: '', image_url: null,is_answer: false}];
    setOptions(newOptions);
  };

  const handleImageUpload = (event, index, type) => {
    const newOptions = [...options];
    if (type === 'question') {
      setQuestion({ ...question, question_image_url: event.target.files[0] });
    } else if (type === 'option') {
      newOptions[index].image_url = event.target.files[0];
      setOptions(newOptions);
    }
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
    
    const form = {
      'language': quest.Language,
      'class': quest.Class,
      'subject': quest.Subject,
      'topic': quest.Topic,
      'subtopic': quest.Sub_topic,
      'level': quest.Level,
      'quiz_type': quest.Quiz_Type,
      'question_container': {
          'question': question.text,
          'question_image_url': question.question_image_url,
          'options': options
      }
    }
     
    var usersdata = JSON.parse(localStorage.getItem('user' )) ;
    const creatorId = usersdata.user._id
    // console.log(creatorId)
    // const quiz_id= '651beef47be29762479cf0ef'
    axios
    .put(`http://localhost:5000/update_quizz/${quiz_id}/${creatorId}`, JSON.stringify(form))
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
        
        
      } catch(error){
        console.error('Error Fetching questions: ', error)
      }
     }
     
     fetchstopic()
    
  }, [])
// useEffect(() => {
//     console.log(questions);
//     // setpopt([]);
//     // setprevu({});
//     // setbool(false)
// }, [bool]);
  
  const inputStyle = {
    padding: "11px 27px",
    borderRadius: "12px",
    background: "#EFF3F4",
    width: "100%",
    border: "none",
    color: "#707070",
    fontSize:'18px'
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
        <Typography sx={{font:'700 32px Poppins', color:'var(--grey, #707070)',alignSelf:'start', pb:"28px", mt:'28px'}} >Options:</Typography>
        <Box sx={{width:"100%", display:'grid', gridTemplateColumns:"12fr", gridRowGap:'24px'}}>

                {options.map((option, index) => (
                    <Box key={index} style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between', marginBottom: '8px', width:'100%', gap:'32px' }}>
                    <FormControlLabel
                        value={index.toString()}
                        control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: 35, }}} checked={correctAnswerIndex === index} onChange={handleRadioChange} />}
                        label=""
                        labelPlacement="start"
                        
                    />
                    <Input
                        placeholder={`Option ${index+1}`}
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
        <Typography sx={{cursor:'pointer', color:'#7A58E6', font:'700 20px Poppins', alignSelf:'end', mt:'32px'}} onClick={handleAddOption} aria-label="Add option" >Add Another Options</Typography>
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

export default CreateQuiz;