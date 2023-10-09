import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Input,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import User from '../../../Data/User.png'
const PreviewExamEdit = ({ open, setOpen, handleOpen }) => {
  const inputStyle = {
    borderRadius: "8px",
    paddingY:'12px',
    background: "#EFF3F4",
    width: "100%",
    border: "none",
    color: "#707070",
    fontSize: "14px",

  };
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
  const [question, setQuestion] = useState({ text: "", image: null });
  const [options, setOptions] = useState([
    { text: "", image: null },
    { text: "", image: null },
    { text: "", image: null },
    { text: "", image: null },
  ]);

  const handleQuestionChange = (event) => {
    setQuestion({ ...question, text: event.target.value });
  };

  const handleOptionChange = (event, index) => {
    const newOptions = [...options];
    newOptions[index].text = event.target.value;
    setOptions(newOptions);
  };

  const handleRadioChange = (event, index) => {
    const selectedIndex = parseInt(event.target.value, 10);
    setCorrectAnswerIndex(index);
  };

  const handleDeleteImage = (type) => {
    if (type === "question") {
      setQuestion({ ...question, image: null });
    } else if (type === "option") {
      const newOptions = options.map((option, index) => {
        if (index === correctAnswerIndex) {
          return { ...option, image: null };
        }
        return option;
      });
      setOptions(newOptions);
    }
  };

  const handleDeleteOption = (index) => {
    const newOptions = [...options];
    newOptions[index] = { text: "", image: null };
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    const newOptions = [...options, { text: "", image: null }];
    setOptions(newOptions);
  };

  const handleImageUpload = (event, index, type) => {
    const newOptions = [...options];
    if (type === "question") {
      setQuestion({ ...question, image: event.target.files[0] });
    } else if (type === "option") {
      newOptions[index].image = event.target.files[0];
      setOptions(newOptions);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    // Handle adding the subject
    // ...

    // Close the dialog
    handleClose();
  };
  return (
    <Dialog sx={{width:'100vw'}}  open={open} onClose={handleClose}>
      <DialogTitle sx={{fontSize:'18px'}}>Update Question</DialogTitle>
      <DialogContent sx={{  display: "flex", justifyContent: "center" }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
          sx={{
            background: "#fff",
            width: "100%",
            borderRadius: "40px",
          }}
        >
          <Typography
            sx={{
              font: "700 15px Poppins",
              color: "var(--grey, #707070)",
              alignSelf: "start",
              pb: "10px",
            }}
          >
            Question
          </Typography>
          <Box sx={{ display: "flex", width: "100%" }}>
            <img style={{height:'80px', width:'80px', objectFit:'contain'}} src={User}></img>
            <Box sx={{display:'grid', width:'100%', gridTemplateColumns:'10fr 2fr'}}>
            <Box>

            <Input
              disableUnderline
              placeholder="Question"
            //   multiline
              fullWidth
              // value={question.text}
              // onChange={handleQuestionChange}
              style={inputStyle}
              sx={{
                color: "var(--grey, #707070)",
                p:'0px 10px'

                
              }}
            />
            </Box>
            {/* <IconButton onClick={() => setQuestion({ ...question, text: '' })} aria-label="Clear question">
                <DeleteOutlineIcon />
                </IconButton> */}
            <input
              type="file"
              accept="image/*"
              // onChange={(e) => handleImageUpload(e, null, 'question')}
              style={{ display: "none" }}
              id="question-image-upload"
            />
            <label htmlFor="question-image-upload">
              <IconButton component="span" aria-label="Upload image">
                <AddPhotoAlternateIcon sx={{ fontSize: "20px" }} />
              </IconButton>
            </label>
            </Box>
          </Box>
          <Typography
            sx={{
              font: "700 15px Poppins",
              color: "var(--grey, #707070)",
              alignSelf: "start",

            }}
          >
            Options:
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "12fr",
            }}
          >
            {options.map((option, index) => (
              <Box
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                  width: "100%",
                  gap: "32px",
                }}
              >
                <FormControlLabel
                  value={index.toString()}
                  control={
                    <Radio
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 20 }, padding:0 }}
                      checked={correctAnswerIndex === index}
                      onClick={(e) => handleRadioChange(e, index)}
                    />
                  }
                  label=""
                  labelPlacement="start"
                />
                <Input
                  placeholder={`Option ${index + 1}`}
                  style={inputStyle}
                  disableUnderline
                  value={option.text}
                  onChange={(e) => handleOptionChange(e, index)}
                  variant="outlined"
                  sx={{p:'0px 10px'}}
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
                    onChange={(e) => handleImageUpload(e, index, "option")}
                    style={{ display: "none" }}
                    id={`option-image-upload-${index}`}
                  />
                  <label htmlFor={`option-image-upload-${index}`}>
                    <IconButton
                      component="span"
                      aria-label={`Upload image for Option ${index + 1}`}
                    >
                      <AddPhotoAlternateIcon sx={{ fontSize: "20px" }} />
                    </IconButton>
                  </label>
                  <IconButton
                    onClick={() => handleDeleteOption(index)}
                    aria-label={`Clear Option ${index + 1}`}
                  >
                    <DeleteOutlineIcon sx={{ fontSize: "20px" }} />
                  </IconButton>
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "12fr",
              justifyContent: "center",
              mt: "32px",
              width: "100%",
            }}
          >
            <span></span>

            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <Typography
                sx={{
                  cursor: "pointer",
                  color: "#7A58E6",
                  font: "700 12px Poppins",
                  alignSelf: "center",
                }}
                onClick={handleAddOption}
                aria-label="Add option"
              >
                Add Another Options
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* {(dropdownName == "Subject"|| dropdownName =="Topic"|| dropdownName=="Sub topic")?
      <Box>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleImageUpload(e, null, 'topic')}
        style={{ display: 'none' }}
        id="topic-image-upload"
        />
        <label htmlFor="topic-image-upload">
        <IconButton component="span" aria-label="Upload image">
            <AddPhotoAlternateIcon sx={{fontSize:'30px'}} />
        </IconButton>
        </label>

      </Box>
        :null} */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleAdd();
            // handlePostQuestion()
          }}
          color="primary"
        >
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PreviewExamEdit;
