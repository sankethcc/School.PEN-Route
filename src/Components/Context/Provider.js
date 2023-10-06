import React, { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios'


const ChatContext = createContext();

const Provider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [openPage, setOpenPage] = useState('')
  const handleOpenPage = (page)=>{
      setOpenPage(page)
  }

  const [quest, setquest] = useState({
    Subject: "",
    Class: "",
    Topic: "",
    Sub_topic: "",
    Level: "",
    Quiz_Type: "",
    Language: "English",
    
  });

  // const [prevnote, setprevnote] = useState([])
  const [dsubject, setdsubject] = useState([])
  const [dtopic, setdtopic] = useState([])
  const [dstopic, setdstopic] = useState([])
  
  const [questions, setQuestions] = useState([])
  const [subjects, setSubjects] = useState([])
  const [fdata, setfdata] = useState([])
  
  useEffect(()=>{
    const fetchQuestions = async ()=>{
      try{
        const { data } = await axios.get("http://localhost:5000/get_all_quizz")
        // const question = JSON.parse(data)
        // const quet= question.filter((data)=>(data.subject==quest.Subject))
        // console.log(quet)
        const question = (data)
        setfdata(question)
        question?.map((data, i) => {
          const { question, options } = data.question_container
          setQuestions(oldArray => [{question: question, options: options, id: data._id},...oldArray])
          
        })
        // console.log(question)

      } catch(error){
        console.error('Error Fetching questions: ', error)
      }
    }
    fetchQuestions()
    const fetchSubject = async ()=>{
      try{
        const { data } = await axios.get("http://localhost:5000/get_all_subject_quizz")
        // const subjects = JSON.parse(data)
        const subjects = (data)
        data.forEach(object => {
          setdsubject(oldArray => [object.subject,...oldArray])
          // console.log(object.subject)
        });
        setSubjects(subjects)
      } catch(error){
        console.error('Error Fetching questions: ', error)
      }
    }
    fetchSubject()
  }, [])
  
  useEffect(()=>{
    const fetchQuestions = async ()=>{
      // try{
        
      //   const fun= (quet) => {
      //     quet?.map((data, i) => {
      //     const { question, options } = data.question_container
      //     setQuestions(oldArray => [{ question: question, options: options, id: data._id }, ...oldArray])
      //     })
      //   }
      //   setQuestions([]);
        
      //   const quet = fdata.filter((data) => (
      //                     (!quest.Subject || data.subject == quest.Subject) &&
      //                     (!quest.Topic || data.topic == quest.Topic) &&
      //                     (!quest.Sub_topic || data.subtopic == quest.Sub_topic) &&
      //                     (!quest.Language || data.language == quest.Language) &&
      //                     (!quest.Level || data.level == quest.Level) &&
      //                     (!quest.Quiz_Type || data.quiz_type == quest.Quiz_Type) &&
      //                     (!quest.Class || data.class == quest.Class)                           
      //     ))
      //     fun(quet)
      // } catch(error){
      //   console.error('Error Fetching questions: ', error)
      // }
      
      
        try {
          const formData = new FormData();
          formData.append('subject', quest.Subject);
          formData.append('topic', quest.Topic);
          formData.append('subtopic', quest.Sub_topic);
          formData.append('level', quest.Level);
          const { data } = await axios.get("http://localhost:5000/get_quizzes_by_filter", formData)
          // const question = (data)
          // data.map((dat, i) => {
          //   setQuestions(oldArray => [{ question: dat.question, options: dat.options, id: dat._id }, ...oldArray])
          // })
        //   question.forEach(dat => {
        //     setQuestions(oldArray => [{ question: dat.question, options: dat.options, id: dat._id }, ...oldArray])
          // });
          // setQuestions(data)
          setQuestions([]);
          const quet = data.filter((data) => (
                          (!quest.Subject || data.subject == quest.Subject) &&
                          (!quest.Topic || data.topic == quest.Topic) &&
                          (!quest.Sub_topic || data.subtopic == quest.Sub_topic) &&
                          (!quest.Language || data.language == quest.Language) &&
                          (!quest.Level || data.level == quest.Level) &&
                          (!quest.Quiz_Type || data.quiz_type == quest.Quiz_Type) &&
                          (!quest.Class || data.class == quest.Class)                           
          ))
          quet?.map((dat, i) => {
          const { question, options } = dat.question_container
          setQuestions(oldArray => [{ question: question, options: options, id: dat._id }, ...oldArray])
          })
        // console.log(data)
      } catch(error){
        console.error('Error Fetching questions: ', error)
      }
    }
    fetchQuestions()
    
  }, [quest.Subject,quest.Topic,quest.Sub_topic,quest.Level,quest.Class,quest.Quiz_Type,quest.Language])
  
  
  // useEffect(() => {
    
  //   const fetchSubjec = async ()=>{
  //     try {
  //       // console.log(quest.Subject)
        
  //       const { data } = await axios.get("http://localhost:5000/get_all_subject_quizz")
  //       // const temp= JSON.parse(data)
  //       // console.log(data)

  //       data.forEach(object => {
  //         setdsubject(oldArray => [object.subject,...oldArray])
  //         // console.log(object.subject)
  //       });

  //     } catch(error){
  //       console.error('Error Fetching questions: ', error)
  //     }
  //   }
  //   fetchSubjec()
  // }, [])

  useEffect(()=>{
    const fetchtopic = async ()=>{
      try {
        // console.log(dsubject)
        setdstopic([]);
        const { data } = await axios.get(`http://localhost:5000/get_subject_topics/${quest.Subject}`)
        setdtopic(data);
        // const temp= JSON.parse(data)
        // console.log(data)

      } catch(error){
        console.error('Error Fetching questions: ', error)
      }
    }
    if(quest.Subject)
    fetchtopic()
  }, [quest.Subject])

  useEffect(()=>{
    const fetchstopic = async ()=>{
      try {
        const { data } = await axios.get(`http://localhost:5000/get_subject_subtopics/${quest.Subject}/${quest.Topic}`)
        // const temp= JSON.parse(data)
        setdstopic(data)
        // console.log(data)

      } catch(error){
        console.error('Error Fetching questions: ', error)
      }
    }
    if(quest.Topic && quest.Subject)
    fetchstopic()
  }, [quest.Topic])

  return (
    <ChatContext.Provider
      value={{
              activeTab,
              setActiveTab,
              quest,
              setquest,
              questions,
              subjects,
              setQuestions,
              dsubject,
              setdsubject,
        dtopic, setdtopic,
              dstopic, setdstopic,
              openPage, setOpenPage
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const State = () => {
  return useContext(ChatContext);
};

export default Provider;